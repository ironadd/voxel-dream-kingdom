import * as THREE from 'three';
import { VoxelWorld } from '../voxel/VoxelMesher';

export type WeatherPresetKey = 'dawn' | 'day' | 'sunset' | 'night';

interface AtmospherePreset {
  topColor: THREE.Color;
  midColor: THREE.Color;
  horizonColor: THREE.Color;
  bottomColor: THREE.Color;
  fogColor: THREE.Color;
  fogDensity: number;
  sunColor: THREE.Color;
  sunIntensity: number;
  sunPos: THREE.Vector3;
  hemiSky: THREE.Color;
  hemiGround: THREE.Color;
  hemiIntensity: number;
  windowGlow: number;
  nightLightIntensity: number;
  starOpacity: number;
  auroraOpacity: number;
  ringOpacity: number;
  bloomStrength: number;
}

const PRESETS: Record<WeatherPresetKey, AtmospherePreset> = {
  // 🌸 晨曦樱华（默认推荐！粉紫金仙境 + 极光初现）
  dawn: {
    topColor: new THREE.Color('#3b4294'),
    midColor: new THREE.Color('#a673d8'),
    horizonColor: new THREE.Color('#ffc2d6'),
    bottomColor: new THREE.Color('#5a4bc2'),
    fogColor: new THREE.Color('#eab8d5'),
    fogDensity: 0.0020,
    sunColor: new THREE.Color('#ffd6b8'),
    sunIntensity: 2.4,
    sunPos: new THREE.Vector3(82, 62, 48),
    hemiSky: new THREE.Color('#ffd9ec'),
    hemiGround: new THREE.Color('#7a68a6'),
    hemiIntensity: 1.08,
    windowGlow: 0.65,
    nightLightIntensity: 0.85,
    starOpacity: 0.42,
    auroraOpacity: 0.68,
    ringOpacity: 0.78,
    bloomStrength: 0.38,
  },
  // ☀️ 晴空童话（宫崎骏式通透蔚蓝 + 晶莹高空星环）
  day: {
    topColor: new THREE.Color('#2574e6'),
    midColor: new THREE.Color('#66beff'),
    horizonColor: new THREE.Color('#d6f2ff'),
    bottomColor: new THREE.Color('#8ecae6'),
    fogColor: new THREE.Color('#c8ecff'),
    fogDensity: 0.0016,
    sunColor: new THREE.Color('#fff7e0'),
    sunIntensity: 2.8,
    sunPos: new THREE.Vector3(68, 98, 54),
    hemiSky: new THREE.Color('#e3f6ff'),
    hemiGround: new THREE.Color('#7aa29e'),
    hemiIntensity: 1.18,
    windowGlow: 0.25,
    nightLightIntensity: 0.25,
    starOpacity: 0.08,
    auroraOpacity: 0.26,
    ringOpacity: 0.52,
    bloomStrength: 0.25,
  },
  // 🌇 黄昏金辉（琥珀晚霞 + 玫瑰紫极光星冕）
  sunset: {
    topColor: new THREE.Color('#241c54'),
    midColor: new THREE.Color('#9647db'),
    horizonColor: new THREE.Color('#ff9770'),
    bottomColor: new THREE.Color('#422463'),
    fogColor: new THREE.Color('#e08b8b'),
    fogDensity: 0.0022,
    sunColor: new THREE.Color('#ff9e5e'),
    sunIntensity: 2.3,
    sunPos: new THREE.Vector3(-92, 42, 44),
    hemiSky: new THREE.Color('#ffb599'),
    hemiGround: new THREE.Color('#5a3e75'),
    hemiIntensity: 0.95,
    windowGlow: 1.18,
    nightLightIntensity: 1.45,
    starOpacity: 0.62,
    auroraOpacity: 0.76,
    ringOpacity: 0.85,
    bloomStrength: 0.44,
  },
  // 🌌 星夜幻境（璀璨星河、绚烂像素极光、巨月与万家暖灯）
  night: {
    topColor: new THREE.Color('#070920'),
    midColor: new THREE.Color('#191d52'),
    horizonColor: new THREE.Color('#372b6b'),
    bottomColor: new THREE.Color('#0a0c26'),
    fogColor: new THREE.Color('#221c47'),
    fogDensity: 0.0023,
    sunColor: new THREE.Color('#9bbcff'),
    sunIntensity: 1.05,
    sunPos: new THREE.Vector3(-60, 86, -42),
    hemiSky: new THREE.Color('#6f85de'),
    hemiGround: new THREE.Color('#28224a'),
    hemiIntensity: 0.72,
    windowGlow: 1.78,
    nightLightIntensity: 2.5,
    starOpacity: 1.0,
    auroraOpacity: 0.96,
    ringOpacity: 0.98,
    bloomStrength: 0.56,
  },
};

const ORDER: WeatherPresetKey[] = ['dawn', 'day', 'sunset', 'night'];

interface ShootingMeteor {
  group: THREE.Group;
  vel: THREE.Vector3;
  age: number;
  maxAge: number;
  cooldown: number;
  active: boolean;
}

export class SkyAndLighting {
  public currentPreset: WeatherPresetKey = 'dawn';
  public autoCycle = false;
  private cycleTimer = 0;

  private readonly skyUniforms: {
    uTopColor: { value: THREE.Color };
    uMidColor: { value: THREE.Color };
    uHorizonColor: { value: THREE.Color };
    uBottomColor: { value: THREE.Color };
  };

  private readonly auroraUniforms: {
    uTime: { value: number };
    uOpacity: { value: number };
  };

  public readonly sunLight: THREE.DirectionalLight;
  public readonly hemiLight: THREE.HemisphereLight;
  private readonly fog: THREE.FogExp2;
  private readonly starsMat: THREE.PointsMaterial;
  private readonly starsPoints: THREE.Points;
  private readonly celestialBody: THREE.Mesh;
  private readonly nightPointLights: THREE.PointLight[] = [];

  // 苍穹壮丽奇观组件
  private readonly celestialRingGroup = new THREE.Group();
  private readonly ringCrystalMat: THREE.MeshBasicMaterial;
  private readonly companionPlanet = new THREE.Group();
  private readonly meteors: ShootingMeteor[] = [];

  // 平滑插值状态
  private curWindowGlow = PRESETS.dawn.windowGlow;
  private curNightLight = PRESETS.dawn.nightLightIntensity;
  public curBloomStrength = PRESETS.dawn.bloomStrength;

  constructor(private scene: THREE.Scene, private world: VoxelWorld) {
    const p = PRESETS.dawn;

    // 1. 指数梦幻远景云雾（调通透以确保九霄凌霄冰宫清晰闪耀）
    this.fog = new THREE.FogExp2(p.fogColor.getHex(), p.fogDensity);
    this.scene.fog = this.fog;

    // 2. 四色柔美天穹球体 Shader
    this.skyUniforms = {
      uTopColor: { value: p.topColor.clone() },
      uMidColor: { value: p.midColor.clone() },
      uHorizonColor: { value: p.horizonColor.clone() },
      uBottomColor: { value: p.bottomColor.clone() },
    };

    const skyGeo = new THREE.SphereGeometry(560, 36, 24);
    const skyMat = new THREE.ShaderMaterial({
      uniforms: this.skyUniforms,
      side: THREE.BackSide,
      depthWrite: false,
      vertexShader: /* glsl */ `
        varying vec3 vWorldPos;
        void main() {
          vec4 wp = modelMatrix * vec4(position, 1.0);
          vWorldPos = wp.xyz;
          gl_Position = projectionMatrix * viewMatrix * wp;
        }
      `,
      fragmentShader: /* glsl */ `
        uniform vec3 uTopColor;
        uniform vec3 uMidColor;
        uniform vec3 uHorizonColor;
        uniform vec3 uBottomColor;
        varying vec3 vWorldPos;
        void main() {
          float h = normalize(vWorldPos).y;
          vec3 col;
          if (h >= 0.0) {
            float t1 = smoothstep(0.0, 0.28, h);
            float t2 = smoothstep(0.22, 0.88, h);
            col = mix(uHorizonColor, uMidColor, t1);
            col = mix(col, uTopColor, t2);
          } else {
            col = mix(uHorizonColor, uBottomColor, smoothstep(0.0, -0.45, h));
          }
          gl_FragColor = vec4(col, 1.0);
        }
      `,
    });
    const skyMesh = new THREE.Mesh(skyGeo, skyMat);
    this.scene.add(skyMesh);

    // 3. 漫天像素方块繁星（加密至 820 颗）
    const starCount = 820;
    const starPos = new Float32Array(starCount * 3);
    const starCol = new Float32Array(starCount * 3);
    const palette = [
      new THREE.Color('#ffffff'),
      new THREE.Color('#ffe4b5'),
      new THREE.Color('#ffc6ff'),
      new THREE.Color('#80f0ff'),
    ];
    for (let i = 0; i < starCount; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(0.05 + Math.random() * 0.95);
      const r = 420 + Math.random() * 60;
      starPos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      starPos[i * 3 + 1] = r * Math.cos(phi);
      starPos[i * 3 + 2] = r * Math.sin(phi) * Math.sin(theta);
      const c = palette[i % palette.length];
      starCol[i * 3] = c.r;
      starCol[i * 3 + 1] = c.g;
      starCol[i * 3 + 2] = c.b;
    }
    const starGeo = new THREE.BufferGeometry();
    starGeo.setAttribute('position', new THREE.BufferAttribute(starPos, 3));
    starGeo.setAttribute('color', new THREE.BufferAttribute(starCol, 3));
    this.starsMat = new THREE.PointsMaterial({
      size: 3.6,
      vertexColors: true,
      transparent: true,
      opacity: p.starOpacity,
      fog: false,
      depthWrite: false,
    });
    this.starsPoints = new THREE.Points(starGeo, this.starsMat);
    this.scene.add(this.starsPoints);

    // 4. 北境九霄流动「像素极光天幕丝带」(Pixelated Flowing Aurora Ribbons)
    this.auroraUniforms = {
      uTime: { value: 0 },
      uOpacity: { value: p.auroraOpacity },
    };
    this.buildPixelAuroraCurtains();

    // 5. 斜跨苍穹的「诸神碎晶星环带」(Celestial Planetary Crystal Ring)
    this.ringCrystalMat = new THREE.MeshBasicMaterial({
      color: '#ffffff',
      transparent: true,
      opacity: p.ringOpacity,
      fog: false,
    });
    this.buildCelestialCrystalRing();

    // 6. 远空「巨型体素环带冰霜伴星/幻月」(Colossal Voxel Ringed Ice Planet)
    this.buildCompanionVoxelPlanet();

    // 7. 划破天幕的像素流星系统
    this.buildShootingMeteors();

    // 8. 像素方块主日月天体
    const sunGeo = new THREE.BoxGeometry(20, 20, 20);
    const sunMat = new THREE.MeshBasicMaterial({
      color: '#fff4cc',
      fog: false,
    });
    this.celestialBody = new THREE.Mesh(sunGeo, sunMat);
    this.celestialBody.position.copy(p.sunPos).multiplyScalar(3.4);
    this.scene.add(this.celestialBody);

    // 9. 主太阳/月光平行光（扩大阴影锥以兼顾高空冰霜神殿）
    this.sunLight = new THREE.DirectionalLight(p.sunColor, p.sunIntensity);
    this.sunLight.position.copy(p.sunPos);
    this.sunLight.castShadow = true;
    this.sunLight.shadow.mapSize.set(2048, 2048);
    const d = 115;
    this.sunLight.shadow.camera.left = -d;
    this.sunLight.shadow.camera.right = d;
    this.sunLight.shadow.camera.top = d + 30;
    this.sunLight.shadow.camera.bottom = -d;
    this.sunLight.shadow.camera.near = 10;
    this.sunLight.shadow.camera.far = 340;
    this.sunLight.shadow.bias = -0.0005;
    this.sunLight.shadow.normalBias = 0.025;
    this.scene.add(this.sunLight);

    // 10. 半球柔和漫射天光
    this.hemiLight = new THREE.HemisphereLight(p.hemiSky, p.hemiGround, p.hemiIntensity);
    this.scene.add(this.hemiLight);

    // 11. 夜景与奇观氛围点光源（新增九霄凌霄冰霜神殿极寒星辉光！）
    const lightSpots: [number, number, number, string, number][] = [
      [0, 19, 15, '#ffbe6b', 42],      // 星泉广场暖金灯火
      [0, 32, -24, '#ffa8d8', 48],     // 皇家圣城玫瑰花窗暖霞
      [-38, 24, 12, '#ff8cc6', 38],    // 千年绯樱神木粉霞光
      [64, 33, -12, '#c77dff', 42],    // 紫晶星象台幻紫光芒
      [0, -16, -8, '#4ce8f5', 45],     // 浮岛底部拉普达飞行石天青光
      [0, 96, -78, '#66f2ff', 72],     // 九霄凌霄冰霜神殿极寒冰晶辉光！
    ];
    for (const [lx, ly, lz, hex, dist] of lightSpots) {
      const pl = new THREE.PointLight(hex, p.nightLightIntensity, dist, 1.35);
      pl.position.set(lx, ly, lz);
      this.scene.add(pl);
      this.nightPointLights.push(pl);
    }
  }

  /** 构建两道横跨冰霜宫殿背后苍穹的像素阶梯化极光帷幕 */
  private buildPixelAuroraCurtains(): void {
    const auroraMat = new THREE.ShaderMaterial({
      uniforms: this.auroraUniforms,
      transparent: true,
      depthWrite: false,
      side: THREE.DoubleSide,
      blending: THREE.AdditiveBlending,
      vertexShader: /* glsl */ `
        uniform float uTime;
        varying vec2 vUv;
        void main() {
          vUv = uv;
          vec3 pos = position;
          // 蜿蜒飘舞的极光丝带波动
          float wave = sin(uv.x * 9.0 + uTime * 0.55) * 14.0
                     + cos(uv.x * 17.0 - uTime * 0.8) * 6.0;
          pos.z += wave;
          pos.y += sin(uv.x * 6.0 + uTime * 0.4) * 5.0;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
        }
      `,
      fragmentShader: /* glsl */ `
        uniform float uTime;
        uniform float uOpacity;
        varying vec2 vUv;
        void main() {
          // 像素艺术量化网格：将极光切分为清晰的像素光柱！
          vec2 pUv = floor(vUv * vec2(110.0, 22.0)) / vec2(110.0, 22.0);

          float streak = 0.55 + 0.45 * sin(pUv.x * 68.0 + uTime * 1.1)
                              * cos(pUv.x * 31.0 - uTime * 0.7);
          // 上下边缘柔和消隐，底部稍亮如极光帘幕下沿
          float vMask = smoothstep(0.02, 0.24, pUv.y) * smoothstep(0.98, 0.32, pUv.y);
          // 左右两端渐隐融入夜空
          float hMask = smoothstep(0.0, 0.14, pUv.x) * smoothstep(1.0, 0.86, pUv.x);

          vec3 cyanIce = vec3(0.32, 0.96, 1.0);
          vec3 emerald = vec3(0.38, 1.0, 0.76);
          vec3 violet  = vec3(0.72, 0.48, 1.0);
          vec3 sakura  = vec3(1.0, 0.52, 0.82);

          vec3 col = mix(cyanIce, emerald, smoothstep(0.1, 0.4, pUv.y));
          col = mix(col, violet, smoothstep(0.38, 0.72, pUv.y));
          col = mix(col, sakura, smoothstep(0.7, 0.95, pUv.y));

          float alpha = streak * vMask * hMask * uOpacity * 0.72;
          if (alpha < 0.02) discard;
          gl_FragColor = vec4(col, alpha);
        }
      `,
    });

    // 第一道主极光帷幕（环抱北境冰霜宫殿后上方苍穹）
    const curtain1 = new THREE.Mesh(new THREE.PlaneGeometry(360, 68, 90, 12), auroraMat);
    curtain1.position.set(0, 142, -165);
    curtain1.rotation.x = 0.18;
    this.scene.add(curtain1);

    // 第二道高空副极光丝带（交错层次）
    const curtain2 = new THREE.Mesh(new THREE.PlaneGeometry(310, 54, 76, 10), auroraMat);
    curtain2.position.set(36, 168, -205);
    curtain2.rotation.y = -0.22;
    curtain2.rotation.x = 0.24;
    this.scene.add(curtain2);
  }

  /** 构建斜跨整个天空的巨型像素碎晶行星环 */
  private buildCelestialCrystalRing(): void {
    const count = 440;
    const boxGeo = new THREE.BoxGeometry(2.6, 2.6, 2.6);
    const inst = new THREE.InstancedMesh(boxGeo, this.ringCrystalMat, count);

    const dummy = new THREE.Object3D();
    const colors = [
      new THREE.Color('#80f5ff'),
      new THREE.Color('#ffd97d'),
      new THREE.Color('#d8a8ff'),
      new THREE.Color('#ffffff'),
      new THREE.Color('#ff9ed2'),
    ];

    for (let i = 0; i < count; i++) {
      const ang = (i / count) * Math.PI * 2 + Math.random() * 0.04;
      // 双环带间隙分布（致敬土星卡西尼环缝）
      const band = i % 3 === 0 ? 318 + Math.random() * 14 : 286 + Math.random() * 20;
      const ySpread = (Math.random() - 0.5) * 7.5;
      dummy.position.set(Math.cos(ang) * band, ySpread, Math.sin(ang) * band);
      dummy.rotation.set(Math.random() * 3, Math.random() * 3, Math.random() * 3);
      const sc = 0.45 + Math.random() * 1.15;
      dummy.scale.setScalar(sc);
      dummy.updateMatrix();
      inst.setMatrixAt(i, dummy.matrix);
      inst.setColorAt(i, colors[i % colors.length]);
    }
    inst.instanceColor!.needsUpdate = true;
    this.celestialRingGroup.add(inst);

    // 两条纤细的发光像素能量轨道线衬托星环轮廓
    const orbitBandMat = new THREE.MeshBasicMaterial({
      color: '#9beeff',
      transparent: true,
      opacity: 0.24,
      side: THREE.DoubleSide,
      fog: false,
      depthWrite: false,
    });
    const innerBand = new THREE.Mesh(new THREE.RingGeometry(288, 291, 64), orbitBandMat);
    innerBand.rotation.x = Math.PI / 2;
    const outerBand = new THREE.Mesh(new THREE.RingGeometry(320, 322.5, 64), orbitBandMat);
    outerBand.rotation.x = Math.PI / 2;
    this.celestialRingGroup.add(innerBand, outerBand);

    // 倾斜横跨苍穹，使地面抬头便能望见壮阔弧光！
    this.celestialRingGroup.position.set(0, 36, -30);
    this.celestialRingGroup.rotation.z = 0.46;
    this.celestialRingGroup.rotation.x = 0.28;
    this.scene.add(this.celestialRingGroup);
  }

  /** 构建西北高空壮丽的「巨型体素环带冰霜伴月」 */
  private buildCompanionVoxelPlanet(): void {
    const coreMat = new THREE.MeshBasicMaterial({
      color: '#a8dcff',
      transparent: true,
      opacity: 0.85,
      fog: false,
    });
    const shadeMat = new THREE.MeshBasicMaterial({
      color: '#6f7ee6',
      transparent: true,
      opacity: 0.82,
      fog: false,
    });
    const ringMat = new THREE.MeshBasicMaterial({
      color: '#ffe3a3',
      transparent: true,
      opacity: 0.72,
      fog: false,
    });

    // 层叠体素球切片构成纯正像素风巨行星
    const slices: [number, number, number][] = [
      [14, 4, -12],
      [22, 5, -7.5],
      [26, 6, -2],
      [26, 6, 4],
      [22, 5, 9.5],
      [14, 4, 14],
    ];
    slices.forEach(([w, h, py], idx) => {
      const m = new THREE.Mesh(
        new THREE.BoxGeometry(w, h, w),
        idx < 2 ? shadeMat : coreMat
      );
      m.position.y = py;
      this.companionPlanet.add(m);
    });

    // 环绕巨月的像素方块小光环
    const pRing = new THREE.Group();
    for (let i = 0; i < 28; i++) {
      const a = (i / 28) * Math.PI * 2;
      const seg = new THREE.Mesh(new THREE.BoxGeometry(3.4, 1.2, 3.4), ringMat);
      seg.position.set(Math.cos(a) * 38, 0, Math.sin(a) * 38);
      seg.rotation.y = -a;
      pRing.add(seg);
    }
    pRing.rotation.z = 0.38;
    pRing.rotation.x = 0.25;
    this.companionPlanet.add(pRing);

    this.companionPlanet.position.set(-165, 178, -240);
    this.scene.add(this.companionPlanet);
  }

  /** 构建高空像素流星系统（常驻 3 颗 + 预留 22 颗供「召唤星雨」大招爆发！） */
  private buildShootingMeteors(): void {
    const headMat = new THREE.MeshBasicMaterial({ color: '#ffffff', fog: false });
    const tailPalette = ['#7af5ff', '#ff85d0', '#ffe066', '#b888ff', '#72ffbe'];

    for (let i = 0; i < 25; i++) {
      const tailMat = new THREE.MeshBasicMaterial({
        color: tailPalette[i % tailPalette.length],
        transparent: true,
        opacity: 0.78,
        fog: false,
      });
      const g = new THREE.Group();
      const head = new THREE.Mesh(new THREE.BoxGeometry(2.0, 2.0, 2.0), headMat);
      g.add(head);
      for (let t = 1; t <= 5; t++) {
        const sc = 1.6 * (1 - t / 6.5);
        const seg = new THREE.Mesh(new THREE.BoxGeometry(sc, sc, sc * 2.5), tailMat);
        seg.position.z = -t * 3.4;
        g.add(seg);
      }
      g.visible = false;
      this.scene.add(g);
      this.meteors.push({
        group: g,
        vel: new THREE.Vector3(),
        age: 0,
        maxAge: 1.8,
        cooldown: i < 3 ? 1.5 + i * 3.2 : Infinity,
        active: false,
      });
    }
  }

  /** 玩家大招：召唤漫天璀璨像素星陨流星雨并激发极光高潮！ */
  public summonMeteorShower(): void {
    this.auroraUniforms.uOpacity.value = 1.15;
    const dirSign = Math.random() > 0.5 ? 1 : -1;
    this.meteors.forEach((m, idx) => {
      m.active = true;
      m.age = -Math.random() * 0.65; // 错峰划落更有层次
      m.maxAge = 1.7 + Math.random() * 0.9;
      m.group.position.set(
        -210 + Math.random() * 420,
        135 + Math.random() * 85,
        -210 + Math.random() * 210
      );
      m.vel.set(
        dirSign * (75 + Math.random() * 40),
        -32 - Math.random() * 16,
        24 + Math.random() * 24
      );
      m.group.lookAt(m.group.position.clone().add(m.vel));
      m.group.visible = idx >= 0;
    });
  }

  public setPreset(key: WeatherPresetKey): void {
    this.currentPreset = key;
  }

  public update(dt: number, elapsed: number): void {
    if (this.autoCycle) {
      this.cycleTimer += dt;
      if (this.cycleTimer >= 16) {
        this.cycleTimer = 0;
        const nextIdx = (ORDER.indexOf(this.currentPreset) + 1) % ORDER.length;
        this.currentPreset = ORDER[nextIdx];
        window.dispatchEvent(
          new CustomEvent('kingdom-preset-changed', { detail: this.currentPreset })
        );
      }
    }

    const target = PRESETS[this.currentPreset];
    const k = Math.min(1, dt * 2.2);

    this.skyUniforms.uTopColor.value.lerp(target.topColor, k);
    this.skyUniforms.uMidColor.value.lerp(target.midColor, k);
    this.skyUniforms.uHorizonColor.value.lerp(target.horizonColor, k);
    this.skyUniforms.uBottomColor.value.lerp(target.bottomColor, k);

    this.fog.color.lerp(target.fogColor, k);
    this.fog.density = THREE.MathUtils.lerp(this.fog.density, target.fogDensity, k);

    this.sunLight.color.lerp(target.sunColor, k);
    this.sunLight.intensity = THREE.MathUtils.lerp(this.sunLight.intensity, target.sunIntensity, k);
    this.sunLight.position.lerp(target.sunPos, k);

    this.celestialBody.position.copy(this.sunLight.position).multiplyScalar(3.4);
    this.celestialBody.rotation.y = elapsed * 0.18;
    this.celestialBody.rotation.x = elapsed * 0.11;
    (this.celestialBody.material as THREE.MeshBasicMaterial).color.copy(this.sunLight.color);

    this.hemiLight.color.lerp(target.hemiSky, k);
    this.hemiLight.groundColor.lerp(target.hemiGround, k);
    this.hemiLight.intensity = THREE.MathUtils.lerp(this.hemiLight.intensity, target.hemiIntensity, k);

    this.starsMat.opacity = THREE.MathUtils.lerp(this.starsMat.opacity, target.starOpacity, k);
    this.starsPoints.rotation.y = elapsed * 0.008;

    // 极光与行星碎晶环动态更新
    this.auroraUniforms.uTime.value = elapsed;
    this.auroraUniforms.uOpacity.value = THREE.MathUtils.lerp(
      this.auroraUniforms.uOpacity.value,
      target.auroraOpacity,
      k
    );
    this.ringCrystalMat.opacity = THREE.MathUtils.lerp(
      this.ringCrystalMat.opacity,
      target.ringOpacity,
      k
    );
    this.celestialRingGroup.rotation.y = elapsed * 0.025;
    this.companionPlanet.rotation.y = elapsed * 0.05;

    // 像素流星划过天际
    for (let mi = 0; mi < this.meteors.length; mi++) {
      const m = this.meteors[mi];
      if (!m.active) {
        m.cooldown -= dt;
        if (m.cooldown <= 0) {
          m.active = true;
          m.age = 0;
          m.maxAge = 1.6 + Math.random() * 0.8;
          const startX = -180 + Math.random() * 360;
          const startY = 145 + Math.random() * 65;
          const startZ = -190 + Math.random() * 140;
          m.group.position.set(startX, startY, startZ);
          m.vel.set(
            (Math.random() > 0.5 ? 1 : -1) * (68 + Math.random() * 35),
            -26 - Math.random() * 14,
            20 + Math.random() * 25
          );
          m.group.lookAt(m.group.position.clone().add(m.vel));
          m.group.visible = true;
        }
      } else {
        m.age += dt;
        if (m.age < 0) {
          m.group.visible = false;
          continue;
        }
        m.group.visible = true;
        m.group.position.addScaledVector(m.vel, dt);
        const s = Math.sin((m.age / m.maxAge) * Math.PI);
        m.group.scale.setScalar(Math.max(0.05, s));
        if (m.age >= m.maxAge) {
          m.active = false;
          m.group.visible = false;
          m.cooldown = mi < 3 ? 2.6 + Math.random() * 4.5 : Infinity;
        }
      }
    }

    this.curWindowGlow = THREE.MathUtils.lerp(this.curWindowGlow, target.windowGlow, k);
    this.world.materials.night_window.emissiveIntensity = this.curWindowGlow;

    this.curNightLight = THREE.MathUtils.lerp(this.curNightLight, target.nightLightIntensity, k);
    for (let i = 0; i < this.nightPointLights.length; i++) {
      // 底部飞行石与高空凌霄冰宫始终保持神秘辉光
      const factor =
        i === 4 || i === 5 ? Math.max(1.35, this.curNightLight) : this.curNightLight;
      this.nightPointLights[i].intensity = factor;
    }

    this.curBloomStrength = THREE.MathUtils.lerp(
      this.curBloomStrength,
      target.bloomStrength,
      k
    );
  }
}

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
  bloomStrength: number;
}

const PRESETS: Record<WeatherPresetKey, AtmospherePreset> = {
  // 🌸 晨曦樱华（默认推荐！粉紫金梦幻仙境）
  dawn: {
    topColor: new THREE.Color('#4a4e9e'),
    midColor: new THREE.Color('#b57edc'),
    horizonColor: new THREE.Color('#ffc4d6'),
    bottomColor: new THREE.Color('#6a5acd'),
    fogColor: new THREE.Color('#eab8d5'),
    fogDensity: 0.0032,
    sunColor: new THREE.Color('#ffd6b8'),
    sunIntensity: 2.35,
    sunPos: new THREE.Vector3(78, 56, 46),
    hemiSky: new THREE.Color('#ffd9ec'),
    hemiGround: new THREE.Color('#7a68a6'),
    hemiIntensity: 1.05,
    windowGlow: 0.65,
    nightLightIntensity: 0.7,
    starOpacity: 0.22,
    bloomStrength: 0.36,
  },
  // ☀️ 晴空童话（宫崎骏式通透蔚蓝云海）
  day: {
    topColor: new THREE.Color('#2f80ed'),
    midColor: new THREE.Color('#6ec3ff'),
    horizonColor: new THREE.Color('#d6f2ff'),
    bottomColor: new THREE.Color('#8ecae6'),
    fogColor: new THREE.Color('#c8ecff'),
    fogDensity: 0.0024,
    sunColor: new THREE.Color('#fff7e0'),
    sunIntensity: 2.75,
    sunPos: new THREE.Vector3(64, 95, 54),
    hemiSky: new THREE.Color('#e3f6ff'),
    hemiGround: new THREE.Color('#7aa29e'),
    hemiIntensity: 1.15,
    windowGlow: 0.22,
    nightLightIntensity: 0.1,
    starOpacity: 0.0,
    bloomStrength: 0.24,
  },
  // 🌇 黄昏金辉（琥珀晚霞与玫瑰紫云海）
  sunset: {
    topColor: new THREE.Color('#2c225e'),
    midColor: new THREE.Color('#9d4edd'),
    horizonColor: new THREE.Color('#ff9770'),
    bottomColor: new THREE.Color('#48286b'),
    fogColor: new THREE.Color('#e08b8b'),
    fogDensity: 0.0036,
    sunColor: new THREE.Color('#ff9e5e'),
    sunIntensity: 2.25,
    sunPos: new THREE.Vector3(-88, 36, 44),
    hemiSky: new THREE.Color('#ffb599'),
    hemiGround: new THREE.Color('#5a3e75'),
    hemiIntensity: 0.92,
    windowGlow: 1.15,
    nightLightIntensity: 1.35,
    starOpacity: 0.45,
    bloomStrength: 0.42,
  },
  // 🌌 星夜幻境（璀璨星河、像素满月与万家暖灯）
  night: {
    topColor: new THREE.Color('#090b24'),
    midColor: new THREE.Color('#1c1e4f'),
    horizonColor: new THREE.Color('#3b2d6e'),
    bottomColor: new THREE.Color('#0c0d29'),
    fogColor: new THREE.Color('#221c47'),
    fogDensity: 0.0038,
    sunColor: new THREE.Color('#9bbcff'),
    sunIntensity: 0.95,
    sunPos: new THREE.Vector3(-56, 78, -42),
    hemiSky: new THREE.Color('#6b7fd7'),
    hemiGround: new THREE.Color('#28224a'),
    hemiIntensity: 0.68,
    windowGlow: 1.75,
    nightLightIntensity: 2.4,
    starOpacity: 1.0,
    bloomStrength: 0.54,
  },
};

const ORDER: WeatherPresetKey[] = ['dawn', 'day', 'sunset', 'night'];

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

  public readonly sunLight: THREE.DirectionalLight;
  public readonly hemiLight: THREE.HemisphereLight;
  private readonly fog: THREE.FogExp2;
  private readonly starsMat: THREE.PointsMaterial;
  private readonly starsPoints: THREE.Points;
  private readonly celestialBody: THREE.Mesh;
  private readonly nightPointLights: THREE.PointLight[] = [];

  // 平滑插值状态
  private curWindowGlow = PRESETS.dawn.windowGlow;
  private curNightLight = PRESETS.dawn.nightLightIntensity;
  public curBloomStrength = PRESETS.dawn.bloomStrength;

  constructor(private scene: THREE.Scene, private world: VoxelWorld) {
    const p = PRESETS.dawn;

    // 1. 指数梦幻远景云雾
    this.fog = new THREE.FogExp2(p.fogColor.getHex(), p.fogDensity);
    this.scene.fog = this.fog;

    // 2. 四色柔美天穹球体 Shader
    this.skyUniforms = {
      uTopColor: { value: p.topColor.clone() },
      uMidColor: { value: p.midColor.clone() },
      uHorizonColor: { value: p.horizonColor.clone() },
      uBottomColor: { value: p.bottomColor.clone() },
    };

    const skyGeo = new THREE.SphereGeometry(380, 32, 24);
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

    // 3. 漫天像素方块繁星
    const starCount = 520;
    const starPos = new Float32Array(starCount * 3);
    const starCol = new Float32Array(starCount * 3);
    const palette = [
      new THREE.Color('#ffffff'),
      new THREE.Color('#ffe4b5'),
      new THREE.Color('#ffc6ff'),
      new THREE.Color('#a8e6ff'),
    ];
    for (let i = 0; i < starCount; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(0.08 + Math.random() * 0.92);
      const r = 310 + Math.random() * 35;
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
      size: 3.2,
      vertexColors: true,
      transparent: true,
      opacity: p.starOpacity,
      fog: false,
      depthWrite: false,
    });
    this.starsPoints = new THREE.Points(starGeo, this.starsMat);
    this.scene.add(this.starsPoints);

    // 4. 像素方块日月天体
    const sunGeo = new THREE.BoxGeometry(16, 16, 16);
    const sunMat = new THREE.MeshBasicMaterial({
      color: '#fff4cc',
      fog: false,
    });
    this.celestialBody = new THREE.Mesh(sunGeo, sunMat);
    this.celestialBody.position.copy(p.sunPos).multiplyScalar(2.6);
    this.scene.add(this.celestialBody);

    // 5. 主太阳/月光平行光（带高精度柔和阴影）
    this.sunLight = new THREE.DirectionalLight(p.sunColor, p.sunIntensity);
    this.sunLight.position.copy(p.sunPos);
    this.sunLight.castShadow = true;
    this.sunLight.shadow.mapSize.set(2048, 2048);
    const d = 88;
    this.sunLight.shadow.camera.left = -d;
    this.sunLight.shadow.camera.right = d;
    this.sunLight.shadow.camera.top = d;
    this.sunLight.shadow.camera.bottom = -d;
    this.sunLight.shadow.camera.near = 10;
    this.sunLight.shadow.camera.far = 260;
    this.sunLight.shadow.bias = -0.0005;
    this.sunLight.shadow.normalBias = 0.025;
    this.scene.add(this.sunLight);

    // 6. 半球柔和漫射天光
    this.hemiLight = new THREE.HemisphereLight(p.hemiSky, p.hemiGround, p.hemiIntensity);
    this.scene.add(this.hemiLight);

    // 7. 夜景重点氛围暖光点光源（星泉广场、皇家大阶梯、绯樱神木、紫晶星象岛）
    const lightSpots: [number, number, number, string, number][] = [
      [0, 19, 15, '#ffbe6b', 42],     // 星泉广场暖金灯火
      [0, 32, -24, '#ffa8d8', 48],    // 皇家圣城玫瑰花窗暖霞
      [-38, 24, 12, '#ff8cc6', 38],   // 千年绯樱神木粉霞光
      [64, 33, -12, '#c77dff', 42],   // 紫晶星象台幻紫光芒
      [0, -16, -8, '#4ce8f5', 45],    // 浮岛底部拉普达飞行石天青光
    ];
    for (const [lx, ly, lz, hex, dist] of lightSpots) {
      const pl = new THREE.PointLight(hex, p.nightLightIntensity, dist, 1.4);
      pl.position.set(lx, ly, lz);
      this.scene.add(pl);
      this.nightPointLights.push(pl);
    }
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

    this.celestialBody.position.copy(this.sunLight.position).multiplyScalar(2.8);
    this.celestialBody.rotation.y = elapsed * 0.18;
    this.celestialBody.rotation.x = elapsed * 0.11;
    (this.celestialBody.material as THREE.MeshBasicMaterial).color.copy(this.sunLight.color);

    this.hemiLight.color.lerp(target.hemiSky, k);
    this.hemiLight.groundColor.lerp(target.hemiGround, k);
    this.hemiLight.intensity = THREE.MathUtils.lerp(this.hemiLight.intensity, target.hemiIntensity, k);

    this.starsMat.opacity = THREE.MathUtils.lerp(this.starsMat.opacity, target.starOpacity, k);
    this.starsPoints.rotation.y = elapsed * 0.008;

    this.curWindowGlow = THREE.MathUtils.lerp(this.curWindowGlow, target.windowGlow, k);
    this.world.materials.night_window.emissiveIntensity = this.curWindowGlow;

    this.curNightLight = THREE.MathUtils.lerp(this.curNightLight, target.nightLightIntensity, k);
    for (let i = 0; i < this.nightPointLights.length; i++) {
      // 底部飞行水晶始终保持神秘光芒
      const factor = i === 4 ? Math.max(1.2, this.curNightLight) : this.curNightLight;
      this.nightPointLights[i].intensity = factor;
    }

    this.curBloomStrength = THREE.MathUtils.lerp(
      this.curBloomStrength,
      target.bloomStrength,
      k
    );
  }
}

import * as THREE from 'three';
import { KingdomMetadata } from '../world/KingdomBuilder';
import { VoxelWorld } from '../voxel/VoxelMesher';

interface SmokePuff {
  mesh: THREE.Mesh;
  origin: THREE.Vector3;
  age: number;
  life: number;
  driftX: number;
  driftZ: number;
}

interface SkyLantern {
  group: THREE.Group;
  velY: number;
  swayPhase: number;
  age: number;
}

interface FireworkParticle {
  mesh: THREE.Mesh;
  vel: THREE.Vector3;
  age: number;
  maxAge: number;
}

interface VillagerNPC {
  group: THREE.Group;
  centerX: number;
  centerZ: number;
  radius: number;
  angle: number;
  speed: number;
  hopOffset: number;
}

export class DynamicWorld {
  public readonly group = new THREE.Group();

  private windmillBlades = new THREE.Group();
  private astrolabeRing1!: THREE.Mesh;
  private astrolabeRing2!: THREE.Mesh;
  private astrolabeCore!: THREE.Mesh;
  private flags: { pivot: THREE.Group; phase: number }[] = [];
  private clouds: { group: THREE.Group; speed: number; baseY: number; phase: number }[] = [];
  private balloons: {
    group: THREE.Group;
    orbitR: number;
    orbitY: number;
    speed: number;
    angle: number;
  }[] = [];
  private airship!: THREE.Group;
  private airshipPropeller!: THREE.Mesh;

  // 花瓣/萤火虫 InstancedMesh
  private petalMesh!: THREE.InstancedMesh;
  private petalData: {
    x: number;
    y: number;
    z: number;
    vy: number;
    sway: number;
    rot: number;
  }[] = [];

  // 瀑布与喷泉水花 InstancedMesh
  private splashMesh!: THREE.InstancedMesh;
  private splashData: {
    origin: THREE.Vector3;
    pos: THREE.Vector3;
    vel: THREE.Vector3;
    age: number;
    life: number;
    isFountain: boolean;
  }[] = [];

  private smokePuffs: SmokePuff[] = [];
  private lanterns: SkyLantern[] = [];
  private fireworks: FireworkParticle[] = [];
  private villagers: VillagerNPC[] = [];

  private sharedBox = new THREE.BoxGeometry(1, 1, 1);
  private dummy = new THREE.Object3D();

  constructor(private world: VoxelWorld, private meta: KingdomMetadata) {
    this.buildWindmillRotor();
    this.buildObservatoryAstrolabe();
    this.buildCastleFlags();
    this.buildVoxelCloudSea();
    this.buildHotAirBalloonsAndAirship();
    this.buildSakuraAndFireflyParticles();
    this.buildWaterSplashes();
    this.buildSmokeSystem();
    this.buildCuteVillagers();
  }

  /** 1. 大风车旋转像素白帆翼片 */
  private buildWindmillRotor(): void {
    const [hx, hy, hz] = this.meta.town.windmillHub;
    this.windmillBlades.position.set(hx, hy, hz);

    const woodMat = new THREE.MeshStandardMaterial({ color: '#784e34', roughness: 0.85 });
    const sailMat = new THREE.MeshStandardMaterial({ color: '#fffdf9', roughness: 0.7 });
    const goldMat = new THREE.MeshStandardMaterial({ color: '#ffd166', roughness: 0.4 });

    const hub = new THREE.Mesh(new THREE.BoxGeometry(1.1, 1.4, 1.4), goldMat);
    this.windmillBlades.add(hub);

    // 四片风车翼（在 YZ 平面内绕 X 轴旋转）
    for (let i = 0; i < 4; i++) {
      const arm = new THREE.Group();
      arm.rotation.x = (i * Math.PI) / 2;

      const spar = new THREE.Mesh(new THREE.BoxGeometry(0.45, 9.5, 0.45), woodMat);
      spar.position.set(-0.2, 4.8, 0);
      spar.castShadow = true;
      arm.add(spar);

      const sail = new THREE.Mesh(new THREE.BoxGeometry(0.22, 7.6, 2.1), sailMat);
      sail.position.set(-0.35, 5.4, 1.15);
      sail.castShadow = true;
      arm.add(sail);

      this.windmillBlades.add(arm);
    }
    this.group.add(this.windmillBlades);
  }

  /** 2. 紫晶星象台悬浮旋转奥术星环 */
  private buildObservatoryAstrolabe(): void {
    const [ox, oy, oz] = this.meta.islands.observatoryCenter;
    const holder = new THREE.Group();
    holder.position.set(ox, oy, oz);

    const goldGlow = new THREE.MeshStandardMaterial({
      color: '#ffe28a',
      emissive: '#ffbe42',
      emissiveIntensity: 0.8,
      roughness: 0.25,
      metalness: 0.6,
    });
    const crystalGlow = new THREE.MeshStandardMaterial({
      color: '#e0aaff',
      emissive: '#c77dff',
      emissiveIntensity: 1.5,
      roughness: 0.15,
    });

    // 方块感八角星环
    this.astrolabeRing1 = new THREE.Mesh(new THREE.TorusGeometry(3.4, 0.22, 6, 8), goldGlow);
    this.astrolabeRing2 = new THREE.Mesh(new THREE.TorusGeometry(2.4, 0.18, 6, 8), goldGlow);
    this.astrolabeCore = new THREE.Mesh(new THREE.OctahedronGeometry(1.15, 0), crystalGlow);

    holder.add(this.astrolabeRing1, this.astrolabeRing2, this.astrolabeCore);
    this.group.add(holder);
  }

  /** 3. 皇家城堡尖塔迎风飘扬的像素旗帜 */
  private buildCastleFlags(): void {
    const poleMat = new THREE.MeshStandardMaterial({ color: '#ffd166', roughness: 0.4 });
    for (let i = 0; i < this.meta.flags.length; i++) {
      const f = this.meta.flags[i];
      const root = new THREE.Group();
      root.position.set(f.x + 0.5, f.y, f.z + 0.5);
      root.scale.setScalar(f.scale);

      const pole = new THREE.Mesh(new THREE.BoxGeometry(0.18, 2.8, 0.18), poleMat);
      pole.position.y = 1.4;
      root.add(pole);

      const flagPivot = new THREE.Group();
      flagPivot.position.set(0, 2.3, 0);
      const clothMat = new THREE.MeshStandardMaterial({
        color: f.color,
        emissive: f.color,
        emissiveIntensity: 0.22,
        roughness: 0.6,
      });
      // 三段阶梯像素燕尾旗
      const seg1 = new THREE.Mesh(new THREE.BoxGeometry(1.2, 0.85, 0.14), clothMat);
      seg1.position.set(0.65, 0, 0);
      const seg2 = new THREE.Mesh(new THREE.BoxGeometry(1.0, 0.65, 0.14), clothMat);
      seg2.position.set(1.7, -0.05, 0);
      const seg3 = new THREE.Mesh(new THREE.BoxGeometry(0.7, 0.42, 0.14), clothMat);
      seg3.position.set(2.5, -0.1, 0);
      flagPivot.add(seg1, seg2, seg3);

      root.add(flagPivot);
      this.group.add(root);
      this.flags.push({ pivot: flagPivot, phase: i * 1.1 });
    }
  }

  /** 4. 蓬松立体的 3D 方块云海（围绕浮空王国四周与脚下缓缓飘移） */
  private buildVoxelCloudSea(): void {
    const cloudMat = new THREE.MeshStandardMaterial({
      color: '#ffffff',
      emissive: '#f3e8ff',
      emissiveIntensity: 0.18,
      roughness: 0.95,
      transparent: true,
      opacity: 0.9,
    });

    for (let i = 0; i < 26; i++) {
      const cg = new THREE.Group();
      const angle = (i / 26) * Math.PI * 2 + (i % 3) * 0.2;
      const dist = i < 10 ? 45 + (i % 4) * 14 : 78 + (i % 5) * 18;
      const baseY = i < 10 ? -24 - (i % 3) * 5 : 8 + (i % 6) * 9;

      const w = 8 + (i % 4) * 3;
      const d = 5 + (i % 3) * 2;
      const mainBlock = new THREE.Mesh(new THREE.BoxGeometry(w, 2.4, d), cloudMat);
      const topPuff = new THREE.Mesh(
        new THREE.BoxGeometry(w * 0.62, 2.0, d * 0.68),
        cloudMat
      );
      topPuff.position.set((i % 2 === 0 ? 1 : -1) * 1.1, 1.6, 0);
      const sidePuff = new THREE.Mesh(
        new THREE.BoxGeometry(w * 0.45, 1.6, d * 0.5),
        cloudMat
      );
      sidePuff.position.set(-w * 0.35, -0.2, d * 0.25);

      cg.add(mainBlock, topPuff, sidePuff);
      cg.position.set(Math.cos(angle) * dist, baseY, Math.sin(angle) * dist);
      this.group.add(cg);
      this.clouds.push({
        group: cg,
        speed: 1.2 + (i % 4) * 0.45,
        baseY,
        phase: i * 0.7,
      });
    }
  }

  /** 5. 彩色像素热气球与巡航小飞艇 */
  private buildHotAirBalloonsAndAirship(): void {
    const balloonThemes: [string, string, number, number, number][] = [
      ['#ff85c0', '#fff0f6', 62, 46, 0.09],
      ['#69c0ff', '#fffbe6', 74, 36, -0.07],
      ['#b37feb', '#ffd666', 50, 56, 0.11],
    ];

    const basketMat = new THREE.MeshStandardMaterial({ color: '#8c5a3c', roughness: 0.85 });
    const glowBurner = new THREE.MeshBasicMaterial({ color: '#ffbe55' });

    balloonThemes.forEach(([c1, c2, orbitR, orbitY, speed], idx) => {
      const bg = new THREE.Group();
      const m1 = new THREE.MeshStandardMaterial({ color: c1, roughness: 0.65 });
      const m2 = new THREE.MeshStandardMaterial({ color: c2, roughness: 0.65 });

      // 层叠体素热气球球囊
      const layers: [number, number, number, THREE.Material][] = [
        [2.6, 1.2, 0, m1],
        [4.2, 1.6, 1.4, m2],
        [5.0, 2.0, 3.2, m1],
        [4.4, 1.6, 5.0, m2],
        [2.8, 1.0, 6.3, m1],
      ];
      for (const [s, h, py, mat] of layers) {
        const part = new THREE.Mesh(new THREE.BoxGeometry(s, h, s), mat);
        part.position.y = py;
        part.castShadow = true;
        bg.add(part);
      }

      // 喷火口与小藤篮
      const flame = new THREE.Mesh(new THREE.BoxGeometry(0.7, 0.8, 0.7), glowBurner);
      flame.position.y = -1.1;
      const basket = new THREE.Mesh(new THREE.BoxGeometry(1.8, 1.3, 1.8), basketMat);
      basket.position.y = -2.6;
      bg.add(flame, basket);

      this.group.add(bg);
      this.balloons.push({
        group: bg,
        orbitR,
        orbitY,
        speed,
        angle: idx * 2.1,
      });
    });

    // 皇家迷你童话飞艇
    this.airship = new THREE.Group();
    const hullMat = new THREE.MeshStandardMaterial({ color: '#fff8eb', roughness: 0.6 });
    const trimMat = new THREE.MeshStandardMaterial({ color: '#4d88e5', roughness: 0.5 });
    const goldMat = new THREE.MeshStandardMaterial({ color: '#ffd166', roughness: 0.35 });

    const balloonHull = new THREE.Mesh(new THREE.BoxGeometry(3.8, 3.4, 9.2), hullMat);
    balloonHull.position.y = 3.2;
    const stripe = new THREE.Mesh(new THREE.BoxGeometry(4.0, 0.8, 9.4), trimMat);
    stripe.position.y = 3.2;
    const gondola = new THREE.Mesh(new THREE.BoxGeometry(2.0, 1.6, 5.2), basketMat);
    gondola.position.y = 0;
    const finTop = new THREE.Mesh(new THREE.BoxGeometry(0.3, 2.2, 2.6), trimMat);
    finTop.position.set(0, 5.4, -3.2);
    this.airshipPropeller = new THREE.Mesh(new THREE.BoxGeometry(2.8, 0.35, 0.25), goldMat);
    this.airshipPropeller.position.set(0, 0.2, -2.8);

    this.airship.add(balloonHull, stripe, gondola, finTop, this.airshipPropeller);
    this.group.add(this.airship);
  }

  /** 6. 漫天飘舞的樱花花瓣与星光萤火虫 */
  private buildSakuraAndFireflyParticles(): void {
    const count = 220;
    const geo = new THREE.BoxGeometry(0.32, 0.12, 0.32);
    const mat = new THREE.MeshBasicMaterial({
      color: '#ffffff',
      transparent: true,
      opacity: 0.92,
    });
    this.petalMesh = new THREE.InstancedMesh(geo, mat, count);
    this.petalMesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);

    const pink = new THREE.Color('#ffa6cc');
    const lightPink = new THREE.Color('#ffe0ef');
    const fireflyGold = new THREE.Color('#ffe875');

    for (let i = 0; i < count; i++) {
      const isSakuraZone = i < 140;
      const x = isSakuraZone
        ? -48 + Math.random() * 96
        : -55 + Math.random() * 115;
      const y = 13 + Math.random() * 45;
      const z = -52 + Math.random() * 100;
      this.petalData.push({
        x,
        y,
        z,
        vy: isSakuraZone ? -1.4 - Math.random() * 1.1 : 0.35 + Math.random() * 0.4,
        sway: Math.random() * Math.PI * 2,
        rot: Math.random() * Math.PI,
      });
      this.petalMesh.setColorAt(
        i,
        isSakuraZone ? (i % 2 === 0 ? pink : lightPink) : fireflyGold
      );
    }
    this.petalMesh.instanceColor!.needsUpdate = true;
    this.group.add(this.petalMesh);
  }

  /** 7. 瀑布飞沫与中央星泉喷泉水珠 */
  private buildWaterSplashes(): void {
    const emitters = this.meta.islands.waterfallEmitters;
    const fountain = this.meta.town.fountainTop;
    const total = emitters.length * 18 + 28;

    const geo = new THREE.BoxGeometry(0.48, 0.48, 0.48);
    const mat = new THREE.MeshBasicMaterial({
      color: '#e6f9ff',
      transparent: true,
      opacity: 0.82,
    });
    this.splashMesh = new THREE.InstancedMesh(geo, mat, total);
    this.splashMesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);

    for (const [ex, ey, ez] of emitters) {
      for (let i = 0; i < 18; i++) {
        const origin = new THREE.Vector3(ex, ey, ez);
        this.splashData.push({
          origin,
          pos: origin.clone(),
          vel: new THREE.Vector3(
            (Math.random() - 0.5) * 3.2,
            1.8 + Math.random() * 3.0,
            (Math.random() - 0.5) * 3.2
          ),
          age: Math.random() * 1.2,
          life: 0.9 + Math.random() * 0.6,
          isFountain: false,
        });
      }
    }

    // 喷泉涌泉弧线水珠
    const fOrigin = new THREE.Vector3(fountain[0], fountain[1], fountain[2]);
    for (let i = 0; i < 28; i++) {
      const ang = (i / 28) * Math.PI * 2;
      this.splashData.push({
        origin: fOrigin,
        pos: fOrigin.clone(),
        vel: new THREE.Vector3(Math.cos(ang) * 2.2, 4.6, Math.sin(ang) * 2.2),
        age: Math.random() * 1.1,
        life: 1.1,
        isFountain: true,
      });
    }
    this.group.add(this.splashMesh);
  }

  /** 8. 童话小屋烟囱袅袅方块白烟圈 */
  private buildSmokeSystem(): void {
    const smokeMat = new THREE.MeshBasicMaterial({
      color: '#fff9fc',
      transparent: true,
      opacity: 0.65,
    });
    for (const [cx, cy, cz] of this.meta.town.chimneys) {
      for (let k = 0; k < 4; k++) {
        const m = new THREE.Mesh(this.sharedBox, smokeMat);
        const origin = new THREE.Vector3(cx, cy, cz);
        m.position.copy(origin);
        this.group.add(m);
        this.smokePuffs.push({
          mesh: m,
          origin,
          age: k * 0.9,
          life: 3.6,
          driftX: 0.5 + Math.random() * 0.3,
          driftZ: -0.2 + Math.random() * 0.4,
        });
      }
    }
  }

  /** 9. 小镇广场与步道上散步跳跃的可爱像素小居民 */
  private buildCuteVillagers(): void {
    const spots: [number, number, number, string, string][] = [
      [0, 15, 6.2, '#ff85c0', '#ffe58f'],   // 星泉广场散步的小公主
      [0, 15, 7.0, '#4d88e5', '#ffd166'],   // 皇家巡逻小卫兵
      [-12, 14, 4.0, '#73d13d', '#ffadd2'], // 西街花匠小精灵
      [28, 18, 3.8, '#b37feb', '#bae7ff'],  // 风车坡上的小魔法师
      [-33, 12, 4.2, '#69e0ff', '#ffffff'], // 樱花树下的果冻史莱姆
    ];

    spots.forEach(([cx, cz, radius, outfitHex, hatHex], idx) => {
      const npc = new THREE.Group();
      const bodyMat = new THREE.MeshStandardMaterial({ color: outfitHex, roughness: 0.7 });
      const skinMat = new THREE.MeshStandardMaterial({ color: '#ffe0c8', roughness: 0.7 });
      const hatMat = new THREE.MeshStandardMaterial({ color: hatHex, roughness: 0.5 });

      const body = new THREE.Mesh(new THREE.BoxGeometry(0.65, 0.75, 0.5), bodyMat);
      body.position.y = 0.4;
      const head = new THREE.Mesh(new THREE.BoxGeometry(0.62, 0.62, 0.62), skinMat);
      head.position.y = 1.08;
      const hat = new THREE.Mesh(new THREE.BoxGeometry(0.74, 0.32, 0.74), hatMat);
      hat.position.y = 1.5;

      body.castShadow = true;
      head.castShadow = true;
      npc.add(body, head, hat);
      this.group.add(npc);

      this.villagers.push({
        group: npc,
        centerX: cx,
        centerZ: cz,
        radius,
        angle: idx * 1.4,
        speed: (idx % 2 === 0 ? 1 : -1) * (0.42 + idx * 0.05),
        hopOffset: idx * 0.9,
      });
    });
  }

  /** 玩家交互：在王国夜空绽放一簇绚丽像素方块烟花！ */
  public launchFirework(customPos?: THREE.Vector3): void {
    const center =
      customPos ??
      new THREE.Vector3(
        (Math.random() - 0.5) * 44,
        46 + Math.random() * 18,
        -28 + Math.random() * 44
      );
    const palette = ['#ff7eb9', '#ffd166', '#69e0ff', '#b784f7', '#72efdd', '#ff9770'];
    const mainColor = palette[Math.floor(Math.random() * palette.length)];
    const subColor = palette[Math.floor(Math.random() * palette.length)];

    const mat1 = new THREE.MeshBasicMaterial({ color: mainColor });
    const mat2 = new THREE.MeshBasicMaterial({ color: subColor });

    const count = 46;
    for (let i = 0; i < count; i++) {
      const m = new THREE.Mesh(this.sharedBox, i % 2 === 0 ? mat1 : mat2);
      m.scale.setScalar(0.55);
      m.position.copy(center);

      // 球面均匀爆发速度
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const spd = 8 + Math.random() * 9;
      const vel = new THREE.Vector3(
        spd * Math.sin(phi) * Math.cos(theta),
        spd * Math.cos(phi),
        spd * Math.sin(phi) * Math.sin(theta)
      );

      this.group.add(m);
      this.fireworks.push({
        mesh: m,
        vel,
        age: 0,
        maxAge: 1.5 + Math.random() * 0.6,
      });
    }
  }

  /** 玩家交互：放飞几盏温暖梦幻的像素祈愿孔明灯！ */
  public releaseSkyLanterns(count = 3): void {
    const shellMat = new THREE.MeshStandardMaterial({
      color: '#ffb76b',
      emissive: '#ff9e44',
      emissiveIntensity: 1.6,
      roughness: 0.4,
    });
    const coreMat = new THREE.MeshBasicMaterial({ color: '#fff8cc' });

    for (let i = 0; i < count; i++) {
      const g = new THREE.Group();
      const shell = new THREE.Mesh(new THREE.BoxGeometry(0.95, 1.25, 0.95), shellMat);
      const heart = new THREE.Mesh(new THREE.BoxGeometry(0.45, 0.45, 0.45), coreMat);
      heart.position.y = -0.45;
      g.add(shell, heart);

      g.position.set(
        (Math.random() - 0.5) * 28,
        14 + Math.random() * 4,
        6 + Math.random() * 20
      );
      this.group.add(g);
      this.lanterns.push({
        group: g,
        velY: 2.3 + Math.random() * 1.1,
        swayPhase: Math.random() * Math.PI * 2,
        age: 0,
      });
    }
  }

  public update(dt: number, elapsed: number): void {
    // 1. 大风车优雅旋转
    this.windmillBlades.rotation.x = elapsed * 0.65;

    // 2. 紫晶星象台奥术双环旋转
    this.astrolabeRing1.rotation.x = elapsed * 0.7;
    this.astrolabeRing1.rotation.y = elapsed * 0.5;
    this.astrolabeRing2.rotation.y = -elapsed * 0.9;
    this.astrolabeRing2.rotation.z = elapsed * 0.6;
    this.astrolabeCore.rotation.y = elapsed * 1.3;
    this.astrolabeCore.position.y = Math.sin(elapsed * 2.2) * 0.35;

    // 3. 皇家尖塔旗帜迎风摆动
    for (const f of this.flags) {
      f.pivot.rotation.y = Math.sin(elapsed * 3.4 + f.phase) * 0.22;
    }

    // 4. 云海缓缓环绕与上下呼吸浮动
    for (const c of this.clouds) {
      c.group.position.x += c.speed * dt;
      if (c.group.position.x > 135) c.group.position.x = -135;
      c.group.position.y = c.baseY + Math.sin(elapsed * 0.6 + c.phase) * 0.9;
    }

    // 5. 热气球与皇家小飞艇巡航
    for (const b of this.balloons) {
      b.angle += b.speed * dt;
      b.group.position.set(
        Math.cos(b.angle) * b.orbitR,
        b.orbitY + Math.sin(elapsed * 0.9 + b.angle) * 2.2,
        Math.sin(b.angle) * b.orbitR - 8
      );
      b.group.rotation.y = -b.angle;
    }

    const shipAngle = elapsed * 0.13;
    const shipR = 46;
    const sx = Math.cos(shipAngle) * shipR;
    const sz = Math.sin(shipAngle) * shipR - 18;
    this.airship.position.set(sx, 43 + Math.sin(elapsed * 1.2) * 1.4, sz);
    // 机头朝切线前进方向
    this.airship.rotation.y = -shipAngle;
    this.airshipPropeller.rotation.z = elapsed * 16;

    // 6. 漫天樱花瓣与星光萤火虫更新
    for (let i = 0; i < this.petalData.length; i++) {
      const p = this.petalData[i];
      p.y += p.vy * dt;
      p.x += Math.sin(elapsed * 1.5 + p.sway) * 0.9 * dt;
      p.z += Math.cos(elapsed * 1.2 + p.sway) * 0.7 * dt;
      if (p.vy < 0 && p.y < 8) p.y = 56;
      if (p.vy > 0 && p.y > 46) p.y = 13;

      this.dummy.position.set(p.x, p.y, p.z);
      this.dummy.rotation.set(elapsed + p.rot, elapsed * 0.8 + p.sway, p.rot);
      const pulse = p.vy > 0 ? 0.65 + 0.45 * Math.sin(elapsed * 4 + p.sway) : 1.0;
      this.dummy.scale.setScalar(pulse);
      this.dummy.updateMatrix();
      this.petalMesh.setMatrixAt(i, this.dummy.matrix);
    }
    this.petalMesh.instanceMatrix.needsUpdate = true;

    // 7. 瀑布飞沫与星泉喷泉水珠更新
    for (let i = 0; i < this.splashData.length; i++) {
      const s = this.splashData[i];
      s.age += dt;
      if (s.age >= s.life) {
        s.age = 0;
        s.pos.copy(s.origin);
        if (s.isFountain) {
          const ang = (i / 28) * Math.PI * 2 + elapsed * 0.4;
          s.vel.set(Math.cos(ang) * 2.3, 4.8, Math.sin(ang) * 2.3);
        } else {
          s.vel.set(
            (Math.random() - 0.5) * 3.4,
            1.6 + Math.random() * 3.2,
            (Math.random() - 0.5) * 3.4
          );
        }
      } else {
        s.vel.y -= 9.5 * dt;
        s.pos.addScaledVector(s.vel, dt);
      }
      const sc = Math.max(0.05, 1 - s.age / s.life);
      this.dummy.position.copy(s.pos);
      this.dummy.rotation.set(0, 0, 0);
      this.dummy.scale.setScalar(sc);
      this.dummy.updateMatrix();
      this.splashMesh.setMatrixAt(i, this.dummy.matrix);
    }
    this.splashMesh.instanceMatrix.needsUpdate = true;

    // 8. 小屋烟囱方块烟圈袅袅上升
    for (const puff of this.smokePuffs) {
      puff.age += dt;
      if (puff.age >= puff.life) puff.age = 0;
      const t = puff.age / puff.life;
      puff.mesh.position.set(
        puff.origin.x + puff.driftX * puff.age + Math.sin(elapsed * 2 + puff.origin.x) * 0.25,
        puff.origin.y + puff.age * 1.55,
        puff.origin.z + puff.driftZ * puff.age
      );
      const s = 0.35 + t * 0.75;
      puff.mesh.scale.setScalar(s * (1 - t * 0.65));
    }

    // 9. 小居民欢快蹦跳散步
    for (const v of this.villagers) {
      v.angle += v.speed * dt;
      const vx = v.centerX + Math.cos(v.angle) * v.radius;
      const vz = v.centerZ + Math.sin(v.angle) * v.radius;
      const groundY = this.world.getSurfaceY(vx, vz, 28, 10) + 1;
      const hop = Math.abs(Math.sin(elapsed * 6.5 + v.hopOffset)) * 0.28;
      v.group.position.set(vx, groundY + hop, vz);
      v.group.rotation.y = -v.angle + (v.speed > 0 ? 0 : Math.PI);
    }

    // 10. 祈愿天灯冉冉升空
    for (let i = this.lanterns.length - 1; i >= 0; i--) {
      const l = this.lanterns[i];
      l.age += dt;
      l.group.position.y += l.velY * dt;
      l.group.position.x += Math.sin(elapsed * 1.2 + l.swayPhase) * 0.7 * dt;
      l.group.rotation.y += 0.6 * dt;
      if (l.age > 24 || l.group.position.y > 98) {
        this.group.remove(l.group);
        this.lanterns.splice(i, 1);
      }
    }

    // 11. 像素烟花重力绽放消散
    for (let i = this.fireworks.length - 1; i >= 0; i--) {
      const fw = this.fireworks[i];
      fw.age += dt;
      if (fw.age >= fw.maxAge) {
        this.group.remove(fw.mesh);
        this.fireworks.splice(i, 1);
        continue;
      }
      fw.vel.y -= 9.8 * dt;
      fw.vel.multiplyScalar(0.985);
      fw.mesh.position.addScaledVector(fw.vel, dt);
      const remain = 1 - fw.age / fw.maxAge;
      fw.mesh.scale.setScalar(0.6 * remain);
    }
  }
}

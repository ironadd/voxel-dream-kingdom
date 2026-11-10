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

export interface VillagerNPC {
  group: THREE.Group;
  name: string;
  dialogues: string[];
  talkCursor: number;
  centerX: number;
  centerZ: number;
  radius: number;
  angle: number;
  speed: number;
  hopOffset: number;
  greetTimer: number;
  greetTarget: THREE.Vector3;
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
  public readonly villagers: VillagerNPC[] = [];

  // 九霄苍穹史诗奇观：像素星霜圣龙 & 三桅魔导浮空云船
  private dragonSegments: THREE.Group[] = [];
  private dragonLeftWing!: THREE.Group;
  private dragonRightWing!: THREE.Group;
  private skyGalleon!: THREE.Group;
  private galleonOars: { pivot: THREE.Group; side: number; phase: number }[] = [];

  private sharedBox = new THREE.BoxGeometry(1, 1, 1);
  private dummy = new THREE.Object3D();

  constructor(private world: VoxelWorld, private meta: KingdomMetadata) {
    this.buildWindmillRotor();
    this.buildObservatoryAstrolabe();
    this.buildCastleFlags();
    this.buildVoxelCloudSea();
    this.buildHotAirBalloonsAndAirship();
    this.buildCelestialFrostDragon();
    this.buildGrandSkyGalleon();
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

    for (let i = 0; i < 38; i++) {
      const cg = new THREE.Group();
      const angle = (i / 38) * Math.PI * 2 + (i % 3) * 0.2;
      const isHighCelestial = i >= 26;
      const dist = isHighCelestial
        ? 38 + (i % 5) * 16
        : i < 10
        ? 45 + (i % 4) * 14
        : 78 + (i % 5) * 18;
      const baseY = isHighCelestial
        ? 66 + (i % 4) * 9
        : i < 10
        ? -24 - (i % 3) * 5
        : 8 + (i % 6) * 9;

      const w = 8 + (i % 4) * 3.5;
      const d = 5 + (i % 3) * 2.2;
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
      cg.position.set(
        Math.cos(angle) * dist,
        baseY,
        Math.sin(angle) * dist - (isHighCelestial ? 68 : 0)
      );
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

  /** 9. 小镇广场与步道上散步跳跃的可爱像素小居民（支持第一人称靠近交谈！） */
  private buildCuteVillagers(): void {
    const spots: [number, number, number, string, string, string, string[]][] = [
      [
        0,
        15,
        6.2,
        '#ff85c0',
        '#ffe58f',
        '👑 星泉小公主 · 艾莉亚',
        [
          '欢迎来到星冠云国！抬头看北边九霄上的凌霄冰霜神殿，入夜后极光超美哦！',
          '去南岸可以实地坐上霓虹摩天轮和旋转木马，还能在月台搭乘云海银河小火车呢！',
          '漫步时按 [F] 键挥动星辉魔杖能发射魔法星弹，按 [V] 键还能切换第一/第三人称哟～',
        ],
      ],
      [
        0,
        15,
        7.0,
        '#4d88e5',
        '#ffd166',
        '🛡️ 皇家卫兵队长 · 雷欧',
        [
          '向您致敬，旅者！顺着北面的汉白玉宫灯大阶梯拾级而上，便是星冠皇家圣城！',
          '广场东侧设有发光的「星界传送阵」，走过去按 [E] 就能瞬间飞抵九霄凌霄冰宫！',
          '双击空格键可以开启仙灵御风飞行，整座天空群岛任您遨游！',
        ],
      ],
      [
        -12,
        14,
        4.0,
        '#73d13d',
        '#ffadd2',
        '🌸 花语小精灵 · 露露',
        [
          '西边森林里的千年绯樱神木藏着花仙子的祝福，快去树下按 [E] 唤起漫天樱吹雪吧！',
          '你听见天空巨鲸的歌声了吗？西南云海里还有一闪一闪的荧光水母群呢～',
        ],
      ],
      [
        28,
        18,
        3.8,
        '#b37feb',
        '#bae7ff',
        '🔮 星象见习法师 · 梅林',
        [
          '看见东南天际那座黄金星晷钟塔了吗？三枚大齿轮可是按真实齿数比精确咬合转动的！',
          '跨过彩虹星桥就能抵达紫晶星象台，在那里召唤流星雨会引起奥术大法阵共鸣哦！',
        ],
      ],
      [
        -33,
        12,
        4.2,
        '#69e0ff',
        '#ffffff',
        '💧 樱花果冻史莱姆',
        [
          '噗噜噗噜～✨（开心地蹦了两下，往你身上撒了一把幸运星尘！）',
          '咕叽咕叽～🌸（指了指头顶飘落的粉色樱花瓣，露出治愈的微笑！）',
        ],
      ],
    ];

    spots.forEach(([cx, cz, radius, outfitHex, hatHex, name, dialogues], idx) => {
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
        name,
        dialogues,
        talkCursor: 0,
        centerX: cx,
        centerZ: cz,
        radius,
        angle: idx * 1.4,
        speed: (idx % 2 === 0 ? 1 : -1) * (0.42 + idx * 0.05),
        hopOffset: idx * 0.9,
        greetTimer: 0,
        greetTarget: new THREE.Vector3(),
      });
    });
  }

  /** 让指定 NPC 停步转身面向玩家欢快跳跃，并返回下一句对话台词 */
  public interactWithVillager(idx: number, playerPos: THREE.Vector3): { name: string; line: string } {
    const v = this.villagers[idx];
    v.greetTimer = 4.5;
    v.greetTarget.copy(playerPos);
    const line = v.dialogues[v.talkCursor % v.dialogues.length];
    v.talkCursor++;

    // 头顶迸发一小簇喜悦星花粒子
    const burstPos = v.group.position.clone();
    burstPos.y += 2.2;
    this.spawnMiniSparkles(burstPos, '#ffe382', 14);
    return { name: v.name, line };
  }

  /** 在指定位置迸发轻盈彩色像素星花/樱吹雪粒子 */
  public spawnMiniSparkles(center: THREE.Vector3, mainHex: string, count = 24): void {
    const mat1 = new THREE.MeshBasicMaterial({ color: mainHex });
    const mat2 = new THREE.MeshBasicMaterial({ color: '#ffffff' });
    for (let i = 0; i < count; i++) {
      const m = new THREE.Mesh(this.sharedBox, i % 2 === 0 ? mat1 : mat2);
      m.scale.setScalar(0.32);
      m.position.copy(center).add(
        new THREE.Vector3(
          (Math.random() - 0.5) * 3.0,
          (Math.random() - 0.5) * 2.0,
          (Math.random() - 0.5) * 3.0
        )
      );
      const vel = new THREE.Vector3(
        (Math.random() - 0.5) * 6.5,
        2.5 + Math.random() * 5.5,
        (Math.random() - 0.5) * 6.5
      );
      this.group.add(m);
      this.fireworks.push({
        mesh: m,
        vel,
        age: 0,
        maxAge: 1.2 + Math.random() * 0.5,
      });
    }
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

    // 9. 小居民欢快蹦跳散步（若正在与玩家交谈则停步转身面向玩家欢呼跳跃！）
    for (const v of this.villagers) {
      if (v.greetTimer > 0) {
        v.greetTimer -= dt;
        const vx = v.centerX + Math.cos(v.angle) * v.radius;
        const vz = v.centerZ + Math.sin(v.angle) * v.radius;
        const groundY = this.world.getSurfaceY(vx, vz, 28, 10) + 1;
        const happyHop = Math.abs(Math.sin(elapsed * 12)) * 0.45;
        v.group.position.set(vx, groundY + happyHop, vz);
        v.group.lookAt(v.greetTarget.x, groundY + happyHop, v.greetTarget.z);
      } else {
        v.angle += v.speed * dt;
        const vx = v.centerX + Math.cos(v.angle) * v.radius;
        const vz = v.centerZ + Math.sin(v.angle) * v.radius;
        const groundY = this.world.getSurfaceY(vx, vz, 28, 10) + 1;
        const hop = Math.abs(Math.sin(elapsed * 6.5 + v.hopOffset)) * 0.28;
        v.group.position.set(vx, groundY + hop, vz);
        v.group.rotation.set(0, -v.angle + (v.speed > 0 ? 0 : Math.PI), 0);
      }
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

    // 12. 九霄像素星霜圣龙盘旋游动与扇翼动画
    for (let i = 0; i < this.dragonSegments.length; i++) {
      const seg = this.dragonSegments[i];
      const t = elapsed * 0.42 - i * 0.11;
      const pos = this.sampleDragonPath(t);
      const ahead = this.sampleDragonPath(t + 0.06);
      seg.position.copy(pos);
      seg.lookAt(ahead);
    }
    const wingFlap = Math.sin(elapsed * 3.8) * 0.52;
    this.dragonLeftWing.rotation.z = wingFlap;
    this.dragonRightWing.rotation.z = -wingFlap;

    // 13. 高空皇家三桅魔导浮空云船巡航
    const galAngle = -elapsed * 0.085 + 0.8;
    const galRx = 68;
    const galRz = 48;
    const gx = Math.cos(galAngle) * galRx;
    const gz = Math.sin(galAngle) * galRz - 42;
    const gy = 68 + Math.sin(elapsed * 0.9) * 1.8;
    const nextGx = Math.cos(galAngle - 0.02) * galRx;
    const nextGz = Math.sin(galAngle - 0.02) * galRz - 42;
    this.skyGalleon.position.set(gx, gy, gz);
    this.skyGalleon.lookAt(nextGx, gy, nextGz);
    for (const oar of this.galleonOars) {
      oar.pivot.rotation.z = oar.side * (Math.sin(elapsed * 3.2 + oar.phase) * 0.35 - 0.12);
    }
  }

  /** 采样九霄星霜圣龙的 3D 环绕航线（穿梭于凌霄冰宫与皇家圣城高空之间） */
  private sampleDragonPath(t: number): THREE.Vector3 {
    const x = Math.sin(t) * 48 + Math.cos(t * 2) * 12;
    const z = -64 + Math.cos(t) * 38;
    const y = 92 + Math.sin(t * 2) * 12 + Math.cos(t * 3) * 3.5;
    return new THREE.Vector3(x, y, z);
  }

  /** 获取「骑乘九霄星霜圣龙」过肩背脊视角位姿 */
  public getDragonCameraPose(elapsed: number): {
    position: THREE.Vector3;
    lookAt: THREE.Vector3;
  } {
    const t = elapsed * 0.42 - 0.16;
    const pos = this.sampleDragonPath(t);
    const look = this.sampleDragonPath(t + 0.35);
    pos.y += 4.2;
    return { position: pos, lookAt: look };
  }

  /** 构建翱翔九霄的 16 节像素「星霜圣龙」 */
  private buildCelestialFrostDragon(): void {
    const scaleMat = new THREE.MeshStandardMaterial({
      color: '#bfefff',
      emissive: '#3ac8ff',
      emissiveIntensity: 0.38,
      roughness: 0.35,
    });
    const bellyMat = new THREE.MeshStandardMaterial({
      color: '#f2fcff',
      roughness: 0.5,
    });
    const hornGoldMat = new THREE.MeshStandardMaterial({
      color: '#ffe082',
      emissive: '#ffbe42',
      emissiveIntensity: 0.55,
      roughness: 0.3,
    });
    const glowIceMat = new THREE.MeshBasicMaterial({
      color: '#7af7ff',
    });
    const wingMembraneMat = new THREE.MeshStandardMaterial({
      color: '#6ce5ff',
      emissive: '#4cd8ff',
      emissiveIntensity: 0.72,
      transparent: true,
      opacity: 0.82,
      roughness: 0.25,
    });

    const totalSegs = 16;
    for (let i = 0; i < totalSegs; i++) {
      const seg = new THREE.Group();

      if (i === 0) {
        // 威严像素冰霜龙头（吻部、发光冰瞳、双鎏金长龙角）
        const cranium = new THREE.Mesh(new THREE.BoxGeometry(2.3, 2.0, 2.6), scaleMat);
        const snout = new THREE.Mesh(new THREE.BoxGeometry(1.6, 1.2, 2.2), scaleMat);
        snout.position.set(0, -0.2, 2.1);
        const jaw = new THREE.Mesh(new THREE.BoxGeometry(1.4, 0.5, 1.8), bellyMat);
        jaw.position.set(0, -0.85, 1.8);

        const eyeL = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.42, 0.55), glowIceMat);
        eyeL.position.set(1.05, 0.3, 0.9);
        const eyeR = eyeL.clone();
        eyeR.position.x = -1.05;

        const hornL = new THREE.Mesh(new THREE.BoxGeometry(0.45, 0.45, 3.2), hornGoldMat);
        hornL.position.set(0.85, 1.35, -1.2);
        hornL.rotation.x = 0.48;
        hornL.rotation.y = 0.22;
        const hornR = hornL.clone();
        hornR.position.x = -0.85;
        hornR.rotation.y = -0.22;

        seg.add(cranium, snout, jaw, eyeL, eyeR, hornL, hornR);
      } else {
        const taper = 1 - (i / totalSegs) * 0.68;
        const w = 2.0 * taper;
        const h = 1.8 * taper;
        const body = new THREE.Mesh(new THREE.BoxGeometry(w, h, 2.3), scaleMat);
        const belly = new THREE.Mesh(new THREE.BoxGeometry(w * 0.8, 0.45 * taper, 2.1), bellyMat);
        belly.position.y = -h * 0.5;

        // 发光极寒冰晶背鳍
        const crest = new THREE.Mesh(
          new THREE.BoxGeometry(0.35, 1.25 * taper + 0.35, 1.2),
          i % 2 === 0 ? glowIceMat : hornGoldMat
        );
        crest.position.y = h * 0.65;
        seg.add(body, belly, crest);

        // 第 2 节挂载巨大像素冰晶双翼！
        if (i === 2) {
          const createWing = (dir: 1 | -1) => {
            const pivot = new THREE.Group();
            pivot.position.set(dir * 1.0, 0.4, 0);

            const bone1 = new THREE.Mesh(new THREE.BoxGeometry(5.5, 0.45, 0.55), hornGoldMat);
            bone1.position.set(dir * 2.75, 0.5, 0.4);
            bone1.rotation.z = dir * 0.15;

            const bone2 = new THREE.Mesh(new THREE.BoxGeometry(5.2, 0.38, 0.45), scaleMat);
            bone2.position.set(dir * 7.6, 0.8, -0.3);
            bone2.rotation.y = -dir * 0.22;

            // 阶梯状像素发光冰翼膜
            const pane1 = new THREE.Mesh(new THREE.BoxGeometry(5.0, 0.18, 3.6), wingMembraneMat);
            pane1.position.set(dir * 2.8, 0.35, -1.3);
            const pane2 = new THREE.Mesh(new THREE.BoxGeometry(4.8, 0.18, 2.8), wingMembraneMat);
            pane2.position.set(dir * 7.4, 0.65, -1.5);

            pivot.add(bone1, bone2, pane1, pane2);
            return pivot;
          };
          this.dragonLeftWing = createWing(1);
          this.dragonRightWing = createWing(-1);
          seg.add(this.dragonLeftWing, this.dragonRightWing);
        }

        // 龙尾末端星芒冰刃
        if (i === totalSegs - 1) {
          const tailBlade = new THREE.Mesh(new THREE.BoxGeometry(1.8, 0.3, 2.8), glowIceMat);
          tailBlade.position.z = -1.6;
          seg.add(tailBlade);
        }
      }

      this.group.add(seg);
      this.dragonSegments.push(seg);
    }
  }

  /** 构建高空巡天「皇家三桅魔导浮空云船」 */
  private buildGrandSkyGalleon(): void {
    this.skyGalleon = new THREE.Group();

    const hullWood = new THREE.MeshStandardMaterial({ color: '#7a4e32', roughness: 0.8 });
    const deckWood = new THREE.MeshStandardMaterial({ color: '#c49060', roughness: 0.75 });
    const royalBlue = new THREE.MeshStandardMaterial({ color: '#3b73d9', roughness: 0.5 });
    const goldTrim = new THREE.MeshStandardMaterial({
      color: '#ffd166',
      emissive: '#ffae2b',
      emissiveIntensity: 0.35,
      roughness: 0.3,
    });
    const sailCloth = new THREE.MeshStandardMaterial({
      color: '#fffcf5',
      emissive: '#ffe8d6',
      emissiveIntensity: 0.18,
      roughness: 0.65,
    });
    const manaGlow = new THREE.MeshBasicMaterial({ color: '#69f0ff' });

    // 层叠像素船体龙骨与甲板（沿 +Z 为船头方向）
    const keel = new THREE.Mesh(new THREE.BoxGeometry(3.2, 1.4, 12.5), hullWood);
    keel.position.y = -1.2;
    const midHull = new THREE.Mesh(new THREE.BoxGeometry(4.8, 1.8, 15.0), hullWood);
    midHull.position.y = 0.2;
    const blueStripe = new THREE.Mesh(new THREE.BoxGeometry(5.0, 0.65, 15.2), royalBlue);
    blueStripe.position.y = 0.6;
    const deck = new THREE.Mesh(new THREE.BoxGeometry(4.6, 0.4, 14.6), deckWood);
    deck.position.y = 1.2;

    // 船尾皇家舰长楼与暖光尾灯 + 船头鎏金撞角斜桅
    const sternCabin = new THREE.Mesh(new THREE.BoxGeometry(4.4, 2.4, 4.2), hullWood);
    sternCabin.position.set(0, 2.4, -5.4);
    const sternTrim = new THREE.Mesh(new THREE.BoxGeometry(4.6, 0.45, 4.4), goldTrim);
    sternTrim.position.set(0, 3.7, -5.4);
    const sternLantern = new THREE.Mesh(new THREE.BoxGeometry(0.9, 1.2, 0.9), manaGlow);
    sternLantern.position.set(0, 3.2, -7.8);

    const bowsprit = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.5, 5.2), goldTrim);
    bowsprit.position.set(0, 1.9, 9.2);
    bowsprit.rotation.x = -0.28;

    // 船底浮空蓝水晶引擎核
    const manaCore = new THREE.Mesh(new THREE.BoxGeometry(2.0, 0.9, 6.5), manaGlow);
    manaCore.position.y = -2.0;

    this.skyGalleon.add(
      keel,
      midHull,
      blueStripe,
      deck,
      sternCabin,
      sternTrim,
      sternLantern,
      bowsprit,
      manaCore
    );

    // 三根高耸木桅杆与鼓风弧形像素白帆
    const mastSpecs: [number, number, number][] = [
      [4.2, 8.5, 5.6],  // 前桅
      [-0.2, 10.5, 7.0], // 主桅
      [-4.8, 7.8, 4.8], // 后桅
    ];
    for (const [mz, mh, sw] of mastSpecs) {
      const mast = new THREE.Mesh(new THREE.BoxGeometry(0.45, mh, 0.45), hullWood);
      mast.position.set(0, 1.2 + mh * 0.5, mz);
      const sail = new THREE.Mesh(new THREE.BoxGeometry(sw, mh * 0.58, 0.45), sailCloth);
      sail.position.set(0, 2.2 + mh * 0.45, mz + 0.45);
      const flag = new THREE.Mesh(new THREE.BoxGeometry(1.6, 0.55, 0.18), goldTrim);
      flag.position.set(0.8, 1.4 + mh, mz);
      this.skyGalleon.add(mast, sail, flag);
    }

    // 两侧各 3 支划动的发光魔导浮空光翼桨
    for (const side of [-1, 1]) {
      for (let k = 0; k < 3; k++) {
        const pivot = new THREE.Group();
        pivot.position.set(side * 2.5, 0.5, -2.5 + k * 3.0);
        const blade = new THREE.Mesh(new THREE.BoxGeometry(3.6, 0.22, 1.1), manaGlow);
        blade.position.x = side * 1.8;
        pivot.add(blade);
        this.skyGalleon.add(pivot);
        this.galleonOars.push({ pivot, side, phase: k * 0.9 });
      }
    }

    this.group.add(this.skyGalleon);
  }
}

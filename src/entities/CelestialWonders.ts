import * as THREE from 'three';
import { WonderHooks } from '../world/WonderIslands';

interface JellyfishEntity {
  group: THREE.Group;
  bell: THREE.Mesh;
  tentacles: THREE.Group;
  basePos: THREE.Vector3;
  phase: number;
  speed: number;
}

interface TrainSteamPuff {
  mesh: THREE.Mesh;
  age: number;
  maxAge: number;
  vel: THREE.Vector3;
}

export class CelestialWonders {
  public readonly group = new THREE.Group();

  // 1. 苍穹星云巨鲸 & 荧光浮空水母群
  private whaleSegments: THREE.Group[] = [];
  private whaleLeftFin!: THREE.Group;
  private whaleRightFin!: THREE.Group;
  private whaleTailFluke!: THREE.Group;
  private jellyfishes: JellyfishEntity[] = [];

  // 2. 东境涅槃流火凤凰
  private phoenixRoot = new THREE.Group();
  private phoenixLeftWing!: THREE.Group;
  private phoenixRightWing!: THREE.Group;
  private phoenixTails: THREE.Mesh[] = [];

  // 3. 黄金星晷齿轮钟塔动态组
  private gearLarge!: THREE.Group;
  private gearMedium!: THREE.Group;
  private gearSmall!: THREE.Group;
  private clockMinuteHand!: THREE.Group;
  private clockHourHand!: THREE.Group;
  private clockPendulum!: THREE.Group;

  // 4. 星梦霓虹摩天轮 & 旋转木马
  private ferrisWheel = new THREE.Group();
  private ferrisGondolas: THREE.Group[] = [];
  private carouselCanopy = new THREE.Group();
  private carouselHorses: { group: THREE.Group; baseY: number; phase: number }[] = [];

  // 5. 云海银河像素蒸汽列车
  private railCurve!: THREE.CatmullRomCurve3;
  private trainCars: THREE.Group[] = [];
  private trainProgress = 0;
  private trainSteam: TrainSteamPuff[] = [];
  private steamSpawnTimer = 0;

  // 6. 像素奥术旋转大魔法阵
  private frostCircleInner!: THREE.Mesh;
  private frostCircleOuter!: THREE.Mesh;
  private astralCircle!: THREE.Mesh;
  private magicSurge = 0; // 召唤星雨时的魔法阵共鸣增幅

  private sharedBox = new THREE.BoxGeometry(1, 1, 1);

  constructor(private hooks: WonderHooks) {
    this.buildNebulaSkyWhale();
    this.buildGlowingJellyfishSwarm();
    this.buildBlazingPhoenix();
    this.buildClockworkMechanisms();
    this.buildFerrisWheelAndCarousel();
    this.buildGalacticSkyTrain();
    this.buildArcaneMagicCircles();
  }

  /** 触发魔法阵耀眼共鸣（配合召唤流星雨大招） */
  public triggerArcaneResonance(): void {
    this.magicSurge = 1.0;
  }

  /** 获取搭乘「云海银河列车」观景相机位姿 */
  public getTrainCameraPose(): { position: THREE.Vector3; lookAt: THREE.Vector3 } {
    const p = (this.trainProgress + 0.006) % 1;
    const aheadP = (p + 0.035) % 1;
    const pos = this.railCurve.getPointAt(p);
    const look = this.railCurve.getPointAt(aheadP);
    pos.y += 3.8;
    look.y += 2.6;
    return { position: pos, lookAt: look };
  }

  /** 获取 0 号摩天轮发光轿厢内部实时世界坐标（供第一人称实地乘坐观景！） */
  public getFerrisCabinWorldPos(): THREE.Vector3 {
    const wp = new THREE.Vector3();
    this.ferrisGondolas[0].getWorldPosition(wp);
    wp.y -= 1.15;
    return wp;
  }

  /** 获取 0 号旋转木马实时世界坐标（供第一人称实地骑乘！） */
  public getCarouselHorseWorldPos(): THREE.Vector3 {
    const wp = new THREE.Vector3();
    this.carouselHorses[0].group.getWorldPosition(wp);
    wp.y += 1.25;
    return wp;
  }

  /** 1. 构建遨游深空云海的 13 节像素「苍穹星云巨鲸」 */
  private buildNebulaSkyWhale(): void {
    const whaleBackMat = new THREE.MeshStandardMaterial({
      color: '#5a67f2',
      emissive: '#3b48c8',
      emissiveIntensity: 0.45,
      roughness: 0.4,
      transparent: true,
      opacity: 0.94,
    });
    const whaleBellyMat = new THREE.MeshStandardMaterial({
      color: '#e6f4ff',
      emissive: '#9be7ff',
      emissiveIntensity: 0.28,
      roughness: 0.5,
    });
    const starSpotMat = new THREE.MeshBasicMaterial({ color: '#80ffea' });

    const profile: [number, number, number][] = [
      [4.2, 3.2, 2.8], // 0: 宽阔圆润鲸首
      [5.4, 4.2, 2.8], // 1
      [6.0, 4.6, 3.0], // 2: 最宽胸腔（挂载流光巨型胸鳍）
      [5.8, 4.4, 2.8], // 3
      [5.2, 4.0, 2.6], // 4
      [4.5, 3.5, 2.5], // 5
      [3.8, 3.0, 2.4], // 6
      [3.1, 2.4, 2.3], // 7
      [2.5, 1.9, 2.2], // 8
      [1.9, 1.5, 2.1], // 9
      [1.4, 1.2, 2.0], // 10: 尾柄（挂载水平流光大尾鳍）
    ];

    for (let i = 0; i < profile.length; i++) {
      const [w, h, len] = profile[i];
      const seg = new THREE.Group();

      const upper = new THREE.Mesh(new THREE.BoxGeometry(w, h * 0.68, len), whaleBackMat);
      upper.position.y = h * 0.16;
      const lower = new THREE.Mesh(
        new THREE.BoxGeometry(w * 0.88, h * 0.36, len * 0.95),
        whaleBellyMat
      );
      lower.position.y = -h * 0.34;
      seg.add(upper, lower);

      // 鲸背发光星斑与微型水晶珊瑚
      if (i % 2 === 1 && i <= 7) {
        const spot = new THREE.Mesh(new THREE.BoxGeometry(0.65, 0.75, 0.65), starSpotMat);
        spot.position.set((i % 3 - 1) * 0.9, h * 0.55, 0);
        seg.add(spot);
      }

      if (i === 0) {
        // 温柔发光鲸目
        for (const sx of [-1, 1]) {
          const eye = new THREE.Mesh(new THREE.BoxGeometry(0.45, 0.45, 0.65), starSpotMat);
          eye.position.set(sx * 2.15, 0.1, -0.3);
          seg.add(eye);
        }
      }

      // 第 2 节挂载宽阔优雅的像素胸鳍
      if (i === 2) {
        const makePectoralFin = (dir: 1 | -1) => {
          const pivot = new THREE.Group();
          pivot.position.set(dir * 2.9, -0.6, 0);
          const fin1 = new THREE.Mesh(new THREE.BoxGeometry(5.2, 0.42, 2.6), whaleBackMat);
          fin1.position.set(dir * 2.5, -0.3, -0.4);
          const fin2 = new THREE.Mesh(new THREE.BoxGeometry(4.2, 0.32, 1.8), starSpotMat);
          fin2.position.set(dir * 6.4, -0.6, -1.1);
          pivot.add(fin1, fin2);
          return pivot;
        };
        this.whaleLeftFin = makePectoralFin(1);
        this.whaleRightFin = makePectoralFin(-1);
        seg.add(this.whaleLeftFin, this.whaleRightFin);
      }

      // 末端水平宽大鲸尾鳍
      if (i === profile.length - 1) {
        this.whaleTailFluke = new THREE.Group();
        this.whaleTailFluke.position.set(0, 0, -1.2);
        const flukeMain = new THREE.Mesh(new THREE.BoxGeometry(7.6, 0.38, 2.6), whaleBackMat);
        flukeMain.position.z = -1.2;
        const flukeTips = new THREE.Mesh(new THREE.BoxGeometry(9.4, 0.28, 1.4), starSpotMat);
        flukeTips.position.z = -2.2;
        this.whaleTailFluke.add(flukeMain, flukeTips);
        seg.add(this.whaleTailFluke);
      }

      this.group.add(seg);
      this.whaleSegments.push(seg);
    }
  }

  private sampleWhalePath(t: number): THREE.Vector3 {
    const x = -72 + Math.cos(t) * 34;
    const z = -6 + Math.sin(t) * 56;
    const y = 52 + Math.sin(t * 2) * 7.5;
    return new THREE.Vector3(x, y, z);
  }

  /** 2. 构建 14 只呼吸发光的浮空荧光像素水母 */
  private buildGlowingJellyfishSwarm(): void {
    const colors = ['#ff85e4', '#6ef7ff', '#c788ff', '#7bf1a8'];
    for (let i = 0; i < 14; i++) {
      const hex = colors[i % colors.length];
      const bellMat = new THREE.MeshStandardMaterial({
        color: hex,
        emissive: hex,
        emissiveIntensity: 1.15,
        transparent: true,
        opacity: 0.78,
        roughness: 0.2,
      });

      const g = new THREE.Group();
      const bell = new THREE.Mesh(new THREE.BoxGeometry(1.7, 1.1, 1.7), bellMat);
      const cap = new THREE.Mesh(new THREE.BoxGeometry(1.1, 0.5, 1.1), bellMat);
      cap.position.y = 0.7;
      bell.add(cap);

      const tentacles = new THREE.Group();
      for (const [tx, tz] of [
        [-0.45, -0.45],
        [0.45, -0.45],
        [-0.45, 0.45],
        [0.45, 0.45],
      ]) {
        const tent = new THREE.Mesh(new THREE.BoxGeometry(0.18, 2.1, 0.18), bellMat);
        tent.position.set(tx, -1.3, tz);
        tentacles.add(tent);
      }

      g.add(bell, tentacles);
      const angle = (i / 14) * Math.PI * 2;
      const r = 56 + (i % 3) * 14;
      const basePos = new THREE.Vector3(
        Math.cos(angle) * r,
        24 + (i % 5) * 8,
        Math.sin(angle) * r
      );
      g.position.copy(basePos);
      this.group.add(g);

      this.jellyfishes.push({
        group: g,
        bell,
        tentacles,
        basePos,
        phase: i * 0.85,
        speed: 1.8 + (i % 3) * 0.4,
      });
    }
  }

  /** 3. 构建东境高空「涅槃流火凤凰」（与北境星霜圣龙冰火辉映） */
  private buildBlazingPhoenix(): void {
    const crimsonMat = new THREE.MeshStandardMaterial({
      color: '#ff4d6d',
      emissive: '#ff2a55',
      emissiveIntensity: 0.9,
      roughness: 0.3,
    });
    const amberMat = new THREE.MeshStandardMaterial({
      color: '#ff9e00',
      emissive: '#ff7b00',
      emissiveIntensity: 1.2,
      roughness: 0.25,
    });
    const goldFlameMat = new THREE.MeshBasicMaterial({ color: '#ffee75' });

    const body = new THREE.Mesh(new THREE.BoxGeometry(1.8, 1.5, 3.6), crimsonMat);
    const head = new THREE.Mesh(new THREE.BoxGeometry(1.3, 1.3, 1.6), amberMat);
    head.position.set(0, 0.9, 2.1);
    const beak = new THREE.Mesh(new THREE.BoxGeometry(0.55, 0.5, 1.1), goldFlameMat);
    beak.position.set(0, 0.75, 3.2);
    const crest = new THREE.Mesh(new THREE.BoxGeometry(0.3, 1.4, 1.8), goldFlameMat);
    crest.position.set(0, 1.8, 1.6);
    crest.rotation.x = -0.35;

    const makeFireWing = (dir: 1 | -1) => {
      const pivot = new THREE.Group();
      pivot.position.set(dir * 0.9, 0.4, 0.4);
      const inner = new THREE.Mesh(new THREE.BoxGeometry(4.4, 0.28, 2.8), crimsonMat);
      inner.position.set(dir * 2.2, 0.2, -0.2);
      const mid = new THREE.Mesh(new THREE.BoxGeometry(4.2, 0.24, 2.2), amberMat);
      mid.position.set(dir * 5.8, 0.45, -0.7);
      const tip = new THREE.Mesh(new THREE.BoxGeometry(3.2, 0.2, 1.4), goldFlameMat);
      tip.position.set(dir * 8.6, 0.7, -1.3);
      pivot.add(inner, mid, tip);
      return pivot;
    };

    this.phoenixLeftWing = makeFireWing(1);
    this.phoenixRightWing = makeFireWing(-1);
    this.phoenixRoot.add(
      body,
      head,
      beak,
      crest,
      this.phoenixLeftWing,
      this.phoenixRightWing
    );

    // 三条飘逸摆动的流火长尾翎
    for (let k = -1; k <= 1; k++) {
      const ribbon = new THREE.Mesh(
        new THREE.BoxGeometry(0.45, 0.25, 6.8),
        k === 0 ? goldFlameMat : amberMat
      );
      ribbon.position.set(k * 0.75, 0.1, -5.0);
      this.phoenixRoot.add(ribbon);
      this.phoenixTails.push(ribbon);
    }

    this.group.add(this.phoenixRoot);
  }

  /** 4. 构建黄金星晷齿轮钟塔的三大啮合旋转像素黄金齿轮与摇摆钟摆 */
  private buildClockworkMechanisms(): void {
    const goldMat = new THREE.MeshStandardMaterial({
      color: '#ffd166',
      emissive: '#ffaa2b',
      emissiveIntensity: 0.38,
      roughness: 0.28,
      metalness: 0.55,
    });
    const bronzeMat = new THREE.MeshStandardMaterial({
      color: '#d9822b',
      emissive: '#9c4f1a',
      emissiveIntensity: 0.25,
      roughness: 0.38,
      metalness: 0.5,
    });
    const glowHandMat = new THREE.MeshBasicMaterial({ color: '#2b2d42' });

    const createPixelGear = (radius: number, teeth: number, mat: THREE.Material) => {
      const g = new THREE.Group();
      // 十字辐条与轮圈（YZ 平面绕 X 轴旋转）
      const hub = new THREE.Mesh(new THREE.BoxGeometry(0.65, radius * 0.55, radius * 0.55), mat);
      const spokeV = new THREE.Mesh(new THREE.BoxGeometry(0.42, radius * 1.85, 0.55), mat);
      const spokeH = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.55, radius * 1.85), mat);
      g.add(hub, spokeV, spokeH);

      for (let i = 0; i < teeth; i++) {
        const a = (i / teeth) * Math.PI * 2;
        const rimSeg = new THREE.Mesh(
          new THREE.BoxGeometry(0.48, (radius * 2 * Math.PI) / teeth * 0.65, 0.75),
          mat
        );
        rimSeg.position.set(0, Math.sin(a) * radius, Math.cos(a) * radius);
        rimSeg.rotation.x = -a;

        const tooth = new THREE.Mesh(new THREE.BoxGeometry(0.52, 0.72, 0.85), mat);
        tooth.position.set(0, Math.sin(a) * (radius + 0.55), Math.cos(a) * (radius + 0.55));
        tooth.rotation.x = -a;
        g.add(rimSeg, tooth);
      }
      return g;
    };

    const [dx, dy, dz] = this.hooks.clockTowerDial;
    // 外挂在钟塔南侧与西侧外墙上的三枚巨大啮合像素齿轮
    this.gearLarge = createPixelGear(4.6, 12, goldMat);
    this.gearLarge.position.set(dx + 0.2, dy - 7.5, dz + 5.8);
    this.gearLarge.rotation.y = Math.PI / 2;

    this.gearMedium = createPixelGear(3.1, 8, bronzeMat);
    this.gearMedium.position.set(dx + 5.2, dy - 3.2, dz + 5.9);
    this.gearMedium.rotation.y = Math.PI / 2;

    this.gearSmall = createPixelGear(2.2, 6, goldMat);
    this.gearSmall.position.set(dx - 0.2, dy + 4.8, dz - 3.8);

    // 表盘时针与分针
    this.clockMinuteHand = new THREE.Group();
    this.clockMinuteHand.position.set(dx - 0.15, dy + 0.5, dz + 0.5);
    const minBar = new THREE.Mesh(new THREE.BoxGeometry(0.25, 2.5, 0.28), glowHandMat);
    minBar.position.y = 1.1;
    this.clockMinuteHand.add(minBar);

    this.clockHourHand = new THREE.Group();
    this.clockHourHand.position.set(dx - 0.22, dy + 0.5, dz + 0.5);
    const hourBar = new THREE.Mesh(new THREE.BoxGeometry(0.28, 1.7, 0.35), bronzeMat);
    hourBar.position.y = 0.75;
    this.clockHourHand.add(hourBar);

    // 镂空中段摇摆黄金星摆
    const [px, py, pz] = this.hooks.clockPendulumPivot;
    this.clockPendulum = new THREE.Group();
    this.clockPendulum.position.set(px + 0.5, py, pz + 0.5);
    const rod = new THREE.Mesh(new THREE.BoxGeometry(0.32, 6.5, 0.32), goldMat);
    rod.position.y = -3.2;
    const bob = new THREE.Mesh(new THREE.BoxGeometry(1.8, 1.8, 0.7), goldMat);
    bob.position.y = -6.6;
    this.clockPendulum.add(rod, bob);

    this.group.add(
      this.gearLarge,
      this.gearMedium,
      this.gearSmall,
      this.clockMinuteHand,
      this.clockHourHand,
      this.clockPendulum
    );
  }

  /** 5. 构建星梦霓虹摩天轮（8只始终竖直垂挂的发光轿厢）与旋转木马 */
  private buildFerrisWheelAndCarousel(): void {
    const [fx, fy, fz] = this.hooks.ferrisHub;
    this.ferrisWheel.position.set(fx + 0.5, fy + 0.5, fz + 0.5);

    const frameMat = new THREE.MeshStandardMaterial({
      color: '#fff6fa',
      emissive: '#ff9ed8',
      emissiveIntensity: 0.45,
      roughness: 0.35,
    });
    const goldGlow = new THREE.MeshStandardMaterial({
      color: '#ffe382',
      emissive: '#ffbe42',
      emissiveIntensity: 0.9,
      roughness: 0.25,
    });

    const wheelR = 10.2;
    const cabinColors = [
      '#ff7597',
      '#ffb366',
      '#ffe675',
      '#72eb98',
      '#6ce8f5',
      '#79a6ff',
      '#c48aff',
      '#ff94d2',
    ];

    // 中心星芒轴承
    this.ferrisWheel.add(new THREE.Mesh(new THREE.BoxGeometry(2.0, 2.0, 3.2), goldGlow));

    for (let i = 0; i < 8; i++) {
      const a = (i / 8) * Math.PI * 2;
      // 双层辐条与轮缘横梁
      for (const zOff of [-0.9, 0.9]) {
        const spoke = new THREE.Mesh(new THREE.BoxGeometry(0.28, wheelR, 0.28), frameMat);
        spoke.position.set(
          (Math.cos(a) * wheelR) / 2,
          (Math.sin(a) * wheelR) / 2,
          zOff
        );
        spoke.rotation.z = a - Math.PI / 2;
        this.ferrisWheel.add(spoke);

        const rim = new THREE.Mesh(new THREE.BoxGeometry(0.35, 8.0, 0.35), goldGlow);
        const midA = a + Math.PI / 8;
        rim.position.set(
          Math.cos(midA) * wheelR * 0.92,
          Math.sin(midA) * wheelR * 0.92,
          zOff
        );
        rim.rotation.z = midA;
        this.ferrisWheel.add(rim);
      }

      // 发光马卡龙像素小轿厢（挂在轮缘，update 中反向旋转保持水平！）
      const gondola = new THREE.Group();
      gondola.position.set(Math.cos(a) * wheelR, Math.sin(a) * wheelR, 0);

      const cabMat = new THREE.MeshStandardMaterial({
        color: cabinColors[i],
        emissive: cabinColors[i],
        emissiveIntensity: 0.85,
        roughness: 0.3,
      });
      const winMat = new THREE.MeshBasicMaterial({ color: '#fffbe6' });

      const hanger = new THREE.Mesh(new THREE.BoxGeometry(0.2, 1.1, 0.2), goldGlow);
      hanger.position.y = -0.55;
      const cabBody = new THREE.Mesh(new THREE.BoxGeometry(1.7, 1.6, 1.5), cabMat);
      cabBody.position.y = -1.65;
      const cabWin = new THREE.Mesh(new THREE.BoxGeometry(1.8, 0.65, 0.95), winMat);
      cabWin.position.y = -1.45;
      gondola.add(hanger, cabBody, cabWin);

      this.ferrisWheel.add(gondola);
      this.ferrisGondolas.push(gondola);
    }
    this.group.add(this.ferrisWheel);

    // 童话金顶旋转木马
    const [cx, cy, cz] = this.hooks.carouselCenter;
    this.carouselCanopy.position.set(cx + 0.5, cy, cz + 0.5);

    const centerPillar = new THREE.Mesh(new THREE.BoxGeometry(1.1, 4.8, 1.1), goldGlow);
    centerPillar.position.y = 2.4;
    const roofCone = new THREE.Mesh(
      new THREE.ConeGeometry(4.4, 2.4, 8),
      new THREE.MeshStandardMaterial({
        color: '#ff85c0',
        emissive: '#ff5ca8',
        emissiveIntensity: 0.42,
        roughness: 0.5,
      })
    );
    roofCone.position.y = 5.6;
    const roofRim = new THREE.Mesh(new THREE.BoxGeometry(6.2, 0.45, 6.2), goldGlow);
    roofRim.position.y = 4.5;
    this.carouselCanopy.add(centerPillar, roofCone, roofRim);

    const horseColors = ['#ffffff', '#ffd6e7', '#bae7ff', '#efdbff'];
    for (let i = 0; i < 4; i++) {
      const a = (i * Math.PI) / 2;
      const pole = new THREE.Mesh(new THREE.BoxGeometry(0.16, 4.4, 0.16), goldGlow);
      pole.position.set(Math.cos(a) * 2.6, 2.2, Math.sin(a) * 2.6);
      this.carouselCanopy.add(pole);

      const horse = new THREE.Group();
      const hMat = new THREE.MeshStandardMaterial({ color: horseColors[i], roughness: 0.5 });
      const hBody = new THREE.Mesh(new THREE.BoxGeometry(0.65, 0.6, 1.25), hMat);
      const hHead = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.75, 0.55), hMat);
      hHead.position.set(0, 0.48, 0.5);
      horse.add(hBody, hHead);
      horse.position.set(Math.cos(a) * 2.6, 1.4, Math.sin(a) * 2.6);
      horse.rotation.y = -a + Math.PI;
      this.carouselCanopy.add(horse);
      this.carouselHorses.push({ group: horse, baseY: 1.4, phase: i * 1.5 });
    }
    this.group.add(this.carouselCanopy);
  }

  /** 6. 构建《千与千寻》风「云海银河星轨与复古像素蒸汽列车」 */
  private buildGalacticSkyTrain(): void {
    // 环绕整座主岛与东侧浮岛群的优雅闭合星轨
    this.railCurve = new THREE.CatmullRomCurve3(
      [
        new THREE.Vector3(8, 22.4, 41),     // 南岸候车小月台
        new THREE.Vector3(-24, 21.5, 48),   // 掠过星梦摩天轮南侧云海
        new THREE.Vector3(-56, 25.0, 14),   // 掠过千年绯樱神木外海
        new THREE.Vector3(-48, 34.0, -32),  // 攀升掠过仙樱浮岛与雪峰
        new THREE.Vector3(0, 36.0, -60),    // 掠过皇家圣城北后方（仰望冰宫绝佳位）
        new THREE.Vector3(46, 33.0, -24),   // 穿行于彩虹星桥高空旁
        new THREE.Vector3(50, 32.0, 22),    // 掠过花海风车与黄金齿轮钟塔之间
        new THREE.Vector3(32, 24.5, 42),    // 缓缓降回南岸小月台
      ],
      true,
      'catmullrom',
      0.5
    );

    // 绘制半透明发光香槟金星轨双线与像素星尘枕木
    const railMat = new THREE.MeshBasicMaterial({
      color: '#ffe38f',
      transparent: true,
      opacity: 0.58,
    });
    const railTube = new THREE.TubeGeometry(this.railCurve, 220, 0.22, 5, true);
    const railMesh = new THREE.Mesh(railTube, railMat);
    this.group.add(railMesh);

    const sleeperCount = 150;
    const sleeperInst = new THREE.InstancedMesh(
      new THREE.BoxGeometry(2.1, 0.16, 0.42),
      new THREE.MeshBasicMaterial({ color: '#ffd166', transparent: true, opacity: 0.5 }),
      sleeperCount
    );
    const dummy = new THREE.Object3D();
    for (let i = 0; i < sleeperCount; i++) {
      const t = i / sleeperCount;
      const pt = this.railCurve.getPointAt(t);
      const nextPt = this.railCurve.getPointAt((t + 0.005) % 1);
      dummy.position.copy(pt);
      dummy.position.y -= 0.12;
      dummy.lookAt(nextPt);
      dummy.updateMatrix();
      sleeperInst.setMatrixAt(i, dummy.matrix);
    }
    this.group.add(sleeperInst);

    // 构建 1 节蒸汽火车头 + 3 节暖光童话客车厢
    const engineMat = new THREE.MeshStandardMaterial({ color: '#243b55', roughness: 0.45 });
    const goldMat = new THREE.MeshStandardMaterial({
      color: '#ffd166',
      emissive: '#ffae2b',
      emissiveIntensity: 0.4,
      roughness: 0.3,
    });
    const coachColors = ['#e65c7b', '#4378db', '#9b6ee6'];
    const warmGlow = new THREE.MeshBasicMaterial({ color: '#ffea99' });

    for (let c = 0; c < 4; c++) {
      const car = new THREE.Group();
      if (c === 0) {
        // 复古像素蒸汽机车头
        const chassis = new THREE.Mesh(new THREE.BoxGeometry(2.2, 0.7, 4.8), goldMat);
        chassis.position.y = 0.55;
        const boiler = new THREE.Mesh(new THREE.BoxGeometry(1.7, 1.6, 3.0), engineMat);
        boiler.position.set(0, 1.55, 0.7);
        const cab = new THREE.Mesh(new THREE.BoxGeometry(2.1, 2.2, 1.7), engineMat);
        cab.position.set(0, 1.9, -1.4);
        const cabWin = new THREE.Mesh(new THREE.BoxGeometry(2.18, 0.85, 0.9), warmGlow);
        cabWin.position.set(0, 2.2, -1.4);
        const stack = new THREE.Mesh(new THREE.BoxGeometry(0.65, 1.25, 0.65), goldMat);
        stack.position.set(0, 2.75, 1.5);
        const headlight = new THREE.Mesh(new THREE.BoxGeometry(0.75, 0.75, 0.4), warmGlow);
        headlight.position.set(0, 1.65, 2.3);
        car.add(chassis, boiler, cab, cabWin, stack, headlight);
      } else {
        // 童话暖窗客车厢
        const bodyMat = new THREE.MeshStandardMaterial({
          color: coachColors[c - 1],
          roughness: 0.5,
        });
        const base = new THREE.Mesh(new THREE.BoxGeometry(2.1, 2.0, 4.2), bodyMat);
        base.position.y = 1.35;
        const roof = new THREE.Mesh(new THREE.BoxGeometry(2.3, 0.4, 4.4), goldMat);
        roof.position.y = 2.5;
        const winStrip = new THREE.Mesh(new THREE.BoxGeometry(2.18, 0.78, 3.3), warmGlow);
        winStrip.position.y = 1.55;
        car.add(base, roof, winStrip);
      }
      this.group.add(car);
      this.trainCars.push(car);
    }
  }

  /** 7. 构建像素阶梯量化 Shader「双层旋转奥术六芒星魔法阵」 */
  private buildArcaneMagicCircles(): void {
    const createCircleMesh = (size: number, hexColor: string) => {
      const mat = new THREE.ShaderMaterial({
        uniforms: {
          uColor: { value: new THREE.Color(hexColor) },
        },
        transparent: true,
        depthWrite: false,
        side: THREE.DoubleSide,
        blending: THREE.AdditiveBlending,
        vertexShader: /* glsl */ `
          varying vec2 vUv;
          void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `,
        fragmentShader: /* glsl */ `
          uniform vec3 uColor;
          varying vec2 vUv;

          // 正三角形有符号距离场（用于合成像素六芒星！）
          float sdTriangle(vec2 p, float r) {
            const float k = sqrt(3.0);
            p.x = abs(p.x) - r;
            p.y = p.y + r / k;
            if (p.x + k * p.y > 0.0) p = vec2(p.x - k * p.y, -k * p.x - p.y) / 2.0;
            p.x -= clamp(p.x, -2.0 * r, 0.0);
            return -length(p) * sign(p.y);
          }

          void main() {
            // 像素网格量化（纯正像素风魔法阵！）
            vec2 p = (floor(vUv * 96.0) / 96.0 - 0.5) * 2.0;
            float r = length(p);
            if (r > 0.98) discard;

            float ring1 = smoothstep(0.038, 0.0, abs(r - 0.92));
            float ring2 = smoothstep(0.03, 0.0, abs(r - 0.76));
            float ring3 = smoothstep(0.028, 0.0, abs(r - 0.42));

            // 符文刻度齿环
            float angle = atan(p.y, p.x);
            float runes = step(0.35, sin(angle * 24.0)) * smoothstep(0.055, 0.0, abs(r - 0.84));

            // 双正反三角形交叠成神圣六芒星线框
            float tri1 = smoothstep(0.032, 0.0, abs(sdTriangle(p, 0.52)));
            float tri2 = smoothstep(0.032, 0.0, abs(sdTriangle(vec2(p.x, -p.y), 0.52)));

            float pattern = max(max(ring1, ring2), max(ring3, runes * 0.85));
            pattern = max(pattern, max(tri1, tri2) * 0.9);

            if (pattern < 0.08) discard;
            gl_FragColor = vec4(uColor * 1.35, pattern * 0.78);
          }
        `,
      });
      const mesh = new THREE.Mesh(new THREE.PlaneGeometry(size, size), mat);
      mesh.rotation.x = -Math.PI / 2;
      return mesh;
    };

    // 托起九霄凌霄冰霜神殿的巨型双层反向旋转极寒星阵 (cx=0, y=58, cz=-82)
    this.frostCircleOuter = createCircleMesh(56, '#5cf2ff');
    this.frostCircleOuter.position.set(0, 58.5, -82);
    this.frostCircleInner = createCircleMesh(36, '#a890ff');
    this.frostCircleInner.position.set(0, 61.5, -82);

    // 紫晶星象台高空共鸣星金法阵
    this.astralCircle = createCircleMesh(26, '#ffd666');
    this.astralCircle.position.set(64.5, 43.5, -11.5);

    this.group.add(this.frostCircleOuter, this.frostCircleInner, this.astralCircle);
  }

  public update(dt: number, elapsed: number): void {
    // 1. 苍穹星云巨鲸柔美波浪遨游
    for (let i = 0; i < this.whaleSegments.length; i++) {
      const seg = this.whaleSegments[i];
      const t = elapsed * 0.16 - i * 0.055;
      const pos = this.sampleWhalePath(t);
      const ahead = this.sampleWhalePath(t + 0.03);
      pos.y += Math.sin(elapsed * 2.1 - i * 0.45) * 0.55;
      seg.position.copy(pos);
      seg.lookAt(ahead);
    }
    const finGlide = Math.sin(elapsed * 1.8) * 0.28;
    this.whaleLeftFin.rotation.z = finGlide - 0.15;
    this.whaleRightFin.rotation.z = -finGlide + 0.15;
    this.whaleTailFluke.rotation.x = Math.cos(elapsed * 2.1) * 0.38;

    // 2. 浮空荧光水母呼吸脉动与轻盈漂浮
    for (const jf of this.jellyfishes) {
      const pulse = Math.sin(elapsed * jf.speed + jf.phase);
      jf.group.position.y = jf.basePos.y + Math.sin(elapsed * 0.6 + jf.phase) * 3.5;
      jf.group.rotation.y = elapsed * 0.25 + jf.phase;
      jf.bell.scale.set(1 + pulse * 0.14, 1 - pulse * 0.16, 1 + pulse * 0.14);
      jf.tentacles.scale.y = 1 + pulse * 0.18;
    }

    // 3. 涅槃流火凤凰展翼盘旋
    const phAngle = elapsed * 0.36;
    const phX = 56 + Math.cos(phAngle) * 26;
    const phZ = 8 + Math.sin(phAngle) * 32;
    const phY = 74 + Math.sin(elapsed * 1.4) * 6.5;
    const nextPhX = 56 + Math.cos(phAngle + 0.05) * 26;
    const nextPhZ = 8 + Math.sin(phAngle + 0.05) * 32;
    this.phoenixRoot.position.set(phX, phY, phZ);
    this.phoenixRoot.lookAt(nextPhX, phY, nextPhZ);
    const phFlap = Math.sin(elapsed * 5.2) * 0.56;
    this.phoenixLeftWing.rotation.z = phFlap;
    this.phoenixRightWing.rotation.z = -phFlap;
    this.phoenixTails.forEach((tail, idx) => {
      tail.rotation.x = Math.sin(elapsed * 6.5 + idx) * 0.22;
      tail.rotation.y = Math.cos(elapsed * 4.5 + idx) * 0.15;
    });

    // 4. 黄金星晷齿轮精确反向啮合旋转 & 钟摆摇曳
    const gSpeed = elapsed * 0.55;
    this.gearLarge.rotation.x = gSpeed;
    this.gearMedium.rotation.x = -gSpeed * (12 / 8); // 按齿数精确啮合比！
    this.gearSmall.rotation.x = gSpeed * 2.0;
    this.clockMinuteHand.rotation.x = -elapsed * 0.35;
    this.clockHourHand.rotation.x = -elapsed * 0.04;
    this.clockPendulum.rotation.z = Math.sin(elapsed * 2.2) * 0.34;

    // 5. 星梦霓虹摩天轮与童话旋转木马
    const wheelAngle = elapsed * 0.22;
    this.ferrisWheel.rotation.z = wheelAngle;
    for (let i = 0; i < this.ferrisGondolas.length; i++) {
      // 反向抵消轮盘角度，让每只轿厢永远优雅竖直垂挂！
      this.ferrisGondolas[i].rotation.z =
        -wheelAngle + Math.sin(elapsed * 2.0 + i) * 0.05;
    }
    this.carouselCanopy.rotation.y = elapsed * 0.65;
    for (const h of this.carouselHorses) {
      h.group.position.y = h.baseY + Math.sin(elapsed * 3.6 + h.phase) * 0.42;
    }

    // 6. 云海银河蒸汽列车行驶与星尘白烟
    this.trainProgress = (this.trainProgress + dt * 0.032) % 1;
    for (let c = 0; c < this.trainCars.length; c++) {
      const carT = (this.trainProgress - c * 0.017 + 1) % 1;
      const aheadT = (carT + 0.008) % 1;
      const pt = this.railCurve.getPointAt(carT);
      const lookPt = this.railCurve.getPointAt(aheadT);
      this.trainCars[c].position.copy(pt);
      this.trainCars[c].lookAt(lookPt);
    }

    this.steamSpawnTimer += dt;
    if (this.steamSpawnTimer >= 0.14) {
      this.steamSpawnTimer = 0;
      const locoPos = this.trainCars[0].position.clone();
      locoPos.y += 3.3;
      const puffMat = new THREE.MeshBasicMaterial({
        color: '#fff6cc',
        transparent: true,
        opacity: 0.85,
      });
      const puff = new THREE.Mesh(this.sharedBox, puffMat);
      puff.scale.setScalar(0.45);
      puff.position.copy(locoPos);
      this.group.add(puff);
      this.trainSteam.push({
        mesh: puff,
        age: 0,
        maxAge: 1.6,
        vel: new THREE.Vector3(
          (Math.random() - 0.5) * 1.2,
          2.2 + Math.random() * 1.0,
          (Math.random() - 0.5) * 1.2
        ),
      });
    }
    for (let i = this.trainSteam.length - 1; i >= 0; i--) {
      const sp = this.trainSteam[i];
      sp.age += dt;
      if (sp.age >= sp.maxAge) {
        this.group.remove(sp.mesh);
        this.trainSteam.splice(i, 1);
        continue;
      }
      sp.mesh.position.addScaledVector(sp.vel, dt);
      const t = sp.age / sp.maxAge;
      sp.mesh.scale.setScalar((0.45 + t * 0.65) * (1 - t));
    }

    // 7. 奥术魔法阵反向旋转与星雨共鸣
    if (this.magicSurge > 0) {
      this.magicSurge = Math.max(0, this.magicSurge - dt * 0.35);
    }
    const spinBoost = 1 + this.magicSurge * 3.5;
    this.frostCircleOuter.rotation.z += dt * 0.16 * spinBoost;
    this.frostCircleInner.rotation.z -= dt * 0.28 * spinBoost;
    this.astralCircle.rotation.z += dt * 0.24 * spinBoost;
    const scalePulse = 1 + this.magicSurge * 0.12 * Math.sin(elapsed * 12);
    this.frostCircleOuter.scale.setScalar(scalePulse);
  }
}

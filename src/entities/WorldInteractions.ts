import * as THREE from 'three';
import { BlockId } from '../voxel/BlockTypes';
import { VoxelWorld } from '../voxel/VoxelMesher';
import { DynamicWorld } from './DynamicWorld';
import { CelestialWonders } from './CelestialWonders';
import { KingdomExplorer, CameraMode } from './PlayerController';
import { MusicBoxAudio } from '../atmosphere/MusicBoxAudio';
import { SkyAndLighting } from '../atmosphere/SkyAndLighting';

export interface ActiveInteraction {
  prompt: string;
  execute: () => void;
}

interface MagicBolt {
  mesh: THREE.Mesh;
  vel: THREE.Vector3;
  age: number;
  trailTimer: number;
}

interface PortalPad {
  pos: THREE.Vector3;
  dest: THREE.Vector3;
  lookTarget: THREE.Vector3;
  label: string;
  ringMesh: THREE.Mesh;
  gemMesh: THREE.Mesh;
}

export class WorldInteractions {
  public readonly group = new THREE.Group();
  private portals: PortalPad[] = [];
  private magicBolts: MagicBolt[] = [];

  private dialogBoxEl: HTMLElement;
  private dialogSpeakerEl: HTMLElement;
  private dialogTextEl: HTMLElement;
  private dialogTimer = 0;

  constructor(
    private world: VoxelWorld,
    private dynamicWorld: DynamicWorld,
    private celestialWonders: CelestialWonders,
    private explorer: KingdomExplorer,
    private sky: SkyAndLighting,
    private audio: MusicBoxAudio,
    private onSwitchMode: (mode: CameraMode) => void
  ) {
    this.dialogBoxEl = document.getElementById('npc-dialog')!;
    this.dialogSpeakerEl = document.getElementById('npc-speaker')!;
    this.dialogTextEl = document.getElementById('npc-text')!;
    this.buildStarPortals();
  }

  /** 在王国四大关键枢纽建造实体发光像素「星界传送阵」 */
  private buildStarPortals(): void {
    const specs: {
      pos: [number, number, number];
      dest: [number, number, number];
      look: [number, number, number];
      color: string;
      label: string;
    }[] = [
      {
        pos: [10.5, 13.05, 14.5],
        dest: [0.5, 83.05, -63.5],
        look: [0.5, 89, -86],
        color: '#66f2ff',
        label: '踏入星界法阵 · 传送至「❄️ 九霄凌霄冰霜神殿」',
      },
      {
        pos: [5.5, 83.05, -65.5],
        dest: [69.5, 39.05, 22.5],
        look: [78, 56, 22],
        color: '#ffd166',
        label: '踏入冰晶法阵 · 传送至「⚙️ 黄金星晷齿轮钟塔岛」',
      },
      {
        pos: [67.5, 39.05, 25.5],
        dest: [58.5, 26.05, -11.5],
        look: [64, 34, -12],
        color: '#c77dff',
        label: '踏入星晷法阵 · 传送至「🌈 紫晶星象台浮岛」',
      },
      {
        pos: [57.5, 26.05, -11.5],
        dest: [0.5, 13.05, 21.5],
        look: [0, 32, -24],
        color: '#ff85c0',
        label: '踏入紫晶法阵 · 返回「⛲ 星泉小镇广场」',
      },
    ];

    for (const s of specs) {
      const padGroup = new THREE.Group();
      padGroup.position.set(s.pos[0], s.pos[1], s.pos[2]);

      const baseMat = new THREE.MeshStandardMaterial({
        color: '#f5f0fa',
        roughness: 0.4,
      });
      const glowMat = new THREE.MeshStandardMaterial({
        color: s.color,
        emissive: s.color,
        emissiveIntensity: 1.5,
        roughness: 0.2,
      });

      const pedestal = new THREE.Mesh(new THREE.BoxGeometry(2.2, 0.18, 2.2), baseMat);
      pedestal.position.y = 0.09;
      const ringMesh = new THREE.Mesh(new THREE.TorusGeometry(1.15, 0.1, 6, 8), glowMat);
      ringMesh.rotation.x = Math.PI / 2;
      ringMesh.position.y = 0.24;

      const gemMesh = new THREE.Mesh(new THREE.OctahedronGeometry(0.38, 0), glowMat);
      gemMesh.position.y = 1.45;

      padGroup.add(pedestal, ringMesh, gemMesh);
      this.group.add(padGroup);

      this.portals.push({
        pos: new THREE.Vector3(s.pos[0], s.pos[1], s.pos[2]),
        dest: new THREE.Vector3(s.dest[0], s.dest[1], s.dest[2]),
        lookTarget: new THREE.Vector3(s.look[0], s.look[1], s.look[2]),
        label: s.label,
        ringMesh,
        gemMesh,
      });
    }
  }

  public showBubble(speaker: string, text: string, duration = 5.2): void {
    this.dialogSpeakerEl.textContent = speaker;
    this.dialogTextEl.textContent = text;
    this.dialogBoxEl.classList.remove('hidden');
    this.dialogTimer = duration;
  }

  /** 挥动第一人称星辉魔杖，向前方发射一枚璀璨魔法星弹！ */
  public castMagicStarBolt(): void {
    this.explorer.triggerWandSwing();
    this.audio.playWandCast();

    const dir = this.explorer.getLookDirection();
    const start = this.explorer.pos.clone();
    start.y += 1.55;
    start.addScaledVector(dir, 1.1);

    const boltMat = new THREE.MeshBasicMaterial({ color: '#ff9ef5' });
    const mesh = new THREE.Mesh(new THREE.OctahedronGeometry(0.32, 0), boltMat);
    mesh.position.copy(start);
    this.group.add(mesh);

    this.magicBolts.push({
      mesh,
      vel: dir.multiplyScalar(36),
      age: 0,
      trailTimer: 0,
    });
  }

  /** 检测当前第一/第三人称漫步玩家身边或准星对准的最优可交互目标 */
  public detectAvailableInteraction(): ActiveInteraction | null {
    if (this.explorer.activeMode !== 'walk') return null;

    // 0. 若当前正在乘坐摩天轮或旋转木马，按 E 可随时下车
    if (this.explorer.rideAttachment === 'ferris') {
      return {
        prompt: '🎡 正在乘坐摩天轮升空观景 · 按 [E] 或 [空格] 返回站台',
        execute: () => {
          this.explorer.dismountRide();
          this.audio.playBlockPop(false);
        },
      };
    }
    if (this.explorer.rideAttachment === 'carousel') {
      return {
        prompt: '🎠 正在骑乘童话旋转木马 · 按 [E] 或 [空格] 下马',
        execute: () => {
          this.explorer.dismountRide();
          this.audio.playBlockPop(false);
        },
      };
    }

    const pPos = this.explorer.pos;

    // 1. 检测星界传送法阵 (半径 3.4 格内)
    for (const portal of this.portals) {
      if (pPos.distanceTo(portal.pos) < 3.4) {
        return {
          prompt: `🌀 按 [E] ${portal.label}`,
          execute: () => {
            this.audio.playInteractChime();
            this.dynamicWorld.spawnMiniSparkles(portal.dest.clone().add(new THREE.Vector3(0, 1, 0)), '#6ef7ff', 28);
            this.explorer.teleportTo(
              portal.dest.x,
              portal.dest.y,
              portal.dest.z,
              portal.lookTarget
            );
            this.showBubble('✨ 星界传送法阵', '空间折跃完成！欢迎抵达全新云端奇观领域！', 3.5);
          },
        };
      }
    }

    // 2. 检测附近的小镇像素居民 NPC (半径 5.0 格内最近的一位)
    let closestNpcIdx = -1;
    let closestNpcDist = 5.0;
    this.dynamicWorld.villagers.forEach((v, idx) => {
      const d = pPos.distanceTo(v.group.position);
      if (d < closestNpcDist) {
        closestNpcDist = d;
        closestNpcIdx = idx;
      }
    });
    if (closestNpcIdx >= 0) {
      const npc = this.dynamicWorld.villagers[closestNpcIdx];
      return {
        prompt: `💬 按 [E] 与「${npc.name}」交谈`,
        execute: () => {
          this.explorer.triggerWandSwing();
          this.audio.playNpcGreeting(closestNpcIdx);
          const res = this.dynamicWorld.interactWithVillager(closestNpcIdx, pPos);
          this.showBubble(res.name, res.line, 5.8);
        },
      };
    }

    // 3. 中央星泉许愿池互动 (0.5, 13, 15.5)
    const fountainCenter = new THREE.Vector3(0.5, 13, 15.5);
    if (pPos.distanceTo(fountainCenter) < 6.8) {
      return {
        prompt: '⛲ 按 [E] 向中央星泉投币许愿 ✨',
        execute: () => {
          this.explorer.triggerWandSwing();
          this.audio.playInteractChime();
          this.dynamicWorld.spawnMiniSparkles(new THREE.Vector3(0.5, 18.5, 15.5), '#ffe382', 36);
          this.dynamicWorld.releaseSkyLanterns(3);
          this.showBubble(
            '⛲ 星泉女神的祝福',
            '叮咚～你的心愿已化作三盏祈愿天灯冉冉升入星河！✨',
            4.5
          );
        },
      };
    }

    // 4. 南岸星梦霓虹摩天轮登舱点 (-18, 13, 40)
    const ferrisBoard = new THREE.Vector3(-18, 13, 40);
    if (pPos.distanceTo(ferrisBoard) < 6.8) {
      return {
        prompt: '🎡 按 [E] 登上「星梦霓虹摩天轮」发光轿厢升空观景',
        execute: () => {
          this.audio.playInteractChime();
          this.explorer.mountRide('ferris');
          this.showBubble(
            '🎡 星梦霓虹摩天轮',
            '已坐进七彩发光轿厢！转动鼠标可 360° 俯瞰童话镇与云海，按 [E] 或 [空格] 随时返回站台。',
            5.0
          );
        },
      };
    }

    // 5. 童话金顶旋转木马骑乘点 (-3, 13, 40)
    const carouselBoard = new THREE.Vector3(-3, 13, 40);
    if (pPos.distanceTo(carouselBoard) < 5.6) {
      return {
        prompt: '🎠 按 [E] 骑乘「童话金顶旋转木马」',
        execute: () => {
          this.audio.playInteractChime();
          this.explorer.mountRide('carousel');
          this.showBubble(
            '🎠 童话旋转木马',
            '伴随星光旋律旋转起伏中～按 [E] 或 [空格] 即可下马继续漫步！',
            4.5
          );
        },
      };
    }

    // 6. 云海银河蒸汽列车南崖候车亭 (x ≈ 8.5, z ≈ 46)
    const stationStairs = new THREE.Vector3(8.5, 13, 41.5);
    const stationPlatform = new THREE.Vector3(8.5, 18, 47.0);
    if (pPos.distanceTo(stationStairs) < 4.5 || pPos.distanceTo(stationPlatform) < 5.8) {
      return {
        prompt: '🚂 按 [E] 登乘「云海银河蒸汽列车」环游全岛星轨',
        execute: () => {
          this.audio.playInteractChime();
          this.onSwitchMode('train');
          this.showBubble(
            '🚂 云海银河号列车长',
            '呜——欢迎登车！转动鼠标可自由欣赏窗外的冰霜神殿、星云巨鲸与黄金钟塔！',
            5.0
          );
        },
      };
    }

    // 6.5 九霄凌霄冰宫内殿尽头：「冰封星冕王座」互动 (0.5, 85, -88.5)
    const frostThrone = new THREE.Vector3(0.5, 85, -88.5);
    if (pPos.distanceTo(frostThrone) < 5.5) {
      return {
        prompt: '👑 按 [E] 端坐「九霄冰封星冕王座」· 号令极光星陨',
        execute: () => {
          this.audio.playInteractChime();
          this.explorer.teleportTo(0.5, 85.05, -88.5, new THREE.Vector3(0.5, 86, -65));
          this.sky.summonMeteorShower();
          this.celestialWonders.triggerArcaneResonance();
          this.showBubble(
            '👑 凛冬星冕之主',
            '你端坐于九霄冰封王座之上，殿外漫天星陨与太古魔法阵为你齐声共鸣！',
            5.5
          );
        },
      };
    }

    // 7. 西侧千年绯樱神木祈福 (-38, 15, 12)
    const sakuraTree = new THREE.Vector3(-38, 15, 12);
    if (pPos.distanceTo(sakuraTree) < 8.5) {
      return {
        prompt: '🌸 按 [E] 轻触千年绯樱神木 · 唤起漫天樱吹雪',
        execute: () => {
          this.explorer.triggerWandSwing();
          this.audio.playInteractChime();
          this.dynamicWorld.spawnMiniSparkles(new THREE.Vector3(-38, 25, 12), '#ff9ec7', 55);
          this.dynamicWorld.launchFirework(new THREE.Vector3(-38, 38, 12));
          this.showBubble(
            '🌸 千年绯樱神木',
            '神木枝叶轻颤，为你降下一场浪漫璀璨的粉白樱花星雨！',
            4.5
          );
        },
      };
    }

    // 8. 准星对准近处发光水晶、灯笼或花窗方块时的星辉共鸣互动！
    const eye = pPos.clone();
    eye.y += 1.72;
    const hit = this.world.raycast(eye, this.explorer.getLookDirection(), 7.5, true);
    if (hit) {
      if (
        hit.blockId === BlockId.LANTERN_GLOW ||
        hit.blockId === BlockId.CRYSTAL_CYAN ||
        hit.blockId === BlockId.CRYSTAL_AMETHYST ||
        hit.blockId === BlockId.FROST_RUNE_GLOW ||
        hit.blockId === BlockId.STAR_CORE
      ) {
        return {
          prompt: '✨ 按 [E] 用魔杖共鸣星辉晶石 · 绽放流光星火',
          execute: () => {
            this.explorer.triggerWandSwing();
            this.audio.playInteractChime();
            this.dynamicWorld.spawnMiniSparkles(
              new THREE.Vector3(hit.x + 0.5, hit.y + 0.8, hit.z + 0.5),
              '#7af5ff',
              28
            );
          },
        };
      }
      if (hit.blockId === BlockId.ROSE_STAINED_GLASS || hit.blockId === BlockId.WARM_WINDOW) {
        return {
          prompt: '🏰 按 [E] 轻叩童话花窗 · 倾听屋内八音盒回响',
          execute: () => {
            this.explorer.triggerWandSwing();
            this.audio.playNpcGreeting(2);
            this.showBubble('🕯️ 温暖的窗内', '窗内传出温柔的笑语与茶杯轻碰声，壁炉火光暖融融的～', 3.8);
          },
        };
      }
    }

    return null;
  }

  public update(dt: number, elapsed: number): void {
    // 传送阵旋转呼吸动画
    for (const p of this.portals) {
      p.ringMesh.rotation.z = elapsed * 1.4;
      p.gemMesh.rotation.y = elapsed * 2.2;
      p.gemMesh.position.y = 1.45 + Math.sin(elapsed * 3.0) * 0.22;
    }

    // 对话气泡自动淡出隐藏
    if (this.dialogTimer > 0) {
      this.dialogTimer -= dt;
      if (this.dialogTimer <= 0) {
        this.dialogBoxEl.classList.add('hidden');
      }
    }

    // 飞行魔法星弹碰撞与高空绽放
    for (let i = this.magicBolts.length - 1; i >= 0; i--) {
      const b = this.magicBolts[i];
      b.age += dt;
      b.trailTimer += dt;
      b.mesh.rotation.x += 8 * dt;
      b.mesh.rotation.y += 8 * dt;

      const stepDist = b.vel.length() * dt;
      const hit = this.world.raycast(
        b.mesh.position,
        b.vel.clone().normalize(),
        stepDist + 0.4,
        true
      );

      if (b.trailTimer >= 0.04) {
        b.trailTimer = 0;
        this.dynamicWorld.spawnMiniSparkles(b.mesh.position, '#ff9ef5', 2);
      }

      if (hit || b.age >= 1.45) {
        const boomPos = b.mesh.position.clone();
        this.dynamicWorld.launchFirework(boomPos);
        this.celestialWonders.triggerArcaneResonance();
        this.group.remove(b.mesh);
        this.magicBolts.splice(i, 1);
      } else {
        b.mesh.position.addScaledVector(b.vel, dt);
      }
    }
  }
}

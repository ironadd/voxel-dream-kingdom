import * as THREE from 'three';
import { BlockId } from '../voxel/BlockTypes';
import { VoxelWorld } from '../voxel/VoxelMesher';

export type CameraMode = 'orbit' | 'cinematic' | 'walk' | 'dragon' | 'train';
export type RideAttachment = 'none' | 'ferris' | 'carousel';

export class KingdomExplorer {
  public readonly avatar = new THREE.Group();
  public readonly wandViewmodel = new THREE.Group();
  private wandStarTip!: THREE.Mesh;

  private leftLeg!: THREE.Mesh;
  private rightLeg!: THREE.Mesh;
  private leftArm!: THREE.Mesh;
  private rightArm!: THREE.Mesh;

  public pos = new THREE.Vector3(0.5, 14, 22.5);
  private smoothY = 14;
  private velY = 0;
  public yaw = Math.PI; // 初始面向 -Z（北侧皇家圣城与九霄冰宫）
  public lookPitch = 0.08; // >0 抬头看天, <0 低头看地

  // 骑龙/乘车时的自由环顾偏角
  public rideLookYaw = 0;
  public rideLookPitch = 0;

  public isFirstPerson = true; // 默认第一人称沉浸视角，按 V 切换第三人称
  public activeMode: CameraMode = 'orbit';
  public rideAttachment: RideAttachment = 'none';

  private isGrounded = false;
  public isFlying = false;
  private lastSpaceTime = 0;
  private swingAnim = 0;

  private keys = new Set<string>();
  private isDraggingLook = false;

  // 电影航拍闭合样条轨道
  private tourCurve: THREE.CatmullRomCurve3;
  private lookCurve: THREE.CatmullRomCurve3;
  private tourProgress = 0;

  constructor(
    private world: VoxelWorld,
    private camera: THREE.PerspectiveCamera,
    private dom: HTMLElement
  ) {
    this.buildCuteHeroAvatar();
    this.buildStarlightWandViewmodel();
    this.avatar.visible = false;
    this.wandViewmodel.visible = false;
    this.camera.add(this.wandViewmodel);

    this.tourCurve = new THREE.CatmullRomCurve3(
      [
        new THREE.Vector3(62, 46, 84),
        new THREE.Vector3(62, 36, 18),
        new THREE.Vector3(46, 56, -24),
        new THREE.Vector3(34, 108, -34),
        new THREE.Vector3(-34, 106, -42),
        new THREE.Vector3(-48, 44, -18),
        new THREE.Vector3(-52, 28, 28),
        new THREE.Vector3(16, 22, 46),
      ],
      true,
      'catmullrom',
      0.5
    );

    this.lookCurve = new THREE.CatmullRomCurve3(
      [
        new THREE.Vector3(0, 38, -24),
        new THREE.Vector3(45, 28, -10),
        new THREE.Vector3(4, 68, -62),
        new THREE.Vector3(0, 98, -82),
        new THREE.Vector3(0, 94, -80),
        new THREE.Vector3(-24, 28, -14),
        new THREE.Vector3(-34, 20, 12),
        new THREE.Vector3(0, 56, -36),
      ],
      true,
      'catmullrom',
      0.5
    );

    window.addEventListener('keydown', (e) => {
      const code = e.code;
      if (this.activeMode === 'walk') {
        if (code === 'KeyV' && !this.keys.has('KeyV')) {
          this.togglePerspective();
        }
        if (code === 'Space' && !this.keys.has('Space')) {
          if (this.rideAttachment !== 'none') {
            this.dismountRide();
          } else {
            const now = performance.now();
            if (now - this.lastSpaceTime < 320) {
              this.isFlying = !this.isFlying;
              this.velY = 0;
            }
            this.lastSpaceTime = now;
          }
        }
      }
      this.keys.add(code);
    });

    window.addEventListener('keyup', (e) => {
      this.keys.delete(e.code);
    });

    dom.addEventListener('mousedown', (e) => {
      if (e.button === 0 || e.button === 2) {
        this.isDraggingLook = true;
      }
      // 在漫步/骑龙/列车模式下点击画布自动锁定鼠标，享受原生丝滑 FPS 自由环顾！
      if (
        (this.activeMode === 'walk' ||
          this.activeMode === 'dragon' ||
          this.activeMode === 'train') &&
        document.pointerLockElement !== dom &&
        e.button === 0
      ) {
        dom.requestPointerLock?.();
      }
    });

    window.addEventListener('mouseup', () => {
      this.isDraggingLook = false;
    });

    window.addEventListener('mousemove', (e) => {
      const locked = document.pointerLockElement === dom;
      if (!locked && !this.isDraggingLook) return;

      if (this.activeMode === 'walk') {
        this.yaw -= e.movementX * 0.0032;
        this.lookPitch = THREE.MathUtils.clamp(
          this.lookPitch - e.movementY * 0.003,
          -1.35,
          1.42
        );
      } else if (this.activeMode === 'dragon' || this.activeMode === 'train') {
        this.rideLookYaw = THREE.MathUtils.clamp(
          this.rideLookYaw - e.movementX * 0.003,
          -2.2,
          2.2
        );
        this.rideLookPitch = THREE.MathUtils.clamp(
          this.rideLookPitch - e.movementY * 0.0028,
          -1.0,
          1.1
        );
      }
    });
  }

  /** 第一人称右下角手持「3D 像素星辉魔杖」 */
  private buildStarlightWandViewmodel(): void {
    const handleMat = new THREE.MeshStandardMaterial({ color: '#6b442b', roughness: 0.7 });
    const goldMat = new THREE.MeshStandardMaterial({
      color: '#ffd166',
      emissive: '#ffae2b',
      emissiveIntensity: 0.5,
      roughness: 0.25,
    });
    const gemMat = new THREE.MeshStandardMaterial({
      color: '#ff85e4',
      emissive: '#ff5cc8',
      emissiveIntensity: 1.4,
      roughness: 0.15,
    });
    const wingMat = new THREE.MeshBasicMaterial({ color: '#9ef8ff' });

    const stick = new THREE.Mesh(new THREE.BoxGeometry(0.055, 0.48, 0.055), handleMat);
    const guard = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.05, 0.09), goldMat);
    guard.position.y = 0.22;
    const wingL = new THREE.Mesh(new THREE.BoxGeometry(0.11, 0.07, 0.03), wingMat);
    wingL.position.set(-0.1, 0.27, 0);
    wingL.rotation.z = 0.35;
    const wingR = wingL.clone();
    wingR.position.x = 0.1;
    wingR.rotation.z = -0.35;

    this.wandStarTip = new THREE.Mesh(new THREE.OctahedronGeometry(0.085, 0), gemMat);
    this.wandStarTip.position.y = 0.33;

    this.wandViewmodel.add(stick, guard, wingL, wingR, this.wandStarTip);
    this.wandViewmodel.scale.setScalar(0.52);
    this.wandViewmodel.position.set(0.38, -0.32, -0.62);
    this.wandViewmodel.rotation.set(0.22, -0.25, 0.12);
  }

  private buildCuteHeroAvatar(): void {
    const tunicMat = new THREE.MeshStandardMaterial({ color: '#5994f0', roughness: 0.65 });
    const capeMat = new THREE.MeshStandardMaterial({ color: '#ff7eb9', roughness: 0.6 });
    const skinMat = new THREE.MeshStandardMaterial({ color: '#ffe2cc', roughness: 0.7 });
    const hairMat = new THREE.MeshStandardMaterial({ color: '#fff1b8', roughness: 0.6 });
    const crownMat = new THREE.MeshStandardMaterial({
      color: '#ffd166',
      emissive: '#ffbe40',
      emissiveIntensity: 0.4,
      roughness: 0.3,
    });
    const bootMat = new THREE.MeshStandardMaterial({ color: '#6b4835', roughness: 0.8 });

    this.leftLeg = new THREE.Mesh(new THREE.BoxGeometry(0.32, 0.55, 0.32), bootMat);
    this.leftLeg.position.set(-0.2, 0.28, 0);
    this.rightLeg = new THREE.Mesh(new THREE.BoxGeometry(0.32, 0.55, 0.32), bootMat);
    this.rightLeg.position.set(0.2, 0.28, 0);

    const torso = new THREE.Mesh(new THREE.BoxGeometry(0.76, 0.82, 0.48), tunicMat);
    torso.position.y = 0.92;
    torso.castShadow = true;

    const cape = new THREE.Mesh(new THREE.BoxGeometry(0.72, 0.85, 0.12), capeMat);
    cape.position.set(0, 0.88, -0.3);
    cape.rotation.x = 0.14;

    this.leftArm = new THREE.Mesh(new THREE.BoxGeometry(0.26, 0.68, 0.26), tunicMat);
    this.leftArm.position.set(-0.54, 0.92, 0);
    this.rightArm = new THREE.Mesh(new THREE.BoxGeometry(0.26, 0.68, 0.26), tunicMat);
    this.rightArm.position.set(0.54, 0.92, 0);

    const head = new THREE.Mesh(new THREE.BoxGeometry(0.76, 0.72, 0.76), skinMat);
    head.position.y = 1.72;
    head.castShadow = true;

    const hair = new THREE.Mesh(new THREE.BoxGeometry(0.82, 0.35, 0.82), hairMat);
    hair.position.y = 1.98;

    const crown = new THREE.Mesh(new THREE.BoxGeometry(0.52, 0.26, 0.52), crownMat);
    crown.position.y = 2.24;

    this.avatar.add(
      this.leftLeg,
      this.rightLeg,
      torso,
      cape,
      this.leftArm,
      this.rightArm,
      head,
      hair,
      crown
    );
  }

  /** 触发魔杖挥动反馈动画（互动/放置方块/施放星弹时调用） */
  public triggerWandSwing(): void {
    this.swingAnim = 1.0;
  }

  /** 切换第一人称 / 第三人称视角 */
  public togglePerspective(): boolean {
    this.isFirstPerson = !this.isFirstPerson;
    if (this.activeMode === 'walk') {
      this.avatar.visible = !this.isFirstPerson && this.rideAttachment === 'none';
      this.wandViewmodel.visible = this.isFirstPerson;
    }
    return this.isFirstPerson;
  }

  public enterWalkMode(): void {
    this.activeMode = 'walk';
    this.rideAttachment = 'none';
    const sy = this.world.getSurfaceY(0, 22, 30, 8);
    this.pos.set(0.5, sy + 1.02, 22.5);
    this.smoothY = this.pos.y;
    this.velY = 0;
    this.yaw = Math.PI;
    this.lookPitch = 0.1;
    this.isFlying = false;
    this.avatar.visible = !this.isFirstPerson;
    this.wandViewmodel.visible = this.isFirstPerson;
  }

  public exitWalkMode(nextMode: CameraMode): void {
    this.activeMode = nextMode;
    this.rideAttachment = 'none';
    this.avatar.visible = false;
    this.wandViewmodel.visible = false;
    this.rideLookYaw = 0;
    this.rideLookPitch = 0;
    if (
      nextMode !== 'dragon' &&
      nextMode !== 'train' &&
      document.pointerLockElement === this.dom
    ) {
      document.exitPointerLock?.();
    }
  }

  /** 漫步中实地传送到任意地标高台（如九霄凌霄冰宫露台、黄金钟塔岛、紫晶星象台） */
  public teleportTo(x: number, y: number, z: number, lookAtTarget?: THREE.Vector3): void {
    this.rideAttachment = 'none';
    this.pos.set(x, y, z);
    this.smoothY = y;
    this.velY = 0;
    this.isFlying = false;
    if (lookAtTarget) {
      const dx = lookAtTarget.x - x;
      const dz = lookAtTarget.z - z;
      this.yaw = Math.atan2(-dx, -dz);
      const horiz = Math.hypot(dx, dz);
      this.lookPitch = THREE.MathUtils.clamp(
        Math.atan2(lookAtTarget.y - (y + 1.7), Math.max(0.1, horiz)),
        -0.8,
        0.9
      );
    }
    this.triggerWandSwing();
  }

  public mountRide(ride: 'ferris' | 'carousel'): void {
    this.rideAttachment = ride;
    this.avatar.visible = false;
    this.wandViewmodel.visible = this.isFirstPerson;
    this.triggerWandSwing();
  }

  public dismountRide(): void {
    if (this.rideAttachment === 'ferris') {
      this.pos.set(-17.5, 13.05, 37.5);
    } else if (this.rideAttachment === 'carousel') {
      this.pos.set(-2.5, 13.05, 35.5);
    }
    this.smoothY = this.pos.y;
    this.velY = 0;
    this.rideAttachment = 'none';
    this.avatar.visible = !this.isFirstPerson;
  }

  /** 获取第一人称视线方向单位向量 */
  public getLookDirection(): THREE.Vector3 {
    return new THREE.Vector3(
      -Math.sin(this.yaw) * Math.cos(this.lookPitch),
      Math.sin(this.lookPitch),
      -Math.cos(this.yaw) * Math.cos(this.lookPitch)
    ).normalize();
  }

  private isSolidAt(x: number, y: number, z: number): boolean {
    const b = this.world.get(Math.floor(x), Math.floor(y), Math.floor(z));
    return b !== BlockId.AIR && b !== BlockId.WATER && b !== BlockId.WATERFALL_FOAM;
  }

  private isBodyClear(x: number, y: number, z: number): boolean {
    const r = 0.28;
    for (const ox of [-r, r]) {
      for (const oz of [-r, r]) {
        if (this.isSolidAt(x + ox, y + 0.15, z + oz)) return false;
        if (this.isSolidAt(x + ox, y + 1.65, z + oz)) return false;
      }
    }
    return true;
  }

  /** 分轴碰撞移动 + 自动平滑攀爬 1 格台阶 */
  private tryMoveAxis(dx: number, dz: number): void {
    const nx = this.pos.x + dx;
    const nz = this.pos.z + dz;
    if (this.isBodyClear(nx, this.pos.y, nz)) {
      this.pos.x = nx;
      this.pos.z = nz;
      return;
    }
    // 台阶自动迈步（皇家大阶梯、拱桥、彩虹桥、冰晶断阶）
    if (this.isBodyClear(nx, Math.floor(this.pos.y) + 1.02, nz)) {
      this.pos.x = nx;
      this.pos.z = nz;
      this.pos.y = Math.floor(this.pos.y) + 1.02;
    }
  }

  public updateCinematic(dt: number): void {
    this.tourProgress = (this.tourProgress + dt * 0.024) % 1;
    const camPos = this.tourCurve.getPointAt(this.tourProgress);
    const lookTarget = this.lookCurve.getPointAt(this.tourProgress);
    this.camera.position.lerp(camPos, Math.min(1, dt * 3.5));
    this.camera.lookAt(lookTarget);
  }

  /** 应用骑龙或银河列车视角（支持鼠标自由转头环顾！） */
  public applyRidePose(basePos: THREE.Vector3, baseLook: THREE.Vector3, dt: number): void {
    this.camera.position.lerp(basePos, Math.min(1, dt * 10));
    const forward = baseLook.clone().sub(basePos).normalize();
    const baseYaw = Math.atan2(-forward.x, -forward.z);
    const basePitch = Math.asin(THREE.MathUtils.clamp(forward.y, -0.95, 0.95));
    const finalYaw = baseYaw + this.rideLookYaw;
    const finalPitch = THREE.MathUtils.clamp(basePitch + this.rideLookPitch, -1.25, 1.3);
    const dir = new THREE.Vector3(
      -Math.sin(finalYaw) * Math.cos(finalPitch),
      Math.sin(finalPitch),
      -Math.cos(finalYaw) * Math.cos(finalPitch)
    );
    this.camera.lookAt(this.camera.position.clone().add(dir.multiplyScalar(20)));
  }

  public updateWalk(
    dt: number,
    elapsed: number,
    rideWorldPos?: THREE.Vector3
  ): void {
    // 魔杖挥动与星核自转动画
    this.wandStarTip.rotation.y = elapsed * 2.6;
    if (this.swingAnim > 0) {
      this.swingAnim = Math.max(0, this.swingAnim - dt * 4.5);
    }

    // 如果正坐在摩天轮轿厢或旋转木马上！
    if (this.rideAttachment !== 'none' && rideWorldPos) {
      this.pos.copy(rideWorldPos);
      this.smoothY = rideWorldPos.y;
      const eye = rideWorldPos.clone();
      this.camera.position.lerp(eye, Math.min(1, dt * 18));
      const lookDir = this.getLookDirection();
      this.camera.lookAt(this.camera.position.clone().add(lookDir.multiplyScalar(20)));
      this.updateWandTransform(elapsed, false);
      return;
    }

    const forward = new THREE.Vector3(-Math.sin(this.yaw), 0, -Math.cos(this.yaw));
    const right = new THREE.Vector3(Math.cos(this.yaw), 0, -Math.sin(this.yaw));

    const moveDir = new THREE.Vector3();
    if (this.keys.has('KeyW') || this.keys.has('ArrowUp')) moveDir.add(forward);
    if (this.keys.has('KeyS') || this.keys.has('ArrowDown')) moveDir.sub(forward);
    if (this.keys.has('KeyD') || this.keys.has('ArrowRight')) moveDir.add(right);
    if (this.keys.has('KeyA') || this.keys.has('ArrowLeft')) moveDir.sub(right);

    const speed = this.keys.has('ShiftLeft') ? 13.5 : this.isFlying ? 12.5 : 8.4;
    let moving = false;

    if (moveDir.lengthSq() > 0.001) {
      moving = true;
      moveDir.normalize();
      // X 与 Z 分轴检测，实现贴墙丝滑滑动！
      this.tryMoveAxis(moveDir.x * speed * dt, 0);
      this.tryMoveAxis(0, moveDir.z * speed * dt);
    }

    const inWater =
      this.world.get(Math.floor(this.pos.x), Math.floor(this.pos.y + 0.4), Math.floor(this.pos.z)) ===
      BlockId.WATER;

    if (this.isFlying) {
      if (this.keys.has('Space')) this.pos.y += 10.5 * dt;
      if (this.keys.has('KeyQ') || this.keys.has('ControlLeft')) this.pos.y -= 10.5 * dt;
    } else if (inWater) {
      // 柔和涉水浮游手感
      this.velY = this.keys.has('Space') ? 4.8 : -1.8;
      this.pos.y += this.velY * dt;
      this.isGrounded = true;
    } else {
      if (this.keys.has('Space') && this.isGrounded) {
        this.velY = 9.4;
        this.isGrounded = false;
      }
      this.velY -= 23.5 * dt;
      const nextY = this.pos.y + this.velY * dt;
      if (this.velY <= 0 && !this.isBodyClear(this.pos.x, nextY - 0.16, this.pos.z)) {
        this.pos.y = Math.floor(nextY - 0.02) + 1.0;
        this.velY = 0;
        this.isGrounded = true;
      } else {
        this.pos.y = nextY;
        this.isGrounded = false;
      }

      if (this.pos.y < -30) {
        this.pos.set(0.5, 14, 20.5);
        this.smoothY = 14;
        this.velY = 0;
      }
    }

    // 平滑过滤上下台阶时的相机垂直跳变
    this.smoothY = THREE.MathUtils.lerp(this.smoothY, this.pos.y, Math.min(1, dt * 18));

    // 更新第三人称小勇者模型动画
    this.avatar.position.set(this.pos.x, this.smoothY, this.pos.z);
    this.avatar.rotation.y = this.yaw + Math.PI;
    const swing = moving ? Math.sin(elapsed * 11) * 0.55 : 0;
    this.leftLeg.rotation.x = swing;
    this.rightLeg.rotation.x = -swing;
    this.leftArm.rotation.x = -swing * 0.8;
    this.rightArm.rotation.x = swing * 0.8;

    const lookDir = this.getLookDirection();

    if (this.isFirstPerson) {
      // 真正的第一人称平视眼睛高度 + 轻微自然步伐律动
      const headBob =
        moving && this.isGrounded && !this.isFlying
          ? Math.sin(elapsed * 12) * 0.045
          : 0;
      this.camera.position.set(this.pos.x, this.smoothY + 1.72 + headBob, this.pos.z);
      this.camera.lookAt(
        this.camera.position.x + lookDir.x * 20,
        this.camera.position.y + lookDir.y * 20,
        this.camera.position.z + lookDir.z * 20
      );
      this.updateWandTransform(elapsed, moving && this.isGrounded);
    } else {
      // 第三人称过肩跟随（带真实体素 Raycast 防穿墙缩进！）
      const headAnchor = new THREE.Vector3(this.pos.x, this.smoothY + 1.95, this.pos.z);
      const backDir = lookDir.clone().negate();
      let dist = 6.4;
      const wallHit = this.world.raycast(headAnchor, backDir, dist, true);
      if (wallHit && wallHit.distance > 0.6) {
        dist = Math.max(1.2, wallHit.distance - 0.45);
      }
      const desiredCam = headAnchor.clone().addScaledVector(backDir, dist);
      this.camera.position.lerp(desiredCam, Math.min(1, dt * 16));
      this.camera.lookAt(
        headAnchor.x + lookDir.x * 12,
        headAnchor.y + lookDir.y * 12,
        headAnchor.z + lookDir.z * 12
      );
    }
  }

  private updateWandTransform(elapsed: number, walking: boolean): void {
    const bobX = walking ? Math.cos(elapsed * 6) * 0.014 : Math.sin(elapsed * 1.8) * 0.005;
    const bobY = walking ? Math.abs(Math.sin(elapsed * 12)) * 0.018 : Math.cos(elapsed * 1.8) * 0.006;
    const swingAngle = Math.sin(this.swingAnim * Math.PI) * 0.75;
    this.wandViewmodel.position.set(0.38 + bobX, -0.32 + bobY - swingAngle * 0.06, -0.62 - swingAngle * 0.1);
    this.wandViewmodel.rotation.set(0.22 - swingAngle, -0.25 + swingAngle * 0.4, 0.12);
  }
}

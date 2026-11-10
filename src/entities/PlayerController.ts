import * as THREE from 'three';
import { BlockId } from '../voxel/BlockTypes';
import { VoxelWorld } from '../voxel/VoxelMesher';

export type CameraMode = 'orbit' | 'cinematic' | 'walk';

export class KingdomExplorer {
  public readonly avatar = new THREE.Group();
  private leftLeg!: THREE.Mesh;
  private rightLeg!: THREE.Mesh;
  private leftArm!: THREE.Mesh;
  private rightArm!: THREE.Mesh;

  private pos = new THREE.Vector3(0, 14, 22);
  private velY = 0;
  private yaw = Math.PI; // 初始面向北侧皇家圣城！
  private pitch = 0.18;
  private isGrounded = false;
  private isFlying = false;
  private lastSpaceTime = 0;

  private keys = new Set<string>();
  private isDraggingLook = false;

  // 电影航拍闭合样条轨道
  private tourCurve: THREE.CatmullRomCurve3;
  private lookCurve: THREE.CatmullRomCurve3;
  private tourProgress = 0;

  constructor(private world: VoxelWorld, private camera: THREE.PerspectiveCamera, dom: HTMLElement) {
    this.buildCuteHeroAvatar();
    this.avatar.visible = false;

    this.tourCurve = new THREE.CatmullRomCurve3(
      [
        new THREE.Vector3(54, 48, 72),
        new THREE.Vector3(62, 34, 18),
        new THREE.Vector3(48, 35, -28),
        new THREE.Vector3(0, 52, -72),
        new THREE.Vector3(-48, 38, -22),
        new THREE.Vector3(-52, 28, 28),
        new THREE.Vector3(-12, 24, 54),
        new THREE.Vector3(24, 26, 42),
      ],
      true,
      'catmullrom',
      0.5
    );

    this.lookCurve = new THREE.CatmullRomCurve3(
      [
        new THREE.Vector3(0, 24, -10),
        new THREE.Vector3(45, 24, -6),
        new THREE.Vector3(8, 34, -34),
        new THREE.Vector3(0, 36, -36),
        new THREE.Vector3(-24, 24, -10),
        new THREE.Vector3(-34, 20, 12),
        new THREE.Vector3(0, 18, 12),
        new THREE.Vector3(18, 20, 14),
      ],
      true,
      'catmullrom',
      0.5
    );

    window.addEventListener('keydown', (e) => {
      const code = e.code;
      if (code === 'Space' && !this.keys.has('Space')) {
        const now = performance.now();
        if (now - this.lastSpaceTime < 320) {
          this.isFlying = !this.isFlying;
          this.velY = 0;
        }
        this.lastSpaceTime = now;
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
    });
    window.addEventListener('mouseup', () => {
      this.isDraggingLook = false;
    });
    window.addEventListener('mousemove', (e) => {
      if (!this.avatar.visible) return;
      if (document.pointerLockElement === dom || this.isDraggingLook) {
        this.yaw -= e.movementX * 0.0042;
        this.pitch = THREE.MathUtils.clamp(
          this.pitch + e.movementY * 0.0035,
          -0.65,
          1.15
        );
      }
    });
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

  public enterWalkMode(): void {
    this.avatar.visible = true;
    const sy = this.world.getSurfaceY(0, 22, 30, 8);
    this.pos.set(0.5, sy + 1.05, 22.5);
    this.velY = 0;
    this.yaw = Math.PI; // 面向皇家阶梯与圣城
    this.pitch = 0.16;
    this.isFlying = false;
  }

  public exitWalkMode(): void {
    this.avatar.visible = false;
  }

  private isSolidAt(x: number, y: number, z: number): boolean {
    const b = this.world.get(Math.floor(x), Math.floor(y), Math.floor(z));
    return b !== BlockId.AIR && b !== BlockId.WATER && b !== BlockId.WATERFALL_FOAM;
  }

  public updateCinematic(dt: number): void {
    this.tourProgress = (this.tourProgress + dt * 0.024) % 1;
    const camPos = this.tourCurve.getPointAt(this.tourProgress);
    const lookTarget = this.lookCurve.getPointAt(this.tourProgress);
    this.camera.position.lerp(camPos, Math.min(1, dt * 3.5));
    this.camera.lookAt(lookTarget);
  }

  public updateWalk(dt: number, elapsed: number): void {
    // 角色前方朝向向量：yaw = PI 时面向 -Z（北侧圣城）
    const forward = new THREE.Vector3(-Math.sin(this.yaw), 0, -Math.cos(this.yaw));
    const right = new THREE.Vector3(Math.cos(this.yaw), 0, -Math.sin(this.yaw));

    const moveDir = new THREE.Vector3();
    if (this.keys.has('KeyW') || this.keys.has('ArrowUp')) moveDir.add(forward);
    if (this.keys.has('KeyS') || this.keys.has('ArrowDown')) moveDir.sub(forward);
    if (this.keys.has('KeyD') || this.keys.has('ArrowRight')) moveDir.add(right);
    if (this.keys.has('KeyA') || this.keys.has('ArrowLeft')) moveDir.sub(right);

    const speed = this.keys.has('ShiftLeft') ? 13.5 : this.isFlying ? 12.0 : 8.2;
    let moving = false;

    if (moveDir.lengthSq() > 0.001) {
      moving = true;
      moveDir.normalize();
      const nx = this.pos.x + moveDir.x * speed * dt;
      const nz = this.pos.z + moveDir.z * speed * dt;

      // 自动迈上 1 格台阶（如皇家汉白玉阶梯、石拱桥、彩虹拱桥！）
      const footY = this.pos.y + 0.2;
      const headY = this.pos.y + 1.7;
      if (!this.isSolidAt(nx, footY, nz) && !this.isSolidAt(nx, headY, nz)) {
        this.pos.x = nx;
        this.pos.z = nz;
      } else if (
        !this.isSolidAt(nx, footY + 1.0, nz) &&
        !this.isSolidAt(nx, headY + 1.0, nz)
      ) {
        this.pos.x = nx;
        this.pos.z = nz;
        this.pos.y = Math.floor(this.pos.y) + 1.02;
      }
    }

    if (this.isFlying) {
      if (this.keys.has('Space')) this.pos.y += 9.5 * dt;
      if (this.keys.has('KeyQ') || this.keys.has('ControlLeft')) this.pos.y -= 9.5 * dt;
    } else {
      if (this.keys.has('Space') && this.isGrounded) {
        this.velY = 9.2;
        this.isGrounded = false;
      }
      this.velY -= 23.0 * dt;
      const nextY = this.pos.y + this.velY * dt;
      if (this.velY <= 0 && this.isSolidAt(this.pos.x, nextY - 0.05, this.pos.z)) {
        this.pos.y = Math.floor(nextY - 0.05) + 1.0;
        this.velY = 0;
        this.isGrounded = true;
      } else {
        this.pos.y = nextY;
        this.isGrounded = false;
      }

      // 若不慎跳下浮空岛云海，自动仙灵传送回星泉广场
      if (this.pos.y < -30) {
        this.pos.set(0.5, 14, 20.5);
        this.velY = 0;
      }
    }

    // 更新角色姿态与摆臂迈步动画
    this.avatar.position.copy(this.pos);
    this.avatar.rotation.y = this.yaw + Math.PI;
    const swing = moving ? Math.sin(elapsed * 11) * 0.55 : 0;
    this.leftLeg.rotation.x = swing;
    this.rightLeg.rotation.x = -swing;
    this.leftArm.rotation.x = -swing * 0.8;
    this.rightArm.rotation.x = swing * 0.8;

    // 舒适的过肩第三人称跟随相机（带防穿墙缩进）
    const headAnchor = new THREE.Vector3(this.pos.x, this.pos.y + 2.1, this.pos.z);
    const camDist = 6.8;
    const offset = new THREE.Vector3(
      Math.sin(this.yaw) * Math.cos(this.pitch) * camDist,
      Math.sin(this.pitch) * camDist + 1.1,
      Math.cos(this.yaw) * Math.cos(this.pitch) * camDist
    );
    const desiredCam = headAnchor.clone().add(offset);
    this.camera.position.lerp(desiredCam, Math.min(1, dt * 14));
    this.camera.lookAt(headAnchor.x, headAnchor.y + 0.3, headAnchor.z);
  }
}

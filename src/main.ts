import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';

import { BLOCK_DEFS, BUILD_PALETTE_BLOCKS, BlockId } from './voxel/BlockTypes';
import { createPixelTextureAtlas } from './voxel/PixelTextures';
import { VoxelWorld } from './voxel/VoxelMesher';
import { buildDreamKingdom } from './world/KingdomBuilder';
import { SkyAndLighting, WeatherPresetKey } from './atmosphere/SkyAndLighting';
import { DynamicWorld } from './entities/DynamicWorld';
import { CelestialWonders } from './entities/CelestialWonders';
import { CameraMode, KingdomExplorer } from './entities/PlayerController';
import { WorldInteractions, ActiveInteraction } from './entities/WorldInteractions';
import { MusicBoxAudio } from './atmosphere/MusicBoxAudio';

async function bootstrap() {
  const container = document.getElementById('canvas-container')!;
  const loadingScreen = document.getElementById('loading-screen')!;
  const loadingStatus = document.getElementById('loading-status')!;
  const loadingBar = document.getElementById('loading-bar')!;
  const statsEl = document.getElementById('voxel-stats')!;
  const toastEl = document.getElementById('control-toast')!;

  const setProgress = (pct: number, text: string) => {
    loadingBar.style.width = `${pct}%`;
    loadingStatus.textContent = text;
    return new Promise<void>((r) => requestAnimationFrame(() => r()));
  };

  // =========================================================
  // 1. 初始化渲染器、相机与后处理管线
  // =========================================================
  const renderer = new THREE.WebGLRenderer({
    antialias: true,
    powerPreference: 'high-performance',
  });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.06;
  container.appendChild(renderer.domElement);

  const scene = new THREE.Scene();

  const camera = new THREE.PerspectiveCamera(
    48,
    window.innerWidth / window.innerHeight,
    0.25,
    980
  );
  camera.position.set(64, 46, 86);
  scene.add(camera); // 使挂载于相机的第一人称 3D 星辉魔杖正常渲染

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.065;
  controls.maxDistance = 240;
  controls.minDistance = 8;
  controls.maxPolarAngle = Math.PI * 0.72; // 支持大角度抬头仰望九霄冰宫、极光与星环！
  controls.target.set(0, 38, -24);

  // 电影感柔光辉光后处理
  const composer = new EffectComposer(renderer);
  const renderPass = new RenderPass(scene, camera);
  const bloomPass = new UnrealBloomPass(
    new THREE.Vector2(window.innerWidth, window.innerHeight),
    0.36, // strength
    0.65, // radius
    0.82  // threshold：仅让星辰、暖窗、水晶、灯笼与烟花产生柔美光晕
  );
  const outputPass = new OutputPass();
  composer.addPass(renderPass);
  composer.addPass(bloomPass);
  composer.addPass(outputPass);

  // =========================================================
  // 2. 构建像素纹理图集与梦幻体素王国
  // =========================================================
  await setProgress(28, '正在手绘 16×16 像素艺术纹理图集...');
  const atlas = createPixelTextureAtlas();
  const voxelWorld = new VoxelWorld(atlas);
  scene.add(voxelWorld.group);

  await setProgress(58, '正在雕琢星冠皇家圣城、童话风车镇与彩虹浮岛...');
  const kingdomMeta = buildDreamKingdom(voxelWorld);

  await setProgress(84, '正在烘焙逐顶点环境光遮蔽 (AO) 与体素网格...');
  voxelWorld.rebuildDirtyChunks();

  await setProgress(96, '正在唤醒星云巨鲸、冰火神兽、银河列车与奥术星阵...');
  const sky = new SkyAndLighting(scene, voxelWorld);
  const dynamicWorld = new DynamicWorld(voxelWorld, kingdomMeta);
  scene.add(dynamicWorld.group);

  const celestialWonders = new CelestialWonders(kingdomMeta.wonders);
  scene.add(celestialWonders.group);

  const explorer = new KingdomExplorer(voxelWorld, camera, renderer.domElement);
  scene.add(explorer.avatar);

  const musicBox = new MusicBoxAudio();

  let cameraMode: CameraMode = 'orbit';
  const modeButtons = document.querySelectorAll<HTMLButtonElement>('[data-mode]');
  const crosshairEl = document.getElementById('crosshair')!;
  const interactPromptEl = document.getElementById('interact-prompt')!;
  let currentInteraction: ActiveInteraction | null = null;

  const updateStatsLabel = () => {
    statsEl.textContent = `共 ${voxelWorld.blockCount.toLocaleString()} 枚像素方块 · 60 FPS`;
  };
  updateStatsLabel();

  // 开局放飞 3 盏欢迎天灯增加梦幻氛围
  dynamicWorld.releaseSkyLanterns(3);

  await setProgress(100, '欢迎来到星冠云国！');
  setTimeout(() => {
    loadingScreen.classList.add('fade-out');
  }, 220);

  // =========================================================
  // 3. 相机平滑飞行过渡 & 模式切换
  // =========================================================
  let flyAnim: {
    fromPos: THREE.Vector3;
    toPos: THREE.Vector3;
    fromTarget: THREE.Vector3;
    toTarget: THREE.Vector3;
    t: number;
  } | null = null;

  const flyToLandmark = (pos: THREE.Vector3, target: THREE.Vector3) => {
    if (cameraMode !== 'orbit') {
      switchCameraMode('orbit');
    }
    flyAnim = {
      fromPos: camera.position.clone(),
      toPos: pos.clone(),
      fromTarget: controls.target.clone(),
      toTarget: target.clone(),
      t: 0,
    };
  };

  const updateWalkToast = () => {
    const viewLabel = explorer.isFirstPerson ? '第一人称' : '第三人称';
    toastEl.textContent = buildMode
      ? `🧱 ${viewLabel}建造：准星对准方块 · 左键放置 · 右键拆除 · [B] 退出建造 · [ESC] 释放鼠标`
      : `🪄 ${viewLabel}漫步：WASD 移动 · [E] 场景互动 · [F] 魔杖星弹 · [V] 切换一/三人称 · 双击空格飞行`;
  };

  const switchCameraMode = (mode: CameraMode) => {
    if (cameraMode !== mode) {
      explorer.exitWalkMode(mode);
    }
    cameraMode = mode;
    explorer.activeMode = mode;
    flyAnim = null;

    modeButtons.forEach((b) => b.classList.toggle('active', b.dataset.mode === mode));
    controls.enabled = mode === 'orbit';
    crosshairEl.classList.toggle('hidden', mode !== 'walk' && !buildMode);
    if (mode !== 'walk') {
      interactPromptEl.classList.add('hidden');
      currentInteraction = null;
    }

    if (mode === 'orbit') {
      toastEl.textContent = buildMode
        ? '🧱 建造模式：左键放置方块 · 右键敲除方块 · 滚轮缩放'
        : '🖱️ 左键旋转 · 右键平移 · 滚轮缩放 · 双击场景任意位置聚焦';
    } else if (mode === 'cinematic') {
      toastEl.textContent = '🎬 正在进行无人机电影环游运镜 · 点击「自由俯瞰」可随时接管';
    } else if (mode === 'dragon') {
      toastEl.textContent = '🐉 正在骑乘「九霄星霜圣龙」· 点击画面移动鼠标可 360° 自由转头环顾！';
    } else if (mode === 'train') {
      toastEl.textContent = '🚂 正在搭乘「云海银河蒸汽列车」· 移动鼠标可自由欣赏窗外奇观！';
    } else if (mode === 'walk') {
      explorer.enterWalkMode();
      updateWalkToast();
    }
  };

  const interactions = new WorldInteractions(
    voxelWorld,
    dynamicWorld,
    celestialWonders,
    explorer,
    sky,
    musicBox,
    switchCameraMode
  );
  scene.add(interactions.group);

  interactPromptEl.addEventListener('click', () => {
    currentInteraction?.execute();
  });

  modeButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      switchCameraMode(btn.dataset.mode as CameraMode);
    });
  });

  // 漫步模式下点击景点按钮直接实地魔法传送到该景点平台！
  const WALK_SPAWNS: Record<string, [number, number, number]> = {
    panorama: [0.5, 13.05, 22.5],
    frost: [0.5, 83.05, -62.5],
    clockwork: [53.5, 37.05, 38.5],
    amusement: [-12.5, 13.05, 37.5],
    celestial: [0.5, 18.05, -6.5],
    castle: [0.5, 23.05, -15.5],
    plaza: [0.5, 13.05, 21.5],
    windmill: [29.5, 16.05, 18.5],
    rainbow: [54.5, 26.05, -11.5],
    sakura: [-31.5, 14.05, 12.5],
  };

  const landmarkButtons = document.querySelectorAll<HTMLButtonElement>('[data-landmark]');
  landmarkButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const key = btn.dataset.landmark!;
      const lm = kingdomMeta.landmarks[key];
      if (!lm) return;
      landmarkButtons.forEach((b) => b.classList.toggle('active', b === btn));
      if (cameraMode === 'walk' && WALK_SPAWNS[key]) {
        const [sx, sy, sz] = WALK_SPAWNS[key];
        musicBox.playInteractChime();
        explorer.teleportTo(sx, sy, sz, lm.target);
        dynamicWorld.spawnMiniSparkles(new THREE.Vector3(sx, sy + 1, sz), '#7af5ff', 24);
      } else {
        flyToLandmark(lm.position, lm.target);
      }
    });
  });

  // =========================================================
  // 4. 天象氛围切换与昼夜流转
  // =========================================================
  const timeButtons = document.querySelectorAll<HTMLButtonElement>('[data-preset]');
  const autoCycleBtn = document.getElementById('btn-auto-cycle')!;

  const syncPresetUI = (preset: WeatherPresetKey) => {
    timeButtons.forEach((b) => b.classList.toggle('active', b.dataset.preset === preset));
  };

  timeButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const preset = btn.dataset.preset as WeatherPresetKey;
      sky.setPreset(preset);
      syncPresetUI(preset);
      if (preset === 'night') {
        dynamicWorld.releaseSkyLanterns(4);
      }
    });
  });

  window.addEventListener('kingdom-preset-changed', (e) => {
    const p = (e as CustomEvent<WeatherPresetKey>).detail;
    syncPresetUI(p);
  });

  autoCycleBtn.addEventListener('click', () => {
    sky.autoCycle = !sky.autoCycle;
    autoCycleBtn.classList.toggle('active', sky.autoCycle);
  });

  // =========================================================
  // 5. 趣味交互：星雨、烟花、天灯、音乐、截图、沉浸隐藏 UI、自由建造！
  // =========================================================
  document.getElementById('btn-meteor')!.addEventListener('click', () => {
    sky.summonMeteorShower();
    celestialWonders.triggerArcaneResonance();
  });

  document.getElementById('btn-firework')!.addEventListener('click', () => {
    dynamicWorld.launchFirework();
    setTimeout(() => dynamicWorld.launchFirework(), 240);
  });

  document.getElementById('btn-lantern')!.addEventListener('click', () => {
    dynamicWorld.releaseSkyLanterns(5);
  });

  const musicBtn = document.getElementById('btn-music')!;
  musicBtn.addEventListener('click', () => {
    const on = musicBox.toggle();
    musicBtn.textContent = on ? '🎵 音乐: 开' : '🎵 音乐: 关';
    musicBtn.classList.toggle('active', on);
  });

  document.getElementById('btn-screenshot')!.addEventListener('click', () => {
    composer.render();
    const url = renderer.domElement.toDataURL('image/png');
    const a = document.createElement('a');
    a.href = url;
    a.download = `星冠云国_${sky.currentPreset}_${Date.now()}.png`;
    a.click();
  });

  const hudRoot = document.getElementById('hud-root')!;
  const restoreBtn = document.getElementById('restore-ui-btn')!;
  const toggleHUD = () => {
    const hidden = hudRoot.classList.toggle('ui-hidden');
    restoreBtn.classList.toggle('hidden', !hidden);
  };
  document.getElementById('btn-hide-ui')!.addEventListener('click', toggleHUD);
  restoreBtn.addEventListener('click', toggleHUD);

  // =========================================================
  // 6. 自由方块建造系统（带像素线框高亮预览）
  // =========================================================
  let buildMode = false;
  let selectedBlock: BlockId = BUILD_PALETTE_BLOCKS[0];
  const buildBtn = document.getElementById('btn-build-mode')!;
  const palettePanel = document.getElementById('build-palette')!;
  const paletteSlotsEl = document.getElementById('palette-slots')!;

  const renderPaletteSlots = () => {
    paletteSlotsEl.innerHTML = '';
    BUILD_PALETTE_BLOCKS.forEach((bid, idx) => {
      const def = BLOCK_DEFS[bid];
      const btn = document.createElement('button');
      btn.className = `palette-slot ${bid === selectedBlock ? 'active' : ''}`;
      btn.innerHTML = `<span class="swatch-dot" style="background:${def.swatch}"></span><span>${idx + 1}. ${def.name}</span>`;
      btn.addEventListener('click', () => {
        selectedBlock = bid;
        renderPaletteSlots();
      });
      paletteSlotsEl.appendChild(btn);
    });
  };
  renderPaletteSlots();

  // 金色体素预览选框
  const highlightBox = new THREE.LineSegments(
    new THREE.EdgesGeometry(new THREE.BoxGeometry(1.04, 1.04, 1.04)),
    new THREE.LineBasicMaterial({ color: '#ffe382', transparent: true, opacity: 0.9 })
  );
  highlightBox.visible = false;
  scene.add(highlightBox);

  const toggleBuildMode = () => {
    buildMode = !buildMode;
    buildBtn.classList.toggle('active', buildMode);
    palettePanel.classList.toggle('hidden', !buildMode);
    highlightBox.visible = false;
    crosshairEl.classList.toggle('hidden', cameraMode !== 'walk' && !buildMode);
    if (cameraMode === 'orbit') {
      toastEl.textContent = buildMode
        ? '🧱 建造模式：单击左键放置方块 · 单击右键移除方块 · 拖拽仍可旋转视角'
        : '🖱️ 左键旋转 · 右键平移 · 滚轮缩放 · 双击场景任意位置聚焦';
    } else if (cameraMode === 'walk') {
      updateWalkToast();
    }
  };

  buildBtn.addEventListener('click', toggleBuildMode);

  window.addEventListener('keydown', (e) => {
    if (e.code === 'KeyH') toggleHUD();
    if (e.code === 'KeyB') toggleBuildMode();
    if (cameraMode === 'walk') {
      if (e.code === 'KeyV') {
        setTimeout(updateWalkToast, 10);
      }
      if (e.code === 'KeyE' && currentInteraction) {
        currentInteraction.execute();
      }
      if (e.code === 'KeyF') {
        interactions.castMagicStarBolt();
      }
    }
    if (buildMode && e.key >= '1' && e.key <= '7') {
      const idx = Number(e.key) - 1;
      if (BUILD_PALETTE_BLOCKS[idx]) {
        selectedBlock = BUILD_PALETTE_BLOCKS[idx];
        renderPaletteSlots();
      }
    }
  });

  // 鼠标/准星射线检测（自动兼容上帝视角鼠标点选 & 第一人称屏幕准星瞄准！）
  const mouseNDC = new THREE.Vector2();
  const raycaster = new THREE.Raycaster();
  let pointerDownPos = { x: 0, y: 0 };

  const castTargetVoxel = (clientX?: number, clientY?: number) => {
    if (cameraMode === 'walk' || document.pointerLockElement === renderer.domElement) {
      mouseNDC.set(0, 0);
      raycaster.setFromCamera(mouseNDC, camera);
      return voxelWorld.raycast(raycaster.ray.origin, raycaster.ray.direction, 12, true);
    }
    mouseNDC.x = ((clientX ?? window.innerWidth / 2) / window.innerWidth) * 2 - 1;
    mouseNDC.y = -((clientY ?? window.innerHeight / 2) / window.innerHeight) * 2 + 1;
    raycaster.setFromCamera(mouseNDC, camera);
    return voxelWorld.raycast(raycaster.ray.origin, raycaster.ray.direction, 160, true);
  };

  renderer.domElement.addEventListener('pointerdown', (e) => {
    pointerDownPos = { x: e.clientX, y: e.clientY };
  });

  renderer.domElement.addEventListener('pointermove', (e) => {
    if (!buildMode || cameraMode === 'walk') return;
    const hit = castTargetVoxel(e.clientX, e.clientY);
    if (hit) {
      highlightBox.visible = true;
      highlightBox.position.set(hit.x + 0.5, hit.y + 0.5, hit.z + 0.5);
    } else {
      highlightBox.visible = false;
    }
  });

  renderer.domElement.addEventListener('pointerup', (e) => {
    const isLocked = document.pointerLockElement === renderer.domElement;
    if (!isLocked) {
      const moved = Math.hypot(e.clientX - pointerDownPos.x, e.clientY - pointerDownPos.y);
      if (moved > 5) return;
    }

    if (buildMode) {
      const hit = castTargetVoxel(e.clientX, e.clientY);
      if (!hit) return;
      explorer.triggerWandSwing();
      if (e.button === 0) {
        const tx = hit.x + hit.nx;
        const ty = hit.y + hit.ny;
        const tz = hit.z + hit.nz;
        voxelWorld.set(tx, ty, tz, selectedBlock);
        voxelWorld.rebuildDirtyChunks();
        musicBox.playBlockPop(false);
        updateStatsLabel();
      } else if (e.button === 2) {
        voxelWorld.set(hit.x, hit.y, hit.z, BlockId.AIR);
        voxelWorld.rebuildDirtyChunks();
        musicBox.playBlockPop(true);
        updateStatsLabel();
      }
      return;
    }

    // 第一人称未开建造时：右键快速触发当前准星场景互动（与 E 键等效！）
    if (cameraMode === 'walk' && e.button === 2 && currentInteraction) {
      currentInteraction.execute();
    }
  });

  // 双击场景任意位置平滑推进聚焦
  renderer.domElement.addEventListener('dblclick', (e) => {
    if (cameraMode !== 'orbit' || buildMode) return;
    const hit = castTargetVoxel(e.clientX, e.clientY);
    if (!hit) return;
    const focusPoint = new THREE.Vector3(hit.x + 0.5, hit.y + 0.5, hit.z + 0.5);
    const offset = camera.position.clone().sub(controls.target);
    const desiredDist = THREE.MathUtils.clamp(offset.length() * 0.68, 18, 65);
    offset.setLength(desiredDist);
    flyToLandmark(focusPoint.clone().add(offset), focusPoint);
  });

  renderer.domElement.addEventListener('contextmenu', (e) => e.preventDefault());

  // =========================================================
  // 7. 窗口自适应与主渲染循环
  // =========================================================
  window.addEventListener('resize', () => {
    const w = window.innerWidth;
    const h = window.innerHeight;
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    renderer.setSize(w, h);
    composer.setSize(w, h);
    bloomPass.setSize(w, h);
  });

  const clock = new THREE.Clock();
  let fpsFrames = 0;
  let fpsTimer = 0;

  const animate = () => {
    requestAnimationFrame(animate);
    const dt = Math.min(clock.getDelta(), 0.05);
    const elapsed = clock.elapsedTime;

    // 景点平滑飞行插值
    if (flyAnim && cameraMode === 'orbit') {
      flyAnim.t = Math.min(1, flyAnim.t + dt * 1.35);
      const ease = 1 - Math.pow(1 - flyAnim.t, 3);
      camera.position.lerpVectors(flyAnim.fromPos, flyAnim.toPos, ease);
      controls.target.lerpVectors(flyAnim.fromTarget, flyAnim.toTarget, ease);
      if (flyAnim.t >= 1) flyAnim = null;
    }

    if (cameraMode === 'orbit') {
      controls.update();
    } else if (cameraMode === 'cinematic') {
      explorer.updateCinematic(dt);
    } else if (cameraMode === 'dragon') {
      const pose = dynamicWorld.getDragonCameraPose(elapsed);
      explorer.applyRidePose(pose.position, pose.lookAt, dt);
    } else if (cameraMode === 'train') {
      const pose = celestialWonders.getTrainCameraPose();
      explorer.applyRidePose(pose.position, pose.lookAt, dt);
    } else if (cameraMode === 'walk') {
      let ridePos: THREE.Vector3 | undefined;
      if (explorer.rideAttachment === 'ferris') {
        ridePos = celestialWonders.getFerrisCabinWorldPos();
      } else if (explorer.rideAttachment === 'carousel') {
        ridePos = celestialWonders.getCarouselHorseWorldPos();
      }
      explorer.updateWalk(dt, elapsed, ridePos);

      // 第一人称实时建造选框追踪准星
      if (buildMode) {
        const hit = castTargetVoxel();
        if (hit) {
          highlightBox.visible = true;
          highlightBox.position.set(hit.x + 0.5, hit.y + 0.5, hit.z + 0.5);
        } else {
          highlightBox.visible = false;
        }
      }

      // 第一人称场景可交互目标实时检测
      currentInteraction = interactions.detectAvailableInteraction();
      if (currentInteraction) {
        interactPromptEl.textContent = currentInteraction.prompt;
        interactPromptEl.classList.remove('hidden');
      } else {
        interactPromptEl.classList.add('hidden');
      }
    }

    // 水面轻微呼吸微光
    voxelWorld.materials.transparent.emissiveIntensity =
      0.22 + Math.sin(elapsed * 2.2) * 0.06;

    sky.update(dt, elapsed);
    bloomPass.strength = sky.curBloomStrength;
    dynamicWorld.update(dt, elapsed);
    celestialWonders.update(dt, elapsed);
    interactions.update(dt, elapsed);

    composer.render();

    fpsFrames++;
    fpsTimer += dt;
    if (fpsTimer >= 1.0) {
      const fps = Math.round(fpsFrames / fpsTimer);
      statsEl.textContent = `共 ${voxelWorld.blockCount.toLocaleString()} 枚像素方块 · ${fps} FPS`;
      fpsFrames = 0;
      fpsTimer = 0;
    }
  };

  animate();
}

bootstrap();

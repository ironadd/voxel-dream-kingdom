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
import { CameraMode, KingdomExplorer } from './entities/PlayerController';
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
    0.4,
    650
  );
  camera.position.set(58, 52, 78);

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.065;
  controls.maxDistance = 185;
  controls.minDistance = 8;
  controls.maxPolarAngle = Math.PI * 0.62; // 允许稍微仰视浮空岛底部巨型飞行蓝水晶！
  controls.target.set(0, 22, -6);

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

  await setProgress(96, '正在唤醒云海、热气球、飞瀑与樱花精灵...');
  const sky = new SkyAndLighting(scene, voxelWorld);
  const dynamicWorld = new DynamicWorld(voxelWorld, kingdomMeta);
  scene.add(dynamicWorld.group);

  const explorer = new KingdomExplorer(voxelWorld, camera, renderer.domElement);
  scene.add(explorer.avatar);

  const musicBox = new MusicBoxAudio();

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
  let cameraMode: CameraMode = 'orbit';
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

  const modeButtons = document.querySelectorAll<HTMLButtonElement>('[data-mode]');
  const crosshairEl = document.getElementById('crosshair')!;

  const switchCameraMode = (mode: CameraMode) => {
    if (cameraMode === 'walk' && mode !== 'walk') {
      explorer.exitWalkMode();
    }
    cameraMode = mode;
    flyAnim = null;

    modeButtons.forEach((b) => b.classList.toggle('active', b.dataset.mode === mode));
    controls.enabled = mode === 'orbit';
    crosshairEl.classList.toggle('hidden', mode !== 'walk' && !buildMode);

    if (mode === 'orbit') {
      toastEl.textContent = buildMode
        ? '🧱 建造模式：左键放置方块 · 右键敲除方块 · 滚轮缩放'
        : '🖱️ 左键旋转 · 右键平移 · 滚轮缩放 · 双击场景任意位置聚焦';
    } else if (mode === 'cinematic') {
      toastEl.textContent = '🎬 正在进行无人机电影环游运镜 · 点击「自由俯瞰」可随时接管';
    } else if (mode === 'walk') {
      explorer.enterWalkMode();
      toastEl.textContent =
        '🚶 漫步王国：WASD 移动 · 空格跳跃（双击空格御风飞行！）· 按住鼠标转动视角';
    }
  };

  modeButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      switchCameraMode(btn.dataset.mode as CameraMode);
    });
  });

  // 景点速达按钮
  const landmarkButtons = document.querySelectorAll<HTMLButtonElement>('[data-landmark]');
  landmarkButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const key = btn.dataset.landmark!;
      const lm = kingdomMeta.landmarks[key];
      if (!lm) return;
      landmarkButtons.forEach((b) => b.classList.toggle('active', b === btn));
      flyToLandmark(lm.position, lm.target);
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
  // 5. 趣味交互：烟花、天灯、音乐、截图、沉浸隐藏 UI、自由建造！
  // =========================================================
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

  buildBtn.addEventListener('click', () => {
    buildMode = !buildMode;
    buildBtn.classList.toggle('active', buildMode);
    palettePanel.classList.toggle('hidden', !buildMode);
    highlightBox.visible = false;
    crosshairEl.classList.toggle('hidden', cameraMode !== 'walk' && !buildMode);
    if (cameraMode === 'orbit') {
      toastEl.textContent = buildMode
        ? '🧱 建造模式：单击左键放置方块 · 单击右键移除方块 · 拖拽仍可旋转视角'
        : '🖱️ 左键旋转 · 右键平移 · 滚轮缩放 · 双击场景任意位置聚焦';
    }
  });

  window.addEventListener('keydown', (e) => {
    if (e.code === 'KeyH') toggleHUD();
    if (buildMode && e.key >= '1' && e.key <= '7') {
      const idx = Number(e.key) - 1;
      if (BUILD_PALETTE_BLOCKS[idx]) {
        selectedBlock = BUILD_PALETTE_BLOCKS[idx];
        renderPaletteSlots();
      }
    }
  });

  // 鼠标射线检测（双击平滑聚焦 + 建造模式悬停预览与放置拆除）
  const mouseNDC = new THREE.Vector2();
  const raycaster = new THREE.Raycaster();
  let pointerDownPos = { x: 0, y: 0 };

  const castMouseVoxel = (clientX: number, clientY: number) => {
    mouseNDC.x = (clientX / window.innerWidth) * 2 - 1;
    mouseNDC.y = -(clientY / window.innerHeight) * 2 + 1;
    raycaster.setFromCamera(mouseNDC, camera);
    return voxelWorld.raycast(raycaster.ray.origin, raycaster.ray.direction, 160, true);
  };

  renderer.domElement.addEventListener('pointerdown', (e) => {
    pointerDownPos = { x: e.clientX, y: e.clientY };
  });

  renderer.domElement.addEventListener('pointermove', (e) => {
    if (!buildMode) return;
    const hit = castMouseVoxel(e.clientX, e.clientY);
    if (hit) {
      highlightBox.visible = true;
      highlightBox.position.set(hit.x + 0.5, hit.y + 0.5, hit.z + 0.5);
    } else {
      highlightBox.visible = false;
    }
  });

  renderer.domElement.addEventListener('pointerup', (e) => {
    if (!buildMode) return;
    // 区分轻点与拖拽旋转相机（移动小于 5px 视为点击建造）
    const moved = Math.hypot(e.clientX - pointerDownPos.x, e.clientY - pointerDownPos.y);
    if (moved > 5) return;

    const hit = castMouseVoxel(e.clientX, e.clientY);
    if (!hit) return;

    if (e.button === 0) {
      const tx = hit.x + hit.nx;
      const ty = hit.y + hit.ny;
      const tz = hit.z + hit.nz;
      voxelWorld.set(tx, ty, tz, selectedBlock);
      voxelWorld.rebuildDirtyChunks();
      updateStatsLabel();
    } else if (e.button === 2) {
      voxelWorld.set(hit.x, hit.y, hit.z, BlockId.AIR);
      voxelWorld.rebuildDirtyChunks();
      updateStatsLabel();
    }
  });

  // 双击场景任意位置平滑推进聚焦，同时绽放一朵迎宾小烟花
  renderer.domElement.addEventListener('dblclick', (e) => {
    if (cameraMode !== 'orbit' || buildMode) return;
    const hit = castMouseVoxel(e.clientX, e.clientY);
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
    } else if (cameraMode === 'walk') {
      explorer.updateWalk(dt, elapsed);
    }

    // 水面轻微呼吸微光
    voxelWorld.materials.transparent.emissiveIntensity =
      0.22 + Math.sin(elapsed * 2.2) * 0.06;

    sky.update(dt, elapsed);
    bloomPass.strength = sky.curBloomStrength;
    dynamicWorld.update(dt, elapsed);

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

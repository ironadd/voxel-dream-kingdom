import * as THREE from 'three';
import { BlockId } from '../voxel/BlockTypes';
import { VoxelWorld } from '../voxel/VoxelMesher';
import { buildRoyalCastle, FlagAnchor } from './CastleArchitect';
import { buildFairytaleTown, TownDynamicHooks } from './TownArchitect';
import { buildFloatingIslandsAndWonders, FloatingIslandHooks } from './FloatingIslands';

export interface LandmarkCamera {
  position: THREE.Vector3;
  target: THREE.Vector3;
  label: string;
}

export interface KingdomMetadata {
  flags: FlagAnchor[];
  town: TownDynamicHooks;
  islands: FloatingIslandHooks;
  landmarks: Record<string, LandmarkCamera>;
}

/** 2D 平滑伪随机噪声，用于自然地形起伏与钟乳石岩底 */
function pseudoNoise2D(x: number, z: number): number {
  return (
    Math.sin(x * 0.085) * Math.cos(z * 0.085) * 0.5 +
    Math.sin(x * 0.19 + z * 0.15) * 0.3 +
    Math.cos(x * 0.33 - z * 0.27) * 0.2
  );
}

/** 绘制蜿蜒鹅卵石步道 */
function paintCobbleRoad(
  world: VoxelWorld,
  x0: number,
  z0: number,
  x1: number,
  z1: number,
  halfWidth = 1.6
): void {
  const steps = Math.ceil(Math.hypot(x1 - x0, z1 - z0) * 1.5);
  for (let i = 0; i <= steps; i++) {
    const t = i / steps;
    const cx = x0 + (x1 - x0) * t;
    const cz = z0 + (z1 - z0) * t;
    const ir = Math.ceil(halfWidth);
    for (let dz = -ir; dz <= ir; dz++) {
      for (let dx = -ir; dx <= ir; dx++) {
        if (dx * dx + dz * dz <= halfWidth * halfWidth) {
          const wx = Math.round(cx + dx);
          const wz = Math.round(cz + dz);
          const sy = world.getSurfaceY(wx, wz, 30, 8);
          const cur = world.get(wx, sy, wz);
          if (
            cur === BlockId.GRASS_DREAM ||
            cur === BlockId.GRASS_SAKURA ||
            cur === BlockId.SAND_PEARL
          ) {
            world.set(wx, sy, wz, BlockId.COBBLE_PATH);
          }
        }
      }
    }
  }
}

export function buildDreamKingdom(world: VoxelWorld): KingdomMetadata {
  const waterfallEmitters: [number, number, number][] = [];

  // =========================================================
  // 1. 生成主浮空大陆（有机轮廓 + 北高南低阶梯地形 + 西北雪峰 + 锥形悬崖底）
  // =========================================================
  const maxR = 56;
  for (let z = -62; z <= 54; z++) {
    for (let x = -56; x <= 54; x++) {
      // 稍微向北拉伸以容纳圣城与后方雪山
      const angle = Math.atan2(z + 4, x);
      const lobe =
        1 +
        0.1 * Math.sin(angle * 3 + 0.6) +
        0.07 * Math.cos(angle * 5 - 0.4) +
        (z < -20 ? 0.08 : 0);
      const effR = maxR * lobe;
      const dist = Math.hypot(x, (z + 4) * 0.94);
      if (dist > effR) continue;

      const edgeRatio = dist / effR;

      // 基础地表海拔 y = 12（中央星泉小镇平坦舒适）
      let surfaceY = 12 + pseudoNoise2D(x, z) * 1.2;

      // 北侧皇家圣城高原隆起 (z < -12 平滑抬升至 y = 21)
      if (z < -10) {
        const northT = Math.min(1, (-10 - z) / 10);
        const plateau = northT * northT * (3 - 2 * northT) * 9.0;
        surfaceY += plateau;
      }

      // 西北角晶莹雪峰 (中心 x = -28, z = -46，拔高至 y = 43)
      const peakDist = Math.hypot(x + 28, z + 46);
      if (peakDist < 19) {
        const pNorm = 1 - peakDist / 19;
        surfaceY += Math.pow(pNorm, 1.55) * 21;
      }

      // 东侧大风车花海暖坡 (中心 x = 36, z = 18，微抬至 y = 16)
      const hillDist = Math.hypot(x - 36, z - 18);
      if (hillDist < 17) {
        const hNorm = 1 - hillDist / 17;
        surfaceY += hNorm * hNorm * 4.2;
      }

      // 西侧落樱神木微丘 (中心 x = -38, z = 12)
      const sakuraDist = Math.hypot(x + 38, z - 12);
      if (sakuraDist < 18) {
        const sNorm = 1 - sakuraDist / 18;
        surfaceY += sNorm * 2.2;
      }

      // 中央广场与皇家御道区域精准找平
      if (Math.hypot(x, z - 15) < 12) {
        surfaceY = 12;
      }

      const topY = Math.round(surfaceY);

      // 浮空大陆倒锥形钟乳石岩底深度
      const stalactite =
        Math.abs(Math.sin(x * 0.28 + 1.3) * Math.cos(z * 0.28 - 0.7)) * 7.5;
      const underDepth = Math.max(
        3,
        Math.round(27 * Math.pow(1 - edgeRatio * edgeRatio, 1.28) + (edgeRatio < 0.8 ? stalactite : 0))
      );
      const bottomY = 12 - underDepth;

      // 决定地表草皮/白雪材质
      let topBlock = BlockId.GRASS_DREAM;
      if (topY >= 33) {
        topBlock = BlockId.SNOW_PURE;
      } else if (topY >= 29) {
        topBlock = (x + z) % 2 === 0 ? BlockId.SNOW_PURE : BlockId.CLIFF_STONE;
      } else if (x < -20 && z > -12 && z < 34) {
        // 西侧樱花幻林铺设浪漫落樱草地
        topBlock = BlockId.GRASS_SAKURA;
      }

      for (let y = bottomY; y <= topY; y++) {
        let b = BlockId.DEEP_ROCK;
        if (y === topY) b = topBlock;
        else if (y >= topY - 2 && topY < 30) b = BlockId.DIRT_WARM;
        else if (y >= bottomY + Math.floor(underDepth * 0.42)) b = BlockId.CLIFF_STONE;
        world.set(x, y, z, b);
      }

      // 大陆边缘垂挂翠绿仙藤
      if (edgeRatio > 0.88 && (Math.abs(x * 13 + z * 7) % 9 === 0)) {
        const vLen = 3 + (Math.abs(x + z) % 6);
        for (let vy = 1; vy <= vLen; vy++) {
          world.setIfAir(x, topY - vy, z, BlockId.LEAVES_EMERALD);
        }
      }
    }
  }

  // =========================================================
  // 2. 雕刻梦幻水系：雪山源泉 -> 皇家护城河 -> 蜿蜒小镇镜溪 -> 南崖天际大瀑布
  // =========================================================
  // 2.1 城堡前侧与东侧碧蓝护城河 (z ∈ [-17, -14], x ∈ [-20, 22], 水面 y = 20)
  for (let z = -17; z <= -13; z++) {
    for (let x = -21; x <= 22; x++) {
      if (Math.abs(x) <= 3) continue; // 留给木吊桥底墩或水脉连通
      world.fillBox(x, 18, z, x, 18, z, BlockId.SAND_PEARL);
      world.fillBox(x, 19, z, x, 20, z, BlockId.WATER);
      world.fillBox(x, 21, z, x, 24, z, BlockId.AIR);
    }
  }
  // 吊桥正下方水脉连通
  for (let z = -17; z <= -14; z++) {
    for (let x = -3; x <= 3; x++) {
      world.set(x, 18, z, BlockId.SAND_PEARL);
      world.set(x, 19, z, BlockId.WATER);
      world.set(x, 20, z, BlockId.WATER);
    }
  }

  // 2.2 西北雪峰飞流直下的源头高山瀑布 -> 注入西护城河 (x: -24..-21, z: -38..-16)
  for (let wy = 36; wy >= 21; wy--) {
    const wz = -34 + Math.floor((36 - wy) * 0.45);
    for (let wx = -24; wx <= -22; wx++) {
      world.set(wx, wy, wz, wy % 2 === 0 ? BlockId.WATERFALL_FOAM : BlockId.WATER);
      world.set(wx, wy + 1, wz + 1, BlockId.AIR);
    }
  }
  for (let z = -27; z <= -16; z++) {
    for (let x = -24; x <= -21; x++) {
      world.set(x, 19, z, BlockId.SAND_PEARL);
      world.set(x, 20, z, BlockId.WATER);
      world.fillBox(x, 21, z, x, 26, z, BlockId.AIR);
    }
  }
  waterfallEmitters.push([-23, 21, -26]);

  // 2.3 护城河东端跌水瀑布 (x = 20..22, z = -13 -> -6, y: 20 -> 11)
  for (let z = -13; z <= -5; z++) {
    const dropY = Math.max(11, 20 - (z + 13));
    for (let x = 19; x <= 22; x++) {
      world.set(x, dropY - 1, z, BlockId.CLIFF_STONE);
      world.set(x, dropY, z, z % 2 === 0 ? BlockId.WATERFALL_FOAM : BlockId.WATER);
      world.fillBox(x, dropY + 1, z, x, dropY + 5, z, BlockId.AIR);
    }
  }
  waterfallEmitters.push([20.5, 12, -5]);

  // 2.4 蜿蜒穿过小镇东侧并从石拱桥下流向南崖的翡翠镜溪 (z: -5 -> 51)
  let cliffEdgeZ = 48;
  let cliffEdgeX = 18;
  for (let z = -5; z <= 53; z++) {
    const centerStreamX = Math.round(20 + Math.sin(z * 0.11) * 2.2);
    // 检测是否已经到达主浮空岛南侧悬崖边缘
    if (z > 38 && world.get(centerStreamX, 10, z) === BlockId.AIR) {
      cliffEdgeZ = z - 1;
      cliffEdgeX = centerStreamX;
      break;
    }
    for (let dx = -2; dx <= 2; dx++) {
      const rx = centerStreamX + dx;
      if (Math.abs(dx) === 2) {
        // 珍珠白河滩浅岸
        if (world.get(rx, 11, z) !== BlockId.AIR) {
          world.set(rx, 11, z, BlockId.SAND_PEARL);
        }
      } else {
        world.set(rx, 9, z, BlockId.SAND_PEARL);
        world.set(rx, 10, z, BlockId.WATER);
        world.set(rx, 11, z, BlockId.WATER);
        world.fillBox(rx, 12, z, rx, 16, z, BlockId.AIR);
      }
    }
  }

  // 2.5 南侧断崖壮观的「云端天际大飞瀑」（直坠云海 28 格！）
  for (let wy = 11; wy >= -17; wy--) {
    for (let dx = -1; dx <= 1; dx++) {
      const b =
        (wy + Math.abs(dx)) % 3 === 0 ? BlockId.WATERFALL_FOAM : BlockId.WATER;
      world.set(cliffEdgeX + dx, wy, cliffEdgeZ + 1, b);
    }
  }
  waterfallEmitters.push([cliffEdgeX + 0.5, 11.2, cliffEdgeZ + 1.2]);
  waterfallEmitters.push([cliffEdgeX + 0.5, -16.5, cliffEdgeZ + 1.2]);

  // =========================================================
  // 3. 铺设童话小镇鹅卵石步道网络
  // =========================================================
  paintCobbleRoad(world, 0, -2, 0, 8, 2.2);         // 皇家御道连入星泉广场
  paintCobbleRoad(world, 8, 17, 15, 18, 1.8);       // 广场向东连往石拱桥
  paintCobbleRoad(world, 25, 18, 32, 18, 1.8);      // 拱桥向东连往花海大风车
  paintCobbleRoad(world, 28, 16, 33, -12, 1.5);     // 东岸北上连往七彩彩虹桥头
  paintCobbleRoad(world, -8, 15, -33, 12, 1.8);     // 广场向西深入千年绯樱神木
  paintCobbleRoad(world, 0, 23, -4, 36, 1.6);       // 广场向南延伸至南岸观景台

  // =========================================================
  // 4. 建造皇家星冠圣城、童话风车小镇、浮空群岛与彩虹桥
  // =========================================================
  const flags: FlagAnchor[] = [];
  buildRoyalCastle(world, flags);
  const town = buildFairytaleTown(world);
  const islands = buildFloatingIslandsAndWonders(world, waterfallEmitters);

  // =========================================================
  // 5. 精心校调的六大明信片级导览机位
  // =========================================================
  const landmarks: Record<string, LandmarkCamera> = {
    panorama: {
      label: '云端全景',
      position: new THREE.Vector3(58, 52, 78),
      target: new THREE.Vector3(0, 22, -6),
    },
    castle: {
      label: '星冠圣城',
      position: new THREE.Vector3(24, 44, 10),
      target: new THREE.Vector3(0, 38, -36),
    },
    plaza: {
      label: '星泉小镇',
      position: new THREE.Vector3(-22, 26, 42),
      target: new THREE.Vector3(0, 15, 14),
    },
    windmill: {
      label: '花海风车',
      position: new THREE.Vector3(14, 28, 42),
      target: new THREE.Vector3(34, 22, 18),
    },
    rainbow: {
      label: '彩虹星岛',
      position: new THREE.Vector3(44, 38, 26),
      target: new THREE.Vector3(54, 28, -12),
    },
    sakura: {
      label: '樱花神木',
      position: new THREE.Vector3(-18, 26, 34),
      target: new THREE.Vector3(-38, 22, 12),
    },
  };

  return { flags, town, islands, landmarks };
}

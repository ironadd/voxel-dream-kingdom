import { BlockId } from '../voxel/BlockTypes';
import { VoxelWorld } from '../voxel/VoxelMesher';
import { plantDreamTree } from './TownArchitect';

export interface WonderHooks {
  clockTowerDial: [number, number, number];     // 钟塔正面（朝向主岛 -X 方向）星盘中心
  clockPendulumPivot: [number, number, number]; // 钟塔镂空摆锤挂点
  ferrisHub: [number, number, number];          // 摩天轮转轴中心
  carouselCenter: [number, number, number];     // 旋转木马底座中心
}

export function buildWonderIslandsAndPark(world: VoxelWorld): WonderHooks {
  // =========================================================
  // 1. 东南云海奇观：「黄金星晷齿轮钟塔浮岛」 (cx = 60, topY = 36, cz = 38)
  // =========================================================
  const cx = 60;
  const topY = 36;
  const cz = 38;
  const radius = 12.5;
  const depth = 16;

  // 雕琢浮岛岩体与金秋暖林地表
  const ir = Math.ceil(radius + 2);
  for (let dz = -ir; dz <= ir; dz++) {
    for (let dx = -ir; dx <= ir; dx++) {
      const ang = Math.atan2(dz, dx);
      const effR = radius * (1 + 0.1 * Math.cos(ang * 4 + 1.2));
      const dist = Math.hypot(dx, dz);
      if (dist > effR) continue;

      const norm = dist / effR;
      const localDepth = Math.max(
        2,
        Math.round(depth * Math.pow(1 - norm * norm, 1.35))
      );
      for (let y = topY - localDepth; y <= topY; y++) {
        let b = BlockId.DEEP_ROCK;
        if (y === topY) b = norm > 0.85 ? BlockId.GOLD_CROWN : BlockId.GRASS_DREAM;
        else if (y >= topY - 2) b = BlockId.DIRT_WARM;
        else if (y >= topY - Math.floor(localDepth * 0.55)) b = BlockId.CLIFF_STONE;
        world.set(cx + dx, y, cz + dz, b);
      }
    }
  }
  // 浮岛底端璀璨黄金星核
  for (let dy = -4; dy <= 2; dy++) {
    const cr = Math.max(0, 2 - Math.floor(Math.abs(dy) * 0.6));
    for (let dz = -cr; dz <= cr; dz++) {
      for (let dx = -cr; dx <= cr; dx++) {
        if (Math.abs(dx) + Math.abs(dz) <= cr) {
          world.set(cx + dx, topY - depth + dy, cz + dz, BlockId.STAR_CORE);
        }
      }
    }
  }

  // 点缀两棵金秋银杏树衬托黄金钟塔
  plantDreamTree(world, cx + 6, cz - 6, 'golden', 1.15);
  plantDreamTree(world, cx - 5, cz + 7, 'golden', 1.0);

  // 建造高耸的「黄金星晷机械钟塔」主体 (base = topY + 1 = 37)
  const base = topY + 1;
  world.fillBox(cx - 5, base, cz - 5, cx + 5, base + 1, cz + 5, BlockId.CASTLE_BASE);

  // 下段与中段镂空钟摆室 (y: 2..15)
  for (let y = 2; y <= 15; y++) {
    for (let dz = -4; dz <= 4; dz++) {
      for (let dx = -4; dx <= 4; dx++) {
        const onX = Math.abs(dx) === 4;
        const onZ = Math.abs(dz) === 4;
        if (!onX && !onZ) continue;

        // 中段 (y: 6..13) 四面开大拱窗露出内部金色摇摆钟摆！
        if (y >= 6 && y <= 13 && (Math.abs(dx) <= 2 || Math.abs(dz) <= 2) && !(onX && onZ)) {
          continue;
        }

        let b = BlockId.CASTLE_WALL;
        if (onX && onZ) b = BlockId.TIMBER_OAK;
        if (y === 5 || y === 14 || y === 15) b = BlockId.GOLD_CROWN;
        world.set(cx + dx, base + y, cz + dz, b);
      }
    }
  }

  // 上段星晷巨型表盘室 (y: 16..24, 略向外挑出 1 格显得威严立体)
  for (let y = 16; y <= 24; y++) {
    for (let dz = -5; dz <= 5; dz++) {
      for (let dx = -5; dx <= 5; dx++) {
        const onX = Math.abs(dx) === 5;
        const onZ = Math.abs(dz) === 5;
        if (!onX && !onZ && y < 24) continue;

        let b = BlockId.CASTLE_WALL;
        if (onX && onZ) b = BlockId.GOLD_CROWN;
        else if (y === 16 || y === 24) b = BlockId.GOLD_CROWN;
        // 四面镶嵌圆形发光表盘底衬
        const dialDist = Math.hypot(
          onX ? dz : dx,
          y - 20
        );
        if (dialDist <= 3.2 && !(onX && onZ)) {
          b = dialDist >= 2.4 ? BlockId.GOLD_CROWN : BlockId.PLAZA_MARBLE;
        }
        world.set(cx + dx, base + y, cz + dz, b);
      }
    }
  }

  // 钟塔高挑皇家蓝镶金天文尖顶 (y: 25..35)
  for (let ry = 0; ry <= 10; ry++) {
    const r = Math.max(0, Math.round(5.2 * (1 - ry / 10.5)));
    for (let dz = -r; dz <= r; dz++) {
      for (let dx = -r; dx <= r; dx++) {
        const isCorner = Math.abs(dx) === r && Math.abs(dz) === r;
        world.set(
          cx + dx,
          base + 25 + ry,
          cz + dz,
          isCorner ? BlockId.GOLD_CROWN : BlockId.ROOF_ROYAL_BLUE
        );
      }
    }
  }
  world.fillBox(cx, base + 36, cz, cx, base + 38, cz, BlockId.GOLD_CROWN);
  world.set(cx, base + 39, cz, BlockId.STAR_CORE);

  // =========================================================
  // 2. 南岸临崖「星梦游乐园」（摩天轮站台 + 旋转木马圆台 + 银河列车小站）
  // =========================================================
  const fx = -18;
  const fz = 40;
  const fy = 12;

  // 铺设游乐园星纹大理石观景平台 (x: -26..4, z: 36..45)
  for (let z = 36; z <= 45; z++) {
    for (let x = -25; x <= 3; x++) {
      if (world.get(x, 10, z) === BlockId.AIR) continue;
      world.fillBox(x, 10, z, x, fy, z, BlockId.PLAZA_MARBLE);
      if (z === 45 && x % 3 === 0) {
        world.set(x, fy + 1, z, BlockId.GOLD_CROWN);
        world.set(x, fy + 2, z, BlockId.LANTERN_GLOW);
      }
    }
  }

  // 摩天轮前后双 A 字象牙白支架（留出中间 z = fz 供大转轮旋转）
  for (let h = 1; h <= 14; h++) {
    const spread = Math.round((14 - h) * 0.45);
    for (const sz of [fz - 2, fz + 2]) {
      world.set(fx - spread, fy + h, sz, h === 14 ? BlockId.GOLD_CROWN : BlockId.CASTLE_PILLAR);
      world.set(fx + spread, fy + h, sz, h === 14 ? BlockId.GOLD_CROWN : BlockId.CASTLE_PILLAR);
    }
  }

  // 旋转木马精致圆形大理石花边底座 (cx = -3, cz = 40)
  const carX = -3;
  const carZ = 40;
  for (let dz = -4; dz <= 4; dz++) {
    for (let dx = -4; dx <= 4; dx++) {
      const d = Math.hypot(dx, dz);
      if (d <= 4.2) {
        world.set(
          carX + dx,
          fy + 1,
          carZ + dz,
          d >= 3.3 ? BlockId.GOLD_CROWN : BlockId.PLAZA_MARBLE
        );
      }
    }
  }

  // 银河列车云端候车亭小高台 (x: 4..11, z: 38..42, 高架月台 y = 21)
  for (const px of [5, 10]) {
    for (const pz of [39, 42]) {
      world.fillBox(px, fy + 1, pz, px, 21, pz, BlockId.CASTLE_PILLAR);
    }
  }
  world.fillBox(4, 21, 38, 11, 21, 43, BlockId.PLANKS_WARM);
  world.set(4, 22, 38, BlockId.LANTERN_GLOW);
  world.set(11, 22, 38, BlockId.LANTERN_GLOW);

  return {
    clockTowerDial: [cx - 5.4, base + 20, cz],
    clockPendulumPivot: [cx, base + 14, cz],
    ferrisHub: [fx, fy + 15, fz],
    carouselCenter: [carX, fy + 2, carZ],
  };
}

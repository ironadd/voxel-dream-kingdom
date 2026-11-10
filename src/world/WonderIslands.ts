import { BlockId } from '../voxel/BlockTypes';
import { VoxelWorld } from '../voxel/VoxelMesher';
import { plantDreamTree } from './TownArchitect';

export interface WonderHooks {
  clockTowerCenter: [number, number, number];   // [cx, base, cz] 整数体素基准，方便精确对齐外表面
  clockPendulumPivot: [number, number, number]; // 钟塔镂空摆锤挂点
  ferrisHub: [number, number, number];          // 摩天轮转轴中心
  carouselCenter: [number, number, number];     // 旋转木马底座中心
}

export function buildWonderIslandsAndPark(world: VoxelWorld): WonderHooks {
  // =========================================================
  // 1. 东南云海奇观：「黄金星晷齿轮钟塔浮岛」 (cx = 78, topY = 38, cz = 22)
  //    外移至开阔东南云海，既不遮挡全景镜头，也远离彩虹桥与风车！
  // =========================================================
  const cx = 78;
  const topY = 38;
  const cz = 22;
  const radius = 14.0;
  const depth = 16;

  const ir = Math.ceil(radius + 2);
  for (let dz = -ir; dz <= ir; dz++) {
    for (let dx = -ir; dx <= ir; dx++) {
      const ang = Math.atan2(dz, dx);
      const effR = radius * (1 + 0.08 * Math.cos(ang * 4 + 1.2));
      const dist = Math.hypot(dx, dz);
      if (dist > effR) continue;

      const norm = dist / effR;
      const localDepth = Math.max(
        2,
        Math.round(depth * Math.pow(1 - norm * norm, 1.35))
      );
      for (let y = topY - localDepth; y <= topY; y++) {
        let b = BlockId.DEEP_ROCK;
        if (y === topY) b = norm > 0.86 ? BlockId.GOLD_CROWN : BlockId.GRASS_DREAM;
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

  // 金秋银杏树种植在钟塔东后方远端 (dx = +9)，远离西侧表盘与南侧啮合齿轮！
  plantDreamTree(world, cx + 9, cz - 7, 'golden', 1.05);
  plantDreamTree(world, cx + 9, cz + 7, 'golden', 1.0);

  // 钟塔西前侧铺设平整大理石迎宾广场 (x: cx-11..cx-6, z: cz-4..cz+4)
  for (let z = cz - 4; z <= cz + 4; z++) {
    for (let x = cx - 11; x <= cx - 6; x++) {
      if (world.get(x, topY, z) !== BlockId.AIR) {
        world.set(x, topY, z, BlockId.PLAZA_MARBLE);
      }
    }
  }

  // 建造高耸的「黄金星晷机械钟塔」主体 (base = topY + 1 = 39)
  const base = topY + 1;
  world.fillBox(cx - 5, base, cz - 5, cx + 5, base + 1, cz + 5, BlockId.CASTLE_BASE);

  // 下段与中段镂空钟摆室 (y: 2..15, 墙体占据 [cx-4..cx+4, cz-4..cz+4])
  for (let y = 2; y <= 15; y++) {
    for (let dz = -4; dz <= 4; dz++) {
      for (let dx = -4; dx <= 4; dx++) {
        const onX = Math.abs(dx) === 4;
        const onZ = Math.abs(dz) === 4;
        if (!onX && !onZ) {
          world.set(cx + dx, base + y, cz + dz, BlockId.AIR);
          continue;
        }

        // 中段 (y: 6..13) 东西南北四面开高拱窗，通透展示内部摇摆黄金大钟摆！
        if (
          y >= 6 &&
          y <= 13 &&
          ((onX && Math.abs(dz) <= 2) || (onZ && Math.abs(dx) <= 2)) &&
          !(onX && onZ)
        ) {
          world.set(cx + dx, base + y, cz + dz, BlockId.AIR);
          continue;
        }

        let b = BlockId.CASTLE_WALL;
        if (onX && onZ) b = BlockId.TIMBER_OAK;
        if (y === 5 || y === 14 || y === 15) b = BlockId.GOLD_CROWN;
        world.set(cx + dx, base + y, cz + dz, b);
      }
    }
  }

  // 上段星晷巨型表盘室 (y: 16..24, 墙体占据 [cx-5..cx+5, cz-5..cz+5])
  for (let y = 16; y <= 24; y++) {
    for (let dz = -5; dz <= 5; dz++) {
      for (let dx = -5; dx <= 5; dx++) {
        const onX = Math.abs(dx) === 5;
        const onZ = Math.abs(dz) === 5;
        if (!onX && !onZ && y < 24) continue;

        let b = BlockId.CASTLE_WALL;
        if (onX && onZ) b = BlockId.GOLD_CROWN;
        else if (y === 16 || y === 24) b = BlockId.GOLD_CROWN;

        const dialDist = Math.hypot(onX ? dz : dx, y - 20);
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
  // 2. 南岸临崖「星梦游乐园」（摩天轮站台 + 旋转木马圆台 + 临海列车月台）
  // =========================================================
  const fx = -18;
  const fz = 40;
  const fy = 12;

  for (let z = 36; z <= 46; z++) {
    for (let x = -25; x <= 12; x++) {
      if (world.get(x, 10, z) === BlockId.AIR) continue;
      world.fillBox(x, 10, z, x, fy, z, BlockId.PLAZA_MARBLE);
    }
  }

  // 摩天轮前后双 A 字象牙白支架
  for (let h = 1; h <= 14; h++) {
    const spread = Math.round((14 - h) * 0.45);
    for (const sz of [fz - 2, fz + 2]) {
      world.set(fx - spread, fy + h, sz, h === 14 ? BlockId.GOLD_CROWN : BlockId.CASTLE_PILLAR);
      world.set(fx + spread, fy + h, sz, h === 14 ? BlockId.GOLD_CROWN : BlockId.CASTLE_PILLAR);
    }
  }

  // 旋转木马圆形大理石底座 (cx = -3, cz = 40)
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

  // 银河列车南崖最外沿云端候车亭 (x: 5..12, z: 45..49, 站台面 y = 17，带拾级而上的木阶梯！)
  for (const px of [5, 12]) {
    for (const pz of [45, 49]) {
      world.fillBox(px, fy, pz, px, 17, pz, BlockId.CASTLE_PILLAR);
    }
  }
  world.fillBox(5, 17, 45, 12, 17, 49, BlockId.PLANKS_WARM);
  world.set(5, 18, 45, BlockId.LANTERN_GLOW);
  world.set(12, 18, 45, BlockId.LANTERN_GLOW);
  // 从 y = 13 到 y = 17 的迎宾登车阶梯 (z: 40 -> 44)
  for (let step = 0; step < 5; step++) {
    world.fillBox(7, fy + 1, 40 + step, 10, fy + 1 + step, 40 + step, BlockId.PLANKS_WARM);
  }

  return {
    clockTowerCenter: [cx, base, cz],
    clockPendulumPivot: [cx, base + 14, cz],
    ferrisHub: [fx, fy + 15, fz],
    carouselCenter: [carX, fy + 2, carZ],
  };
}

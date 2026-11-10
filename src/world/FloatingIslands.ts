import { BlockId } from '../voxel/BlockTypes';
import { VoxelWorld } from '../voxel/VoxelMesher';
import { plantDreamTree } from './TownArchitect';

export interface FloatingIslandHooks {
  observatoryCenter: [number, number, number];
  lighthouseTop: [number, number, number];
  waterfallEmitters: [number, number, number][];
}

/** 通用倒锥形浮空岛生成辅助函数 */
function carveFloatingIsle(
  world: VoxelWorld,
  cx: number,
  topY: number,
  cz: number,
  radius: number,
  depth: number,
  topBlock: BlockId,
  bottomCrystal: BlockId
): void {
  const ir = Math.ceil(radius + 2);
  for (let dz = -ir; dz <= ir; dz++) {
    for (let dx = -ir; dx <= ir; dx++) {
      // 有机花瓣状边缘扰动
      const angle = Math.atan2(dz, dx);
      const wobble =
        1 + 0.12 * Math.sin(angle * 3 + cx) + 0.08 * Math.cos(angle * 5 - cz);
      const effR = radius * wobble;
      const dist = Math.hypot(dx, dz);
      if (dist > effR) continue;

      const norm = dist / effR;
      // 钟乳石状起伏下锥底
      const spike =
        Math.abs(Math.sin(dx * 0.55 + cz) * Math.cos(dz * 0.55 - cx)) * 4.5;
      const localDepth = Math.max(
        2,
        Math.round(depth * Math.pow(1 - norm * norm, 1.35) + (norm < 0.7 ? spike : 0))
      );
      const surfBump = norm < 0.55 ? Math.round((1 - norm) * 1.4) : 0;
      const sy = topY + surfBump;

      for (let y = sy - localDepth; y <= sy; y++) {
        let b = BlockId.DEEP_ROCK;
        if (y === sy) b = topBlock;
        else if (y >= sy - 2) b = BlockId.DIRT_WARM;
        else if (y >= sy - Math.floor(localDepth * 0.55)) b = BlockId.CLIFF_STONE;
        world.set(cx + dx, y, cz + dz, b);
      }

      // 边缘垂挂像素藤蔓
      if (norm > 0.84 && (Math.abs(dx * 7 + dz * 11) % 7 === 0)) {
        const vineLen = 3 + (Math.abs(dx + dz) % 5);
        for (let vy = 1; vy <= vineLen; vy++) {
          world.setIfAir(cx + dx, sy - vy, cz + dz, BlockId.LEAVES_EMERALD);
        }
      }
    }
  }

  // 浮岛底部能量水晶尖锥
  const tipY = topY - depth - 1;
  for (let dy = -3; dy <= 3; dy++) {
    const cr = 2 - Math.floor(Math.abs(dy) * 0.6);
    for (let dz = -cr; dz <= cr; dz++) {
      for (let dx = -cr; dx <= cr; dx++) {
        if (Math.abs(dx) + Math.abs(dz) <= cr) {
          world.set(cx + dx, tipY + dy, cz + dz, bottomCrystal);
        }
      }
    }
  }
}

/** 斜向生长的巨型发光水晶柱 */
function growCrystalSpike(
  world: VoxelWorld,
  ox: number,
  oy: number,
  oz: number,
  dx: number,
  dy: number,
  dz: number,
  length: number,
  baseRadius: number,
  crystalBlock: BlockId
): void {
  for (let i = 0; i <= length; i++) {
    const t = i / length;
    const px = Math.round(ox + dx * i);
    const py = Math.round(oy + dy * i);
    const pz = Math.round(oz + dz * i);
    const r = Math.max(0, Math.round(baseRadius * (1 - t * 0.85)));
    for (let z = -r; z <= r; z++) {
      for (let y = -r; y <= r; y++) {
        for (let x = -r; x <= r; x++) {
          if (Math.abs(x) + Math.abs(y) + Math.abs(z) <= r + 0.5) {
            world.set(px + x, py + y, pz + z, crystalBlock);
          }
        }
      }
    }
  }
}

export function buildFloatingIslandsAndWonders(
  world: VoxelWorld,
  waterfallEmitters: [number, number, number][]
): FloatingIslandHooks {
  // =========================================================
  // 1. 主浮空大陆底部的「天空之城拉普达巨型能量水晶核」 (0, -21, -8)
  // =========================================================
  const coreX = 0;
  const coreY = -20;
  const coreZ = -8;
  for (let dy = -7; dy <= 6; dy++) {
    const r = Math.max(0, Math.round(5.2 * (1 - Math.abs(dy) / 7.5)));
    for (let dz = -r; dz <= r; dz++) {
      for (let dx = -r; dx <= r; dx++) {
        if (Math.abs(dx) + Math.abs(dz) <= r + 1) {
          world.set(coreX + dx, coreY + dy, coreZ + dz, BlockId.CRYSTAL_CYAN);
        }
      }
    }
  }
  // 斜向环绕副水晶刺
  growCrystalSpike(world, -6, -15, -6, -0.7, -0.8, 0.3, 8, 1.6, BlockId.CRYSTAL_CYAN);
  growCrystalSpike(world, 6, -15, -10, 0.7, -0.8, -0.3, 8, 1.6, BlockId.CRYSTAL_CYAN);
  growCrystalSpike(world, 0, -16, 2, 0.2, -0.85, 0.7, 7, 1.5, BlockId.CRYSTAL_AMETHYST);
  growCrystalSpike(world, -3, -16, -18, -0.4, -0.85, -0.6, 7, 1.5, BlockId.CRYSTAL_AMETHYST);

  // =========================================================
  // 2. 东侧天际奇观：紫晶星象台浮岛 + 七彩像素彩虹桥
  // =========================================================
  const obsX = 64;
  const obsY = 25;
  const obsZ = -12;
  carveFloatingIsle(
    world,
    obsX,
    obsY,
    obsZ,
    13.5,
    16,
    BlockId.GRASS_SAKURA,
    BlockId.CRYSTAL_AMETHYST
  );

  // 星象岛中央洁白大理石星坛与六根鎏金罗马柱
  const altarY = obsY + 1;
  for (let dz = -6; dz <= 6; dz++) {
    for (let dx = -6; dx <= 6; dx++) {
      const d = Math.hypot(dx, dz);
      if (d <= 6.2) {
        world.set(
          obsX + dx,
          altarY,
          obsZ + dz,
          d >= 5.1 ? BlockId.GOLD_CROWN : BlockId.PLAZA_MARBLE
        );
      }
    }
  }
  for (let i = 0; i < 6; i++) {
    const ang = (i * Math.PI) / 3;
    const px = obsX + Math.round(Math.cos(ang) * 5);
    const pz = obsZ + Math.round(Math.sin(ang) * 5);
    world.fillBox(px, altarY + 1, pz, px, altarY + 6, pz, BlockId.CASTLE_PILLAR);
    world.set(px, altarY + 7, pz, BlockId.GOLD_CROWN);
    world.set(px, altarY + 8, pz, BlockId.LANTERN_GLOW);
  }
  // 岛侧拔地而起的巨型梦幻紫水晶簇
  growCrystalSpike(world, obsX + 5, altarY, obsZ - 6, 0.35, 0.95, -0.25, 9, 2.0, BlockId.CRYSTAL_AMETHYST);
  growCrystalSpike(world, obsX + 8, altarY, obsZ - 3, 0.5, 0.85, 0.1, 6, 1.4, BlockId.CRYSTAL_CYAN);
  growCrystalSpike(world, obsX - 4, altarY, obsZ - 8, -0.3, 0.9, -0.3, 7, 1.5, BlockId.CRYSTAL_AMETHYST);

  // 连通主大陆东岸 (34, 15, -12) 与紫晶星象岛 (53, 25, -12) 的七彩半透明彩虹拱桥！
  const rainbowBands: BlockId[] = [
    BlockId.RAINBOW_RED,
    BlockId.RAINBOW_ORANGE,
    BlockId.RAINBOW_YELLOW,
    BlockId.RAINBOW_GREEN,
    BlockId.RAINBOW_CYAN,
    BlockId.RAINBOW_BLUE,
    BlockId.RAINBOW_VIOLET,
  ];
  // 主岛桥头白玉拱门基座
  const startX = 33;
  const endX = 52;
  const startY = world.getSurfaceY(startX, -12, 30, 10);
  world.fillBox(startX - 1, startY, -16, startX + 1, startY + 1, -8, BlockId.PLAZA_MARBLE);
  world.fillBox(startX, startY + 2, -16, startX, startY + 6, -16, BlockId.CASTLE_PILLAR);
  world.fillBox(startX, startY + 2, -8, startX, startY + 6, -8, BlockId.CASTLE_PILLAR);
  world.set(startX, startY + 7, -16, BlockId.STAR_CORE);
  world.set(startX, startY + 7, -8, BlockId.STAR_CORE);

  for (let x = startX; x <= endX; x++) {
    const t = (x - startX) / (endX - startX);
    // 线性升高 + 优雅高拱弧度
    const baseBridgeY = startY + 1 + t * (obsY + 1 - (startY + 1));
    const archLift = Math.sin(t * Math.PI) * 7.5;
    const by = Math.round(baseBridgeY + archLift);
    for (let bi = 0; bi < 7; bi++) {
      const bz = -15 + bi;
      world.set(x, by, bz, rainbowBands[bi]);
      // 桥底加厚一格让虹桥饱满不断裂
      world.setIfAir(x, by - 1, bz, rainbowBands[bi]);
    }
  }

  // =========================================================
  // 3. 西南云海奇观：云端星辉灯塔浮岛 (-60, 21, 30)
  // =========================================================
  const lhX = -60;
  const lhY = 21;
  const lhZ = 30;
  carveFloatingIsle(
    world,
    lhX,
    lhY,
    lhZ,
    10.5,
    14,
    BlockId.GRASS_DREAM,
    BlockId.CRYSTAL_CYAN
  );
  plantDreamTree(world, lhX - 5, lhZ - 3, 'sakura', 1.0);

  // 红白相间童话灯塔与金色星芒灯室
  const towerBase = lhY + 1;
  for (let y = 0; y <= 17; y++) {
    const r = 3.2 - (y / 17) * 1.0;
    const ir = Math.ceil(r);
    const stripeBlock =
      Math.floor(y / 4) % 2 === 0 ? BlockId.CASTLE_WALL : BlockId.ROOF_CORAL;
    for (let dz = -ir; dz <= ir; dz++) {
      for (let dx = -ir; dx <= ir; dx++) {
        if (dx * dx + dz * dz <= r * r + 0.15) {
          world.set(lhX + dx, towerBase + y, lhZ + dz, y === 0 ? BlockId.CASTLE_BASE : stripeBlock);
        }
      }
    }
  }
  // 灯塔观景金色挑台与全透发光星核灯室
  world.fillBox(lhX - 3, towerBase + 18, lhZ - 3, lhX + 3, towerBase + 18, lhZ + 3, BlockId.GOLD_CROWN);
  world.fillBox(lhX - 1, towerBase + 19, lhZ - 1, lhX + 1, towerBase + 21, lhZ + 1, BlockId.STAR_CORE);
  for (let ry = 0; ry <= 4; ry++) {
    const r = 3 - ry * 0.7;
    const ir = Math.ceil(r);
    for (let dz = -ir; dz <= ir; dz++) {
      for (let dx = -ir; dx <= ir; dx++) {
        if (dx * dx + dz * dz <= r * r + 0.2) {
          world.set(lhX + dx, towerBase + 22 + ry, lhZ + dz, BlockId.ROOF_ROYAL_BLUE);
        }
      }
    }
  }
  world.set(lhX, towerBase + 27, lhZ, BlockId.GOLD_CROWN);

  // =========================================================
  // 4. 西北高空奇观：仙灵落樱浮岛与天际悬瀑 (-56, 33, -34)
  // =========================================================
  const skX = -56;
  const skY = 33;
  const skZ = -34;
  carveFloatingIsle(
    world,
    skX,
    skY,
    skZ,
    9.2,
    12,
    BlockId.GRASS_SAKURA,
    BlockId.CRYSTAL_AMETHYST
  );
  plantDreamTree(world, skX - 1, skZ, 'sakura', 1.35);
  plantDreamTree(world, skX + 4, skZ - 3, 'sakura_light', 0.95);

  // 小浮岛清泉与悬空飞瀑直落云海
  world.fillBox(skX + 2, skY, skZ + 2, skX + 5, skY, skZ + 5, BlockId.WATER);
  for (let wy = skY; wy >= skY - 22; wy--) {
    world.set(skX + 6, wy, skZ + 4, wy % 3 === 0 ? BlockId.WATERFALL_FOAM : BlockId.WATER);
    world.set(skX + 6, wy, skZ + 5, BlockId.WATER);
  }
  waterfallEmitters.push([skX + 6.5, skY - 22, skZ + 4.5]);

  return {
    observatoryCenter: [obsX + 0.5, altarY + 9.5, obsZ + 0.5],
    lighthouseTop: [lhX + 0.5, towerBase + 20.5, lhZ + 0.5],
    waterfallEmitters,
  };
}

import { BlockId } from '../voxel/BlockTypes';
import { VoxelWorld } from '../voxel/VoxelMesher';

export interface FrostPalaceHooks {
  palaceCenter: [number, number, number];
  crownCenter: [number, number, number];
  thronePos: [number, number, number];
}

/** 绘制斜刺苍穹的巨型半透明冰晶剑棱（用于神殿护翼与底座冰刺） */
function growIceBlade(
  world: VoxelWorld,
  ox: number,
  oy: number,
  oz: number,
  dx: number,
  dy: number,
  dz: number,
  length: number,
  baseRadius: number,
  coreGlow = false
): void {
  for (let i = 0; i <= length; i++) {
    const t = i / length;
    const px = Math.round(ox + dx * i);
    const py = Math.round(oy + dy * i);
    const pz = Math.round(oz + dz * i);
    const r = Math.max(0, baseRadius * (1 - t * 0.92));
    const ir = Math.ceil(r);
    for (let z = -ir; z <= ir; z++) {
      for (let y = -ir; y <= ir; y++) {
        for (let x = -ir; x <= ir; x++) {
          const manhattan = Math.abs(x) + Math.abs(y) + Math.abs(z);
          if (manhattan <= r + 0.45) {
            const isCore = coreGlow && manhattan === 0 && i % 2 === 0;
            world.set(
              px + x,
              py + y,
              pz + z,
              isCore ? BlockId.FROST_RUNE_GLOW : BlockId.GLACIER_ICE
            );
          }
        }
      }
    }
  }
}

/** 建造棱角凌厉的八棱哥特冰枪高塔 */
function buildFrostLanceSpire(
  world: VoxelWorld,
  cx: number,
  baseY: number,
  cz: number,
  radius: number,
  shaftHeight: number,
  lanceHeight: number
): void {
  const ir = Math.ceil(radius);
  for (let y = 0; y < shaftHeight; y++) {
    const wy = baseY + y;
    for (let dz = -ir; dz <= ir; dz++) {
      for (let dx = -ir; dx <= ir; dx++) {
        const metric =
          Math.max(Math.abs(dx), Math.abs(dz)) + 0.42 * Math.min(Math.abs(dx), Math.abs(dz));
        if (metric > radius + 0.25) continue;

        const isShell = metric >= radius - 0.95;
        if (!isShell && y > 0 && y < shaftHeight - 1) {
          world.set(cx + dx, wy, cz + dz, BlockId.AIR);
          continue;
        }

        let b = BlockId.FROST_BRICK;
        if (y < 3 || y === shaftHeight - 1) {
          b = BlockId.DARK_ABYSS_ICE;
        } else if (Math.abs(dx) === Math.abs(dz) && isShell) {
          b = BlockId.DARK_ABYSS_ICE;
        } else if ((dx === 0 || dz === 0) && y >= 4 && y <= shaftHeight - 4 && y % 3 !== 0) {
          b = BlockId.FROST_RUNE_GLOW;
        }
        world.set(cx + dx, wy, cz + dz, b);
      }
    }
  }

  const crownY = baseY + shaftHeight;
  for (const [nx, nz] of [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
    [1, 1],
    [-1, 1],
    [1, -1],
    [-1, -1],
  ]) {
    const dist = nx !== 0 && nz !== 0 ? Math.round(radius * 0.85) : Math.round(radius + 1);
    const px = cx + nx * dist;
    const pz = cz + nz * dist;
    world.set(px, crownY, pz, BlockId.DARK_ABYSS_ICE);
    world.set(px, crownY + 1, pz, BlockId.GLACIER_ICE);
    world.set(px, crownY + 2, pz, BlockId.GLACIER_ICE);
    if (nx === 0 || nz === 0) {
      world.set(px, crownY + 3, pz, BlockId.FROST_RUNE_GLOW);
    }
  }

  for (let ly = 0; ly <= lanceHeight; ly++) {
    const t = ly / lanceHeight;
    const curR = (radius + 0.6) * Math.pow(1 - t, 1.35);
    const cr = Math.ceil(curR);
    for (let dz = -cr; dz <= cr; dz++) {
      for (let dx = -cr; dx <= cr; dx++) {
        if (Math.abs(dx) + Math.abs(dz) <= curR * 1.35 + 0.2) {
          const isCenter = dx === 0 && dz === 0;
          world.set(
            cx + dx,
            crownY + ly,
            cz + dz,
            isCenter && ly % 2 === 0 ? BlockId.FROST_RUNE_GLOW : BlockId.GLACIER_ICE
          );
        }
      }
    }
  }
  world.set(cx, crownY + lanceHeight + 1, cz, BlockId.FROST_RUNE_GLOW);
  world.set(cx, crownY + lanceHeight + 2, cz, BlockId.STAR_CORE);
}

/** 在九霄云外建造「凛冬星冕 · 凌霄冰霜神殿」 (cx = 0, baseY = 82, cz = -82) */
export function buildCelestialFrostPalace(world: VoxelWorld): FrostPalaceHooks {
  const cx = 0;
  const baseY = 82;
  const cz = -82;

  // =========================================================
  // 1. 八芒星浮空寒冰圣坛基座与倒悬冰棱深渊底 (y: 55..82)
  // =========================================================
  const platR = 23;
  for (let dz = -platR; dz <= platR; dz++) {
    for (let dx = -platR; dx <= platR; dx++) {
      const angle = Math.atan2(dz, dx);
      const starFactor = 1 + 0.14 * Math.cos(angle * 4);
      const effR = 21.5 * starFactor;
      const dist = Math.hypot(dx, dz);
      if (dist > effR) continue;

      const norm = dist / effR;
      const icicle =
        Math.abs(Math.sin(dx * 0.65) * Math.cos(dz * 0.65)) * 8.5 +
        (dx % 4 === 0 && dz % 4 === 0 ? 3 : 0);
      const depth = Math.max(
        2,
        Math.round(16 * Math.pow(1 - norm * norm, 1.45) + (norm < 0.82 ? icicle : 0))
      );

      for (let y = baseY - depth; y <= baseY; y++) {
        let b = BlockId.FROST_BRICK;
        if (y === baseY) {
          b = norm > 0.88 ? BlockId.DARK_ABYSS_ICE : BlockId.FROST_BRICK;
        } else if (y === baseY - 1 && norm > 0.85) {
          b = BlockId.FROST_RUNE_GLOW;
        } else if (y < baseY - Math.floor(depth * 0.55)) {
          b = BlockId.GLACIER_ICE;
        } else {
          b = BlockId.DARK_ABYSS_ICE;
        }
        world.set(cx + dx, y, cz + dz, b);
      }
    }
  }

  // 基座正下方倒刺而出的极寒母晶（尖端最低至 Y = 54）
  growIceBlade(world, cx, baseY - 16, cz, 0, -1, 0, 11, 3.0, true);

  // 左右两侧展开的 6 道巨型半透明「极光冰凰神翼」
  const wings: [number, number, number, number, number, number, number][] = [
    [-16, baseY - 2, cz + 2, -1.0, 0.55, 0.15, 16],
    [-18, baseY - 4, cz - 4, -1.05, 0.32, -0.1, 13],
    [-15, baseY - 5, cz - 9, -0.9, 0.12, -0.25, 10],
    [16, baseY - 2, cz + 2, 1.0, 0.55, 0.15, 16],
    [18, baseY - 4, cz - 4, 1.05, 0.32, -0.1, 13],
    [15, baseY - 5, cz - 9, 0.9, 0.12, -0.25, 10],
  ];
  for (const [wx, wy, wz, dx, dy, dz, len] of wings) {
    growIceBlade(world, wx, wy, wz, dx, dy, dz, len, 2.1, true);
  }

  // =========================================================
  // 2. 凌霄冰霜主圣殿大殿外壳 (x: -13..13, z: -92..-72, 高 18)
  // =========================================================
  const hallH = 18;
  for (let y = 1; y <= hallH; y++) {
    for (let z = cz - 10; z <= cz + 10; z++) {
      for (let x = cx - 13; x <= cx + 13; x++) {
        const onX = x === cx - 13 || x === cx + 13;
        const onZ = z === cz - 10 || z === cz + 10;
        const isTop = y === hallH;
        if (!onX && !onZ && !isTop) continue;

        let b = BlockId.FROST_BRICK;
        if (y <= 3 || y === hallH || (onX && onZ)) {
          b = BlockId.DARK_ABYSS_ICE;
        } else if (Math.abs(x - cx) % 4 === 0 && onZ) {
          b = BlockId.FROST_PILLAR;
        } else if (Math.abs(z - cz) % 4 === 0 && onX) {
          b = BlockId.FROST_PILLAR;
        }
        world.set(x, baseY + y, z, b);
      }
    }
  }

  // 大殿陡峭冰晶尖脊屋顶
  for (let ry = 0; ry <= 9; ry++) {
    const hw = 13 - ry * 1.3;
    if (hw < 0) break;
    const ihw = Math.round(hw);
    for (let z = cz - 11; z <= cz + 11; z++) {
      for (let x = cx - ihw; x <= cx + ihw; x++) {
        if (Math.abs(x - cx) >= ihw - 1 || ihw <= 1) {
          world.set(
            x,
            baseY + hallH + 1 + ry,
            z,
            ihw <= 1 && z % 2 === 0 ? BlockId.FROST_RUNE_GLOW : BlockId.GLACIER_ICE
          );
        }
      }
    }
  }

  // =========================================================
  // 3. 五大凌霄冰枪尖塔 & 顶端「诸神悬浮冰霜星冠」
  //    注意：中央主塔从 hallH (y = baseY + 18) 屋顶之上拔起，绝不向下穿入一楼大厅！
  // =========================================================
  buildFrostLanceSpire(world, cx, baseY + hallH, cz - 2, 4.8, 17, 16);
  buildFrostLanceSpire(world, cx - 13, baseY, cz + 10, 3.8, 22, 14);
  buildFrostLanceSpire(world, cx + 13, baseY, cz + 10, 3.8, 22, 14);
  buildFrostLanceSpire(world, cx - 14, baseY, cz - 10, 4.2, 27, 16);
  buildFrostLanceSpire(world, cx + 14, baseY, cz - 10, 4.2, 27, 16);

  const crownY = 139;
  const crownR = 6;
  for (let deg = 0; deg < 360; deg += 15) {
    const rad = (deg * Math.PI) / 180;
    const rx = cx + Math.round(Math.cos(rad) * crownR);
    const rz = cz - 2 + Math.round(Math.sin(rad) * crownR);
    world.set(rx, crownY, rz, BlockId.DARK_ABYSS_ICE);
    world.set(rx, crownY + 1, rz, BlockId.GLACIER_ICE);
    if (deg % 45 === 0) {
      world.set(rx, crownY + 2, rz, BlockId.GLACIER_ICE);
      world.set(rx, crownY + 3, rz, BlockId.FROST_RUNE_GLOW);
      world.set(rx, crownY + 4, rz, BlockId.STAR_CORE);
    }
  }

  // =========================================================
  // 4. 精雕一楼「冰封星冕王座内殿」与敞亮正门廊（彻底消除门内穿模阻挡！）
  // =========================================================
  // 清空大殿内部空间 (x: -9..9, y: 1..16, z: -90..-73)
  world.fillBox(cx - 9, baseY + 1, cz - 8, cx + 9, baseY + 16, cz + 9, BlockId.AIR);

  // 打开正门尖拱圣门 (z = cz + 10 = -72，包含两侧双塔侵入门洞的残块一并清空！)
  for (let y = 1; y <= 10; y++) {
    const halfOpen = Math.max(0, 4 - Math.floor(y * 0.4));
    for (let dx = -halfOpen; dx <= halfOpen; dx++) {
      world.set(cx + dx, baseY + y, cz + 10, BlockId.AIR);
      world.set(cx + dx, baseY + y, cz + 11, BlockId.AIR);
    }
  }
  // 正门外落地极地冰棱立柱 + 尖拱门楣（扎实落地不悬空）
  world.fillBox(cx - 5, baseY + 1, cz + 11, cx - 5, baseY + 9, cz + 11, BlockId.FROST_PILLAR);
  world.fillBox(cx + 5, baseY + 1, cz + 11, cx + 5, baseY + 9, cz + 11, BlockId.FROST_PILLAR);
  for (let gy = 0; gy <= 6; gy++) {
    const hw = 5 - Math.floor(gy * 0.8);
    if (hw >= 0) {
      world.set(cx - hw, baseY + 10 + gy, cz + 11, BlockId.GLACIER_ICE);
      world.set(cx + hw, baseY + 10 + gy, cz + 11, BlockId.GLACIER_ICE);
    }
  }
  world.set(cx, baseY + 16, cz + 11, BlockId.FROST_RUNE_GLOW);

  // 正门上方菱形发光圣徽
  for (let dy = -2; dy <= 2; dy++) {
    for (let dx = -2; dx <= 2; dx++) {
      const m = Math.abs(dx) + Math.abs(dy);
      if (m <= 2) {
        world.set(
          cx + dx,
          baseY + 14 + dy,
          cz + 10,
          m === 2 ? BlockId.DARK_ABYSS_ICE : BlockId.FROST_RUNE_GLOW
        );
      }
    }
  }

  // 内殿中轴冰蓝星辉镜面大道 & 两侧 6 根高挑冰棱圣柱
  for (let z = cz - 7; z <= cz + 10; z++) {
    for (let dx = -2; dx <= 2; dx++) {
      world.set(
        cx + dx,
        baseY,
        z,
        Math.abs(dx) === 2 ? BlockId.DARK_ABYSS_ICE : BlockId.PLAZA_MARBLE
      );
    }
  }
  for (const pz of [cz - 4, cz + 1, cz + 6]) {
    for (const px of [cx - 6, cx + 6]) {
      world.fillBox(px, baseY + 1, pz, px, baseY + 14, pz, BlockId.FROST_PILLAR);
      world.set(px, baseY + 7, pz, BlockId.FROST_RUNE_GLOW);
    }
  }

  // 内殿尽头：三层寒渊圣阶与「九霄冰封星冕王座」(cx = 0, cz - 7 = -89)
  world.fillBox(cx - 4, baseY + 1, cz - 8, cx + 4, baseY + 1, cz - 5, BlockId.DARK_ABYSS_ICE);
  world.fillBox(cx - 3, baseY + 2, cz - 8, cx + 3, baseY + 2, cz - 6, BlockId.FROST_BRICK);
  // 王座扶手、座垫与高耸冰晶剑背
  world.set(cx - 1, baseY + 3, cz - 7, BlockId.DARK_ABYSS_ICE);
  world.set(cx + 1, baseY + 3, cz - 7, BlockId.DARK_ABYSS_ICE);
  world.set(cx, baseY + 3, cz - 7, BlockId.PLAZA_MARBLE);
  world.fillBox(cx - 1, baseY + 3, cz - 8, cx + 1, baseY + 7, cz - 8, BlockId.GLACIER_ICE);
  world.set(cx, baseY + 5, cz - 8, BlockId.FROST_RUNE_GLOW);
  world.set(cx, baseY + 8, cz - 8, BlockId.STAR_CORE);

  // =========================================================
  // 5. 神殿前广场露台 & 破碎悬浮冰晶天梯
  // =========================================================
  for (let z = cz + 12; z <= cz + 21; z++) {
    for (let x = cx - 8; x <= cx + 8; x++) {
      const isBorder = Math.abs(x - cx) === 8 || z === cz + 21;
      world.set(x, baseY, z, isBorder ? BlockId.DARK_ABYSS_ICE : BlockId.FROST_BRICK);
      // 留出正南中轴阶梯缺口 Math.abs(x) > 2
      if (isBorder && Math.abs(x) > 2 && (x + z) % 3 === 0) {
        world.set(x, baseY + 1, z, BlockId.FROST_PILLAR);
        world.set(x, baseY + 2, z, BlockId.FROST_RUNE_GLOW);
      }
    }
  }

  for (let i = 0; i < 7; i++) {
    const sx = Math.round(Math.sin(i * 0.45) * 7);
    const sy = baseY - 2 - i * 2;
    const sz = cz + 24 + i * 4;
    world.fillBox(sx - 2, sy, sz - 1, sx + 2, sy, sz + 1, BlockId.FROST_BRICK);
    world.set(sx, sy - 1, sz, BlockId.FROST_RUNE_GLOW);
    world.set(sx - 2, sy + 1, sz, BlockId.GLACIER_ICE);
    world.set(sx + 2, sy + 1, sz, BlockId.GLACIER_ICE);
  }

  // 四周环绕悬浮的菱形发光冰晶方尖碑（外扩至 ±34 保持舒展净空）
  const obelisks: [number, number, number][] = [
    [-34, baseY + 8, cz + 14],
    [34, baseY + 8, cz + 14],
    [-36, baseY + 16, cz - 8],
    [36, baseY + 16, cz - 8],
  ];
  for (const [ox, oy, oz] of obelisks) {
    for (let dy = -5; dy <= 5; dy++) {
      const r = Math.max(0, 2 - Math.floor(Math.abs(dy) * 0.45));
      for (let dz = -r; dz <= irBounds(r); dz++) {
        for (let dx = -r; dx <= r; dx++) {
          if (Math.abs(dx) + Math.abs(dz) <= r) {
            world.set(
              ox + dx,
              oy + dy,
              oz + dz,
              Math.abs(dy) <= 1 ? BlockId.FROST_RUNE_GLOW : BlockId.GLACIER_ICE
            );
          }
        }
      }
    }
  }

  return {
    palaceCenter: [cx + 0.5, baseY + 12, cz + 0.5],
    crownCenter: [cx + 0.5, crownY + 2, cz - 1.5],
    thronePos: [cx + 0.5, baseY + 3.05, cz - 6.5],
  };
}

function irBounds(r: number): number {
  return r;
}

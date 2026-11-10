import { BlockId } from '../voxel/BlockTypes';
import { VoxelWorld } from '../voxel/VoxelMesher';

export interface FlagAnchor {
  x: number;
  y: number;
  z: number;
  color: string;
  scale: number;
}

/** 绘制圆柱塔身（带石砖墙、基座、竖向高挑拱窗与顶部悬挑垛口） */
function buildCylindricalTower(
  world: VoxelWorld,
  cx: number,
  baseY: number,
  cz: number,
  radius: number,
  height: number,
  roofBlock: BlockId,
  coneHeight: number,
  flags: FlagAnchor[],
  flagColor = '#ff7eb9'
): void {
  const r2 = radius * radius;
  const innerR2 = Math.max(0, (radius - 1.25) * (radius - 1.25));

  // 1. 塔身与基座
  for (let y = 0; y < height; y++) {
    const wy = baseY + y;
    for (let dz = -Math.ceil(radius); dz <= Math.ceil(radius); dz++) {
      for (let dx = -Math.ceil(radius); dx <= Math.ceil(radius); dx++) {
        const d2 = dx * dx + dz * dz;
        if (d2 <= r2 + 0.35) {
          const isOuter = d2 >= innerR2;
          if (!isOuter && y > 0 && y < height - 1) {
            world.set(cx + dx, wy, cz + dz, BlockId.AIR);
            continue;
          }
          let block = BlockId.CASTLE_WALL;
          if (y < 3) block = BlockId.CASTLE_BASE;
          else if (y === height - 1 || y === Math.floor(height * 0.55)) {
            block = BlockId.GOLD_CROWN;
          }
          world.set(cx + dx, wy, cz + dz, block);
        }
      }
    }
  }

  // 2. 四向高挑发光花窗
  const winStart = Math.max(4, Math.floor(height * 0.35));
  const winEnd = Math.max(winStart + 2, height - 4);
  const dirs: [number, number][] = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];
  const rInt = Math.round(radius);
  for (const [dx, dz] of dirs) {
    for (let y = winStart; y <= winEnd; y++) {
      if ((y - winStart) % 5 < 3) {
        world.set(
          cx + dx * rInt,
          baseY + y,
          cz + dz * rInt,
          BlockId.WARM_WINDOW
        );
      }
    }
  }

  // 3. 顶部悬挑走廊与垛口
  const corbelY = baseY + height;
  const outerR = radius + 1.0;
  const outerR2 = outerR * outerR;
  for (let dz = -Math.ceil(outerR); dz <= Math.ceil(outerR); dz++) {
    for (let dx = -Math.ceil(outerR); dx <= Math.ceil(outerR); dx++) {
      const d2 = dx * dx + dz * dz;
      if (d2 <= outerR2 + 0.25) {
        world.set(cx + dx, corbelY, cz + dz, BlockId.CASTLE_BASE);
        // 外圈垛口齿
        if (d2 >= (outerR - 1.1) * (outerR - 1.1)) {
          if ((Math.abs(dx) + Math.abs(dz)) % 2 === 0) {
            world.set(cx + dx, corbelY + 1, cz + dz, BlockId.CASTLE_WALL);
          }
        }
      }
    }
  }

  // 4. 优雅收窄曲线的圆锥攒尖琉璃塔顶 (Witch-hat / Fairytale Spire)
  const spireStartY = corbelY + 1;
  for (let sy = 0; sy < coneHeight; sy++) {
    const t = sy / coneHeight;
    // 微凹弧线让尖顶显得轻盈灵动（迪士尼式收尖）
    const curR = ( radius + 1.2 ) * Math.pow(1 - t, 1.18);
    const cr = Math.ceil(curR);
    const cr2 = curR * curR;
    for (let dz = -cr; dz <= cr; dz++) {
      for (let dx = -cr; dx <= cr; dx++) {
        if (dx * dx + dz * dz <= cr2 + 0.2) {
          // 塔檐底边镶金线
          const b = sy === 0 && dx * dx + dz * dz >= (curR - 1) * (curR - 1)
            ? BlockId.GOLD_CROWN
            : roofBlock;
          world.set(cx + dx, spireStartY + sy, cz + dz, b);
        }
      }
    }
  }

  // 5. 金色塔尖与璀璨星辰宝珠
  const tipY = spireStartY + coneHeight;
  world.set(cx, tipY, cz, BlockId.GOLD_CROWN);
  world.set(cx, tipY + 1, cz, BlockId.GOLD_CROWN);
  world.set(cx, tipY + 2, cz, BlockId.STAR_CORE);

  flags.push({
    x: cx,
    y: tipY + 2.2,
    z: cz,
    color: flagColor,
    scale: radius >= 5 ? 1.35 : 0.95,
  });
}

/** 建造星冠皇家圣城（位于北侧山巅高台 cx=0, baseY=22, cz=-36） */
export function buildRoyalCastle(world: VoxelWorld, flags: FlagAnchor[]): void {
  const cx = 0;
  const baseY = 22;
  const cz = -36;

  // =========================================================
  // 1. 皇家圣城坚固基台与环城护城河内壁 (x: -24..24, z: -54..-18)
  // =========================================================
  for (let z = -54; z <= -18; z++) {
    for (let x = -24; x <= 24; x++) {
      // 切角八边形圣城台基
      if (Math.abs(x) + Math.abs(z + 36) > 36) continue;
      for (let y = 17; y <= baseY; y++) {
        const isEdge =
          x === -24 ||
          x === 24 ||
          z === -54 ||
          z === -18 ||
          Math.abs(x) + Math.abs(z + 36) >= 35;
        world.set(
          x,
          y,
          z,
          y === baseY
            ? isEdge
              ? BlockId.CASTLE_BASE
              : BlockId.PLAZA_MARBLE
            : BlockId.CASTLE_BASE
        );
      }
    }
  }

  // =========================================================
  // 2. 外围城墙、角楼与正门凯旋城楼 (Outer Curtain Wall & Gatehouse)
  // =========================================================
  const wallH = 8;
  // 前城墙 (z = -20, x = -18..18)
  for (let x = -18; x <= 18; x++) {
    if (Math.abs(x) <= 3) continue; // 留出正中大拱门
    for (let y = 1; y <= wallH; y++) {
      const b = y <= 2 ? BlockId.CASTLE_BASE : BlockId.CASTLE_WALL;
      world.set(x, baseY + y, -20, b);
      world.set(x, baseY + y, -21, b);
    }
    // 步道与垛口
    world.set(x, baseY + wallH, -21, BlockId.PLAZA_MARBLE);
    if (Math.abs(x) % 2 === 0) {
      world.set(x, baseY + wallH + 1, -20, BlockId.CASTLE_WALL);
    }
    if (Math.abs(x) % 6 === 0) {
      world.set(x, baseY + 5, -20, BlockId.WARM_WINDOW);
    }
  }

  // 东西两侧城墙 (x = ±19, z = -49..-21)
  for (let z = -49; z <= -21; z++) {
    for (const sx of [-19, 19]) {
      for (let y = 1; y <= wallH; y++) {
        const b = y <= 2 ? BlockId.CASTLE_BASE : BlockId.CASTLE_WALL;
        world.set(sx, baseY + y, z, b);
      }
      if (Math.abs(z) % 2 === 0) {
        world.set(sx, baseY + wallH + 1, z, BlockId.CASTLE_WALL);
      }
      if (Math.abs(z) % 6 === 0) {
        world.set(sx, baseY + 5, z, BlockId.WARM_WINDOW);
      }
    }
  }

  // 正门凯旋门楼 (x: -5..5, z: -22..-19, 高 13)
  for (let y = 1; y <= 13; y++) {
    for (let z = -22; z <= -19; z++) {
      for (let x = -5; x <= 5; x++) {
        // 拱形城门洞开孔
        const archH = 6 - Math.floor((x * x) / 3.5);
        if (Math.abs(x) <= 2 && y <= archH) {
          world.set(x, baseY + y, z, BlockId.AIR);
          continue;
        }
        let b = y <= 2 ? BlockId.CASTLE_BASE : BlockId.CASTLE_WALL;
        if (y === 9 || y === 13) b = BlockId.GOLD_CROWN;
        world.set(x, baseY + y, z, b);
      }
    }
  }
  // 城门楼上方的皇家小玫瑰花窗与金色皇冠山墙
  for (let dy = -1; dy <= 1; dy++) {
    for (let dx = -1; dx <= 1; dx++) {
      world.set(dx, baseY + 11 + dy, -19, BlockId.ROSE_STAINED_GLASS);
    }
  }
  for (let sx = -4; sx <= 4; sx += 2) {
    world.set(sx, baseY + 14, -19, BlockId.CASTLE_WALL);
  }
  world.set(0, baseY + 15, -19, BlockId.GOLD_CROWN);
  world.set(0, baseY + 16, -19, BlockId.STAR_CORE);

  // 正门两侧护卫圆塔
  buildCylindricalTower(world, -7, baseY, -20, 3.2, 15, BlockId.ROOF_ROYAL_BLUE, 10, flags, '#ff85c0');
  buildCylindricalTower(world, 7, baseY, -20, 3.2, 15, BlockId.ROOF_ROYAL_BLUE, 10, flags, '#ff85c0');

  // 外墙四角翼塔
  buildCylindricalTower(world, -19, baseY, -21, 3.6, 13, BlockId.ROOF_SAKURA_PINK, 9, flags, '#69c0ff');
  buildCylindricalTower(world, 19, baseY, -21, 3.6, 13, BlockId.ROOF_SAKURA_PINK, 9, flags, '#69c0ff');
  buildCylindricalTower(world, -19, baseY, -49, 3.8, 16, BlockId.ROOF_LAVENDER, 10, flags, '#ffd666');
  buildCylindricalTower(world, 19, baseY, -49, 3.8, 16, BlockId.ROOF_LAVENDER, 10, flags, '#ffd666');

  // =========================================================
  // 3. 中央圣殿主堡 (Grand Keep, x: -12..12, z: -46..-28)
  // =========================================================
  const keepH = 19;
  for (let y = 1; y <= keepH; y++) {
    for (let z = -46; z <= -28; z++) {
      for (let x = -12; x <= 12; x++) {
        const isShell =
          x === -12 || x === 12 || z === -46 || z === -28 || y === keepH;
        if (!isShell) continue;
        let b = BlockId.CASTLE_WALL;
        if (y <= 3) b = BlockId.CASTLE_BASE;
        else if (Math.abs(x) === 12 && Math.abs(z + 37) % 4 === 0) b = BlockId.CASTLE_PILLAR;
        else if ((z === -28 || z === -46) && Math.abs(x) % 4 === 0) b = BlockId.CASTLE_PILLAR;
        if (y === 11 || y === keepH) b = BlockId.GOLD_CROWN;
        world.set(x, baseY + y, z, b);
      }
    }
  }

  // 主堡正门拱廊与二层观景露台 (z = -28..-25)
  world.fillBox(-3, baseY + 1, -28, 3, baseY + 6, -28, BlockId.AIR);
  world.fillBox(-6, baseY + 10, -27, 6, baseY + 10, -25, BlockId.PLAZA_MARBLE);
  for (let x = -6; x <= 6; x++) {
    world.set(x, baseY + 11, -25, x % 2 === 0 ? BlockId.GOLD_CROWN : BlockId.CASTLE_WALL);
  }

  // 主堡正面巨型璀璨玫瑰彩绘花窗 (Rose Stained-Glass Window)
  for (let dy = -3; dy <= 3; dy++) {
    for (let dx = -3; dx <= 3; dx++) {
      const dist = Math.hypot(dx, dy);
      if (dist <= 3.2) {
        world.set(
          dx,
          baseY + 15 + dy,
          -28,
          dist >= 2.5 ? BlockId.GOLD_CROWN : BlockId.ROSE_STAINED_GLASS
        );
      }
    }
  }

  // 侧面哥特高窗与优雅飞扶壁 (Flying Buttresses)
  for (let z = -43; z <= -31; z += 4) {
    for (const sx of [-12, 12]) {
      for (let wy = 5; wy <= 9; wy++) world.set(sx, baseY + wy, z, BlockId.WARM_WINDOW);
      for (let wy = 13; wy <= 17; wy++) world.set(sx, baseY + wy, z, BlockId.WARM_WINDOW);
      // 飞扶壁拱肋支撑
      const dir = sx < 0 ? -1 : 1;
      world.fillBox(sx + dir * 3, baseY + 1, z, sx + dir * 3, baseY + 11, z, BlockId.CASTLE_PILLAR);
      world.set(sx + dir * 3, baseY + 12, z, BlockId.GOLD_CROWN);
      world.set(sx + dir * 2, baseY + 10, z, BlockId.CASTLE_WALL);
      world.set(sx + dir * 1, baseY + 11, z, BlockId.CASTLE_WALL);
    }
  }

  // 主堡人字形高耸皇家蓝琉璃大屋脊
  for (let ry = 0; ry <= 9; ry++) {
    const halfW = 13 - ry;
    if (halfW < 0) break;
    for (let z = -47; z <= -27; z++) {
      for (let x = -halfW; x <= halfW; x++) {
        const isOuter = Math.abs(x) >= halfW - 1 || z === -47 || z === -27;
        if (!isOuter) continue;
        let b = BlockId.ROOF_ROYAL_BLUE;
        if (z === -47 || z === -27) {
          b = Math.abs(x) === halfW ? BlockId.GOLD_CROWN : BlockId.CASTLE_WALL;
        } else if (halfW === 1) {
          b = BlockId.GOLD_CROWN; // 金色正脊
        }
        world.set(x, baseY + keepH + 1 + ry, z, b);
      }
    }
  }

  // =========================================================
  // 4. 耸入云霄的五大核心圣塔群（构成梦幻迪士尼高低错落天际线！）
  // =========================================================
  // 中央最高：星冠天鹅主圣塔（直达 Y = 22 + 34 + 17 = 73！）
  buildCylindricalTower(
    world,
    cx,
    baseY + 14,
    -39,
    4.6,
    22,
    BlockId.ROOF_ROYAL_BLUE,
    16,
    flags,
    '#ff7eb9'
  );

  // 主堡左前与右前双子樱霞高塔
  buildCylindricalTower(
    world,
    -11,
    baseY,
    -28,
    4.0,
    24,
    BlockId.ROOF_SAKURA_PINK,
    13,
    flags,
    '#ffd666'
  );
  buildCylindricalTower(
    world,
    11,
    baseY,
    -28,
    4.0,
    24,
    BlockId.ROOF_SAKURA_PINK,
    13,
    flags,
    '#ffd666'
  );

  // 主堡左后与右后星云副高塔（一高一更高，打破死板完全对称，更具童话美感！）
  buildCylindricalTower(
    world,
    -12,
    baseY,
    -46,
    4.3,
    29,
    BlockId.ROOF_LAVENDER,
    14,
    flags,
    '#73d13d'
  );
  buildCylindricalTower(
    world,
    12,
    baseY,
    -46,
    4.1,
    26,
    BlockId.ROOF_ROYAL_BLUE,
    13,
    flags,
    '#69c0ff'
  );

  // 凌空天桥连廊（连接左后高塔与侧翼观星小塔）
  buildCylindricalTower(
    world,
    22,
    baseY,
    -36,
    3.5,
    20,
    BlockId.ROOF_SAKURA_PINK,
    11,
    flags,
    '#ff85c0'
  );
  for (let x = 13; x <= 19; x++) {
    const archY = baseY + 15 + (x === 16 ? 1 : 0);
    world.fillBox(x, archY, -37, x, archY, -35, BlockId.CASTLE_BASE);
    world.set(x, archY + 1, -37, BlockId.GOLD_CROWN);
    world.set(x, archY + 1, -35, BlockId.GOLD_CROWN);
  }

  // =========================================================
  // 5. 护城河暖木吊桥 & 皇家迎宾汉白玉大阶梯 (z: -18 -> -2, y: 22 -> 12)
  // =========================================================
  // 跨越护城河的吊桥 (z = -18..-13, y = 22)
  for (let z = -18; z <= -13; z++) {
    for (let x = -3; x <= 3; x++) {
      if (Math.abs(x) === 3) {
        world.set(x, baseY, z, BlockId.TIMBER_OAK);
        if (z % 2 === 0) {
          world.set(x, baseY + 1, z, BlockId.TIMBER_OAK);
          world.set(x, baseY + 2, z, BlockId.LANTERN_GLOW);
        }
      } else {
        world.set(x, baseY, z, BlockId.PLANKS_WARM);
      }
    }
  }

  // 从 z = -12 (y = 22) 缓缓拾级而下到 z = -2 (y = 12) 的皇家大理石御道阶梯
  for (let step = 0; step <= 10; step++) {
    const sy = baseY - step;
    const sz = -12 + step;
    const halfWidth = 4 + Math.floor(step * 0.35);
    // 阶梯下方实心石基支撑
    world.fillBox(-halfWidth, 12, sz, halfWidth, sy, sz, BlockId.CASTLE_BASE);
    world.fillBox(-halfWidth + 1, sy, sz, halfWidth - 1, sy, sz, BlockId.PLAZA_MARBLE);
    // 金色阶梯扶手与迎宾宫灯
    world.set(-halfWidth, sy + 1, sz, BlockId.CASTLE_WALL);
    world.set(halfWidth, sy + 1, sz, BlockId.CASTLE_WALL);
    if (step % 3 === 0) {
      world.set(-halfWidth, sy + 2, sz, BlockId.GOLD_CROWN);
      world.set(-halfWidth, sy + 3, sz, BlockId.LANTERN_GLOW);
      world.set(halfWidth, sy + 2, sz, BlockId.GOLD_CROWN);
      world.set(halfWidth, sy + 3, sz, BlockId.LANTERN_GLOW);
    }
  }
}

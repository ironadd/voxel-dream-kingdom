import { BlockId } from '../voxel/BlockTypes';
import { VoxelWorld } from '../voxel/VoxelMesher';

export interface TownDynamicHooks {
  chimneys: [number, number, number][];
  fountainTop: [number, number, number];
  windmillHub: [number, number, number];
}

interface CottageSpec {
  cx: number;
  cz: number;
  w: number; // X 方向半宽
  d: number; // Z 方向半深
  h: number; // 墙高
  roofBlock: BlockId;
  ridgeAlongX: boolean;
  doorDir: 'N' | 'S' | 'E' | 'W';
}

/** 建造一栋中世纪童话木筋斜顶小屋（带橡木框架、暖光窗、鲜花窗箱与红砖烟囱） */
function buildFairytaleCottage(
  world: VoxelWorld,
  spec: CottageSpec,
  chimneys: [number, number, number][]
): void {
  const { cx, cz, w, d, h, roofBlock, ridgeAlongX, doorDir } = spec;
  const baseY = world.getSurfaceY(cx, cz, 25, 8);

  // 地基找平石座
  world.fillBox(cx - w, baseY - 2, cz - d, cx + w, baseY, cz + d, BlockId.CASTLE_BASE);

  // 一层与木筋墙面
  for (let y = 1; y <= h; y++) {
    for (let z = cz - d; z <= cz + d; z++) {
      for (let x = cx - w; x <= cx + w; x++) {
        const onX = x === cx - w || x === cx + w;
        const onZ = z === cz - d || z === cz + d;
        if (!onX && !onZ) {
          world.set(x, baseY + y, z, BlockId.AIR);
          continue;
        }
        const isCorner = onX && onZ;
        const isBeam = y === h || y === 1 || (h >= 6 && y === 4);
        world.set(
          x,
          baseY + y,
          z,
          isCorner || isBeam ? BlockId.TIMBER_OAK : BlockId.COTTAGE_PLASTER
        );
      }
    }
  }

  // 开门与门前暖光迎宾灯
  const doorMap = {
    N: [cx, cz - d, 0, -1],
    S: [cx, cz + d, 0, 1],
    E: [cx + w, cz, 1, 0],
    W: [cx - w, cz, -1, 0],
  } as const;
  const [dx, dz, nx, nz] = doorMap[doorDir];
  world.set(dx, baseY + 1, dz, BlockId.PLANKS_WARM);
  world.set(dx, baseY + 2, dz, BlockId.PLANKS_WARM);
  world.set(dx + nx, baseY, dz + nz, BlockId.COBBLE_PATH);
  world.set(dx + nx + (nz !== 0 ? 1 : 0), baseY + 3, dz + nz + (nx !== 0 ? 1 : 0), BlockId.LANTERN_GLOW);

  // 四周暖橘色发光窗与花箱
  const winY = Math.min(h - 1, 3);
  if (doorDir !== 'N') {
    world.set(cx, baseY + winY, cz - d, BlockId.WARM_WINDOW);
    world.set(cx, baseY + winY - 1, cz - d - 1, BlockId.LEAVES_SAKURA);
  }
  if (doorDir !== 'S') {
    world.set(cx, baseY + winY, cz + d, BlockId.WARM_WINDOW);
    world.set(cx, baseY + winY - 1, cz + d + 1, BlockId.LEAVES_SAKURA);
  }
  if (doorDir !== 'E') {
    world.set(cx + w, baseY + winY, cz, BlockId.WARM_WINDOW);
  }
  if (doorDir !== 'W') {
    world.set(cx - w, baseY + winY, cz, BlockId.WARM_WINDOW);
  }

  // 高挑童话斜坡屋顶（挑檐 1 格）
  if (ridgeAlongX) {
    const span = d + 1;
    for (let ry = 0; ry <= span; ry++) {
      const curD = span - ry;
      for (let x = cx - w - 1; x <= cx + w + 1; x++) {
        for (let z = cz - curD; z <= cz + curD; z++) {
          const isGable = x === cx - w || x === cx + w;
          const isEave = Math.abs(z - cz) === curD || x === cx - w - 1 || x === cx + w + 1;
          if (isEave) {
            const b =
              curD === 0
                ? BlockId.TIMBER_OAK
                : x === cx - w - 1 || x === cx + w + 1
                ? BlockId.TIMBER_OAK
                : roofBlock;
            world.set(x, baseY + h + 1 + ry, z, b);
          } else if (isGable) {
            world.set(
              x,
              baseY + h + 1 + ry,
              z,
              z === cz && ry === 1 ? BlockId.WARM_WINDOW : BlockId.COTTAGE_PLASTER
            );
          }
        }
      }
    }
  } else {
    const span = w + 1;
    for (let ry = 0; ry <= span; ry++) {
      const curW = span - ry;
      for (let z = cz - d - 1; z <= cz + d + 1; z++) {
        for (let x = cx - curW; x <= cx + curW; x++) {
          const isGable = z === cz - d || z === cz + d;
          const isEave = Math.abs(x - cx) === curW || z === cz - d - 1 || z === cz + d + 1;
          if (isEave) {
            const b =
              curW === 0
                ? BlockId.TIMBER_OAK
                : z === cz - d - 1 || z === cz + d + 1
                ? BlockId.TIMBER_OAK
                : roofBlock;
            world.set(x, baseY + h + 1 + ry, z, b);
          } else if (isGable) {
            world.set(
              x,
              baseY + h + 1 + ry,
              z,
              x === cx && ry === 1 ? BlockId.WARM_WINDOW : BlockId.COTTAGE_PLASTER
            );
          }
        }
      }
    }
  }

  // 红陶砖童话小烟囱
  const chimX = cx + w - 1;
  const chimZ = cz - d + 1;
  const chimTop = baseY + h + (ridgeAlongX ? d : w) + 3;
  for (let y = baseY + h; y <= chimTop; y++) {
    world.set(chimX, y, chimZ, BlockId.BRICK_CHIMNEY);
  }
  chimneys.push([chimX + 0.5, chimTop + 1.2, chimZ + 0.5]);
}

/** 种植一棵蓬松自然的梦幻樱花树 / 森林树 */
export function plantDreamTree(
  world: VoxelWorld,
  x: number,
  z: number,
  style: 'sakura' | 'sakura_light' | 'emerald' | 'golden',
  scale = 1.0
): void {
  const baseY = world.getSurfaceY(x, z, 40, 5);
  if (baseY <= 6) return;
  const ground = world.get(x, baseY, z);
  if (ground !== BlockId.GRASS_DREAM && ground !== BlockId.GRASS_SAKURA && ground !== BlockId.SNOW_PURE) {
    return;
  }

  const trunkBlock =
    style === 'sakura' || style === 'sakura_light' ? BlockId.TRUNK_SPIRIT : BlockId.TRUNK_DARK;
  const leafBlock =
    style === 'sakura'
      ? BlockId.LEAVES_SAKURA
      : style === 'sakura_light'
      ? BlockId.LEAVES_SAKURA_LIGHT
      : style === 'golden'
      ? BlockId.LEAVES_GOLDEN
      : BlockId.LEAVES_EMERALD;

  const trunkH = Math.round((4 + ((Math.abs(x * 7 + z * 13) % 3))) * scale);
  for (let y = 1; y <= trunkH; y++) {
    world.set(x, baseY + y, z, trunkBlock);
  }

  // 多团簇有机树冠（避免单调圆球）
  const crownY = baseY + trunkH + 1;
  const rMain = Math.max(2.3, 3.1 * scale);
  const clusters: [number, number, number, number][] = [
    [0, 0, 0, rMain],
    [-1.6 * scale, -0.5, 1.1 * scale, rMain * 0.78],
    [1.7 * scale, -0.4, -1.0 * scale, rMain * 0.78],
    [0.5 * scale, 1.3 * scale, 0.5 * scale, rMain * 0.72],
  ];

  for (const [ox, oy, oz, rad] of clusters) {
    const ir = Math.ceil(rad);
    for (let dy = -ir; dy <= ir; dy++) {
      for (let dz = -ir; dz <= ir; dz++) {
        for (let dx = -ir; dx <= ir; dx++) {
          const dist = Math.hypot(dx, dy * 1.25, dz);
          if (dist <= rad) {
            const wx = Math.round(x + ox + dx);
            const wy = Math.round(crownY + oy + dy);
            const wz = Math.round(z + oz + dz);
            // 樱花树混搭少量浅粉白花簇，层次感更梦幻！
            const altLeaf =
              style === 'sakura' && (wx + wy + wz) % 5 === 0
                ? BlockId.LEAVES_SAKURA_LIGHT
                : leafBlock;
            world.setIfAir(wx, wy, wz, altLeaf);
          }
        }
      }
    }
  }
}

/** 西侧千年绯樱神木（Sacred World Sakura Tree） */
function buildSacredSakuraTree(world: VoxelWorld, cx: number, cz: number): void {
  const baseY = world.getSurfaceY(cx, cz, 30, 8);

  // 盘根错节的神木树根与弯曲粗壮树干
  for (let angle = 0; angle < Math.PI * 2; angle += Math.PI / 3) {
    for (let r = 1; r <= 5; r++) {
      const rx = Math.round(cx + Math.cos(angle) * r);
      const rz = Math.round(cz + Math.sin(angle) * r);
      const ry = baseY + Math.max(0, 3 - Math.floor(r * 0.7));
      world.fillBox(rx, baseY, rz, rx, ry, rz, BlockId.TRUNK_SPIRIT);
    }
  }

  for (let y = 0; y <= 13; y++) {
    const swayX = Math.round(Math.sin(y * 0.22) * 1.4);
    const radius = y < 4 ? 2.4 : y < 9 ? 1.9 : 1.4;
    const ir = Math.ceil(radius);
    for (let dz = -ir; dz <= ir; dz++) {
      for (let dx = -ir; dx <= ir; dx++) {
        if (dx * dx + dz * dz <= radius * radius) {
          world.set(cx + swayX + dx, baseY + y, cz + dz, BlockId.TRUNK_SPIRIT);
        }
      }
    }
  }

  // 巨大的云朵状层叠绯樱华盖 + 垂挂星灯
  const canopyPods: [number, number, number, number][] = [
    [0, 15, 0, 7.2],
    [-5, 13, 3, 5.4],
    [5, 13, -3, 5.4],
    [-4, 14, -4, 5.0],
    [4, 14, 4, 5.2],
    [0, 18, 1, 5.0],
  ];

  for (const [ox, oy, oz, rad] of canopyPods) {
    const ir = Math.ceil(rad);
    for (let dy = -ir; dy <= ir; dy++) {
      for (let dz = -ir; dz <= ir; dz++) {
        for (let dx = -ir; dx <= ir; dx++) {
          const d = Math.hypot(dx, dy * 1.45, dz);
          if (d <= rad) {
            const wx = cx + ox + dx;
            const wy = baseY + oy + dy;
            const wz = cz + oz + dz;
            const b =
              (Math.abs(wx * 3 + wy + wz * 5) % 4 === 0)
                ? BlockId.LEAVES_SAKURA_LIGHT
                : BlockId.LEAVES_SAKURA;
            world.setIfAir(wx, wy, wz, b);
          }
        }
      }
    }
    // 每个花冠下方垂挂一盏梦幻星辉灯笼
    const lx = cx + ox;
    const lz = cz + oz;
    const ly = baseY + oy - Math.floor(rad * 0.65);
    world.set(lx, ly + 1, lz, BlockId.TIMBER_OAK);
    world.set(lx, ly, lz, BlockId.LANTERN_GLOW);
  }

  // 树根周围点缀童话波点大蘑菇与蓝色荧光仙灵菌
  const shrooms: [number, number, boolean][] = [
    [cx - 6, cz + 5, true],
    [cx + 6, cz + 4, false],
    [cx - 4, cz - 7, false],
    [cx + 5, cz - 5, true],
  ];
  for (const [sx, sz, isRed] of shrooms) {
    const sy = world.getSurfaceY(sx, sz, 25, 8);
    if (isRed) {
      world.set(sx, sy + 1, sz, BlockId.COTTAGE_PLASTER);
      world.set(sx, sy + 2, sz, BlockId.COTTAGE_PLASTER);
      world.fillBox(sx - 1, sy + 3, sz - 1, sx + 1, sy + 3, sz + 1, BlockId.MUSHROOM_RED);
      world.set(sx, sy + 4, sz, BlockId.MUSHROOM_RED);
    } else {
      world.set(sx, sy + 1, sz, BlockId.GLOW_SHROOM_BLUE);
    }
  }
}

/** 建造雕花铁艺暖光路灯 */
export function buildStreetLamp(world: VoxelWorld, x: number, z: number): void {
  const y = world.getSurfaceY(x, z, 30, 8);
  world.set(x, y + 1, z, BlockId.CASTLE_BASE);
  world.set(x, y + 2, z, BlockId.TIMBER_OAK);
  world.set(x, y + 3, z, BlockId.TIMBER_OAK);
  world.set(x, y + 4, z, BlockId.LANTERN_GLOW);
  world.set(x, y + 5, z, BlockId.GOLD_CROWN);
}

/** 建造童话风车小镇、星泉喷泉广场、石拱桥、大风车与樱花幻林 */
export function buildFairytaleTown(world: VoxelWorld): TownDynamicHooks {
  const chimneys: [number, number, number][] = [];

  // =========================================================
  // 1. 中央星泉圆形广场与三层涌泉雕塑 (cx = 0, cz = 15, y = 12)
  // =========================================================
  const px = 0;
  const pz = 15;
  const py = 12;
  for (let dz = -9; dz <= 9; dz++) {
    for (let dx = -9; dx <= 9; dx++) {
      const dist = Math.hypot(dx, dz);
      if (dist <= 9.2) {
        world.set(
          px + dx,
          py,
          pz + dz,
          dist >= 8.1 ? BlockId.COBBLE_PATH : BlockId.PLAZA_MARBLE
        );
      }
    }
  }

  // 星泉水池外壁与碧水
  for (let dz = -4; dz <= 4; dz++) {
    for (let dx = -4; dx <= 4; dx++) {
      const d = Math.hypot(dx, dz);
      if (d <= 4.3) {
        if (d >= 3.2) {
          world.set(px + dx, py + 1, pz + dz, BlockId.CASTLE_WALL);
        } else {
          world.set(px + dx, py + 1, pz + dz, BlockId.WATER);
        }
      }
    }
  }
  // 喷泉中心白玉星柱
  world.fillBox(px, py + 1, pz, px, py + 5, pz, BlockId.CASTLE_PILLAR);
  world.fillBox(px - 1, py + 3, pz - 1, px + 1, py + 3, pz + 1, BlockId.CASTLE_WALL);
  world.set(px, py + 6, pz, BlockId.STAR_CORE);

  // 广场四角迎宾路灯
  buildStreetLamp(world, -7, 9);
  buildStreetLamp(world, 7, 9);
  buildStreetLamp(world, -7, 21);
  buildStreetLamp(world, 7, 21);

  // =========================================================
  // 2. 错落排布的 6 栋彩色童话斜顶木筋小屋
  // =========================================================
  const cottages: CottageSpec[] = [
    // 西街小屋群
    { cx: -16, cz: 6, w: 4, d: 3, h: 5, roofBlock: BlockId.ROOF_CORAL, ridgeAlongX: false, doorDir: 'E' },
    { cx: -17, cz: 20, w: 4, d: 4, h: 6, roofBlock: BlockId.ROOF_MINT, ridgeAlongX: true, doorDir: 'E' },
    { cx: -8, cz: 31, w: 4, d: 3, h: 5, roofBlock: BlockId.ROOF_SAKURA_PINK, ridgeAlongX: true, doorDir: 'N' },
    // 东街小屋群
    { cx: 15, cz: 5, w: 4, d: 3, h: 6, roofBlock: BlockId.ROOF_HONEY, ridgeAlongX: false, doorDir: 'W' },
    { cx: 9, cz: 29, w: 3, d: 4, h: 5, roofBlock: BlockId.ROOF_LAVENDER, ridgeAlongX: false, doorDir: 'N' },
    { cx: -24, cz: 32, w: 3, d: 3, h: 5, roofBlock: BlockId.ROOF_ROYAL_BLUE, ridgeAlongX: true, doorDir: 'E' },
  ];
  for (const c of cottages) {
    buildFairytaleCottage(world, c, chimneys);
  }

  // =========================================================
  // 3. 横跨清溪的汉白玉圆弧石拱桥 (x: 15..25, z: 16..20)
  // =========================================================
  for (let x = 14; x <= 26; x++) {
    const t = (x - 20) / 6; // -1 .. 1
    const archH = Math.round((1 - t * t) * 3.2);
    const by = 12 + archH;
    for (let z = 16; z <= 20; z++) {
      if (z === 16 || z === 20) {
        world.set(x, by, z, BlockId.CASTLE_BASE);
        world.set(x, by + 1, z, BlockId.CASTLE_WALL);
        if (x === 14 || x === 20 || x === 26) {
          world.set(x, by + 2, z, x === 20 ? BlockId.LANTERN_GLOW : BlockId.GOLD_CROWN);
        }
      } else {
        world.set(x, by, z, BlockId.COBBLE_PATH);
      }
    }
  }

  // =========================================================
  // 4. 东侧花海丘陵上的童话大风车磨坊 (cx = 36, cz = 18)
  // =========================================================
  const wx = 36;
  const wz = 18;
  const wy = world.getSurfaceY(wx, wz, 30, 10);
  // 八角渐收白色石木塔身
  for (let y = 0; y <= 14; y++) {
    const r = y < 5 ? 4.2 : y < 10 ? 3.6 : 3.1;
    const ir = Math.ceil(r);
    for (let dz = -ir; dz <= ir; dz++) {
      for (let dx = -ir; dx <= ir; dx++) {
        const d2 = dx * dx + dz * dz;
        if (d2 <= r * r) {
          const isOuter = d2 >= (r - 1.2) * (r - 1.2);
          if (!isOuter && y > 0 && y < 14) continue;
          let b = BlockId.COTTAGE_PLASTER;
          if (y < 3) b = BlockId.CASTLE_BASE;
          else if (y === 6 || y === 14) b = BlockId.TIMBER_OAK;
          world.set(wx + dx, wy + y, wz + dz, b);
        }
      }
    }
  }
  // 风车木观景环廊 (y = 6)
  for (let dz = -5; dz <= 5; dz++) {
    for (let dx = -5; dx <= 5; dx++) {
      const d = Math.hypot(dx, dz);
      if (d >= 3.8 && d <= 5.1) {
        world.set(wx + dx, wy + 6, wz + dz, BlockId.PLANKS_WARM);
      }
    }
  }
  // 风车暖金圆锥帽顶
  for (let ry = 0; ry <= 6; ry++) {
    const r = 3.8 * (1 - ry / 6.5);
    const ir = Math.ceil(r);
    for (let dz = -ir; dz <= ir; dz++) {
      for (let dx = -ir; dx <= ir; dx++) {
        if (dx * dx + dz * dz <= r * r + 0.2) {
          world.set(wx + dx, wy + 15 + ry, wz + dz, BlockId.ROOF_HONEY);
        }
      }
    }
  }
  world.set(wx, wy + 22, wz, BlockId.GOLD_CROWN);
  // 正西朝向广场的风车转轴突出木梁
  world.set(wx - 3, wy + 12, wz, BlockId.TIMBER_OAK);
  world.set(wx - 4, wy + 12, wz, BlockId.GOLD_CROWN);

  // 风车周围点缀金色麦浪花海小簇
  for (let dz = -11; dz <= 11; dz += 2) {
    for (let dx = -9; dx <= 11; dx += 2) {
      const d = Math.hypot(dx, dz);
      if (d > 6.5 && d < 12.5) {
        const fx = wx + dx;
        const fz = wz + dz;
        const fy = world.getSurfaceY(fx, fz, 26, 10);
        if (world.get(fx, fy, fz) === BlockId.GRASS_DREAM && (fx + fz) % 3 === 0) {
          world.set(
            fx,
            fy + 1,
            fz,
            (fx * fz) % 2 === 0 ? BlockId.LEAVES_GOLDEN : BlockId.LEAVES_SAKURA
          );
        }
      }
    }
  }

  // =========================================================
  // 5. 西侧落樱神木幻林 & 全岛环绕梦幻树林
  // =========================================================
  buildSacredSakuraTree(world, -38, 12);

  const treeSpots: [number, number, 'sakura' | 'sakura_light' | 'emerald' | 'golden', number][] = [
    [-28, -2, 'sakura', 1.15],
    [-46, -2, 'sakura_light', 1.05],
    [-48, 22, 'sakura', 1.1],
    [-32, 26, 'sakura_light', 1.0],
    [-25, 12, 'sakura', 0.95],
    [-42, -16, 'emerald', 1.2],
    [-32, -26, 'sakura', 1.1],
    [30, -14, 'sakura', 1.1],
    [42, -4, 'golden', 1.05],
    [44, 30, 'emerald', 1.1],
    [26, 36, 'sakura_light', 1.0],
    [-32, 38, 'sakura', 1.05],
    [16, 41, 'golden', 0.95],
    [28, -42, 'emerald', 1.2],
    [36, -30, 'sakura', 1.1],
  ];
  for (const [tx, tz, style, sc] of treeSpots) {
    plantDreamTree(world, tx, tz, style, sc);
  }

  // 小镇步道沿途路灯
  buildStreetLamp(world, -5, 1);
  buildStreetLamp(world, 5, 1);
  buildStreetLamp(world, -12, 15);
  buildStreetLamp(world, 12, 17);
  buildStreetLamp(world, 28, 18);
  buildStreetLamp(world, -26, 15);

  return {
    chimneys,
    fountainTop: [px + 0.5, py + 6.4, pz + 0.5],
    windmillHub: [wx - 4.3, wy + 12.5, wz + 0.5],
  };
}

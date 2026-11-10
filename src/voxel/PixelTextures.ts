import * as THREE from 'three';
import { TileIndex } from './BlockTypes';

export const ATLAS_COLS = 8;
export const ATLAS_ROWS = 8;
export const TILE_INNER = 16;
export const TILE_PAD = 4;
export const TILE_STRIDE = TILE_INNER + TILE_PAD * 2; // 24px
export const ATLAS_WIDTH = ATLAS_COLS * TILE_STRIDE; // 192px
export const ATLAS_HEIGHT = ATLAS_ROWS * TILE_STRIDE; // 192px

/** 固定种子的确定性伪随机，保证每次打开像素纹理一致且精致 */
function createRng(seed: number) {
  let s = seed >>> 0;
  return () => {
    s = (s * 1664525 + 1013904223) >>> 0;
    return s / 4294967296;
  };
}

function hexToRgb(hex: string): [number, number, number] {
  const v = parseInt(hex.replace('#', ''), 16);
  return [(v >> 16) & 255, (v >> 8) & 255, v & 255];
}

function shadeHex(hex: string, factor: number): string {
  const [r, g, b] = hexToRgb(hex);
  const clamp = (n: number) => Math.max(0, Math.min(255, Math.round(n)));
  return `rgb(${clamp(r * factor)}, ${clamp(g * factor)}, ${clamp(b * factor)})`;
}

/** 获取指定 tileIndex 在图集中的 UV 边界 [u0, v0, u1, v1]（注意 Canvas Y 轴翻转） */
export function getTileUV(tileIndex: number): [number, number, number, number] {
  const col = tileIndex % ATLAS_COLS;
  const row = Math.floor(tileIndex / ATLAS_COLS);

  const x0 = col * TILE_STRIDE + TILE_PAD;
  const x1 = x0 + TILE_INNER;
  const yTop = row * TILE_STRIDE + TILE_PAD;
  const yBottom = yTop + TILE_INNER;

  const u0 = x0 / ATLAS_WIDTH;
  const u1 = x1 / ATLAS_WIDTH;
  // Three.js 默认 flipY = true，Canvas 顶部对应 V = 1
  const v1 = 1 - yTop / ATLAS_HEIGHT;
  const v0 = 1 - yBottom / ATLAS_HEIGHT;
  return [u0, v0, u1, v1];
}

export function createPixelTextureAtlas(): THREE.CanvasTexture {
  const canvas = document.createElement('canvas');
  canvas.width = ATLAS_WIDTH;
  canvas.height = ATLAS_HEIGHT;
  const ctx = canvas.getContext('2d')!;
  ctx.imageSmoothingEnabled = false;

  // 在独立 16x16 缓冲区绘制单个像素瓦片，再连同 4px 边缘延展写入主图集
  const tempCanvas = document.createElement('canvas');
  tempCanvas.width = TILE_INNER;
  tempCanvas.height = TILE_INNER;
  const tctx = tempCanvas.getContext('2d')!;
  tctx.imageSmoothingEnabled = false;

  const drawTile = (tileIdx: number, painter: (c: CanvasRenderingContext2D, rng: () => number) => void) => {
    const rng = createRng(1000 + tileIdx * 97);
    tctx.clearRect(0, 0, TILE_INNER, TILE_INNER);
    painter(tctx, rng);

    const col = tileIdx % ATLAS_COLS;
    const row = Math.floor(tileIdx / ATLAS_COLS);
    const ox = col * TILE_STRIDE + TILE_PAD;
    const oy = row * TILE_STRIDE + TILE_PAD;

    // 中心 16x16
    ctx.drawImage(tempCanvas, ox, oy);

    // 上下边缘延展 4px，防止远距离 UV 采样缝隙
    for (let p = 1; p <= TILE_PAD; p++) {
      ctx.drawImage(tempCanvas, 0, 0, TILE_INNER, 1, ox, oy - p, TILE_INNER, 1);
      ctx.drawImage(tempCanvas, 0, TILE_INNER - 1, TILE_INNER, 1, ox, oy + TILE_INNER + p - 1, TILE_INNER, 1);
      ctx.drawImage(tempCanvas, 0, 0, 1, TILE_INNER, ox - p, oy, 1, TILE_INNER);
      ctx.drawImage(tempCanvas, TILE_INNER - 1, 0, 1, TILE_INNER, ox + TILE_INNER + p - 1, oy, 1, TILE_INNER);
    }
    // 四个角填充
    ctx.drawImage(tempCanvas, 0, 0, 1, 1, ox - TILE_PAD, oy - TILE_PAD, TILE_PAD, TILE_PAD);
    ctx.drawImage(tempCanvas, TILE_INNER - 1, 0, 1, 1, ox + TILE_INNER, oy - TILE_PAD, TILE_PAD, TILE_PAD);
    ctx.drawImage(tempCanvas, 0, TILE_INNER - 1, 1, 1, ox - TILE_PAD, oy + TILE_INNER, TILE_PAD, TILE_PAD);
    ctx.drawImage(tempCanvas, TILE_INNER - 1, TILE_INNER - 1, 1, 1, ox + TILE_INNER, oy + TILE_INNER, TILE_PAD, TILE_PAD);
  };

  const px = (c: CanvasRenderingContext2D, x: number, y: number, color: string, w = 1, h = 1) => {
    c.fillStyle = color;
    c.fillRect(x, y, w, h);
  };

  const fillNoise = (
    c: CanvasRenderingContext2D,
    rng: () => number,
    base: string,
    variance = 0.07
  ) => {
    for (let y = 0; y < 16; y++) {
      for (let x = 0; x < 16; x++) {
        const f = 1 + (rng() * 2 - 1) * variance;
        px(c, x, y, shadeHex(base, f));
      }
    }
  };

  const paintBricks = (
    c: CanvasRenderingContext2D,
    rng: () => number,
    brickHex: string,
    mortarHex: string,
    rows = 4
  ) => {
    fillNoise(c, rng, brickHex, 0.045);
    const rowH = Math.floor(16 / rows);
    for (let r = 0; r < rows; r++) {
      const y = r * rowH;
      // 水平砖缝
      px(c, 0, y + rowH - 1, mortarHex, 16, 1);
      // 顶亮边
      px(c, 0, y, shadeHex(brickHex, 1.05), 16, 1);
      const offset = (r % 2) * 4;
      for (let bx = offset; bx < 16; bx += 8) {
        px(c, bx % 16, y, mortarHex, 1, rowH);
      }
    }
  };

  const paintRoofScales = (c: CanvasRenderingContext2D, rng: () => number, baseHex: string) => {
    fillNoise(c, rng, baseHex, 0.05);
    const dark = shadeHex(baseHex, 0.82);
    const light = shadeHex(baseHex, 1.14);
    for (let row = 0; row < 4; row++) {
      const y = row * 4;
      const shift = (row % 2) * 4;
      px(c, 0, y + 3, dark, 16, 1);
      px(c, 0, y, light, 16, 1);
      for (let x = shift; x < 16; x += 8) {
        px(c, x % 16, y, dark, 1, 3);
        px(c, (x + 3) % 16, y + 1, light, 2, 1);
      }
    }
  };

  const paintLeaves = (
    c: CanvasRenderingContext2D,
    rng: () => number,
    baseHex: string,
    blossomHex?: string
  ) => {
    for (let y = 0; y < 16; y++) {
      for (let x = 0; x < 16; x++) {
        const r = rng();
        if (r < 0.22) px(c, x, y, shadeHex(baseHex, 0.84));
        else if (r < 0.55) px(c, x, y, baseHex);
        else px(c, x, y, shadeHex(baseHex, 1.12));
      }
    }
    if (blossomHex) {
      for (let i = 0; i < 10; i++) {
        const bx = Math.floor(rng() * 15);
        const by = Math.floor(rng() * 15);
        px(c, bx, by, blossomHex, 2, 1);
        px(c, bx, by + 1, shadeHex(blossomHex, 1.08), 1, 1);
      }
    }
  };

  // 0: 梦幻翠绿草地顶面
  drawTile(TileIndex.GRASS_TOP, (c, rng) => {
    fillNoise(c, rng, '#6fd685', 0.075);
    // 点缀嫩芽高光与零星迷你小白花/粉花
    for (let i = 0; i < 12; i++) {
      px(c, Math.floor(rng() * 16), Math.floor(rng() * 16), '#8be898');
    }
    px(c, 3, 4, '#fff8e7');
    px(c, 11, 10, '#ffb8d9');
  });

  // 1: 草地侧面
  drawTile(TileIndex.GRASS_SIDE, (c, rng) => {
    fillNoise(c, rng, '#8f6347', 0.08);
    for (let x = 0; x < 16; x++) {
      const grassDepth = 3 + Math.floor(rng() * 3);
      for (let y = 0; y < grassDepth; y++) {
        px(c, x, y, shadeHex('#6fd685', 1 + (rng() - 0.5) * 0.1));
      }
      px(c, x, grassDepth, '#52a866');
    }
  });

  // 2: 暖棕泥土
  drawTile(TileIndex.DIRT, (c, rng) => {
    fillNoise(c, rng, '#8f6347', 0.09);
    for (let i = 0; i < 8; i++) {
      px(c, Math.floor(rng() * 15), Math.floor(rng() * 15), '#754e36', 2, 1);
    }
  });

  // 3: 落樱粉草顶面
  drawTile(TileIndex.SAKURA_GRASS_TOP, (c, rng) => {
    fillNoise(c, rng, '#7cd992', 0.06);
    // 撒满飘落的粉色樱花瓣像素
    for (let i = 0; i < 28; i++) {
      const x = Math.floor(rng() * 15);
      const y = Math.floor(rng() * 15);
      px(c, x, y, rng() > 0.4 ? '#ff9ec4' : '#ffd4e6', rng() > 0.5 ? 2 : 1, 1);
    }
  });

  // 4: 落樱草侧面
  drawTile(TileIndex.SAKURA_GRASS_SIDE, (c, rng) => {
    fillNoise(c, rng, '#8f6347', 0.08);
    for (let x = 0; x < 16; x++) {
      const d = 3 + Math.floor(rng() * 3);
      for (let y = 0; y < d; y++) {
        px(c, x, y, y === 0 && rng() > 0.45 ? '#ffa6c9' : '#7cd992');
      }
      px(c, x, d, '#5ab070');
    }
  });

  // 5: 浮岛云岩
  drawTile(TileIndex.CLIFF_STONE, (c, rng) => {
    fillNoise(c, rng, '#7d7796', 0.08);
    for (let y = 3; y < 16; y += 5) {
      px(c, Math.floor(rng() * 6), y, '#67617f', 8, 1);
    }
  });

  // 6: 深渊玄武岩
  drawTile(TileIndex.DEEP_ROCK, (c, rng) => {
    fillNoise(c, rng, '#534c6e', 0.09);
    for (let i = 0; i < 6; i++) {
      px(c, Math.floor(rng() * 14), Math.floor(rng() * 14), '#3f3957', 2, 2);
    }
  });

  // 7: 晶莹白雪
  drawTile(TileIndex.SNOW, (c, rng) => {
    fillNoise(c, rng, '#f4f8ff', 0.03);
    for (let i = 0; i < 10; i++) {
      px(c, Math.floor(rng() * 16), Math.floor(rng() * 16), '#dcebff');
    }
  });

  // 8: 珍珠河沙
  drawTile(TileIndex.SAND, (c, rng) => {
    fillNoise(c, rng, '#f6e7c8', 0.05);
  });

  // 9: 鹅卵石步道
  drawTile(TileIndex.COBBLE, (c, rng) => {
    fillNoise(c, rng, '#aba4ba', 0.05);
    const stones = [
      [1, 1, 6, 5, '#d8d2e3'],
      [8, 1, 7, 6, '#cfc8dc'],
      [1, 7, 5, 7, '#cbc4d8'],
      [7, 8, 8, 6, '#ded8e8'],
    ] as const;
    for (const [sx, sy, sw, sh, col] of stones) {
      px(c, sx, sy, col, sw, sh);
      px(c, sx, sy, shadeHex(col, 1.06), sw, 1);
      px(c, sx, sy + sh - 1, shadeHex(col, 0.88), sw, 1);
    }
  });

  // 10: 广场星纹大理石
  drawTile(TileIndex.PLAZA_MARBLE, (c, rng) => {
    fillNoise(c, rng, '#f5f0fa', 0.025);
    px(c, 0, 0, '#dcd4ea', 16, 1);
    px(c, 0, 0, '#dcd4ea', 1, 16);
    px(c, 7, 3, '#e8d7b0', 2, 10);
    px(c, 3, 7, '#e8d7b0', 10, 2);
    px(c, 6, 6, '#ffd984', 4, 4);
  });

  // 11: 皇家白玉石砖
  drawTile(TileIndex.CASTLE_WALL, (c, rng) => {
    paintBricks(c, rng, '#f8f4ec', '#dfd9e8', 4);
  });

  // 12: 月影灰蓝城垣基石
  drawTile(TileIndex.CASTLE_BASE, (c, rng) => {
    paintBricks(c, rng, '#cfc9e0', '#ada6c4', 4);
  });

  // 13 & 14: 罗马雕花白石柱
  drawTile(TileIndex.CASTLE_PILLAR_SIDE, (c, rng) => {
    fillNoise(c, rng, '#faf6ef', 0.02);
    for (let x = 2; x < 16; x += 4) {
      px(c, x, 0, '#e3dde9', 1, 16);
      px(c, x + 1, 0, '#ffffff', 1, 16);
    }
  });
  drawTile(TileIndex.CASTLE_PILLAR_TOP, (c, rng) => {
    fillNoise(c, rng, '#faf6ef', 0.02);
    px(c, 1, 1, '#e3dde9', 14, 14);
    px(c, 3, 3, '#faf6ef', 10, 10);
  });

  // 15, 16, 17: 皇家琉璃瓦（蓝、樱花粉、星云紫）
  drawTile(TileIndex.ROOF_BLUE, (c, rng) => paintRoofScales(c, rng, '#4c88e8'));
  drawTile(TileIndex.ROOF_PINK, (c, rng) => paintRoofScales(c, rng, '#ee7fb8'));
  drawTile(TileIndex.ROOF_LAVENDER, (c, rng) => paintRoofScales(c, rng, '#9b7ede'));

  // 18: 璀璨皇冠金饰
  drawTile(TileIndex.GOLD, (c, rng) => {
    fillNoise(c, rng, '#ffd25a', 0.05);
    px(c, 0, 0, '#fff0a6', 16, 2);
    px(c, 0, 0, '#fff0a6', 2, 16);
    px(c, 0, 14, '#d99b26', 16, 2);
    px(c, 14, 0, '#d99b26', 2, 16);
    px(c, 5, 5, '#fff6c4', 6, 6);
  });

  // 19: 小镇奶油白灰泥墙
  drawTile(TileIndex.PLASTER, (c, rng) => {
    fillNoise(c, rng, '#fbf4e4', 0.035);
  });

  // 20 & 21: 深橡木梁柱
  drawTile(TileIndex.TIMBER_SIDE, (c, rng) => {
    fillNoise(c, rng, '#784e34', 0.06);
    for (let x = 0; x < 16; x += 4) {
      px(c, x, 0, '#5e3b26', 1, 16);
    }
  });
  drawTile(TileIndex.TIMBER_TOP, (c, rng) => {
    fillNoise(c, rng, '#9c6e49', 0.04);
    px(c, 0, 0, '#6b442b', 16, 2);
    px(c, 0, 14, '#6b442b', 16, 2);
    px(c, 0, 0, '#6b442b', 2, 16);
    px(c, 14, 0, '#6b442b', 2, 16);
    px(c, 5, 5, '#7d5336', 6, 6);
  });

  // 22: 暖松木板
  drawTile(TileIndex.PLANKS, (c, rng) => {
    fillNoise(c, rng, '#c28d5e', 0.05);
    for (let y = 3; y < 16; y += 4) {
      px(c, 0, y, '#9c6b40', 16, 1);
    }
  });

  // 23, 24, 25: 童话小镇斜顶瓦
  drawTile(TileIndex.ROOF_CORAL, (c, rng) => paintRoofScales(c, rng, '#f07c7a'));
  drawTile(TileIndex.ROOF_MINT, (c, rng) => paintRoofScales(c, rng, '#58c4b8'));
  drawTile(TileIndex.ROOF_HONEY, (c, rng) => paintRoofScales(c, rng, '#f4b95a'));

  // 26: 暖陶红砖
  drawTile(TileIndex.BRICK, (c, rng) => paintBricks(c, rng, '#c96c5f', '#ead8ce', 4));

  // 27: 云绒白帆
  drawTile(TileIndex.WHITE_CLOTH, (c, rng) => {
    fillNoise(c, rng, '#ffffff', 0.025);
    px(c, 0, 7, '#e8eef7', 16, 1);
    px(c, 7, 0, '#e8eef7', 1, 16);
  });

  // 28 & 29: 树干
  drawTile(TileIndex.TRUNK_DARK_SIDE, (c, rng) => {
    fillNoise(c, rng, '#66442e', 0.07);
    for (let x = 1; x < 16; x += 3) {
      px(c, x, 0, '#4f3321', 1, 16);
    }
  });
  drawTile(TileIndex.TRUNK_SPIRIT_SIDE, (c, rng) => {
    fillNoise(c, rng, '#8a686e', 0.06);
    for (let x = 2; x < 16; x += 4) {
      px(c, x, 0, '#6e4f55', 1, 16);
    }
  });

  // 30~33: 四种梦幻树叶
  drawTile(TileIndex.LEAVES_SAKURA, (c, rng) => paintLeaves(c, rng, '#ff8fb6', '#ffdbe9'));
  drawTile(TileIndex.LEAVES_SAKURA_LIGHT, (c, rng) => paintLeaves(c, rng, '#ffc8df', '#fff5fa'));
  drawTile(TileIndex.LEAVES_EMERALD, (c, rng) => paintLeaves(c, rng, '#54ba73', '#9cf0a8'));
  drawTile(TileIndex.LEAVES_GOLDEN, (c, rng) => paintLeaves(c, rng, '#f7c852', '#fff099'));

  // 34: 红底白波点蘑菇
  drawTile(TileIndex.MUSHROOM_RED, (c, rng) => {
    fillNoise(c, rng, '#ef5366', 0.04);
    px(c, 2, 2, '#fff9f2', 4, 4);
    px(c, 10, 3, '#fff9f2', 3, 3);
    px(c, 5, 10, '#fff9f2', 4, 4);
    px(c, 12, 11, '#fff9f2', 2, 2);
  });

  // 35: 暖光格栅窗
  drawTile(TileIndex.WARM_WINDOW, (c) => {
    for (let y = 0; y < 16; y++) {
      for (let x = 0; x < 16; x++) {
        const dist = Math.hypot(x - 7.5, y - 7.5);
        px(c, x, y, dist < 5 ? '#fff6bd' : '#ffbe55');
      }
    }
    // 窗框与十字棂
    px(c, 0, 0, '#6e4832', 16, 2);
    px(c, 0, 14, '#6e4832', 16, 2);
    px(c, 0, 0, '#6e4832', 2, 16);
    px(c, 14, 0, '#6e4832', 2, 16);
    px(c, 7, 0, '#6e4832', 2, 16);
    px(c, 0, 7, '#6e4832', 16, 2);
  });

  // 36: 皇家玫瑰彩绘窗
  drawTile(TileIndex.ROSE_GLASS, (c) => {
    px(c, 0, 0, '#4f3a66', 16, 16);
    px(c, 2, 2, '#6ed8ff', 12, 12);
    px(c, 4, 2, '#ff7ac6', 8, 12);
    px(c, 2, 4, '#ff7ac6', 12, 8);
    px(c, 5, 5, '#ffe680', 6, 6);
    px(c, 7, 2, '#4f3a66', 2, 12);
    px(c, 2, 7, '#4f3a66', 12, 2);
    px(c, 6, 6, '#ffffff', 4, 4);
  });

  // 37: 街灯暖金灯芯
  drawTile(TileIndex.LANTERN, (c) => {
    px(c, 0, 0, '#ffca58', 16, 16);
    px(c, 2, 2, '#ffe885', 12, 12);
    px(c, 4, 4, '#fffbe0', 8, 8);
    px(c, 0, 0, '#5c4338', 16, 2);
    px(c, 0, 14, '#5c4338', 16, 2);
  });

  // 38 & 39: 浮空蓝水晶 & 紫水晶
  const paintCrystal = (c: CanvasRenderingContext2D, rng: () => number, base: string, core: string) => {
    fillNoise(c, rng, base, 0.08);
    px(c, 3, 3, core, 10, 10);
    px(c, 5, 5, '#ffffff', 5, 5);
  };
  drawTile(TileIndex.CRYSTAL_CYAN, (c, rng) => paintCrystal(c, rng, '#39cfe0', '#9ef8ff'));
  drawTile(TileIndex.CRYSTAL_AMETHYST, (c, rng) => paintCrystal(c, rng, '#b666ff', '#eccaff'));
  drawTile(TileIndex.GLOW_SHROOM_BLUE, (c, rng) => paintCrystal(c, rng, '#49c6ff', '#bbf2ff'));
  drawTile(TileIndex.STAR_CORE, (c, rng) => paintCrystal(c, rng, '#ffe169', '#ffffff'));

  // 42 & 43: 碧波湖水 & 瀑布白沫
  drawTile(TileIndex.WATER, (c, rng) => {
    fillNoise(c, rng, '#44b8f0', 0.04);
    px(c, 2, 4, '#8ce0ff', 5, 1);
    px(c, 9, 11, '#8ce0ff', 5, 1);
  });
  drawTile(TileIndex.WATERFALL, (c, rng) => {
    fillNoise(c, rng, '#9be4ff', 0.05);
    for (let x = 2; x < 15; x += 4) {
      px(c, x, 0, '#eefbff', 2, 16);
    }
  });

  // 44~50: 彩虹七色半透明琉璃块
  const rainbowColors: [number, string][] = [
    [TileIndex.RAINBOW_R, '#ff7597'],
    [TileIndex.RAINBOW_O, '#ffad66'],
    [TileIndex.RAINBOW_Y, '#ffe675'],
    [TileIndex.RAINBOW_G, '#75eb9c'],
    [TileIndex.RAINBOW_C, '#6ee8f7'],
    [TileIndex.RAINBOW_B, '#7da8ff'],
    [TileIndex.RAINBOW_V, '#c78cff'],
  ];
  for (const [idx, hex] of rainbowColors) {
    drawTile(idx, (c, rng) => {
      fillNoise(c, rng, hex, 0.03);
      px(c, 0, 0, shadeHex(hex, 1.18), 16, 2);
      px(c, 4, 4, '#ffffff', 3, 3);
    });
  }

  // 51~56: 九霄凌霄冰霜宫殿像素纹理
  drawTile(TileIndex.FROST_BRICK, (c, rng) => {
    paintBricks(c, rng, '#d8f3ff', '#8ecae6', 4);
    // 晶莹斜向冰霜高光纹
    for (let i = 0; i < 12; i++) {
      px(c, i + 2, (i * 3) % 15, '#ffffff', 2, 1);
    }
  });

  drawTile(TileIndex.DARK_ABYSS_ICE, (c, rng) => {
    paintBricks(c, rng, '#283d70', '#19274d', 4);
    px(c, 0, 0, '#5ec8f8', 16, 1);
    px(c, 6, 6, '#6be2ff', 4, 4);
  });

  drawTile(TileIndex.FROST_PILLAR_SIDE, (c, rng) => {
    fillNoise(c, rng, '#dcf5ff', 0.03);
    for (let x = 2; x < 16; x += 4) {
      px(c, x, 0, '#8ecae6', 1, 16);
      px(c, x + 1, 0, '#ffffff', 1, 16);
    }
  });

  drawTile(TileIndex.FROST_PILLAR_TOP, (c, rng) => {
    fillNoise(c, rng, '#dcf5ff', 0.02);
    px(c, 1, 1, '#7cc6eb', 14, 14);
    px(c, 4, 4, '#ffffff', 8, 8);
  });

  drawTile(TileIndex.FROST_RUNE_GLOW, (c) => {
    px(c, 0, 0, '#2bb8e6', 16, 16);
    px(c, 2, 2, '#6ef2ff', 12, 12);
    px(c, 4, 4, '#c7fcff', 8, 8);
    px(c, 6, 1, '#ffffff', 4, 14);
    px(c, 1, 6, '#ffffff', 14, 4);
  });

  drawTile(TileIndex.GLACIER_ICE, (c, rng) => {
    fillNoise(c, rng, '#62cdfa', 0.05);
    // 冰晶斜向折射亮带
    for (let i = 0; i < 14; i++) {
      px(c, i, 14 - i, '#dffaff', 2, 2);
    }
    px(c, 0, 0, '#b8f2ff', 16, 1);
    px(c, 0, 0, '#b8f2ff', 1, 16);
  });

  const texture = new THREE.CanvasTexture(canvas);
  texture.magFilter = THREE.NearestFilter;
  texture.minFilter = THREE.NearestFilter;
  texture.generateMipmaps = false;
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.needsUpdate = true;
  return texture;
}

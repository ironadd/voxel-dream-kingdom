export enum BlockId {
  AIR = 0,
  // 地形与自然
  GRASS_DREAM = 1,       // 梦幻翠绿花草地（顶草侧草泥底土）
  GRASS_SAKURA = 2,      // 落樱粉茵草地（樱花林地表）
  DIRT_WARM = 3,         // 暖棕泥土
  CLIFF_STONE = 4,       // 浮岛浅灰紫岩层
  DEEP_ROCK = 5,         // 浮岛深渊玄武岩
  SNOW_PURE = 6,         // 高山晶莹白雪
  SAND_PEARL = 7,        // 珍珠暖白河滩沙
  COBBLE_PATH = 8,       // 童话鹅卵石步道
  PLAZA_MARBLE = 9,      // 广场星纹大理石地砖

  // 皇家城堡建材
  CASTLE_WALL = 10,      // 珍珠象牙白石砖墙
  CASTLE_BASE = 11,      // 月影灰蓝厚重基石
  CASTLE_PILLAR = 12,    // 竖纹罗马雕花白石柱
  ROOF_ROYAL_BLUE = 13,  // 皇家琉璃蓝鳞瓦
  ROOF_SAKURA_PINK = 14, // 梦幻樱霞粉鳞瓦
  ROOF_LAVENDER = 15,    // 星云薰衣草紫鳞瓦
  GOLD_CROWN = 16,       // 璀璨皇家金饰块

  // 童话小镇建材
  COTTAGE_PLASTER = 17,  // 奶油白灰泥外墙
  TIMBER_OAK = 18,       // 深橡木结构横梁/原木
  PLANKS_WARM = 19,      // 暖色木板（吊桥/露台/风车）
  ROOF_CORAL = 20,       // 珊瑚橘红童话瓦
  ROOF_MINT = 21,        // 薄荷青碧童话瓦
  ROOF_HONEY = 22,       // 蜜桃暖金童话瓦
  BRICK_CHIMNEY = 23,    // 暖红陶砖（烟囱/花坛）
  WHITE_SAIL = 24,       // 风车洁白帆布/云朵白块

  // 植物与森林
  TRUNK_DARK = 25,       // 森林胡桃木树干
  TRUNK_SPIRIT = 26,     // 樱花神木浅褐粉白树干
  LEAVES_SAKURA = 27,    // 绯粉樱花簇
  LEAVES_SAKURA_LIGHT = 28, // 雪白粉樱花簇
  LEAVES_EMERALD = 29,   // 翡翠森林树叶
  LEAVES_GOLDEN = 30,    // 金秋暖黄树叶
  MUSHROOM_RED = 31,     // 红底白点童话蘑菇伞

  // 发光奇观方块 (Emissive Layer)
  WARM_WINDOW = 32,      // 暖橘灯光格栅窗
  ROSE_STAINED_GLASS = 33, // 皇家玫瑰彩绘发光窗
  LANTERN_GLOW = 34,     // 街灯暖金灯芯
  CRYSTAL_CYAN = 35,     // 天空之城浮空蓝水晶
  CRYSTAL_AMETHYST = 36, // 星象台梦幻紫水晶
  GLOW_SHROOM_BLUE = 37, // 幽蓝荧光蘑菇/仙灵花
  STAR_CORE = 38,        // 塔尖璀璨星辰核心

  // 半透明水体与彩虹琉璃 (Transparent Layer)
  WATER = 39,            // 清澈碧波湖水
  WATERFALL_FOAM = 40,   // 瀑布飞沫亮白水体
  RAINBOW_RED = 41,
  RAINBOW_ORANGE = 42,
  RAINBOW_YELLOW = 43,
  RAINBOW_GREEN = 44,
  RAINBOW_CYAN = 45,
  RAINBOW_BLUE = 46,
  RAINBOW_VIOLET = 47,

  // 九霄凌霄冰霜神殿建材
  FROST_BRICK = 48,      // 凛冬寒冰玉砖
  DARK_ABYSS_ICE = 49,   // 寒渊玄冰镶金石
  FROST_PILLAR = 50,     // 极地冰棱竖柱
  FROST_RUNE_GLOW = 51,  // 极寒星髓发光符文晶
  GLACIER_ICE = 52,      // 半透明极光琉璃冰刺
}

export type RenderLayer = 'opaque' | 'emissive' | 'night_window' | 'transparent';

export interface BlockDef {
  id: BlockId;
  name: string;
  layer: RenderLayer;
  /** 纹理图集槽位：[top, side, bottom] */
  tiles: [number, number, number];
  /** 是否对邻近不透明方块产生遮挡（剔除面 & 计算AO） */
  occludes: boolean;
  /** UI 调色盘代表色 */
  swatch: string;
}

export const TileIndex = {
  GRASS_TOP: 0,
  GRASS_SIDE: 1,
  DIRT: 2,
  SAKURA_GRASS_TOP: 3,
  SAKURA_GRASS_SIDE: 4,
  CLIFF_STONE: 5,
  DEEP_ROCK: 6,
  SNOW: 7,
  SAND: 8,
  COBBLE: 9,
  PLAZA_MARBLE: 10,
  CASTLE_WALL: 11,
  CASTLE_BASE: 12,
  CASTLE_PILLAR_SIDE: 13,
  CASTLE_PILLAR_TOP: 14,
  ROOF_BLUE: 15,
  ROOF_PINK: 16,
  ROOF_LAVENDER: 17,
  GOLD: 18,
  PLASTER: 19,
  TIMBER_SIDE: 20,
  TIMBER_TOP: 21,
  PLANKS: 22,
  ROOF_CORAL: 23,
  ROOF_MINT: 24,
  ROOF_HONEY: 25,
  BRICK: 26,
  WHITE_CLOTH: 27,
  TRUNK_DARK_SIDE: 28,
  TRUNK_SPIRIT_SIDE: 29,
  LEAVES_SAKURA: 30,
  LEAVES_SAKURA_LIGHT: 31,
  LEAVES_EMERALD: 32,
  LEAVES_GOLDEN: 33,
  MUSHROOM_RED: 34,
  WARM_WINDOW: 35,
  ROSE_GLASS: 36,
  LANTERN: 37,
  CRYSTAL_CYAN: 38,
  CRYSTAL_AMETHYST: 39,
  GLOW_SHROOM_BLUE: 40,
  STAR_CORE: 41,
  WATER: 42,
  WATERFALL: 43,
  RAINBOW_R: 44,
  RAINBOW_O: 45,
  RAINBOW_Y: 46,
  RAINBOW_G: 47,
  RAINBOW_C: 48,
  RAINBOW_B: 49,
  RAINBOW_V: 50,
  FROST_BRICK: 51,
  DARK_ABYSS_ICE: 52,
  FROST_PILLAR_SIDE: 53,
  FROST_PILLAR_TOP: 54,
  FROST_RUNE_GLOW: 55,
  GLACIER_ICE: 56,
} as const;

const T = TileIndex;

export const BLOCK_DEFS: Record<number, BlockDef> = {
  [BlockId.GRASS_DREAM]: {
    id: BlockId.GRASS_DREAM,
    name: '翠茵花草块',
    layer: 'opaque',
    tiles: [T.GRASS_TOP, T.GRASS_SIDE, T.DIRT],
    occludes: true,
    swatch: '#72d687',
  },
  [BlockId.GRASS_SAKURA]: {
    id: BlockId.GRASS_SAKURA,
    name: '落樱草地块',
    layer: 'opaque',
    tiles: [T.SAKURA_GRASS_TOP, T.SAKURA_GRASS_SIDE, T.DIRT],
    occludes: true,
    swatch: '#f4a6c8',
  },
  [BlockId.DIRT_WARM]: {
    id: BlockId.DIRT_WARM,
    name: '暖棕泥土',
    layer: 'opaque',
    tiles: [T.DIRT, T.DIRT, T.DIRT],
    occludes: true,
    swatch: '#8f6347',
  },
  [BlockId.CLIFF_STONE]: {
    id: BlockId.CLIFF_STONE,
    name: '浮岛云岩',
    layer: 'opaque',
    tiles: [T.CLIFF_STONE, T.CLIFF_STONE, T.CLIFF_STONE],
    occludes: true,
    swatch: '#787390',
  },
  [BlockId.DEEP_ROCK]: {
    id: BlockId.DEEP_ROCK,
    name: '星渊玄武岩',
    layer: 'opaque',
    tiles: [T.DEEP_ROCK, T.DEEP_ROCK, T.DEEP_ROCK],
    occludes: true,
    swatch: '#524b6b',
  },
  [BlockId.SNOW_PURE]: {
    id: BlockId.SNOW_PURE,
    name: '云巅白雪',
    layer: 'opaque',
    tiles: [T.SNOW, T.SNOW, T.SNOW],
    occludes: true,
    swatch: '#f2f7ff',
  },
  [BlockId.SAND_PEARL]: {
    id: BlockId.SAND_PEARL,
    name: '珍珠河沙',
    layer: 'opaque',
    tiles: [T.SAND, T.SAND, T.SAND],
    occludes: true,
    swatch: '#f5e6c8',
  },
  [BlockId.COBBLE_PATH]: {
    id: BlockId.COBBLE_PATH,
    name: '鹅卵石步道',
    layer: 'opaque',
    tiles: [T.COBBLE, T.COBBLE, T.COBBLE],
    occludes: true,
    swatch: '#b8b2c4',
  },
  [BlockId.PLAZA_MARBLE]: {
    id: BlockId.PLAZA_MARBLE,
    name: '星纹大理石',
    layer: 'opaque',
    tiles: [T.PLAZA_MARBLE, T.CASTLE_WALL, T.CASTLE_WALL],
    occludes: true,
    swatch: '#efeaf6',
  },
  [BlockId.CASTLE_WALL]: {
    id: BlockId.CASTLE_WALL,
    name: '皇家白玉砖',
    layer: 'opaque',
    tiles: [T.CASTLE_WALL, T.CASTLE_WALL, T.CASTLE_WALL],
    occludes: true,
    swatch: '#f7f2ea',
  },
  [BlockId.CASTLE_BASE]: {
    id: BlockId.CASTLE_BASE,
    name: '月影城垣砖',
    layer: 'opaque',
    tiles: [T.CASTLE_BASE, T.CASTLE_BASE, T.CASTLE_BASE],
    occludes: true,
    swatch: '#d0cae0',
  },
  [BlockId.CASTLE_PILLAR]: {
    id: BlockId.CASTLE_PILLAR,
    name: '雕花罗马柱',
    layer: 'opaque',
    tiles: [T.CASTLE_PILLAR_TOP, T.CASTLE_PILLAR_SIDE, T.CASTLE_PILLAR_TOP],
    occludes: true,
    swatch: '#fcf9f2',
  },
  [BlockId.ROOF_ROYAL_BLUE]: {
    id: BlockId.ROOF_ROYAL_BLUE,
    name: '琉璃蓝塔瓦',
    layer: 'opaque',
    tiles: [T.ROOF_BLUE, T.ROOF_BLUE, T.ROOF_BLUE],
    occludes: true,
    swatch: '#4f8ae8',
  },
  [BlockId.ROOF_SAKURA_PINK]: {
    id: BlockId.ROOF_SAKURA_PINK,
    name: '樱霞粉塔瓦',
    layer: 'opaque',
    tiles: [T.ROOF_PINK, T.ROOF_PINK, T.ROOF_PINK],
    occludes: true,
    swatch: '#ee7fb8',
  },
  [BlockId.ROOF_LAVENDER]: {
    id: BlockId.ROOF_LAVENDER,
    name: '星云紫塔瓦',
    layer: 'opaque',
    tiles: [T.ROOF_LAVENDER, T.ROOF_LAVENDER, T.ROOF_LAVENDER],
    occludes: true,
    swatch: '#9b7ede',
  },
  [BlockId.GOLD_CROWN]: {
    id: BlockId.GOLD_CROWN,
    name: '璀璨皇冠金',
    layer: 'opaque',
    tiles: [T.GOLD, T.GOLD, T.GOLD],
    occludes: true,
    swatch: '#ffd166',
  },
  [BlockId.COTTAGE_PLASTER]: {
    id: BlockId.COTTAGE_PLASTER,
    name: '奶油灰泥墙',
    layer: 'opaque',
    tiles: [T.PLASTER, T.PLASTER, T.PLASTER],
    occludes: true,
    swatch: '#faf3e3',
  },
  [BlockId.TIMBER_OAK]: {
    id: BlockId.TIMBER_OAK,
    name: '橡木梁柱',
    layer: 'opaque',
    tiles: [T.TIMBER_TOP, T.TIMBER_SIDE, T.TIMBER_TOP],
    occludes: true,
    swatch: '#784f35',
  },
  [BlockId.PLANKS_WARM]: {
    id: BlockId.PLANKS_WARM,
    name: '暖松木板',
    layer: 'opaque',
    tiles: [T.PLANKS, T.PLANKS, T.PLANKS],
    occludes: true,
    swatch: '#ba8759',
  },
  [BlockId.ROOF_CORAL]: {
    id: BlockId.ROOF_CORAL,
    name: '珊瑚红屋瓦',
    layer: 'opaque',
    tiles: [T.ROOF_CORAL, T.ROOF_CORAL, T.ROOF_CORAL],
    occludes: true,
    swatch: '#f07c7a',
  },
  [BlockId.ROOF_MINT]: {
    id: BlockId.ROOF_MINT,
    name: '薄荷青屋瓦',
    layer: 'opaque',
    tiles: [T.ROOF_MINT, T.ROOF_MINT, T.ROOF_MINT],
    occludes: true,
    swatch: '#58c4b8',
  },
  [BlockId.ROOF_HONEY]: {
    id: BlockId.ROOF_HONEY,
    name: '蜜桃金屋瓦',
    layer: 'opaque',
    tiles: [T.ROOF_HONEY, T.ROOF_HONEY, T.ROOF_HONEY],
    occludes: true,
    swatch: '#f4b95a',
  },
  [BlockId.BRICK_CHIMNEY]: {
    id: BlockId.BRICK_CHIMNEY,
    name: '暖陶红砖',
    layer: 'opaque',
    tiles: [T.BRICK, T.BRICK, T.BRICK],
    occludes: true,
    swatch: '#c4685b',
  },
  [BlockId.WHITE_SAIL]: {
    id: BlockId.WHITE_SAIL,
    name: '云绒白布',
    layer: 'opaque',
    tiles: [T.WHITE_CLOTH, T.WHITE_CLOTH, T.WHITE_CLOTH],
    occludes: true,
    swatch: '#ffffff',
  },
  [BlockId.TRUNK_DARK]: {
    id: BlockId.TRUNK_DARK,
    name: '胡桃木树干',
    layer: 'opaque',
    tiles: [T.TIMBER_TOP, T.TRUNK_DARK_SIDE, T.TIMBER_TOP],
    occludes: true,
    swatch: '#63422d',
  },
  [BlockId.TRUNK_SPIRIT]: {
    id: BlockId.TRUNK_SPIRIT,
    name: '神木樱树干',
    layer: 'opaque',
    tiles: [T.TIMBER_TOP, T.TRUNK_SPIRIT_SIDE, T.TIMBER_TOP],
    occludes: true,
    swatch: '#8c6b70',
  },
  [BlockId.LEAVES_SAKURA]: {
    id: BlockId.LEAVES_SAKURA,
    name: '绯樱花叶',
    layer: 'opaque',
    tiles: [T.LEAVES_SAKURA, T.LEAVES_SAKURA, T.LEAVES_SAKURA],
    occludes: true,
    swatch: '#ff94b8',
  },
  [BlockId.LEAVES_SAKURA_LIGHT]: {
    id: BlockId.LEAVES_SAKURA_LIGHT,
    name: '雪樱花簇',
    layer: 'opaque',
    tiles: [T.LEAVES_SAKURA_LIGHT, T.LEAVES_SAKURA_LIGHT, T.LEAVES_SAKURA_LIGHT],
    occludes: true,
    swatch: '#ffd1e4',
  },
  [BlockId.LEAVES_EMERALD]: {
    id: BlockId.LEAVES_EMERALD,
    name: '翠森树叶',
    layer: 'opaque',
    tiles: [T.LEAVES_EMERALD, T.LEAVES_EMERALD, T.LEAVES_EMERALD],
    occludes: true,
    swatch: '#55b873',
  },
  [BlockId.LEAVES_GOLDEN]: {
    id: BlockId.LEAVES_GOLDEN,
    name: '金秋银杏叶',
    layer: 'opaque',
    tiles: [T.LEAVES_GOLDEN, T.LEAVES_GOLDEN, T.LEAVES_GOLDEN],
    occludes: true,
    swatch: '#f7c954',
  },
  [BlockId.MUSHROOM_RED]: {
    id: BlockId.MUSHROOM_RED,
    name: '波点红蘑菇',
    layer: 'opaque',
    tiles: [T.MUSHROOM_RED, T.MUSHROOM_RED, T.PLASTER],
    occludes: true,
    swatch: '#ef5b6c',
  },

  // 窗户与发光层
  [BlockId.WARM_WINDOW]: {
    id: BlockId.WARM_WINDOW,
    name: '暖光格栅窗',
    layer: 'night_window',
    tiles: [T.WARM_WINDOW, T.WARM_WINDOW, T.WARM_WINDOW],
    occludes: true,
    swatch: '#ffbe5c',
  },
  [BlockId.ROSE_STAINED_GLASS]: {
    id: BlockId.ROSE_STAINED_GLASS,
    name: '玫瑰彩绘窗',
    layer: 'night_window',
    tiles: [T.ROSE_GLASS, T.ROSE_GLASS, T.ROSE_GLASS],
    occludes: true,
    swatch: '#ff7ac6',
  },
  [BlockId.LANTERN_GLOW]: {
    id: BlockId.LANTERN_GLOW,
    name: '星辉暖灯笼',
    layer: 'emissive',
    tiles: [T.LANTERN, T.LANTERN, T.LANTERN],
    occludes: true,
    swatch: '#ffe382',
  },
  [BlockId.CRYSTAL_CYAN]: {
    id: BlockId.CRYSTAL_CYAN,
    name: '浮空蓝水晶',
    layer: 'emissive',
    tiles: [T.CRYSTAL_CYAN, T.CRYSTAL_CYAN, T.CRYSTAL_CYAN],
    occludes: true,
    swatch: '#5ce6f0',
  },
  [BlockId.CRYSTAL_AMETHYST]: {
    id: BlockId.CRYSTAL_AMETHYST,
    name: '幻梦紫水晶',
    layer: 'emissive',
    tiles: [T.CRYSTAL_AMETHYST, T.CRYSTAL_AMETHYST, T.CRYSTAL_AMETHYST],
    occludes: true,
    swatch: '#c87eff',
  },
  [BlockId.GLOW_SHROOM_BLUE]: {
    id: BlockId.GLOW_SHROOM_BLUE,
    name: '荧光仙灵菌',
    layer: 'emissive',
    tiles: [T.GLOW_SHROOM_BLUE, T.GLOW_SHROOM_BLUE, T.GLOW_SHROOM_BLUE],
    occludes: true,
    swatch: '#6ae2ff',
  },
  [BlockId.STAR_CORE]: {
    id: BlockId.STAR_CORE,
    name: '星冠辉光核',
    layer: 'emissive',
    tiles: [T.STAR_CORE, T.STAR_CORE, T.STAR_CORE],
    occludes: true,
    swatch: '#fff3a8',
  },

  // 水体与半透明彩虹桥
  [BlockId.WATER]: {
    id: BlockId.WATER,
    name: '镜湖碧水',
    layer: 'transparent',
    tiles: [T.WATER, T.WATER, T.WATER],
    occludes: false,
    swatch: '#4cc3f7',
  },
  [BlockId.WATERFALL_FOAM]: {
    id: BlockId.WATERFALL_FOAM,
    name: '飞瀑白沫',
    layer: 'transparent',
    tiles: [T.WATERFALL, T.WATERFALL, T.WATERFALL],
    occludes: false,
    swatch: '#aee8ff',
  },
  [BlockId.RAINBOW_RED]: {
    id: BlockId.RAINBOW_RED,
    name: '虹桥绯光块',
    layer: 'transparent',
    tiles: [T.RAINBOW_R, T.RAINBOW_R, T.RAINBOW_R],
    occludes: false,
    swatch: '#ff7597',
  },
  [BlockId.RAINBOW_ORANGE]: {
    id: BlockId.RAINBOW_ORANGE,
    name: '虹桥琥珀块',
    layer: 'transparent',
    tiles: [T.RAINBOW_O, T.RAINBOW_O, T.RAINBOW_O],
    occludes: false,
    swatch: '#ffaa6b',
  },
  [BlockId.RAINBOW_YELLOW]: {
    id: BlockId.RAINBOW_YELLOW,
    name: '虹桥星金块',
    layer: 'transparent',
    tiles: [T.RAINBOW_Y, T.RAINBOW_Y, T.RAINBOW_Y],
    occludes: false,
    swatch: '#ffe373',
  },
  [BlockId.RAINBOW_GREEN]: {
    id: BlockId.RAINBOW_GREEN,
    name: '虹桥翡翠块',
    layer: 'transparent',
    tiles: [T.RAINBOW_G, T.RAINBOW_G, T.RAINBOW_G],
    occludes: false,
    swatch: '#72eb98',
  },
  [BlockId.RAINBOW_CYAN]: {
    id: BlockId.RAINBOW_CYAN,
    name: '虹桥天青块',
    layer: 'transparent',
    tiles: [T.RAINBOW_C, T.RAINBOW_C, T.RAINBOW_C],
    occludes: false,
    swatch: '#6ce8f5',
  },
  [BlockId.RAINBOW_BLUE]: {
    id: BlockId.RAINBOW_BLUE,
    name: '虹桥星蓝块',
    layer: 'transparent',
    tiles: [T.RAINBOW_B, T.RAINBOW_B, T.RAINBOW_B],
    occludes: false,
    swatch: '#79a6ff',
  },
  [BlockId.RAINBOW_VIOLET]: {
    id: BlockId.RAINBOW_VIOLET,
    name: '虹桥幻紫块',
    layer: 'transparent',
    tiles: [T.RAINBOW_V, T.RAINBOW_V, T.RAINBOW_V],
    occludes: false,
    swatch: '#c48aff',
  },

  // 凌霄冰霜神殿专属方块
  [BlockId.FROST_BRICK]: {
    id: BlockId.FROST_BRICK,
    name: '凛冬寒冰砖',
    layer: 'opaque',
    tiles: [T.FROST_BRICK, T.FROST_BRICK, T.FROST_BRICK],
    occludes: true,
    swatch: '#cbeeff',
  },
  [BlockId.DARK_ABYSS_ICE]: {
    id: BlockId.DARK_ABYSS_ICE,
    name: '寒渊星曜石',
    layer: 'opaque',
    tiles: [T.DARK_ABYSS_ICE, T.DARK_ABYSS_ICE, T.DARK_ABYSS_ICE],
    occludes: true,
    swatch: '#2c4278',
  },
  [BlockId.FROST_PILLAR]: {
    id: BlockId.FROST_PILLAR,
    name: '极地冰棱柱',
    layer: 'opaque',
    tiles: [T.FROST_PILLAR_TOP, T.FROST_PILLAR_SIDE, T.FROST_PILLAR_TOP],
    occludes: true,
    swatch: '#e3f7ff',
  },
  [BlockId.FROST_RUNE_GLOW]: {
    id: BlockId.FROST_RUNE_GLOW,
    name: '极寒星髓核',
    layer: 'emissive',
    tiles: [T.FROST_RUNE_GLOW, T.FROST_RUNE_GLOW, T.FROST_RUNE_GLOW],
    occludes: true,
    swatch: '#7af5ff',
  },
  [BlockId.GLACIER_ICE]: {
    id: BlockId.GLACIER_ICE,
    name: '极光琉璃冰',
    layer: 'transparent',
    tiles: [T.GLACIER_ICE, T.GLACIER_ICE, T.GLACIER_ICE],
    occludes: false,
    swatch: '#73d7ff',
  },
};

/** 供玩家自由建造模式选择的精选方块调色盘 */
export const BUILD_PALETTE_BLOCKS: BlockId[] = [
  BlockId.CASTLE_WALL,
  BlockId.ROOF_SAKURA_PINK,
  BlockId.ROOF_ROYAL_BLUE,
  BlockId.GOLD_CROWN,
  BlockId.LEAVES_SAKURA,
  BlockId.LANTERN_GLOW,
  BlockId.CRYSTAL_AMETHYST,
];

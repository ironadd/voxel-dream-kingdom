import * as THREE from 'three';
import { BLOCK_DEFS, BlockId, RenderLayer } from './BlockTypes';
import { getTileUV } from './PixelTextures';

export const CHUNK_SIZE = 16;

export interface RaycastHit {
  x: number;
  y: number;
  z: number;
  nx: number;
  ny: number;
  nz: number;
  blockId: BlockId;
  distance: number;
}

interface LayerBuffers {
  positions: number[];
  normals: number[];
  uvs: number[];
  colors: number[];
  indices: number[];
}

interface ChunkMeshes {
  opaque?: THREE.Mesh;
  night_window?: THREE.Mesh;
  emissive?: THREE.Mesh;
  transparent?: THREE.Mesh;
}

interface FaceSpec {
  dir: [number, number, number];
  slot: 0 | 1 | 2; // 0: top, 1: side, 2: bottom
  dirLight: number;
  verts: [
    [number, number, number],
    [number, number, number],
    [number, number, number],
    [number, number, number]
  ];
  aoOffsets: (vx: number, vy: number, vz: number) => [
    [number, number, number],
    [number, number, number],
    [number, number, number]
  ];
}

const FACES: FaceSpec[] = [
  // +Y Top
  {
    dir: [0, 1, 0],
    slot: 0,
    dirLight: 1.0,
    verts: [
      [0, 1, 1],
      [1, 1, 1],
      [1, 1, 0],
      [0, 1, 0],
    ],
    aoOffsets: (vx, _vy, vz) => {
      const sx = vx === 0 ? -1 : 1;
      const sz = vz === 0 ? -1 : 1;
      return [
        [sx, 1, 0],
        [0, 1, sz],
        [sx, 1, sz],
      ];
    },
  },
  // -Y Bottom
  {
    dir: [0, -1, 0],
    slot: 2,
    dirLight: 0.74,
    verts: [
      [0, 0, 0],
      [1, 0, 0],
      [1, 0, 1],
      [0, 0, 1],
    ],
    aoOffsets: (vx, _vy, vz) => {
      const sx = vx === 0 ? -1 : 1;
      const sz = vz === 0 ? -1 : 1;
      return [
        [sx, -1, 0],
        [0, -1, sz],
        [sx, -1, sz],
      ];
    },
  },
  // +Z Front
  {
    dir: [0, 0, 1],
    slot: 1,
    dirLight: 0.95,
    verts: [
      [0, 0, 1],
      [1, 0, 1],
      [1, 1, 1],
      [0, 1, 1],
    ],
    aoOffsets: (vx, vy, _vz) => {
      const sx = vx === 0 ? -1 : 1;
      const sy = vy === 0 ? -1 : 1;
      return [
        [sx, 0, 1],
        [0, sy, 1],
        [sx, sy, 1],
      ];
    },
  },
  // -Z Back
  {
    dir: [0, 0, -1],
    slot: 1,
    dirLight: 0.9,
    verts: [
      [1, 0, 0],
      [0, 0, 0],
      [0, 1, 0],
      [1, 1, 0],
    ],
    aoOffsets: (vx, vy, _vz) => {
      const sx = vx === 0 ? -1 : 1;
      const sy = vy === 0 ? -1 : 1;
      return [
        [sx, 0, -1],
        [0, sy, -1],
        [sx, sy, -1],
      ];
    },
  },
  // +X Right
  {
    dir: [1, 0, 0],
    slot: 1,
    dirLight: 0.92,
    verts: [
      [1, 0, 1],
      [1, 0, 0],
      [1, 1, 0],
      [1, 1, 1],
    ],
    aoOffsets: (_vx, vy, vz) => {
      const sy = vy === 0 ? -1 : 1;
      const sz = vz === 0 ? -1 : 1;
      return [
        [1, sy, 0],
        [1, 0, sz],
        [1, sy, sz],
      ];
    },
  },
  // -X Left
  {
    dir: [-1, 0, 0],
    slot: 1,
    dirLight: 0.87,
    verts: [
      [0, 0, 0],
      [0, 0, 1],
      [0, 1, 1],
      [0, 1, 0],
    ],
    aoOffsets: (_vx, vy, vz) => {
      const sy = vy === 0 ? -1 : 1;
      const sz = vz === 0 ? -1 : 1;
      return [
        [-1, sy, 0],
        [-1, 0, sz],
        [-1, sy, sz],
      ];
    },
  },
];

// 梦幻暖紫蓝阴影曲线：阴角通透柔和不发黑
const AO_CURVE: [number, number, number][] = [
  [0.54, 0.52, 0.70], // 0: 最深角落（带梦幻紫罗兰色调）
  [0.70, 0.69, 0.82], // 1: 中度遮蔽
  [0.85, 0.85, 0.92], // 2: 轻度遮蔽
  [1.00, 1.00, 1.00], // 3: 完全通透
];

export class VoxelWorld {
  private chunks = new Map<string, Uint8Array>();
  private chunkMeshes = new Map<string, ChunkMeshes>();
  private dirtyChunks = new Set<string>();
  public readonly group = new THREE.Group();
  public blockCount = 0;

  public readonly materials: Record<RenderLayer, THREE.MeshStandardMaterial>;

  constructor(atlas: THREE.CanvasTexture) {
    this.materials = {
      opaque: new THREE.MeshStandardMaterial({
        map: atlas,
        vertexColors: true,
        roughness: 0.86,
        metalness: 0.04,
      }),
      night_window: new THREE.MeshStandardMaterial({
        map: atlas,
        emissiveMap: atlas,
        emissive: new THREE.Color('#ffbe6b'),
        emissiveIntensity: 0.55,
        vertexColors: true,
        roughness: 0.35,
        metalness: 0.1,
      }),
      emissive: new THREE.MeshStandardMaterial({
        map: atlas,
        emissiveMap: atlas,
        emissive: new THREE.Color('#ffffff'),
        emissiveIntensity: 1.35,
        vertexColors: false,
        roughness: 0.25,
        metalness: 0.05,
      }),
      transparent: new THREE.MeshStandardMaterial({
        map: atlas,
        emissiveMap: atlas,
        emissive: new THREE.Color('#88dcff'),
        emissiveIntensity: 0.22,
        vertexColors: true,
        transparent: true,
        opacity: 0.78,
        roughness: 0.18,
        metalness: 0.12,
        depthWrite: false,
      }),
    };
  }

  private chunkKey(cx: number, cy: number, cz: number): string {
    return `${cx},${cy},${cz}`;
  }

  private toChunkCoords(x: number, y: number, z: number) {
    const cx = Math.floor(x / CHUNK_SIZE);
    const cy = Math.floor(y / CHUNK_SIZE);
    const cz = Math.floor(z / CHUNK_SIZE);
    const lx = x - cx * CHUNK_SIZE;
    const ly = y - cy * CHUNK_SIZE;
    const lz = z - cz * CHUNK_SIZE;
    return { cx, cy, cz, lx, ly, lz };
  }

  private localIndex(lx: number, ly: number, lz: number): number {
    return (ly * CHUNK_SIZE + lz) * CHUNK_SIZE + lx;
  }

  public get(x: number, y: number, z: number): BlockId {
    const cx = Math.floor(x / CHUNK_SIZE);
    const cy = Math.floor(y / CHUNK_SIZE);
    const cz = Math.floor(z / CHUNK_SIZE);
    const chunk = this.chunks.get(this.chunkKey(cx, cy, cz));
    if (!chunk) return BlockId.AIR;
    const lx = x - cx * CHUNK_SIZE;
    const ly = y - cy * CHUNK_SIZE;
    const lz = z - cz * CHUNK_SIZE;
    return chunk[this.localIndex(lx, ly, lz)] as BlockId;
  }

  public set(x: number, y: number, z: number, block: BlockId): void {
    const xi = Math.floor(x);
    const yi = Math.floor(y);
    const zi = Math.floor(z);
    const { cx, cy, cz, lx, ly, lz } = this.toChunkCoords(xi, yi, zi);
    const key = this.chunkKey(cx, cy, cz);
    let chunk = this.chunks.get(key);
    if (!chunk) {
      if (block === BlockId.AIR) return;
      chunk = new Uint8Array(CHUNK_SIZE * CHUNK_SIZE * CHUNK_SIZE);
      this.chunks.set(key, chunk);
    }
    const idx = this.localIndex(lx, ly, lz);
    const prev = chunk[idx] as BlockId;
    if (prev === block) return;

    if (prev === BlockId.AIR && block !== BlockId.AIR) this.blockCount++;
    else if (prev !== BlockId.AIR && block === BlockId.AIR) this.blockCount--;

    chunk[idx] = block;
    this.markDirtyWithNeighbors(cx, cy, cz, lx, ly, lz);
  }

  /** 仅在目标格为空时放置方块（适合植被、装饰不破坏主体建筑） */
  public setIfAir(x: number, y: number, z: number, block: BlockId): void {
    if (this.get(x, y, z) === BlockId.AIR) {
      this.set(x, y, z, block);
    }
  }

  /** 填充长方体区域 */
  public fillBox(
    x0: number,
    y0: number,
    z0: number,
    x1: number,
    y1: number,
    z1: number,
    block: BlockId
  ): void {
    const minX = Math.min(x0, x1);
    const maxX = Math.max(x0, x1);
    const minY = Math.min(y0, y1);
    const maxY = Math.max(y0, y1);
    const minZ = Math.min(z0, z1);
    const maxZ = Math.max(z0, z1);
    for (let y = minY; y <= maxY; y++) {
      for (let z = minZ; z <= maxZ; z++) {
        for (let x = minX; x <= maxX; x++) {
          this.set(x, y, z, block);
        }
      }
    }
  }

  /** 获取某个 (x, z) 最高非空体素的 Y 坐标 */
  public getSurfaceY(x: number, z: number, maxY = 85, minY = -25): number {
    const xi = Math.floor(x);
    const zi = Math.floor(z);
    for (let y = maxY; y >= minY; y--) {
      const b = this.get(xi, y, zi);
      if (b !== BlockId.AIR && b !== BlockId.WATER && b !== BlockId.WATERFALL_FOAM) {
        return y;
      }
    }
    return minY;
  }

  private markDirtyWithNeighbors(
    cx: number,
    cy: number,
    cz: number,
    lx: number,
    ly: number,
    lz: number
  ): void {
    this.dirtyChunks.add(this.chunkKey(cx, cy, cz));
    // 边界 1 格变化会影响邻块的面剔除与 AO
    const dxList = lx === 0 ? [-1, 0] : lx === CHUNK_SIZE - 1 ? [0, 1] : [0];
    const dyList = ly === 0 ? [-1, 0] : ly === CHUNK_SIZE - 1 ? [0, 1] : [0];
    const dzList = lz === 0 ? [-1, 0] : lz === CHUNK_SIZE - 1 ? [0, 1] : [0];
    for (const dx of dxList) {
      for (const dy of dyList) {
        for (const dz of dzList) {
          if (dx !== 0 || dy !== 0 || dz !== 0) {
            const nk = this.chunkKey(cx + dx, cy + dy, cz + dz);
            if (this.chunks.has(nk)) {
              this.dirtyChunks.add(nk);
            }
          }
        }
      }
    }
  }

  private isOccluding(x: number, y: number, z: number): boolean {
    const b = this.get(x, y, z);
    if (b === BlockId.AIR) return false;
    return BLOCK_DEFS[b]?.occludes ?? false;
  }

  private vertexAO(side1: boolean, side2: boolean, corner: boolean): number {
    if (side1 && side2) return 0;
    return 3 - ((side1 ? 1 : 0) + (side2 ? 1 : 0) + (corner ? 1 : 0));
  }

  /** 构建所有脏区块的 Three.js 几何体 */
  public rebuildDirtyChunks(): void {
    for (const key of this.dirtyChunks) {
      this.rebuildSingleChunk(key);
    }
    this.dirtyChunks.clear();
  }

  private rebuildSingleChunk(key: string): void {
    const existing = this.chunkMeshes.get(key);
    if (existing) {
      for (const layer of ['opaque', 'night_window', 'emissive', 'transparent'] as RenderLayer[]) {
        const m = existing[layer];
        if (m) {
          this.group.remove(m);
          m.geometry.dispose();
        }
      }
      this.chunkMeshes.delete(key);
    }

    const chunk = this.chunks.get(key);
    if (!chunk) return;

    const [cx, cy, cz] = key.split(',').map(Number);
    const baseX = cx * CHUNK_SIZE;
    const baseY = cy * CHUNK_SIZE;
    const baseZ = cz * CHUNK_SIZE;

    const layers: Record<RenderLayer, LayerBuffers> = {
      opaque: { positions: [], normals: [], uvs: [], colors: [], indices: [] },
      night_window: { positions: [], normals: [], uvs: [], colors: [], indices: [] },
      emissive: { positions: [], normals: [], uvs: [], colors: [], indices: [] },
      transparent: { positions: [], normals: [], uvs: [], colors: [], indices: [] },
    };

    for (let ly = 0; ly < CHUNK_SIZE; ly++) {
      for (let lz = 0; lz < CHUNK_SIZE; lz++) {
        for (let lx = 0; lx < CHUNK_SIZE; lx++) {
          const blockId = chunk[this.localIndex(lx, ly, lz)] as BlockId;
          if (blockId === BlockId.AIR) continue;
          const def = BLOCK_DEFS[blockId];
          if (!def) continue;

          const wx = baseX + lx;
          const wy = baseY + ly;
          const wz = baseZ + lz;
          const buf = layers[def.layer];

          for (const face of FACES) {
            const nx = wx + face.dir[0];
            const ny = wy + face.dir[1];
            const nz = wz + face.dir[2];
            const neighborId = this.get(nx, ny, nz);

            if (neighborId !== BlockId.AIR) {
              const neighborDef = BLOCK_DEFS[neighborId];
              if (def.layer === 'transparent') {
                // 透明方块：与相同方块或不透明方块相邻时剔除内表面
                if (neighborId === blockId || neighborDef?.occludes) continue;
              } else {
                if (neighborDef?.occludes) continue;
              }
            }

            const tileIdx = def.tiles[face.slot];
            const [u0, v0, u1, v1] = getTileUV(tileIdx);
            const faceUVs: [number, number][] = [
              [u0, v0],
              [u1, v0],
              [u1, v1],
              [u0, v1],
            ];

            const vertStart = buf.positions.length / 3;
            const aoLevels: [number, number, number, number] = [3, 3, 3, 3];

            for (let vi = 0; vi < 4; vi++) {
              const [vx, vy, vz] = face.verts[vi];
              buf.positions.push(wx + vx, wy + vy, wz + vz);
              buf.normals.push(face.dir[0], face.dir[1], face.dir[2]);
              buf.uvs.push(faceUVs[vi][0], faceUVs[vi][1]);

              if (def.layer === 'emissive') {
                buf.colors.push(1, 1, 1);
              } else {
                const [o1, o2, oc] = face.aoOffsets(vx, vy, vz);
                const s1 = this.isOccluding(wx + o1[0], wy + o1[1], wz + o1[2]);
                const s2 = this.isOccluding(wx + o2[0], wy + o2[1], wz + o2[2]);
                const sc = this.isOccluding(wx + oc[0], wy + oc[1], wz + oc[2]);
                const ao = this.vertexAO(s1, s2, sc);
                aoLevels[vi] = ao;
                const [cr, cg, cb] = AO_CURVE[ao];
                buf.colors.push(
                  cr * face.dirLight,
                  cg * face.dirLight,
                  cb * face.dirLight
                );
              }
            }

            // 根据对角线 AO 自动翻转剖分，消除阶梯暗纹伪影
            if (aoLevels[0] + aoLevels[2] < aoLevels[1] + aoLevels[3]) {
              buf.indices.push(
                vertStart + 1,
                vertStart + 2,
                vertStart + 3,
                vertStart + 1,
                vertStart + 3,
                vertStart + 0
              );
            } else {
              buf.indices.push(
                vertStart + 0,
                vertStart + 1,
                vertStart + 2,
                vertStart + 0,
                vertStart + 2,
                vertStart + 3
              );
            }
          }
        }
      }
    }

    const built: ChunkMeshes = {};
    for (const layer of ['opaque', 'night_window', 'emissive', 'transparent'] as RenderLayer[]) {
      const b = layers[layer];
      if (b.indices.length === 0) continue;

      const geo = new THREE.BufferGeometry();
      geo.setAttribute('position', new THREE.Float32BufferAttribute(b.positions, 3));
      geo.setAttribute('normal', new THREE.Float32BufferAttribute(b.normals, 3));
      geo.setAttribute('uv', new THREE.Float32BufferAttribute(b.uvs, 2));
      if (layer !== 'emissive') {
        geo.setAttribute('color', new THREE.Float32BufferAttribute(b.colors, 3));
      }
      geo.setIndex(b.indices);
      geo.computeBoundingSphere();

      const mesh = new THREE.Mesh(geo, this.materials[layer]);
      if (layer === 'opaque' || layer === 'night_window') {
        mesh.castShadow = true;
        mesh.receiveShadow = true;
      } else if (layer === 'transparent') {
        mesh.receiveShadow = true;
        mesh.renderOrder = 2;
      }
      this.group.add(mesh);
      built[layer] = mesh;
    }

    if (Object.keys(built).length > 0) {
      this.chunkMeshes.set(key, built);
    }
  }

  /** 高速 3D DDA 体素射线检测（用于点击交互、建造与漫步相机） */
  public raycast(
    origin: THREE.Vector3,
    direction: THREE.Vector3,
    maxDistance = 180,
    ignoreWater = true
  ): RaycastHit | null {
    const dir = direction.clone().normalize();
    let x = Math.floor(origin.x);
    let y = Math.floor(origin.y);
    let z = Math.floor(origin.z);

    const stepX = dir.x > 0 ? 1 : dir.x < 0 ? -1 : 0;
    const stepY = dir.y > 0 ? 1 : dir.y < 0 ? -1 : 0;
    const stepZ = dir.z > 0 ? 1 : dir.z < 0 ? -1 : 0;

    const tDeltaX = stepX !== 0 ? Math.abs(1 / dir.x) : Infinity;
    const tDeltaY = stepY !== 0 ? Math.abs(1 / dir.y) : Infinity;
    const tDeltaZ = stepZ !== 0 ? Math.abs(1 / dir.z) : Infinity;

    let tMaxX =
      stepX > 0
        ? (x + 1 - origin.x) * tDeltaX
        : stepX < 0
        ? (origin.x - x) * tDeltaX
        : Infinity;
    let tMaxY =
      stepY > 0
        ? (y + 1 - origin.y) * tDeltaY
        : stepY < 0
        ? (origin.y - y) * tDeltaY
        : Infinity;
    let tMaxZ =
      stepZ > 0
        ? (z + 1 - origin.z) * tDeltaZ
        : stepZ < 0
        ? (origin.z - z) * tDeltaZ
        : Infinity;

    let nx = 0;
    let ny = 0;
    let nz = 0;
    let dist = 0;

    while (dist <= maxDistance) {
      const b = this.get(x, y, z);
      if (
        b !== BlockId.AIR &&
        (!ignoreWater || (b !== BlockId.WATER && b !== BlockId.WATERFALL_FOAM))
      ) {
        return { x, y, z, nx, ny, nz, blockId: b, distance: dist };
      }

      if (tMaxX < tMaxY) {
        if (tMaxX < tMaxZ) {
          x += stepX;
          dist = tMaxX;
          tMaxX += tDeltaX;
          nx = -stepX;
          ny = 0;
          nz = 0;
        } else {
          z += stepZ;
          dist = tMaxZ;
          tMaxZ += tDeltaZ;
          nx = 0;
          ny = 0;
          nz = -stepZ;
        }
      } else {
        if (tMaxY < tMaxZ) {
          y += stepY;
          dist = tMaxY;
          tMaxY += tDeltaY;
          nx = 0;
          ny = -stepY;
          nz = 0;
        } else {
          z += stepZ;
          dist = tMaxZ;
          tMaxZ += tDeltaZ;
          nx = 0;
          ny = 0;
          nz = -stepZ;
        }
      }
    }
    return null;
  }
}

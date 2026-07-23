import { promises as fs } from 'fs';
import path from 'path';

// Fotos subidas desde /admin. En producción viven en Netlify Blobs (store
// russ-fotos); en desarrollo local en .data/fotos/. Se sirven por /api/foto/[slot].

export const FOTO_SLOTS = [
  'hero',
  'sobre',
  'plan-basico',
  'plan-personalizado',
  'plan-presencial',
] as const;

export type FotoSlot = (typeof FOTO_SLOTS)[number];

export function esFotoSlot(valor: string): valor is FotoSlot {
  return (FOTO_SLOTS as readonly string[]).includes(valor);
}

const STORE_NAME = 'russ-fotos';
const LOCAL_DIR = path.join(process.cwd(), '.data', 'fotos');

async function getBlobStore() {
  const { getStore } = await import('@netlify/blobs');
  return getStore({ name: STORE_NAME, consistency: 'strong' });
}

export async function setFoto(
  slot: FotoSlot,
  datos: ArrayBuffer,
  contentType: string
): Promise<void> {
  try {
    const store = await getBlobStore();
    await store.set(slot, datos, { metadata: { contentType } });
  } catch {
    await fs.mkdir(LOCAL_DIR, { recursive: true });
    await fs.writeFile(path.join(LOCAL_DIR, slot), Buffer.from(datos));
    await fs.writeFile(
      path.join(LOCAL_DIR, `${slot}.meta.json`),
      JSON.stringify({ contentType })
    );
  }
}

export async function getFoto(
  slot: FotoSlot
): Promise<{ datos: ArrayBuffer; contentType: string } | null> {
  try {
    const store = await getBlobStore();
    const resultado = await store.getWithMetadata(slot, { type: 'arrayBuffer' });
    if (!resultado || !resultado.data) return null;
    const contentType =
      typeof resultado.metadata?.contentType === 'string'
        ? resultado.metadata.contentType
        : 'image/jpeg';
    return { datos: resultado.data, contentType };
  } catch {
    try {
      const buffer = await fs.readFile(path.join(LOCAL_DIR, slot));
      let contentType = 'image/jpeg';
      try {
        const meta = JSON.parse(
          await fs.readFile(path.join(LOCAL_DIR, `${slot}.meta.json`), 'utf8')
        );
        if (typeof meta.contentType === 'string') contentType = meta.contentType;
      } catch {
        // sin metadata: queda image/jpeg
      }
      return {
        datos: buffer.buffer.slice(
          buffer.byteOffset,
          buffer.byteOffset + buffer.byteLength
        ) as ArrayBuffer,
        contentType,
      };
    } catch {
      return null;
    }
  }
}

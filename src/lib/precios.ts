import { promises as fs } from 'fs';
import path from 'path';

// Precios editables desde /admin. En producción viven en Netlify Blobs;
// en desarrollo local (sin contexto de Netlify) se usa un JSON en .data/.

export type Precios = {
  basico: string;
  personalizado: string;
  presencial: string;
};

export const PRECIOS_DEFAULT: Precios = {
  basico: '$20.000',
  personalizado: '$35.000',
  presencial: '$80.000',
};

const STORE_NAME = 'russ-config';
const KEY = 'precios';
const LOCAL_FILE = path.join(process.cwd(), '.data', 'precios.json');

async function getBlobStore() {
  const { getStore } = await import('@netlify/blobs');
  // strong: los cambios desde /admin se ven al instante en la página
  return getStore({ name: STORE_NAME, consistency: 'strong' });
}

function sanitize(raw: unknown): Precios {
  const data = (raw ?? {}) as Record<string, unknown>;
  const pick = (key: keyof Precios) => {
    const value = data[key];
    return typeof value === 'string' && value.trim() && value.length <= 30
      ? value.trim()
      : PRECIOS_DEFAULT[key];
  };
  return {
    basico: pick('basico'),
    personalizado: pick('personalizado'),
    presencial: pick('presencial'),
  };
}

export async function getPrecios(): Promise<Precios> {
  try {
    const store = await getBlobStore();
    return sanitize(await store.get(KEY, { type: 'json' }));
  } catch {
    try {
      return sanitize(JSON.parse(await fs.readFile(LOCAL_FILE, 'utf8')));
    } catch {
      return PRECIOS_DEFAULT;
    }
  }
}

export async function setPrecios(raw: unknown): Promise<Precios> {
  const precios = sanitize(raw);
  try {
    const store = await getBlobStore();
    await store.setJSON(KEY, precios);
  } catch {
    await fs.mkdir(path.dirname(LOCAL_FILE), { recursive: true });
    await fs.writeFile(LOCAL_FILE, JSON.stringify(precios, null, 2));
  }
  return precios;
}

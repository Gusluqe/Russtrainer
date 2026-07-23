import { promises as fs } from 'fs';
import path from 'path';
import { CONTENIDO_DEFAULT, type Contenido } from './contenidoTipos';

// Contenido de la página editable desde /admin. En producción vive en Netlify
// Blobs; en desarrollo local (sin contexto de Netlify) se usa un JSON en .data/.

const STORE_NAME = 'russ-config';
const KEY = 'contenido';
const LOCAL_FILE = path.join(process.cwd(), '.data', 'contenido.json');

const MAX_TEXTO = 1200;
const MAX_ITEMS = 20;

async function getBlobStore() {
  const { getStore } = await import('@netlify/blobs');
  // strong: los cambios desde /admin se ven al instante en la página
  return getStore({ name: STORE_NAME, consistency: 'strong' });
}

// Usa el objeto default como "esquema": solo acepta del guardado los campos
// que existen en el default y con el mismo tipo. Todo lo demás cae al default.
function mergeConDefault<T>(def: T, raw: unknown): T {
  if (typeof def === 'string') {
    return (typeof raw === 'string' && raw.trim()
      ? raw.trim().slice(0, MAX_TEXTO)
      : def) as T;
  }
  if (Array.isArray(def)) {
    if (!Array.isArray(raw) || def.length === 0) return def;
    const molde = def[0];
    const items = raw
      .slice(0, MAX_ITEMS)
      .filter((item) =>
        typeof molde === 'string'
          ? typeof item === 'string' && item.trim()
          : item && typeof item === 'object'
      )
      .map((item) => mergeConDefault(molde, item));
    return (items.length ? items : def) as T;
  }
  if (def && typeof def === 'object') {
    const salida: Record<string, unknown> = {};
    const origen = (raw ?? {}) as Record<string, unknown>;
    for (const clave of Object.keys(def as Record<string, unknown>)) {
      salida[clave] = mergeConDefault(
        (def as Record<string, unknown>)[clave],
        origen[clave]
      );
    }
    return salida as T;
  }
  return def;
}

// Las fotos solo pueden ser rutas internas (/foto1.png o /api/foto/...).
function validarFoto(url: string, def: string): string {
  return url.startsWith('/') && !url.startsWith('//') ? url : def;
}

export function sanitizeContenido(raw: unknown): Contenido {
  const c = mergeConDefault(CONTENIDO_DEFAULT, raw);
  c.hero.foto = validarFoto(c.hero.foto, CONTENIDO_DEFAULT.hero.foto);
  c.sobre.foto = validarFoto(c.sobre.foto, CONTENIDO_DEFAULT.sobre.foto);
  c.planes.basico.foto = validarFoto(c.planes.basico.foto, CONTENIDO_DEFAULT.planes.basico.foto);
  c.planes.personalizado.foto = validarFoto(c.planes.personalizado.foto, CONTENIDO_DEFAULT.planes.personalizado.foto);
  c.planes.presencial.foto = validarFoto(c.planes.presencial.foto, CONTENIDO_DEFAULT.planes.presencial.foto);
  // la nota de un plan puede quedar vacía a propósito
  return c;
}

export async function getContenido(): Promise<Contenido> {
  try {
    const store = await getBlobStore();
    return sanitizeContenido(await store.get(KEY, { type: 'json' }));
  } catch {
    try {
      return sanitizeContenido(JSON.parse(await fs.readFile(LOCAL_FILE, 'utf8')));
    } catch {
      return CONTENIDO_DEFAULT;
    }
  }
}

export async function setContenido(raw: unknown): Promise<Contenido> {
  const contenido = sanitizeContenido(raw);
  try {
    const store = await getBlobStore();
    await store.setJSON(KEY, contenido);
  } catch {
    await fs.mkdir(path.dirname(LOCAL_FILE), { recursive: true });
    await fs.writeFile(LOCAL_FILE, JSON.stringify(contenido, null, 2));
  }
  return contenido;
}

// Actualiza solo la foto de un slot dentro del contenido guardado.
export async function setFotoEnContenido(slot: string, url: string): Promise<void> {
  const contenido = await getContenido();
  switch (slot) {
    case 'hero':
      contenido.hero.foto = url;
      break;
    case 'sobre':
      contenido.sobre.foto = url;
      break;
    case 'plan-basico':
      contenido.planes.basico.foto = url;
      break;
    case 'plan-personalizado':
      contenido.planes.personalizado.foto = url;
      break;
    case 'plan-presencial':
      contenido.planes.presencial.foto = url;
      break;
    default:
      return;
  }
  await setContenido(contenido);
}

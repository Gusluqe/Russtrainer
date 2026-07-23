import { promises as fs } from 'fs';
import path from 'path';

// Suscriptoras del newsletter. Se guardan en Netlify Blobs; en desarrollo
// local (sin contexto de Netlify) en un JSON en .data/.
// El envío de novedades lo hace Russ desde su Gmail: el admin le arma el
// borrador con todos los mails en CCO.

export type Suscriptora = {
  email: string;
  nombre: string;
  fecha: string; // ISO
};

const STORE_NAME = 'russ-config';
const KEY = 'suscriptoras';
const LOCAL_FILE = path.join(process.cwd(), '.data', 'suscriptoras.json');
const MAX_SUSCRIPTORAS = 10000;

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

async function getBlobStore() {
  const { getStore } = await import('@netlify/blobs');
  return getStore({ name: STORE_NAME, consistency: 'strong' });
}

function sanitize(raw: unknown): Suscriptora[] {
  if (!Array.isArray(raw)) return [];
  return raw
    .filter(
      (s): s is Suscriptora =>
        Boolean(s) &&
        typeof (s as Suscriptora).email === 'string' &&
        EMAIL_REGEX.test((s as Suscriptora).email)
    )
    .slice(0, MAX_SUSCRIPTORAS)
    .map((s) => ({
      email: s.email.toLowerCase().trim(),
      nombre: typeof s.nombre === 'string' ? s.nombre.trim().slice(0, 100) : '',
      fecha: typeof s.fecha === 'string' ? s.fecha : new Date().toISOString(),
    }));
}

async function leer(): Promise<Suscriptora[]> {
  try {
    const store = await getBlobStore();
    return sanitize(await store.get(KEY, { type: 'json' }));
  } catch {
    try {
      return sanitize(JSON.parse(await fs.readFile(LOCAL_FILE, 'utf8')));
    } catch {
      return [];
    }
  }
}

async function guardar(lista: Suscriptora[]): Promise<void> {
  try {
    const store = await getBlobStore();
    await store.setJSON(KEY, lista);
  } catch {
    await fs.mkdir(path.dirname(LOCAL_FILE), { recursive: true });
    await fs.writeFile(LOCAL_FILE, JSON.stringify(lista, null, 2));
  }
}

export function esEmailValido(email: string): boolean {
  return email.length <= 200 && EMAIL_REGEX.test(email);
}

export async function getSuscriptoras(): Promise<Suscriptora[]> {
  return leer();
}

export async function addSuscriptora(
  emailRaw: string,
  nombreRaw = ''
): Promise<'ok' | 'ya-estaba' | 'invalido' | 'lleno'> {
  const email = emailRaw.toLowerCase().trim();
  const nombre = nombreRaw.trim().slice(0, 100);
  if (!esEmailValido(email)) return 'invalido';

  const lista = await leer();
  if (lista.some((s) => s.email === email)) return 'ya-estaba';
  if (lista.length >= MAX_SUSCRIPTORAS) return 'lleno';

  lista.push({ email, nombre, fecha: new Date().toISOString() });
  await guardar(lista);
  return 'ok';
}

export async function removeSuscriptora(emailRaw: string): Promise<void> {
  const email = emailRaw.toLowerCase().trim();
  const lista = await leer();
  await guardar(lista.filter((s) => s.email !== email));
}

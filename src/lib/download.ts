import { createHmac, timingSafeEqual } from 'crypto';

// Helpers del sistema de códigos de descarga. Solo para uso en el servidor.

const SECRET = process.env.DOWNLOAD_SECRET || 'dev-secret-cambiar-en-produccion';

export const COOKIE_NAME = 'russ_guia';
const TOKEN_TTL_MS = 10 * 60 * 1000; // el link de descarga vive 10 minutos

/** Normaliza un código: mayúsculas, sin espacios ni guiones. */
export function normalizeCode(raw: string): string {
  return raw.toUpperCase().replace(/[^A-Z0-9]/g, '');
}

/** Códigos válidos, normalizados. En producción vienen de la env DOWNLOAD_CODES. */
export function getValidCodes(): Set<string> {
  const raw = process.env.DOWNLOAD_CODES || 'RUSS-DEMO1';
  return new Set(
    raw
      .split(/[,\s]+/)
      .map(normalizeCode)
      .filter(Boolean)
  );
}

function hmac(value: string): string {
  return createHmac('sha256', SECRET).update(value).digest('base64url');
}

function safeEqual(a: string, b: string): boolean {
  const ba = Buffer.from(a);
  const bb = Buffer.from(b);
  return ba.length === bb.length && timingSafeEqual(ba, bb);
}

/** Serializa la lista de códigos ya usados en este dispositivo, firmada. */
export function encodeUsedCookie(codes: string[]): string {
  const payload = Buffer.from(JSON.stringify(codes)).toString('base64url');
  return `${payload}.${hmac(payload)}`;
}

/** Lee la cookie firmada; si fue manipulada, se descarta. */
export function decodeUsedCookie(value: string | undefined): string[] {
  if (!value) return [];
  const [payload, signature] = value.split('.');
  if (!payload || !signature || !safeEqual(hmac(payload), signature)) return [];
  try {
    const parsed = JSON.parse(Buffer.from(payload, 'base64url').toString());
    return Array.isArray(parsed) ? parsed.filter((c) => typeof c === 'string') : [];
  } catch {
    return [];
  }
}

/** Token de descarga de corta duración para un código ya canjeado. */
export function createDownloadToken(code: string): string {
  const expires = Date.now() + TOKEN_TTL_MS;
  const payload = `${code}:${expires}`;
  return Buffer.from(`${payload}:${hmac(payload)}`).toString('base64url');
}

export function verifyDownloadToken(token: string): boolean {
  try {
    const decoded = Buffer.from(token, 'base64url').toString();
    const [code, expires, signature] = decoded.split(':');
    if (!code || !expires || !signature) return false;
    if (!safeEqual(hmac(`${code}:${expires}`), signature)) return false;
    return Date.now() < Number(expires);
  } catch {
    return false;
  }
}

/** Convierte un link de Drive "compartir" en link de descarga directa. */
export function toDirectPdfUrl(url: string): string {
  const driveMatch =
    url.match(/drive\.google\.com\/file\/d\/([\w-]+)/) ||
    url.match(/drive\.google\.com\/(?:open|uc)\?.*id=([\w-]+)/);
  if (driveMatch) {
    return `https://drive.google.com/uc?export=download&id=${driveMatch[1]}`;
  }
  return url;
}

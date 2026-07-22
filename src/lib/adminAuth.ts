import { createHmac, timingSafeEqual } from 'crypto';

// Sesión del mini panel /admin. Credenciales en env ADMIN_USER / ADMIN_PASSWORD.

const SECRET = process.env.DOWNLOAD_SECRET || 'dev-secret-cambiar-en-produccion';
const SESSION_TTL_MS = 7 * 24 * 60 * 60 * 1000; // 7 días

export const ADMIN_COOKIE = 'russ_admin';

function hmac(value: string): string {
  return createHmac('sha256', `admin:${SECRET}`).update(value).digest('base64url');
}

function safeEqual(a: string, b: string): boolean {
  const ba = Buffer.from(a);
  const bb = Buffer.from(b);
  return ba.length === bb.length && timingSafeEqual(ba, bb);
}

export function checkCredentials(user: string, password: string): boolean {
  const expectedUser = process.env.ADMIN_USER || '';
  const expectedPass = process.env.ADMIN_PASSWORD || '';
  if (!expectedUser || !expectedPass) return false;
  // & para que un solo safeEqual no corte la comparación
  return safeEqual(user, expectedUser) && safeEqual(password, expectedPass);
}

export function createSession(): string {
  const expires = Date.now() + SESSION_TTL_MS;
  return `${expires}.${hmac(String(expires))}`;
}

export function isValidSession(cookie: string | undefined): boolean {
  if (!cookie) return false;
  const [expires, signature] = cookie.split('.');
  if (!expires || !signature) return false;
  if (!safeEqual(hmac(expires), signature)) return false;
  return Date.now() < Number(expires);
}

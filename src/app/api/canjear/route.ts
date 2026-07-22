import { NextRequest, NextResponse } from 'next/server';
import {
  COOKIE_NAME,
  createDownloadToken,
  decodeUsedCookie,
  encodeUsedCookie,
  getValidCodes,
  normalizeCode,
} from '@/lib/download';

export async function POST(request: NextRequest) {
  let code = '';
  try {
    const body = await request.json();
    code = normalizeCode(String(body?.code ?? ''));
  } catch {
    // body inválido → cae al chequeo de abajo
  }

  if (!code || code.length < 4 || code.length > 20) {
    return NextResponse.json({ error: 'CODE_INVALID' }, { status: 400 });
  }

  if (!getValidCodes().has(code)) {
    return NextResponse.json({ error: 'CODE_INVALID' }, { status: 404 });
  }

  const used = decodeUsedCookie(request.cookies.get(COOKIE_NAME)?.value);
  if (used.includes(code)) {
    return NextResponse.json({ error: 'ALREADY_USED' }, { status: 409 });
  }

  const response = NextResponse.json({
    downloadUrl: `/api/descargar?t=${createDownloadToken(code)}`,
  });
  response.cookies.set(COOKIE_NAME, encodeUsedCookie([...used, code]), {
    httpOnly: true,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
    maxAge: 60 * 60 * 24 * 365,
    path: '/',
  });
  return response;
}

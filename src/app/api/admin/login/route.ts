import { NextRequest, NextResponse } from 'next/server';
import { ADMIN_COOKIE, checkCredentials, createSession, isValidSession } from '@/lib/adminAuth';

// GET: ¿hay sesión activa? — POST: login — DELETE: logout

export async function GET(request: NextRequest) {
  const ok = isValidSession(request.cookies.get(ADMIN_COOKIE)?.value);
  return NextResponse.json({ ok });
}

export async function POST(request: NextRequest) {
  let user = '';
  let password = '';
  try {
    const body = await request.json();
    user = String(body?.user ?? '');
    password = String(body?.password ?? '');
  } catch {
    // body inválido → credenciales vacías, falla abajo
  }

  if (!checkCredentials(user, password)) {
    return NextResponse.json({ error: 'INVALID_CREDENTIALS' }, { status: 401 });
  }

  const response = NextResponse.json({ ok: true });
  response.cookies.set(ADMIN_COOKIE, createSession(), {
    httpOnly: true,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
    maxAge: 60 * 60 * 24 * 7,
    path: '/',
  });
  return response;
}

export async function DELETE() {
  const response = NextResponse.json({ ok: true });
  response.cookies.set(ADMIN_COOKIE, '', { maxAge: 0, path: '/' });
  return response;
}

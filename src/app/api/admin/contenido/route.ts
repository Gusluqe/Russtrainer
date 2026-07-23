import { NextRequest, NextResponse } from 'next/server';
import { ADMIN_COOKIE, isValidSession } from '@/lib/adminAuth';
import { setContenido } from '@/lib/contenido';

export async function POST(request: NextRequest) {
  if (!isValidSession(request.cookies.get(ADMIN_COOKIE)?.value)) {
    return NextResponse.json({ error: 'UNAUTHORIZED' }, { status: 401 });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'BAD_REQUEST' }, { status: 400 });
  }

  const contenido = await setContenido(body);
  return NextResponse.json({ ok: true, contenido });
}

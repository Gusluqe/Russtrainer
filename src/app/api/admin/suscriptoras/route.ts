import { NextRequest, NextResponse } from 'next/server';
import { ADMIN_COOKIE, isValidSession } from '@/lib/adminAuth';
import { getSuscriptoras, removeSuscriptora } from '@/lib/suscriptoras';

export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
  if (!isValidSession(request.cookies.get(ADMIN_COOKIE)?.value)) {
    return NextResponse.json({ error: 'UNAUTHORIZED' }, { status: 401 });
  }
  const suscriptoras = await getSuscriptoras();
  return NextResponse.json(
    { suscriptoras },
    { headers: { 'Cache-Control': 'no-store' } }
  );
}

export async function DELETE(request: NextRequest) {
  if (!isValidSession(request.cookies.get(ADMIN_COOKIE)?.value)) {
    return NextResponse.json({ error: 'UNAUTHORIZED' }, { status: 401 });
  }

  let email = '';
  try {
    const body = await request.json();
    email = String(body?.email ?? '');
  } catch {
    return NextResponse.json({ error: 'BAD_REQUEST' }, { status: 400 });
  }

  await removeSuscriptora(email);
  const suscriptoras = await getSuscriptoras();
  return NextResponse.json({ ok: true, suscriptoras });
}

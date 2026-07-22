import { NextRequest, NextResponse } from 'next/server';
import { ADMIN_COOKIE, isValidSession } from '@/lib/adminAuth';
import { setPrecios } from '@/lib/precios';

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

  const precios = await setPrecios(body);
  return NextResponse.json({ ok: true, precios });
}

import { NextRequest, NextResponse } from 'next/server';
import { addSuscriptora } from '@/lib/suscriptoras';

export async function POST(request: NextRequest) {
  let email = '';
  let honeypot = '';
  try {
    const body = await request.json();
    email = String(body?.email ?? '');
    honeypot = String(body?.web ?? '');
  } catch {
    return NextResponse.json({ error: 'BAD_REQUEST' }, { status: 400 });
  }

  // Campo oculto: si un bot lo completa, respondemos ok sin guardar nada
  if (honeypot) return NextResponse.json({ ok: true });

  const resultado = await addSuscriptora(email);

  if (resultado === 'invalido') {
    return NextResponse.json({ error: 'EMAIL_INVALID' }, { status: 400 });
  }
  if (resultado === 'lleno') {
    return NextResponse.json({ error: 'GENERIC' }, { status: 500 });
  }
  // 'ya-estaba' también responde ok: para la visitante es lo mismo
  return NextResponse.json({ ok: true });
}

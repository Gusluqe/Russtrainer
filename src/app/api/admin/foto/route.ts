import { NextRequest, NextResponse } from 'next/server';
import { ADMIN_COOKIE, isValidSession } from '@/lib/adminAuth';
import { esFotoSlot, setFoto } from '@/lib/fotos';
import { setFotoEnContenido } from '@/lib/contenido';

const MAX_BYTES = 4.5 * 1024 * 1024; // límite del body en funciones de Netlify

export async function POST(request: NextRequest) {
  if (!isValidSession(request.cookies.get(ADMIN_COOKIE)?.value)) {
    return NextResponse.json({ error: 'UNAUTHORIZED' }, { status: 401 });
  }

  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return NextResponse.json({ error: 'BAD_REQUEST' }, { status: 400 });
  }

  const slot = String(form.get('slot') ?? '');
  const archivo = form.get('archivo');

  if (!esFotoSlot(slot) || !(archivo instanceof File)) {
    return NextResponse.json({ error: 'BAD_REQUEST' }, { status: 400 });
  }
  if (!archivo.type.startsWith('image/')) {
    return NextResponse.json({ error: 'NOT_IMAGE' }, { status: 400 });
  }
  if (archivo.size > MAX_BYTES) {
    return NextResponse.json({ error: 'TOO_BIG' }, { status: 413 });
  }

  await setFoto(slot, await archivo.arrayBuffer(), archivo.type);

  // ?v= cambia en cada subida para que el navegador no muestre la foto vieja
  const url = `/api/foto/${slot}?v=${Date.now()}`;
  await setFotoEnContenido(slot, url);

  return NextResponse.json({ ok: true, url });
}

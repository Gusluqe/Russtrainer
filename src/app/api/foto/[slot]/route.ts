import { NextRequest, NextResponse } from 'next/server';
import { esFotoSlot, getFoto } from '@/lib/fotos';

export const dynamic = 'force-dynamic';

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ slot: string }> }
) {
  const { slot } = await params;
  if (!esFotoSlot(slot)) {
    return NextResponse.json({ error: 'NOT_FOUND' }, { status: 404 });
  }

  const foto = await getFoto(slot);
  if (!foto) {
    return NextResponse.json({ error: 'NOT_FOUND' }, { status: 404 });
  }

  return new NextResponse(foto.datos, {
    headers: {
      'Content-Type': foto.contentType,
      // la URL cambia con ?v= en cada subida, así que se puede cachear fuerte
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  });
}

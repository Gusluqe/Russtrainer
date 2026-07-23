import { NextResponse } from 'next/server';
import { getContenido } from '@/lib/contenido';

export const dynamic = 'force-dynamic';

export async function GET() {
  const contenido = await getContenido();
  return NextResponse.json(contenido, {
    headers: { 'Cache-Control': 'no-store' },
  });
}

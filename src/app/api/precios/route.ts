import { NextResponse } from 'next/server';
import { getPrecios } from '@/lib/precios';

export const dynamic = 'force-dynamic';

export async function GET() {
  const precios = await getPrecios();
  return NextResponse.json(precios, {
    headers: { 'Cache-Control': 'no-store' },
  });
}

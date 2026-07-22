import { NextRequest, NextResponse } from 'next/server';
import { toDirectPdfUrl, verifyDownloadToken } from '@/lib/download';

export async function GET(request: NextRequest) {
  const token = request.nextUrl.searchParams.get('t');
  if (!token || !verifyDownloadToken(token)) {
    return NextResponse.json(
      { error: 'El link de descarga venció. Volvé a ingresar tu código.' },
      { status: 403 }
    );
  }

  const pdfUrl = process.env.PDF_URL;
  if (!pdfUrl) {
    return NextResponse.json(
      { error: 'La guía todavía no está disponible. Probá de nuevo más tarde.' },
      { status: 503 }
    );
  }

  const upstream = await fetch(toDirectPdfUrl(pdfUrl), { redirect: 'follow' });
  if (!upstream.ok || !upstream.body) {
    return NextResponse.json(
      { error: 'No pudimos traer la guía. Probá de nuevo en unos minutos.' },
      { status: 502 }
    );
  }

  return new NextResponse(upstream.body, {
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'attachment; filename="Guia-RussTrainer.pdf"',
      'Cache-Control': 'no-store',
    },
  });
}

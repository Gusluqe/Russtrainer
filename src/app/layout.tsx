import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://russtrainer.com'),
  title: 'RussTrainer | Entrenamiento Personalizado con Resultados Reales',
  description:
    'Transformá tu cuerpo con entrenamiento personalizado. Planes diseñados para vos, seguimiento real y resultados medibles. Primera semana gratis. Buenos Aires.',
  keywords: [
    'entrenamiento personalizado',
    'personal trainer',
    'fitness Buenos Aires',
    'planes de entrenamiento',
    'bajar de peso',
    'ganar musculo',
    'RussTrainer',
  ],
  authors: [{ name: 'RussTrainer' }],
  creator: 'RussTrainer',
  openGraph: {
    title: 'RussTrainer | Entrenamiento Personalizado',
    description:
      'Transformá tu cuerpo con entrenamiento personalizado. Planes diseñados para vos, seguimiento real y resultados medibles.',
    url: 'https://russtrainer.com',
    siteName: 'RussTrainer',
    locale: 'es_AR',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#FCFCF7',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=DM+Sans:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="min-h-screen bg-cream antialiased">
        {children}
      </body>
    </html>
  );
}

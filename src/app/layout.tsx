import type { Metadata, Viewport } from 'next';
import { Inter, Bebas_Neue } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const bebasNeue = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-bebas',
});

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
    title: 'RussTrainer | Entrenamiento Personalizado Premium',
    description:
      'Transformá tu cuerpo con entrenamiento personalizado. Planes diseñados para vos, seguimiento real y resultados medibles.',
    url: 'https://russtrainer.com',
    siteName: 'RussTrainer',
    locale: 'es_AR',
    type: 'website',
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'RussTrainer - Entrenamiento Personalizado',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RussTrainer | Entrenamiento Personalizado',
    description:
      'Transformá tu cuerpo con entrenamiento personalizado. Primera semana gratis.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0a0a0a',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${inter.variable} ${bebasNeue.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className="min-h-screen bg-dark antialiased">
        {children}
      </body>
    </html>
  );
}
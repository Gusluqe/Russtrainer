import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import SobreMi from '@/components/SobreMi';
import Cierre from '@/components/Cierre';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

export const metadata: Metadata = {
  title: 'Sobre Russ | RussTrainer',
  description: 'Conoce quién soy y cómo trabajo: entrenamiento personalizado, seguimiento real y acompañamiento constante.',
};

export default function SobreMiPage() {
  return (
    <main className="relative pb-20 lg:pb-0">
      <Navbar />
      <SobreMi />
      <Cierre />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}

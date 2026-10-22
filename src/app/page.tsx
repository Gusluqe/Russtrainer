import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import PainPoints from '@/components/PainPoints';
import MujeresReales from '@/components/MujeresReales';
import AppPreview from '@/components/AppPreview';
import EnAccion from '@/components/EnAccion';
import Plans from '@/components/Plans';
import ComoEmpezar from '@/components/ComoEmpezar';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import Cierre from '@/components/Cierre';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { ContenidoProvider } from '@/components/ContenidoContext';
import { getContenido } from '@/lib/contenido';

// El contenido se edita desde /admin: la página se arma en cada visita
// para que los cambios se vean al instante.
export const dynamic = 'force-dynamic';

export default async function Home() {
  const contenido = await getContenido();

  return (
    <ContenidoProvider contenido={contenido}>
      <main className="relative pb-20 lg:pb-0">
        <Navbar transparente />
        <Hero />
        <PainPoints />
        <MujeresReales />
        <AppPreview />
        <EnAccion />
        <Plans />
        <ComoEmpezar />
        <Testimonials />
        <FAQ />
        <Cierre />
        <Footer />
        <WhatsAppButton />
      </main>
    </ContenidoProvider>
  );
}

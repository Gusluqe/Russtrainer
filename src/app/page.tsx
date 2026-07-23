import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import PainPoints from '@/components/PainPoints';
import About from '@/components/About';
import HowWeWork from '@/components/HowWeWork';
import Testimonials from '@/components/Testimonials';
import DownloadGuide from '@/components/DownloadGuide';
import Plans from '@/components/Plans';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import MobileNav from '@/components/MobileNav';
import SplashScreen from '@/components/SplashScreen';
import { ContenidoProvider } from '@/components/ContenidoContext';
import { getContenido } from '@/lib/contenido';

// El contenido se edita desde /admin: la página se arma en cada visita
// para que los cambios se vean al instante.
export const dynamic = 'force-dynamic';

export default async function Home() {
  const contenido = await getContenido();

  return (
    <ContenidoProvider contenido={contenido}>
      <main className="relative pb-16 lg:pb-0">
        <SplashScreen />
        <Navbar />
        <Hero />
        <PainPoints />
        <About />
        <HowWeWork />
        <Testimonials />
        <DownloadGuide />
        <Plans />
        <Newsletter />
        <Footer />
        <WhatsAppButton />
        <MobileNav />
      </main>
    </ContenidoProvider>
  );
}

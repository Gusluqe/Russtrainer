import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import PainPoints from '@/components/PainPoints';
import About from '@/components/About';
import HowWeWork from '@/components/HowWeWork';
import Services from '@/components/Services';
import FreeWeek from '@/components/FreeWeek';
import Plans from '@/components/Plans';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import CTAFinal from '@/components/CTAFinal';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import MobileNav from '@/components/MobileNav';

export default function Home() {
  return (
    <main className="relative pb-16 lg:pb-0">
      <Navbar />
      <Hero />
      <PainPoints />
      <About />
      <HowWeWork />
      <Services />
      <FreeWeek />
      <Plans />
      <Testimonials />
      <Contact />
      <CTAFinal />
      <Footer />
      <WhatsAppButton />
      <MobileNav />
    </main>
  );
}

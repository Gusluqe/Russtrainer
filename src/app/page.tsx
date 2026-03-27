import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import FreeWeek from '@/components/FreeWeek';
import Plans from '@/components/Plans';
import Results from '@/components/Results';
import Testimonials from '@/components/Testimonials';
import HowWeWork from '@/components/HowWeWork';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <About />
      <HowWeWork />
      <Services />
      <FreeWeek />
      <Plans />
      <Results />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}

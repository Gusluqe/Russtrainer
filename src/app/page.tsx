import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import PainPoints from '@/components/PainPoints';
import About from '@/components/About';
import HowWeWork from '@/components/HowWeWork';
import Results from '@/components/Results';
import Testimonials from '@/components/Testimonials';
import Plans from '@/components/Plans';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import MobileNav from '@/components/MobileNav';
import SplashScreen from '@/components/SplashScreen';

export default function Home() {
  return (
    <main className="relative pb-16 lg:pb-0">
      <SplashScreen />
      <Navbar />
      <Hero />
      <PainPoints />
      <About />
      <HowWeWork />
      <Results />
      <Testimonials />
      <Plans />
      <Footer />
      <WhatsAppButton />
      <MobileNav />
    </main>
  );
}

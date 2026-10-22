'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useContenido } from './ContenidoContext';
import Blobs from './Blobs';
import { WA_EMPEZAR } from '@/lib/enlaces';

export default function Hero() {
  const { hero } = useContenido();
  return (
    <section id="inicio" className="relative bg-cream-100 overflow-hidden">
      <Blobs variante="arriba" />
      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-20 pt-28 pb-16 lg:pt-40 lg:pb-28 grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
        <div className="order-2 lg:order-1 flex flex-col gap-5 lg:gap-6">
          <motion.span
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-[11px] lg:text-sm tracking-[.18em] font-bold text-[#7d4a38]"
          >
            ENTRENADORA PERSONAL ONLINE
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading font-bold text-charcoal text-[32px] leading-[1.1] sm:text-5xl lg:text-[58px] lg:leading-[1.06]"
          >
            Entrenamiento para <span className="text-accent">mujeres reales,</span> con vidas reales
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base lg:text-[22px] leading-relaxed text-charcoal-muted max-w-[580px]"
          >
            Un plan hecho para ti, que se ajusta a tu tiempo y a tu momento. Sin sobreexigencia.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center gap-x-6 gap-y-3"
          >
            <a
              href={WA_EMPEZAR}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25a85a] text-white font-extrabold px-8 py-4 lg:px-10 lg:py-5 lg:text-lg rounded-full hover:brightness-95 transition"
            >
              Quiero empezar
            </a>
            <Link href="/sobre-mi" className="text-rose-deep font-bold underline underline-offset-[5px] lg:text-lg">
              Conoce quién soy
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="order-1 lg:order-2 flex justify-center"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={hero.foto}
            alt="Russ, entrenadora personal"
            className="w-full max-w-[340px] sm:max-w-[400px] lg:max-w-[480px] aspect-[4/5] object-cover object-[50%_18%] rounded-[28px] lg:rounded-[36px] shadow-[0_24px_60px_rgba(59,42,36,0.18)]"
          />
        </motion.div>
      </div>
    </section>
  );
}

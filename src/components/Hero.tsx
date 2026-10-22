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
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 pt-28 pb-16 lg:pt-36 lg:pb-24 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <div className="order-2 lg:order-1 flex flex-col gap-5 lg:gap-6">
          <motion.span
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-[11px] lg:text-xs tracking-[.18em] font-bold text-rose-deep"
          >
            ENTRENADORA PERSONAL ONLINE
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading font-bold text-charcoal text-[32px] leading-[1.1] sm:text-5xl lg:text-[50px] lg:leading-[1.08]"
          >
            Entrenamiento para <span className="text-accent">mujeres reales,</span> con vidas reales
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base lg:text-lg leading-relaxed text-charcoal-muted max-w-[470px]"
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
              className="bg-[#25a85a] text-white font-extrabold px-8 py-4 rounded-full hover:brightness-95 transition"
            >
              Quiero empezar
            </a>
            <Link href="/sobre-mi" className="text-rose-deep font-bold underline underline-offset-[5px]">
              Conoce quién soy
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="order-1 lg:order-2"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={hero.foto}
            alt="Russ, entrenadora personal"
            className="w-full h-[300px] sm:h-[380px] lg:h-[440px] object-cover object-top rounded-[28px] lg:rounded-[32px] shadow-[0_24px_60px_rgba(59,42,36,0.18)]"
          />
        </motion.div>
      </div>
    </section>
  );
}

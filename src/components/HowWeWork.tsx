'use client';

import { motion } from 'framer-motion';
import { MessageCircle, Target, Rocket, RefreshCw, Heart, ArrowRight } from 'lucide-react';
import { useContenido } from './ContenidoContext';

const WHATSAPP_URL = 'https://wa.me/5491168124464?text=Hola!%20Quiero%20empezar%20mi%20proceso';

const icons = [MessageCircle, Target, Rocket, RefreshCw, Heart];

export default function HowWeWork() {
  const { proceso } = useContenido();
  const steps = proceso.pasos.map((paso, i) => ({
    number: String(i + 1).padStart(2, '0'),
    icon: icons[i % icons.length],
    title: paso.titulo,
    description: paso.descripcion,
  }));
  return (
    <section className="relative py-12 md:py-24 lg:py-32 overflow-hidden bg-white">
      <div className="absolute top-0 right-0 w-80 h-80 bg-rose/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <span className="kicker">
            {proceso.kicker}
          </span>
          <h2 className="section-title mt-4 mb-5">
            {proceso.titulo}{' '}
            <span className="text-accent">{proceso.tituloAccent}</span>
          </h2>
          <p className="text-charcoal/60 text-lg max-w-2xl mx-auto">
            {proceso.subtitulo}
          </p>
        </motion.div>

        {/* Mobile: lista compacta — solo ícono + número + título */}
        <div className="mt-10 md:hidden">
          <div className="grid grid-cols-1 gap-3">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.07 }}
                className="flex items-center gap-4 bg-cream-50 border border-rose/10 rounded-2xl px-4 py-3"
              >
                <div className="relative shrink-0">
                  <div className="w-10 h-10 rounded-full bg-rose/10 border border-rose/20 flex items-center justify-center">
                    <step.icon size={17} className="text-rose" />
                  </div>
                  <span className="absolute -top-1.5 -right-1.5 bg-rose-deep text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center leading-none">
                    {index + 1}
                  </span>
                </div>
                <span className="text-sm font-semibold text-charcoal leading-snug">
                  {step.title}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Desktop: layout completo con cards */}
        <div className="relative mt-16 space-y-5 hidden md:block">
          {/* Línea vertical */}
          <div className="absolute left-[27px] top-10 bottom-10 w-px bg-gradient-to-b from-rose/40 via-rose/20 to-transparent" />

          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex gap-8 items-start group"
            >
              <div className="relative shrink-0">
                <div className="w-14 h-14 rounded-full bg-rose/10 border border-rose/20 flex items-center justify-center relative z-10 group-hover:bg-rose/20 transition-colors duration-300">
                  <step.icon size={22} className="text-rose" />
                </div>
                <span className="absolute -top-2 -right-2 bg-rose-deep text-white text-xs font-bold px-2.5 py-0.5 rounded-full z-20">
                  {step.number}
                </span>
              </div>
              <div className="card group-hover:shadow-[0_8px_32px_rgba(232,164,164,0.12)] transition-all duration-300 p-6 flex-1">
                <h3 className="text-xl font-heading font-bold text-charcoal mb-2">
                  {step.title}
                </h3>
                <p className="text-charcoal/60 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Frase de cierre */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-14"
        >
          <p className="text-charcoal/50 text-lg font-serif italic mb-8">
            &ldquo;{proceso.frase}&rdquo;
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex"
          >
            Empezar ahora
            <ArrowRight size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}


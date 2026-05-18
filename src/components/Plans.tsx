'use client';

import { useState } from 'react';
import { motion, type PanInfo } from 'framer-motion';
import { Check, MessageCircle, Users, ChevronLeft, ChevronRight } from 'lucide-react';

const WHATSAPP_ONLINE = 'https://wa.me/5491131491877?text=Hola!%20Quiero%20empezar%20con%20el%20Plan%20Online';
const WHATSAPP_PRESENCIAL = 'https://wa.me/5491131491877?text=Hola!%20Quiero%20consultar%20disponibilidad%20para%20el%20Plan%20Online%20%2B%20Presencial';

const onlineFeatures = [
  'Plan de entrenamiento 100% personalizado (4 semanas)',
  'Rutinas en Notion con videos explicativos',
  'Movilidad articular + estiramientos incluidos',
  'Adaptado a tu nivel, objetivos y disponibilidad',
  'Ajustes del plan según tu progreso',
  'Seguimiento diario por WhatsApp',
  'Videollamada inicial personalizada (15–30 min)',
  'Guía de hábitos saludables',
];

const presencialExtras = [
  '1 clase presencial por semana',
  'Correcciones de técnica en tiempo real',
];

/* Badge fuera del overflow-hidden para que no se clipee */
function OnlineCard() {
  return (
    <div className="relative">
      <div className="absolute -top-4 left-6 z-10">
        <span className="bg-rose text-white text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-wider">
          Más elegido
        </span>
      </div>
      <div className="relative rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(232,164,164,0.18)] border-2 border-rose/30">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-rose to-nude" />
        <div className="bg-white p-8 md:p-10">
          <h3 className="text-3xl font-heading font-bold text-charcoal mb-2">
            Plan Online
          </h3>
          <p className="text-charcoal/50 text-sm mb-8">
            Todo lo que necesitás para transformarte desde donde estés.
          </p>
          <div className="mb-8">
            <div className="flex items-end gap-2 mb-2">
              <span className="text-4xl font-heading font-bold text-charcoal">30 días</span>
              <span className="text-charcoal/40 text-sm mb-1">de proceso</span>
            </div>
            <p className="text-charcoal/40 text-sm">
              Precio: consultá por WhatsApp — cupos disponibles este mes
            </p>
          </div>
          <ul className="space-y-4 mb-10">
            {onlineFeatures.map((feature) => (
              <li key={feature} className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-rose/15 flex items-center justify-center shrink-0 mt-0.5">
                  <Check size={12} className="text-rose" />
                </div>
                <span className="text-charcoal/70 text-sm">{feature}</span>
              </li>
            ))}
          </ul>
          <a
            href={WHATSAPP_ONLINE}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary w-full text-lg py-5"
          >
            <MessageCircle size={20} />
            Quiero empezar
          </a>
        </div>
      </div>
    </div>
  );
}

function PresencialCard() {
  return (
    <div className="relative">
      <div className="absolute -top-4 left-6 z-10">
        <span className="bg-nude text-white text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-wider flex items-center gap-1.5">
          <Users size={11} />
          Cupos limitados
        </span>
      </div>
      <div className="card p-7 h-full">
        <h3 className="text-2xl font-heading font-bold text-charcoal mb-2">
          Online + Presencial
        </h3>
        <p className="text-charcoal/50 text-sm mb-6">
          Todo el plan online, más un encuentro semanal en persona.
        </p>
        <div className="mb-6 flex items-end gap-2">
          <span className="text-3xl font-heading font-bold text-charcoal">30 días</span>
          <span className="text-charcoal/40 text-sm mb-1">de proceso</span>
        </div>
        <div className="mb-6">
          <p className="text-charcoal/40 text-xs uppercase tracking-widest mb-3 font-medium">
            Todo el Plan Online, más:
          </p>
          <ul className="space-y-3">
            {presencialExtras.map((feature) => (
              <li key={feature} className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-nude/20 flex items-center justify-center shrink-0 mt-0.5">
                  <Check size={12} className="text-nude-dark" />
                </div>
                <span className="text-charcoal/65 text-sm">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="my-6 border-t border-cream-200" />
        <a
          href={WHATSAPP_PRESENCIAL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secondary w-full"
        >
          <MessageCircle size={16} />
          Consultar disponibilidad
        </a>
      </div>
    </div>
  );
}

export default function Plans() {
  const [currentIndex, setCurrentIndex] = useState(0);

  function handleDragEnd(_: unknown, info: PanInfo) {
    if ((info.offset.x < -50 || info.velocity.x < -300) && currentIndex === 0) {
      setCurrentIndex(1);
    } else if ((info.offset.x > 50 || info.velocity.x > 300) && currentIndex === 1) {
      setCurrentIndex(0);
    }
  }

  return (
    <section id="planes" className="relative py-12 md:py-24 lg:py-32 overflow-hidden bg-white">
      <div className="absolute top-0 left-0 w-64 h-64 bg-sage/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-rose/8 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-rose font-medium uppercase tracking-widest text-sm">
            Planes
          </span>
          <h2 className="section-title mt-4 mb-5">
            Elegí cómo querés <span className="text-gradient">empezar</span>
          </h2>
          <p className="text-charcoal/60 text-lg max-w-xl mx-auto">
            Resultados reales que podés sostener. Sin importar por dónde empieces.
          </p>
        </motion.div>

        {/* Desktop: lado a lado — igual que antes */}
        <div className="hidden md:grid lg:grid-cols-5 gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3 relative"
          >
            <OnlineCard />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-2 relative"
          >
            <PresencialCard />
          </motion.div>
        </div>

        {/* Mobile: carrusel — ancho 200% explícito para que -50% = exactamente 1 card */}
        <div className="md:hidden">
          <div className="overflow-hidden">
            <motion.div
              className="flex"
              style={{ width: '200%' }}
              animate={{ x: currentIndex === 0 ? '0%' : '-50%' }}
              transition={{ type: 'spring', stiffness: 350, damping: 35 }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.12}
              onDragEnd={handleDragEnd}
            >
              <div className="w-1/2 shrink-0 pt-5 px-1">
                <OnlineCard />
              </div>
              <div className="w-1/2 shrink-0 pt-5 px-1">
                <PresencialCard />
              </div>
            </motion.div>
          </div>

          {/* Controles */}
          <div className="flex items-center justify-center gap-6 mt-8">
            <button
              onClick={() => setCurrentIndex(0)}
              disabled={currentIndex === 0}
              aria-label="Plan anterior"
              className="w-10 h-10 rounded-full border border-rose/30 flex items-center justify-center disabled:opacity-30 transition-opacity"
            >
              <ChevronLeft size={18} className="text-rose" />
            </button>

            <div className="flex items-center gap-2">
              {[0, 1].map((i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  aria-label={`Ir al plan ${i + 1}`}
                  className={`rounded-full transition-all duration-300 ${
                    i === currentIndex ? 'w-6 h-2 bg-rose' : 'w-2 h-2 bg-rose/30'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() => setCurrentIndex(1)}
              disabled={currentIndex === 1}
              aria-label="Plan siguiente"
              className="w-10 h-10 rounded-full border border-rose/30 flex items-center justify-center disabled:opacity-30 transition-opacity"
            >
              <ChevronRight size={18} className="text-rose" />
            </button>
          </div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center text-charcoal/40 text-sm mt-10 font-serif italic"
        >
          No importa por dónde empieces. Lo importante es que sea un proceso que puedas sostener.
        </motion.p>
      </div>
    </section>
  );
}

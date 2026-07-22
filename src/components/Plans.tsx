'use client';

import { useEffect, useState } from 'react';
import { motion, type PanInfo } from 'framer-motion';
import { Check, MessageCircle, Users, ChevronLeft, ChevronRight } from 'lucide-react';

type Plan = {
  id: 'basico' | 'personalizado' | 'presencial';
  name: string;
  price: string;
  tagline: string;
  image: string;
  imagePosition: string;
  features: string[];
  note?: string;
  badge?: { label: string; icon?: boolean; color: string };
  highlight?: boolean;
  cta: string;
  whatsapp: string;
};

const plans: Plan[] = [
  {
    id: 'basico',
    name: 'Plan Online Básico',
    price: '$20.000',
    tagline: 'Ideal si querés una guía clara y entrenar sola.',
    image: '/plan-online-basico.webp',
    imagePosition: 'object-top',
    features: [
      'Rutina mensual Casa o Gym según tu objetivo (bajar de peso, definir o aumentar masa)',
      'Videos cortos explicativos de cada ejercicio',
      'Guía general de pesos según tu nivel',
      'Movilidad articular y estiramientos básicos',
      'Acceso al plan por 30 días',
    ],
    note: 'Sin seguimiento ni ajustes durante el mes. Yo te doy la estructura y vos la ejecutás.',
    cta: 'Quiero este plan',
    whatsapp:
      'https://wa.me/5491168124464?text=Hola!%20Quiero%20empezar%20con%20el%20Plan%20Online%20B%C3%A1sico',
  },
  {
    id: 'personalizado',
    name: 'Plan Online Personalizado',
    price: '$35.000',
    tagline: 'Todo lo que necesitás para transformarte desde donde estés.',
    image: '/plan-online-personalizado.webp',
    imagePosition: 'object-center',
    features: [
      'Planificación mensual 100% personalizada según tu objetivo',
      'Videos cortos explicativos de cada ejercicio',
      'Guía de pesos según tu nivel y progreso',
      'Guía de hábitos saludables: alimentación consciente y amor propio',
      'Apoyo y seguimiento vía WhatsApp en todo el proceso',
      'Movilidad articular y estiramientos para prevenir lesiones',
    ],
    badge: { label: '✦ Más elegido', color: 'bg-rose-deep' },
    highlight: true,
    cta: 'Quiero empezar',
    whatsapp:
      'https://wa.me/5491168124464?text=Hola!%20Quiero%20empezar%20con%20el%20Plan%20Online%20Personalizado',
  },
  {
    id: 'presencial',
    name: 'Plan Presencial + Online',
    price: '$80.000',
    tagline: 'Acompañamiento cercano: lo mejor de ambos mundos.',
    image: '/plan-presencial-online.webp',
    imagePosition: 'object-center',
    features: [
      'Evaluación inicial presencial',
      'Rutina personalizada (online)',
      '4 clases presenciales al mes (1 por semana, 60–75 min)',
      'Videos explicativos de los ejercicios',
      'Guía de pesos y progresiones',
      'Movilidad articular y estiramientos',
      'Guía de hábitos saludables',
      'Seguimiento vía WhatsApp',
    ],
    badge: { label: 'Cupos limitados', icon: true, color: 'bg-nude-dark' },
    cta: 'Consultar disponibilidad',
    whatsapp:
      'https://wa.me/5491168124464?text=Hola!%20Quiero%20consultar%20disponibilidad%20para%20el%20Plan%20Presencial%20%2B%20Online',
  },
];

function PlanCard({ plan }: { plan: Plan }) {
  return (
    <div className="relative h-full">
      {plan.badge && (
        <div className="absolute -top-4 left-6 z-10">
          <span
            className={`${plan.badge.color} text-white text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-wider flex items-center gap-1.5`}
          >
            {plan.badge.icon && <Users size={11} />}
            {plan.badge.label}
          </span>
        </div>
      )}
      <div
        className={`relative h-full flex flex-col rounded-3xl overflow-hidden bg-white ${
          plan.highlight
            ? 'shadow-[0_20px_60px_rgba(232,164,164,0.18)] border-2 border-rose/30'
            : 'card'
        }`}
      >
        {plan.highlight && (
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-rose to-nude z-10" />
        )}

        <div className="relative aspect-[16/10] overflow-hidden">
          <img
            src={plan.image}
            alt={plan.name}
            className={`w-full h-full object-cover ${plan.imagePosition}`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/20 via-transparent to-transparent" />
        </div>

        <div className="flex flex-col flex-1 p-7">
          <h3 className="text-2xl font-heading font-bold text-charcoal mb-1.5">
            {plan.name}
          </h3>
          <p className="text-charcoal/50 text-sm mb-6">{plan.tagline}</p>

          <div className="mb-6 flex items-end gap-2">
            <span className="text-4xl font-heading font-bold text-charcoal">
              {plan.price}
            </span>
            <span className="text-charcoal/40 text-sm mb-1.5">/ 30 días</span>
          </div>

          <ul className="space-y-3 mb-6">
            {plan.features.map((feature) => (
              <li key={feature} className="flex items-start gap-3">
                <div
                  className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                    plan.highlight ? 'bg-rose/15' : 'bg-nude/20'
                  }`}
                >
                  <Check
                    size={12}
                    className={plan.highlight ? 'text-rose' : 'text-nude-dark'}
                  />
                </div>
                <span className="text-charcoal/70 text-sm">{feature}</span>
              </li>
            ))}
          </ul>

          {plan.note && (
            <p className="text-charcoal/40 text-xs italic mb-6">{plan.note}</p>
          )}

          <div className="mt-auto">
            <a
              href={plan.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className={`${plan.highlight ? 'btn-primary' : 'btn-secondary'} w-full`}
            >
              <MessageCircle size={18} />
              {plan.cta}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Plans() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [precios, setPrecios] = useState<Record<string, string> | null>(null);
  const lastIndex = plans.length - 1;

  // Precios editables desde /admin; si la API no responde quedan los de acá
  useEffect(() => {
    fetch('/api/precios')
      .then((r) => (r.ok ? r.json() : null))
      .then((data) => data && setPrecios(data))
      .catch(() => {});
  }, []);

  const planesConPrecio = plans.map((plan) =>
    precios?.[plan.id] ? { ...plan, price: precios[plan.id] } : plan
  );

  function handleDragEnd(_: unknown, info: PanInfo) {
    if ((info.offset.x < -50 || info.velocity.x < -300) && currentIndex < lastIndex) {
      setCurrentIndex(currentIndex + 1);
    } else if ((info.offset.x > 50 || info.velocity.x > 300) && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  }

  return (
    <section id="planes" className="relative py-12 md:py-24 lg:py-32 overflow-hidden bg-white">
      <div className="absolute top-0 left-0 w-64 h-64 bg-sage/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-rose/8 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="kicker">
            Planes
          </span>
          <h2 className="section-title mt-4 mb-5">
            Elegí cómo querés <span className="text-accent">empezar</span>
          </h2>
          <p className="text-charcoal/60 text-lg max-w-xl mx-auto">
            Resultados reales que podés sostener. Sin importar por dónde empieces.
          </p>
        </motion.div>

        {/* Desktop: 3 tarjetas lado a lado */}
        <div className="hidden md:grid md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {planesConPrecio.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="relative"
            >
              <PlanCard plan={plan} />
            </motion.div>
          ))}
        </div>

        {/* Mobile: carrusel — ancho 300% explícito para que cada paso = exactamente 1 card */}
        <div className="md:hidden">
          <div className="overflow-hidden">
            <motion.div
              className="flex"
              style={{ width: `${plans.length * 100}%` }}
              animate={{ x: `-${(currentIndex * 100) / plans.length}%` }}
              transition={{ type: 'spring', stiffness: 350, damping: 35 }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.12}
              onDragEnd={handleDragEnd}
            >
              {planesConPrecio.map((plan) => (
                <div
                  key={plan.name}
                  className="shrink-0 pt-5 px-1"
                  style={{ width: `${100 / plans.length}%` }}
                >
                  <PlanCard plan={plan} />
                </div>
              ))}
            </motion.div>
          </div>

          {/* Controles */}
          <div className="flex items-center justify-center gap-6 mt-8">
            <button
              onClick={() => setCurrentIndex(Math.max(0, currentIndex - 1))}
              disabled={currentIndex === 0}
              aria-label="Plan anterior"
              className="w-10 h-10 rounded-full border border-rose/30 flex items-center justify-center disabled:opacity-30 transition-opacity"
            >
              <ChevronLeft size={18} className="text-rose" />
            </button>

            <div className="flex items-center gap-2">
              {plans.map((_, i) => (
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
              onClick={() => setCurrentIndex(Math.min(lastIndex, currentIndex + 1))}
              disabled={currentIndex === lastIndex}
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

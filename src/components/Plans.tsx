'use client';

import { useEffect, useState } from 'react';
import Reveal from './Reveal';
import { wa } from '@/lib/enlaces';

type Plan = {
  id: 'online' | 'videollamada' | 'mixto';
  nombre: string;
  precio: string;
  sello: string;
  destacado?: boolean;
  resumen: string[];
  detalle: string[];
  aviso: string;
  avisoVerde?: boolean;
  cta: string;
  mensaje: string;
};

// Orden: primero el Plan Online. El precio se puede cambiar desde /admin.
const PLANES: Plan[] = [
  {
    id: 'online',
    nombre: 'Plan Online',
    precio: '$40.000',
    sello: '★ MÁS ELEGIDO',
    destacado: true,
    resumen: ['Rutina 100% personalizada para ti', 'Entrenas a tu ritmo, sin horarios fijos', 'Seguimiento para resolver tus dudas'],
    detalle: [
      'Rutina 100% personalizada según tu objetivo, tu nivel y el equipo que tengas (casa o gimnasio)',
      'Entrenas a tu ritmo, sin horario fijo',
      'Seguimiento para resolver tus dudas y ajustar tu plan',
      'Te explico cada ejercicio para que lo hagas con buena técnica',
      'Accedes a tu rutina en mi app con tu nombre y registras cada ejercicio',
    ],
    aviso: 'Disponible ahora, sin lista de espera',
    avisoVerde: true,
    cta: 'Quiero empezar',
    mensaje: 'Hola! Quiero empezar con el Plan Online',
  },
  {
    id: 'videollamada',
    nombre: 'Plan por Videollamada',
    precio: '$75.000',
    sello: 'EN VIVO · POR HORARIOS',
    resumen: ['Sesiones en vivo conmigo, 2 por semana', 'Corrección de técnica en cada ejercicio', 'Ideal si entrenas en casa'],
    detalle: [
      '2 sesiones en vivo por semana conmigo, por videollamada',
      'Plan personalizado según tu objetivo y tu nivel',
      'Corrección de técnica y acompañamiento en cada ejercicio',
      'Si quieres entrenar una tercera vez por semana, esa sesión es online, con la rutina que yo te preparo y te envío',
      'Ideal para quienes entrenan en casa',
    ],
    aviso: 'Disponibilidad por horarios. Consúltala antes de pagar.',
    cta: 'Consultar disponibilidad',
    mensaje: 'Hola! Quiero consultar disponibilidad del Plan por Videollamada',
  },
  {
    id: 'mixto',
    nombre: 'Plan Mixto',
    precio: '$90.000',
    sello: 'CUPOS LIMITADOS',
    resumen: ['1 sesión presencial por semana', 'Las demás, online con tu rutina', 'Seguimiento durante la semana'],
    detalle: [
      '1 sesión presencial por semana conmigo',
      'Las demás sesiones son online, con rutina personalizada',
      'Seguimiento durante toda la semana',
      'Disponibilidad limitada: depende de la ubicación, los horarios y el gimnasio',
    ],
    aviso: 'Cupos limitados. Consulta si hay lugar según tu zona.',
    cta: 'Consultar disponibilidad',
    mensaje: 'Hola! Quiero consultar disponibilidad del Plan Mixto',
  },
];

function Tarjeta({ plan, precio }: { plan: Plan; precio: string }) {
  const [abierto, setAbierto] = useState(false);
  return (
    <div
      className={`relative h-full flex flex-col gap-4 rounded-[28px] bg-white p-7 pt-9 ${
        plan.destacado ? 'card-elegido border-2 border-rose/40 lg:-translate-y-2' : 'border border-rose/15 shadow-[0_4px_24px_rgba(59,42,36,0.08)]'
      }`}
    >
      <span
        className={`absolute -top-3.5 left-6 text-white text-[11px] font-extrabold tracking-wider px-4 py-1.5 rounded-full ${
          plan.destacado ? 'sello-brillo' : plan.id === 'mixto' ? 'bg-nude-dark' : 'bg-plum-light'
        }`}
      >
        {plan.sello}
      </span>
      <b className="font-heading text-2xl text-charcoal">{plan.nombre}</b>
      <div className="flex items-end gap-2">
        <span className="font-heading font-bold text-4xl text-charcoal">{precio}</span>
        <span className="text-sm text-charcoal-muted mb-1.5">/ mes</span>
      </div>
      <ul className="flex flex-col gap-2.5">
        {plan.resumen.map((x) => (
          <li key={x} className="flex gap-3 text-[15px] text-charcoal/80">
            <span className="mt-1 w-5 h-5 shrink-0 rounded-full bg-rose/15 text-rose-deep text-xs flex items-center justify-center">✓</span>
            {x}
          </li>
        ))}
      </ul>
      <button
        onClick={() => setAbierto(!abierto)}
        aria-expanded={abierto}
        className="self-start text-rose-deep font-bold text-sm underline underline-offset-4 min-h-[44px] lg:min-h-0"
      >
        {abierto ? 'Ver menos ▴' : 'Ver más detalle ▾'}
      </button>
      {abierto && (
        <ul className="flex flex-col gap-2 text-sm leading-relaxed text-charcoal-muted bg-cream rounded-2xl p-4">
          {plan.detalle.map((x) => (
            <li key={x}>• {x}</li>
          ))}
        </ul>
      )}
      <div className="mt-auto flex flex-col gap-3 pt-2">
        <div className="flex items-start gap-2.5 text-sm font-semibold text-charcoal">
          <span className={`mt-1.5 w-2.5 h-2.5 shrink-0 rounded-full punto-latido ${plan.avisoVerde ? 'bg-[#25a85a]' : 'bg-nude'}`} />
          <span>{plan.aviso}</span>
        </div>
        <a
          href={wa(plan.mensaje)}
          target="_blank"
          rel="noopener noreferrer"
          className={`text-center font-extrabold py-4 rounded-full transition ${
            plan.destacado ? 'bg-[#25a85a] text-white hover:brightness-95' : 'bg-rose-deep text-white hover:bg-rose-deeper'
          }`}
        >
          {plan.cta}
        </a>
      </div>
    </div>
  );
}

export default function Plans() {
  const [precios, setPrecios] = useState<Record<string, string> | null>(null);

  useEffect(() => {
    fetch('/api/precios')
      .then((r) => (r.ok ? r.json() : null))
      .then((data) => data && setPrecios(data))
      .catch(() => {});
  }, []);

  return (
    <section id="planes" className="bg-cream py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 flex flex-col gap-10 lg:gap-12">
        <Reveal className="text-center flex flex-col items-center gap-3">
          <span className="text-xs tracking-[.18em] font-bold text-rose-deep">PLANES</span>
          <h2 className="font-heading font-bold text-charcoal text-[28px] lg:text-[40px] leading-[1.1]">
            Elige cómo quieres <span className="text-accent">empezar</span>
          </h2>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-8 md:gap-6 lg:gap-8 items-stretch pt-3">
          {PLANES.map((p, i) => (
            <Reveal key={p.id} delay={i * 0.1} className="h-full">
              <Tarjeta plan={p} precio={precios?.[p.id] ?? p.precio} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

'use client';

import { useState } from 'react';
import Reveal from './Reveal';

const preguntas = [
  { p: '¿Necesito equipo para entrenar?', r: 'No es obligatorio. Adapto tu rutina a lo que tengas: gimnasio, mancuernas, bandas o solo tu cuerpo.' },
  { p: '¿Cómo pago?', r: 'Me escribes por WhatsApp y te indico las formas de pago disponibles.' },
  { p: '¿Qué pasa si un día no puedo entrenar?', r: 'No pasa nada. Ajustamos tu semana para que sigas avanzando sin culpa.' },
  { p: '¿Sirve si soy principiante?', r: 'Sí. Tu plan parte de tu nivel y de tu historia, y los videos te muestran cómo hacer cada ejercicio.' },
  { p: '¿En cuánto tiempo recibo mi plan?', r: 'En 24 a 48 horas te entrego tu planificación personalizada.' },
];

export default function FAQ() {
  const [abierta, setAbierta] = useState<number | null>(0);
  return (
    <section id="faq" className="bg-cream-100 py-14 lg:py-20">
      <div className="max-w-[760px] mx-auto px-4 sm:px-6 flex flex-col gap-7">
        <Reveal>
          <h2 className="text-center font-heading font-bold text-charcoal text-[28px] lg:text-[40px] leading-[1.1]">
            Preguntas <span className="text-accent">frecuentes</span>
          </h2>
        </Reveal>
        <div className="flex flex-col gap-3">
          {preguntas.map((x, i) => {
            const open = abierta === i;
            return (
              <Reveal key={x.p} delay={i * 0.05}>
                <div className="bg-white rounded-2xl border border-rose/15 overflow-hidden">
                  <button
                    onClick={() => setAbierta(open ? null : i)}
                    aria-expanded={open}
                    className="w-full flex items-center justify-between gap-4 text-left px-5 lg:px-6 py-4 lg:py-[18px] min-h-[44px]"
                  >
                    <b className="text-[15px] lg:text-base text-charcoal leading-snug">{x.p}</b>
                    <span className="text-rose-deep font-bold text-xl leading-none">{open ? '−' : '+'}</span>
                  </button>
                  {open && <p className="px-5 lg:px-6 pb-5 text-[14.5px] lg:text-[15px] leading-relaxed text-charcoal-muted">{x.r}</p>}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

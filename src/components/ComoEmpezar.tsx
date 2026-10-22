'use client';

import Reveal from './Reveal';
import { WA_EMPEZAR } from '@/lib/enlaces';

const pasos = [
  { t: 'Realizas el pago', d: 'Eliges tu plan y confirmas tu lugar con el pago.' },
  { t: 'Te envío un formulario', d: 'Para conocerte mejor: tu objetivo, tu nivel, tu rutina y el equipo que tienes.' },
  { t: 'Videollamada corta (opcional)', d: 'Si quieres, agendamos una videollamada corta para conocernos y resolver dudas.' },
  { t: 'Recibes tu planificación', d: 'En 24 a 48 horas te entrego tu planificación personalizada.' },
];

export default function ComoEmpezar() {
  return (
    <section id="como-empezar" className="bg-cream-100 py-14 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 flex flex-col gap-9">
        <Reveal className="text-center flex flex-col items-center gap-3">
          <span className="text-xs tracking-[.18em] font-bold text-rose-deep">CÓMO EMPEZAR</span>
          <h2 className="font-heading font-bold text-charcoal text-[28px] lg:text-[40px] leading-[1.1]">
            Empezar es <span className="text-accent">más simple de lo que piensas</span>
          </h2>
          <p className="text-charcoal-muted">Es igual para los tres planes.</p>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {pasos.map((p, i) => (
            <Reveal key={p.t} delay={i * 0.08} className="h-full">
              <div className="h-full bg-white rounded-3xl p-6 flex flex-col gap-2.5 shadow-[0_4px_24px_rgba(59,42,36,0.06)]">
                <span className="w-9 h-9 rounded-full bg-rose-deep text-white font-bold flex items-center justify-center">{i + 1}</span>
                <b className="font-heading text-lg text-charcoal">{p.t}</b>
                <span className="text-[14.5px] leading-relaxed text-charcoal-muted">{p.d}</span>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="text-center">
          <a href={WA_EMPEZAR} target="_blank" rel="noopener noreferrer" className="inline-block bg-[#25a85a] text-white font-extrabold px-8 py-4 rounded-full hover:brightness-95 transition">
            Quiero empezar
          </a>
        </div>
      </div>
    </section>
  );
}

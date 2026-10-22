'use client';

import Reveal from './Reveal';
import Blobs from './Blobs';

const ideas = [
  { t: 'Planes que caben en tu día', d: 'Entrenamientos pensados para el tiempo que de verdad tienes.' },
  { t: 'Ajustes cuando la semana se complica', d: 'Si un día no puedes, lo reacomodamos sin culpa.' },
  { t: 'Constancia, no perfección', d: 'Lo importante es seguir, a tu ritmo y a tu manera.' },
];

export default function MujeresReales() {
  return (
    <section id="mujeres-reales" className="relative bg-cream-100 py-14 lg:py-24 overflow-hidden">
      <Blobs />
      <div className="relative max-w-[1100px] mx-auto px-4 sm:px-6 flex flex-col items-center text-center gap-5 lg:gap-7">
        <Reveal className="flex flex-col items-center gap-4">
          <span className="text-xs lg:text-sm tracking-[.18em] font-bold text-[#7d4a38]">MUJERES REALES</span>
          <h2 className="font-heading font-bold text-charcoal text-[28px] lg:text-[54px] leading-[1.12]">
            Tu vida ya es suficiente. <span className="text-accent">Yo ajusto el plan a ti</span>
          </h2>
          <p className="text-base lg:text-[21px] leading-[1.7] text-charcoal-muted max-w-[820px]">
            Sé que tienes poco tiempo y mil cosas por hacer. Que quizás eres mamá y estás volviendo a entrenar después de
            mucho. Por eso no te exijo de más: ajusto tu plan a tu rutina, a tu energía y a tu momento, para que puedas
            cumplirlo semana tras semana.
          </p>
        </Reveal>
        <div className="grid sm:grid-cols-3 gap-4 lg:gap-5 w-full text-left">
          {ideas.map((x, i) => (
            <Reveal key={x.t} delay={i * 0.1} className="h-full">
              <div className="h-full bg-white border border-rose/15 rounded-3xl p-5 lg:p-8 flex flex-col gap-2 lg:gap-3">
                <b className="font-heading text-lg lg:text-2xl text-charcoal">{x.t}</b>
                <span className="text-sm lg:text-[17px] leading-relaxed text-charcoal-muted">{x.d}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

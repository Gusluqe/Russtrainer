'use client';

import Reveal from './Reveal';

const icono = (d: string[]) => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#a85c68" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    {d.map((p, i) => (
      <path key={i} d={p} />
    ))}
  </svg>
);

const dolores = [
  { texto: 'No me siento cómoda con mi cuerpo', icon: icono(['M12 20s-7-4.5-8.5-9A4.5 4.5 0 0 1 12 7.5 4.5 4.5 0 0 1 20.5 11C19 15.5 12 20 12 20z', 'M4 4l16 16']) },
  { texto: 'Me frustra no ver resultados', icon: icono(['M16 10a6 6 0 1 1-12 0 6 6 0 0 1 12 0z', 'M15 15l6 6', 'M8 8l4 4M12 8l-4 4']) },
  { texto: 'No sé qué hacer en el gimnasio', icon: icono(['M3 9v6M6 7v10M18 7v10M21 9v6M6 12h12']) },
  { texto: 'Empiezo motivada, pero no logro sostener el hábito', icon: icono(['M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z', 'M12 7v5l3 2']) },
];

export default function PainPoints() {
  return (
    <section className="bg-cream py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 flex flex-col gap-10">
        <Reveal className="text-center flex flex-col gap-3 items-center">
          <span className="text-xs tracking-[.18em] font-bold text-rose-deep">¿TE IDENTIFICAS?</span>
          <h2 className="font-heading font-bold text-charcoal text-[28px] lg:text-[40px] leading-[1.1] max-w-2xl">
            ¿Te has sentido frustrada o <span className="text-accent">desmotivada por esto?</span>
          </h2>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {dolores.map((d, i) => (
            <Reveal key={d.texto} delay={i * 0.08} className="h-full">
              <div className="h-full bg-white border border-rose/15 rounded-3xl p-6 flex flex-col gap-4 shadow-[0_4px_24px_rgba(59,42,36,0.06)]">
                {d.icon}
                <b className="font-heading text-lg leading-snug text-charcoal">{d.texto}</b>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-5 bg-rose-light rounded-3xl px-6 py-6 lg:px-8 text-center">
            <span className="font-heading font-bold text-xl lg:text-2xl text-charcoal">Si te pasa algo de esto, no estás sola.</span>
            <span className="text-rose-deep text-2xl">
              <span className="hidden lg:inline">→</span>
              <span className="lg:hidden">↓</span>
            </span>
            <a href="/#mujeres-reales" className="bg-rose-deep text-white font-bold px-6 py-3.5 rounded-full hover:bg-rose-deeper transition-colors">
              Mira lo que puedes hacer
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

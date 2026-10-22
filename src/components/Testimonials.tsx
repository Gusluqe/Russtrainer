'use client';

import { useRef } from 'react';
import Reveal from './Reveal';
import { useContenido } from './ContenidoContext';

export default function Testimonials() {
  const { testimonios } = useContenido();
  const ref = useRef<HTMLDivElement>(null);
  const mover = (dir: number) => {
    const el = ref.current;
    if (el) el.scrollBy({ left: dir * Math.min(444, el.clientWidth * 0.85), behavior: 'smooth' });
  };

  return (
    <section id="testimonios" className="bg-cream py-14 lg:py-20">
      <div className="flex flex-col gap-9">
        <Reveal className="text-center flex flex-col items-center gap-3 px-4">
          <span className="text-xs lg:text-sm tracking-[.18em] font-bold text-[#7d4a38]">TESTIMONIOS</span>
          <h2 className="font-heading font-bold text-charcoal text-[28px] lg:text-[52px] leading-[1.1]">
            Ellas ya empezaron <span className="text-accent">su proceso</span>
          </h2>
        </Reveal>

        <div className="relative">
          <button
            aria-label="Anterior"
            onClick={() => mover(-1)}
            className="hidden lg:flex absolute left-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-rose-deep text-white text-2xl items-center justify-center shadow-[0_8px_20px_rgba(59,42,36,0.25)] hover:bg-rose-deeper"
          >
            ‹
          </button>
          <button
            aria-label="Siguiente"
            onClick={() => mover(1)}
            className="hidden lg:flex absolute right-6 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-rose-deep text-white text-2xl items-center justify-center shadow-[0_8px_20px_rgba(59,42,36,0.25)] hover:bg-rose-deeper"
          >
            ›
          </button>
          <div
            ref={ref}
            className="flex gap-4 lg:gap-6 overflow-x-auto snap-x snap-mandatory sin-barra px-4 lg:px-20 scroll-px-4 lg:scroll-px-20 py-2 pb-4"
          >
            {testimonios.lista.map((t) => (
              <div
                key={t.handle}
                className="snap-start shrink-0 w-[290px] lg:w-[520px] bg-white border border-rose/20 rounded-3xl p-6 lg:p-9 flex flex-col gap-4"
              >
                <div className="text-rose text-[15px] lg:text-lg tracking-[2px]">★★★★★</div>
                <p className="font-heading italic text-[15px] lg:text-xl leading-[1.65] text-plum-light">{t.texto}</p>
                <b className="text-rose-deep text-[15px] lg:text-lg mt-auto">{t.handle}</b>
              </div>
            ))}
          </div>
        </div>
        <div className="text-center text-sm text-charcoal-muted">
          <span className="lg:hidden">Desliza para ver más →</span>
          <span className="hidden lg:inline">Desliza o usa las flechas para ver más →</span>
        </div>
      </div>
    </section>
  );
}

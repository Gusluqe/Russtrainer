'use client';

import Reveal from './Reveal';
import { WA_EMPEZAR } from '@/lib/enlaces';

const videos = [
  { src: '/videos/postura.mp4', poster: '/videos/postura.jpg', t: 'Corrijo tu postura', off: 'lg:mt-10' },
  { src: '/videos/nivel.mp4', poster: '/videos/nivel.jpg', t: 'Ajusto a tu nivel', off: '' },
  { src: '/videos/motivo.mp4', poster: '/videos/motivo.jpg', t: 'Te motivo en cada serie', off: 'lg:mt-10' },
];

export default function EnAccion() {
  return (
    <section id="accion" className="bg-cream-100 py-14 lg:py-24">
      <div className="max-w-[1400px] mx-auto flex flex-col items-center gap-8 lg:gap-11">
        <Reveal className="text-center flex flex-col items-center gap-3 max-w-[760px] px-4">
          <span className="text-xs lg:text-sm tracking-[.18em] font-bold text-[#7d4a38]">EN ACCIÓN</span>
          <h2 className="font-heading font-bold text-charcoal text-[28px] lg:text-[52px] leading-[1.1]">
            Te acompaño en <span className="text-accent">cada movimiento</span>
          </h2>
          <p className="text-[15.5px] lg:text-xl leading-[1.65] text-charcoal-muted">
            Corrijo tu postura, ajusto el ejercicio a tu nivel y te motivo para que sigas. Así se entrena conmigo.
          </p>
        </Reveal>

        <div className="w-full flex gap-4 lg:gap-10 overflow-x-auto lg:overflow-visible snap-x snap-mandatory sin-barra px-[calc(50%-110px)] lg:px-20 lg:justify-center pb-3 lg:items-start">
          {videos.map((v, i) => (
            <Reveal key={v.src} delay={i * 0.1} className={`shrink-0 snap-center w-[220px] lg:w-[360px] ${v.off}`}>
              <div className="flex flex-col gap-3.5">
                <div className="rounded-[24px] lg:rounded-[28px] overflow-hidden leading-[0] bg-plum shadow-[0_22px_48px_rgba(59,42,36,0.22)]">
                  <video src={v.src} poster={v.poster} autoPlay loop muted playsInline preload="metadata" aria-label={v.t} className="w-full block" />
                </div>
                <span className="text-center font-bold text-[15px] lg:text-xl text-plum-light">{v.t}</span>
              </div>
            </Reveal>
          ))}
        </div>
        <span className="lg:hidden text-[13px] text-charcoal-muted">Desliza para ver más →</span>

        <a href={WA_EMPEZAR} target="_blank" rel="noopener noreferrer" className="bg-[#25a85a] text-white font-extrabold px-8 py-4 lg:px-10 lg:py-5 lg:text-lg rounded-full hover:brightness-95 transition">
          Quiero empezar
        </a>
      </div>
    </section>
  );
}

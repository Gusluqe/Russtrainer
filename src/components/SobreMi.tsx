'use client';

import Link from 'next/link';
import Blobs from './Blobs';
import Reveal from './Reveal';

const pasos = [
  { t: 'Empezamos contigo', d: 'Entiendo tu historia, tus objetivos y tu punto de partida.' },
  { t: 'Tu plan 100% personalizado', d: 'Te doy acceso a la app con tu rutina, videos explicativos, movilidad y estiramientos.' },
  { t: 'Acompañamiento constante', d: 'Dudas resueltas y ajustes por WhatsApp. No vas a estar sola.' },
];

export default function SobreMi() {
  return (
    <>
      <section className="relative bg-cream-100 overflow-hidden pt-28 lg:pt-36 pb-16 lg:pb-24">
        <Blobs variante="arriba" />
        <div className="relative z-10 max-w-[960px] mx-auto px-4 sm:px-6 lg:px-20 flex flex-col gap-5">
          <span className="text-xs lg:text-sm tracking-[.18em] font-bold text-[#7d4a38]">SOBRE RUSS</span>
          <h1 className="font-heading font-bold text-charcoal text-[34px] lg:text-[58px] leading-[1.08]">
            Tu entrenadora personal <span className="text-accent">de confianza</span>
          </h1>
          <p className="text-[17px] lg:text-[21px] leading-[1.7] text-charcoal-muted">
            Soy Russ, y mi misión es ayudarte a lograr la transformación que has estado buscando hace tiempo. No prometo milagros, prometo{' '}
            <b className="text-charcoal">disciplina, seguimiento real y resultados comprobables.</b>
          </p>
          <p className="text-[17px] lg:text-[21px] leading-[1.7] text-charcoal-muted">
            Con años de experiencia en entrenamiento personalizado, entendí que cada cuerpo es diferente. Por eso no trabajo con planes genéricos. Cada programa que diseño es único, pensado para ti y tus objetivos.
          </p>
          <p className="text-[17px] lg:text-[21px] leading-[1.7] text-charcoal-muted">
            Mi método combina entrenamiento efectivo, nutrición orientada a tus metas y el acompañamiento que necesitas para no rendirte.{' '}
            <b className="text-charcoal">Estoy contigo en cada paso del camino.</b>
          </p>
        </div>
      </section>

      <section className="bg-cream py-14 lg:py-[72px]">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-20 flex flex-col gap-9">
          <Reveal>
            <h2 className="text-center font-heading font-bold text-charcoal text-[30px] lg:text-[46px] leading-[1.1]">
              Así <span className="text-accent">trabajamos</span>
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-5 lg:gap-6">
            {pasos.map((p, i) => (
              <Reveal key={p.t} delay={i * 0.08} className="h-full">
                <div className="h-full bg-cream-100 rounded-3xl p-7 lg:p-9 flex flex-col gap-2.5 lg:gap-3">
                  <span className="w-9 h-9 rounded-full bg-rose-deep text-white font-bold flex items-center justify-center">{i + 1}</span>
                  <b className="font-heading text-xl lg:text-2xl text-charcoal">{p.t}</b>
                  <span className="text-[15px] lg:text-[17px] leading-relaxed text-charcoal-muted">{p.d}</span>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="text-center">
            <Link href="/#planes" className="inline-block bg-rose-deep text-white font-bold px-8 py-4 lg:px-10 lg:py-5 lg:text-lg rounded-full hover:bg-rose-deeper transition-colors">
              Ver los planes
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

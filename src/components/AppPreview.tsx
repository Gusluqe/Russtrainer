'use client';

import { useState } from 'react';
import Reveal from './Reveal';
import { WA_EMPEZAR, APP_URL } from '@/lib/enlaces';

const FUNCIONES = [
  { nombre: 'Tu rutina del día', desc: 'Entras con tu nombre y ves lo que te toca hoy.' },
  { nombre: 'Técnica en video', desc: 'Cada ejercicio trae su video para ver cómo se hace.' },
  { nombre: 'Descanso con aviso', desc: 'Un cronómetro te avisa cuando termina el descanso.' },
  { nombre: 'Registro de series', desc: 'Anotas tus series, tu peso y cómo te sentiste.' },
  { nombre: 'Habla conmigo', desc: 'Un botón directo a mi WhatsApp para resolver tus dudas.' },
];

const BRILLO = 'border-[3px] border-rose-deep shadow-[0_0_18px_5px_rgba(212,132,143,0.8)]';

export default function AppPreview() {
  const [f, setF] = useState(1);

  return (
    <section id="app" className="bg-cream py-16 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-[72px]">
        {/* Celulares */}
        <Reveal className="shrink-0">
          <div className="relative w-[330px] h-[460px] sm:w-[470px] sm:h-[640px] max-w-full">
            <div
              className="absolute left-0 top-[7%] w-[53%] rounded-[30px] sm:rounded-[38px] bg-plum p-[7px] sm:p-[9px] -rotate-[5deg] shadow-[0_24px_50px_rgba(59,42,36,0.22)]"
            >
              <div className="rounded-[23px] sm:rounded-[29px] overflow-hidden leading-[0]">
                <video
                  src="/videos/app.mp4"
                  poster="/videos/app.jpg"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  aria-label="Pantalla de inicio de la app animada"
                  className="w-full block"
                />
              </div>
            </div>

            <a
              href={APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Probar la app"
              className="absolute right-0 top-0 w-[59%] rounded-[32px] sm:rounded-[40px] bg-plum p-[8px] sm:p-[10px] rotate-3 shadow-[0_30px_60px_rgba(59,42,36,0.3)]"
            >
              <div className="relative rounded-[24px] sm:rounded-[31px] overflow-hidden leading-[0]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/app/rutina.webp" alt="Pantalla de un ejercicio dentro de la app" className="w-full block" />
                <div className={`absolute rounded-full ${BRILLO} ${f === 1 ? '' : 'hidden'}`} style={{ left: '8%', top: '44.5%', width: '36%', height: '6.4%' }} />
                <div className={`absolute rounded-full ${BRILLO} ${f === 2 ? '' : 'hidden'}`} style={{ left: '8%', top: '51.5%', width: '56%', height: '6.2%' }} />
                <div className={`absolute rounded-[18px] ${BRILLO} ${f === 3 ? '' : 'hidden'}`} style={{ left: '6%', top: '61.5%', width: '90%', height: '22%' }} />
              </div>
            </a>

            <div
              className={`absolute right-2 bottom-[6%] flex items-center gap-2 bg-[#25a85a] text-white font-bold text-xs sm:text-sm px-4 sm:px-5 py-3 rounded-full transition-shadow ${
                f === 4
                  ? 'shadow-[0_0_0_3px_#fff,0_0_0_6px_#a85c68,0_0_22px_6px_rgba(212,132,143,0.7)]'
                  : 'shadow-[0_10px_24px_rgba(37,168,90,0.35)]'
              }`}
            >
              Escríbeme por WhatsApp
            </div>
          </div>
        </Reveal>

        {/* Funciones */}
        <Reveal className="flex-1 min-w-0 max-w-[500px] flex flex-col gap-4 lg:gap-[18px] w-full" delay={0.1}>
          <span className="text-xs tracking-[.18em] font-bold text-rose-deep text-center lg:text-left">ASÍ SE VE POR DENTRO</span>
          <h2 className="font-heading font-bold text-charcoal text-[30px] lg:text-[40px] leading-[1.1] text-center lg:text-left">
            Tu rutina siempre <span className="text-accent">en tu bolsillo</span>
          </h2>
          <span className="text-sm text-charcoal-muted text-center lg:text-left">Toca cada función para verla en el celular:</span>

          {/* Celular: chips + descripción */}
          <div className="lg:hidden flex flex-col gap-3">
            <div className="flex gap-2 overflow-x-auto sin-barra pb-1">
              {FUNCIONES.map((x, i) => (
                <button
                  key={x.nombre}
                  onClick={() => setF(i)}
                  className={`shrink-0 rounded-full px-4 py-2.5 text-sm font-bold min-h-[44px] ${
                    f === i ? 'bg-rose-deep text-white shadow-[0_10px_24px_rgba(168,92,104,0.35)]' : 'bg-white text-charcoal shadow-[0_3px_10px_rgba(59,42,36,0.1)]'
                  }`}
                >
                  {x.nombre}
                </button>
              ))}
            </div>
            <div className="bg-white rounded-2xl p-4 text-center text-[15px] text-charcoal shadow-[0_3px_10px_rgba(59,42,36,0.08)]">{FUNCIONES[f].desc}</div>
          </div>

          {/* Computador: lista */}
          <div className="hidden lg:flex flex-col gap-2.5">
            {FUNCIONES.map((x, i) => (
              <button
                key={x.nombre}
                onClick={() => setF(i)}
                className={`text-left rounded-[18px] px-[18px] py-3.5 flex flex-col gap-0.5 transition ${
                  f === i ? 'bg-rose-deep text-white shadow-[0_12px_28px_rgba(168,92,104,0.35)]' : 'bg-white text-charcoal shadow-[0_4px_14px_rgba(59,42,36,0.07)]'
                }`}
              >
                <b className="text-base">{x.nombre}</b>
                <span className="text-sm leading-snug opacity-90">{x.desc}</span>
              </button>
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-3 mt-1">
            <a href={WA_EMPEZAR} target="_blank" rel="noopener noreferrer" className="bg-[#25a85a] text-white font-extrabold px-7 py-4 rounded-full hover:brightness-95 transition">
              Quiero empezar
            </a>
            <a href={APP_URL} target="_blank" rel="noopener noreferrer" className="text-rose-deep font-bold underline underline-offset-[5px]">
              Probar la app
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

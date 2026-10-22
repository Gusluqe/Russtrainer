'use client';

import Reveal from './Reveal';
import { WA_EMPEZAR, INSTAGRAM_URL } from '@/lib/enlaces';

export default function Cierre() {
  return (
    <section id="contacto" className="bg-cream px-4 sm:px-6 lg:px-20 py-12 lg:py-20">
      <Reveal>
        <div className="max-w-[1400px] mx-auto rounded-[28px] lg:rounded-[32px] border border-[#ecd2cf] bg-gradient-to-br from-[#f7e6e2] to-rose-light px-6 py-8 lg:px-20 lg:py-16 flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-10 text-center lg:text-left">
          <div className="flex-1 flex flex-col gap-2.5">
            <h2 className="font-heading font-bold text-charcoal text-[26px] lg:text-[44px] leading-[1.12]">
              ¿Tienes alguna duda? <span className="text-accent">Escríbeme</span>
            </h2>
            <p className="text-[15px] lg:text-xl leading-relaxed text-charcoal-muted">
              Mi contacto principal es WhatsApp. También me encuentras en Instagram: @russ.trainer
            </p>
          </div>
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center gap-3 lg:gap-5">
            <a href={WA_EMPEZAR} target="_blank" rel="noopener noreferrer" className="bg-[#25a85a] text-white font-extrabold px-7 py-4 lg:px-10 lg:py-5 lg:text-lg rounded-full hover:brightness-95 transition">
              Quiero empezar
            </a>
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="text-rose-deep font-bold underline underline-offset-[5px] p-2 lg:text-lg">
              Instagram
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

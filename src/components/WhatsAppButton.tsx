'use client';

import { MessageCircle } from 'lucide-react';
import { WA_EMPEZAR } from '@/lib/enlaces';

// Botón flotante: en computador abajo a la derecha; en celular, una barra abajo.
export default function WhatsAppButton() {
  return (
    <>
      <a
        href={WA_EMPEZAR}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Quiero empezar, escríbeme por WhatsApp"
        className="hidden lg:flex fixed bottom-7 right-7 z-50 items-center gap-2.5 bg-[#25a85a] text-white font-extrabold px-6 py-4 rounded-full wa-flota"
      >
        <MessageCircle size={20} />
        Quiero empezar
      </a>
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 px-3 pt-2 pb-[max(12px,env(safe-area-inset-bottom))] bg-gradient-to-t from-cream via-cream/95 to-transparent">
        <a
          href={WA_EMPEZAR}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-[#25a85a] text-white font-extrabold py-4 rounded-full wa-flota"
        >
          <MessageCircle size={20} />
          Quiero empezar
        </a>
      </div>
    </>
  );
}

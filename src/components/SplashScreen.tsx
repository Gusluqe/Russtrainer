'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export default function SplashScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="fixed inset-0 z-[9999] bg-black md:hidden"
        >
          {/* Foto de fondo */}
          <Image
            src="/foto1.png"
            alt=""
            fill
            priority
            className="object-cover object-center"
          />

          {/* Viñeta rosa inset desde los bordes */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ boxShadow: 'inset 0 0 60px 20px rgba(201, 169, 166, 0.5)' }}
          />

          {/* Overlay degradado: transparente arriba, oscuro abajo */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" style={{ backgroundSize: '100% 100%', backgroundImage: 'linear-gradient(to top, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.2) 33%, transparent 55%)' }} />

          {/* Texto centrado en la parte inferior */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6, ease: 'easeOut' }}
            className="absolute bottom-16 left-0 right-0 flex flex-col items-center gap-2 px-6"
          >
            <span className="text-white text-3xl font-heading font-bold tracking-wide">
              RussTrainer
            </span>
            <span className="text-white/80 text-sm font-serif italic tracking-wide">
              Entrenamiento hecho para vos
            </span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

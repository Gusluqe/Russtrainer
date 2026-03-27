'use client';

import { motion } from 'framer-motion';
import { MessageCircle, Instagram, ChevronDown } from 'lucide-react';

const WHATSAPP_URL = 'https://wa.me/5491131491877?text=Hola%20Russ!%20Quiero%20empezar%20mi%20transformacion.%20Me%20interesa%20la%20primera%20semana%20gratis!';
const INSTAGRAM_URL = 'https://instagram.com/russ.trainer';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          poster="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=80"
        >
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-athlete-working-out-with-weights-in-the-gym-43751-large.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 hero-gradient" />
        <div className="absolute inset-0 hero-overlay" />
        <div className="absolute inset-0 bg-noise" />
        
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-rose/5 rounded-full blur-3xl" />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-gold/10 border border-gold/30 rounded-full text-gold text-sm font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-gold"></span>
              </span>
              Primera semana gratis disponible
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="section-title text-white mb-6 leading-tight"
          >
            Transformá tu cuerpo con{' '}
            <span className="text-gradient">entrenamiento personalizado</span>{' '}
            de verdad
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-white/70 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Planes de entrenamiento disenados para vos. Seguimiento real, 
            resultados medibles y la disciplina que necesitas para lograr 
            tu mejor version.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary group"
            >
              <MessageCircle size={22} />
              Primera semana gratis, clic aca
              <motion.span
                className="ml-1"
                animate={{ x: [0, 4, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                →
              </motion.span>
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
            >
              <MessageCircle size={20} />
              Hablar por WhatsApp
            </a>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 text-white/50"
          >
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-gold transition-colors"
            >
              <Instagram size={18} />
              <span className="text-sm">@russ.trainer</span>
            </a>
            <span className="hidden sm:block text-white/20">|</span>
            <p className="text-sm">+100 transformaciones reales</p>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <button
          onClick={() => scrollToSection('#sobre')}
          className="flex flex-col items-center gap-2 text-white/50 hover:text-gold transition-colors cursor-pointer"
          aria-label="Scroll down"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ChevronDown size={24} />
          </motion.div>
        </button>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark to-transparent" />
    </section>
  );
}

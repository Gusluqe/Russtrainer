'use client';

import { motion } from 'framer-motion';
import { MessageCircle, Instagram, ChevronDown } from 'lucide-react';

const WHATSAPP_URL = 'https://wa.me/5491168124464?text=Hola%20Russ!%20Quiero%20empezar%20mi%20proceso.%20Me%20interesa%20el%20plan%20online!';
const INSTAGRAM_URL = 'https://instagram.com/russ.trainer';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="inicio" className="relative flex items-center overflow-hidden bg-cream lg:min-h-screen">
      {/* Decorative blobs */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-rose/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-nude/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sage/5 rounded-full blur-3xl pointer-events-none" />

      {/* Sparkles flotantes */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none overflow-hidden">
        <span className="animate-twinkle absolute top-[18%] left-[8%] text-rose text-lg">✦</span>
        <span className="animate-twinkle absolute top-[30%] right-[12%] text-nude text-sm" style={{ animationDelay: '1.2s' }}>✦</span>
        <span className="animate-twinkle absolute bottom-[28%] left-[16%] text-rose text-xs" style={{ animationDelay: '2.1s' }}>✦</span>
        <span className="animate-twinkle absolute top-[12%] right-[35%] text-rose-deep/40 text-sm" style={{ animationDelay: '0.6s' }}>✦</span>
        <span className="animate-twinkle absolute bottom-[18%] right-[24%] text-nude text-lg" style={{ animationDelay: '3s' }}>✦</span>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-10 lg:pt-24 lg:pb-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* TEXTO */}
          <div className="order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-rose/10 border border-rose/20 rounded-full text-rose-deeper text-sm font-medium mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-rose" />
              </span>
              No te adaptás al plan, el plan se adapta a vos
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="section-title mb-4 leading-tight"
            >
              Entrenadora personal online{' '}
              <span className="text-accent">con un plan hecho para vos</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="text-rose-deep font-serif italic text-lg mb-4"
            >
              Entrenamos desde el amor, no desde la exigencia.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-xl text-charcoal/70 mb-8 leading-relaxed"
            >
              Dejá de seguir rutinas genéricas. Tu cuerpo, tu tiempo, tu vida
              — un plan personalizado que se adapta a vos, no al revés.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 mb-5"
            >
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary group"
              >
                <MessageCircle size={20} />
                Empezar ahora
                <motion.span
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
                <MessageCircle size={18} />
                Hablar por WhatsApp
              </a>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-charcoal/50 text-sm mb-8"
            >
              Planes personalizados + acompañamiento constante
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4 text-charcoal/50"
            >
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-rose transition-colors"
              >
                <Instagram size={16} />
                <span className="text-sm">@russ.trainer</span>
              </a>
              <span className="hidden sm:block text-charcoal/20">|</span>
              <p className="text-sm">+100 mujeres transformadas</p>
            </motion.div>
          </div>

          {/* FOTO */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:flex order-1 lg:order-2 justify-center"
          >
            <div className="relative w-full max-w-sm lg:max-w-md">
              {/* Glow de fondo */}
              <div className="absolute -inset-8 bg-gradient-to-br from-rose/20 via-nude/15 to-rose/10 rounded-full blur-3xl" />

              {/* Foto */}
              <div className="relative rounded-[2rem] overflow-hidden aspect-[3/4] shadow-[0_20px_60px_rgba(232,164,164,0.25)]">
                <img
                  src="/foto1.png"
                  alt="Russ, entrenadora personal"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-rose/10 via-transparent to-transparent" />
              </div>

              {/* Badge coach */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: 0.9, type: 'spring', stiffness: 200 }}
                className="absolute -bottom-5 -left-5 bg-white rounded-2xl shadow-[0_8px_24px_rgba(0,0,0,0.10)] px-4 py-3 flex items-center gap-3 border border-rose/10"
              >
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-rose to-nude flex items-center justify-center text-white font-bold text-sm shrink-0">
                  R
                </div>
                <div>
                  <p className="text-charcoal font-semibold text-sm leading-none">Russ</p>
                  <p className="text-rose-deep text-xs mt-0.5">Coach Personal Online</p>
                </div>
              </motion.div>

              {/* Badge clientes */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.1, type: 'spring' }}
                className="absolute -top-4 -right-4 bg-gradient-to-br from-rose to-nude text-white px-4 py-3 rounded-2xl font-heading font-bold text-xl shadow-[0_8px_24px_rgba(232,164,164,0.35)]"
              >
                +100
                <span className="block text-xs font-sans font-normal opacity-90">clientas</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <button
          onClick={() => scrollToSection('#sobre')}
          className="flex flex-col items-center gap-2 text-charcoal/40 hover:text-rose transition-colors cursor-pointer"
          aria-label="Scroll down"
        >
          <span className="text-xs uppercase tracking-widest font-medium">Scroll</span>
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
            <ChevronDown size={22} />
          </motion.div>
        </button>
      </motion.div>
    </section>
  );
}


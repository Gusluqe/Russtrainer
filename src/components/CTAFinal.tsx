'use client';

import { motion } from 'framer-motion';
import { MessageCircle, ArrowRight } from 'lucide-react';

const WHATSAPP_URL = 'https://wa.me/5491168124464?text=Hola%20Russ!%20Lista%20para%20empezar%20mi%20proceso!';

export default function CTAFinal() {
  return (
    <section className="relative py-12 md:py-24 lg:py-32 overflow-hidden bg-rose-muted">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-rose/30 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-rose/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-rose font-medium uppercase tracking-widest text-sm">
            Tu momento es ahora
          </span>

          <h2 className="section-title mt-4 mb-4">
            Â¿Lista para empezar{' '}
            <span className="text-gradient">tu proceso?</span>
          </h2>

          <p className="text-xl text-charcoal/60 mb-10 font-serif italic">
            Tu cuerpo, tus tiempos, tu proceso.
          </p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-xl px-12 py-5 animate-pulse-glow inline-flex"
            >
              <MessageCircle size={24} />
              Empezar ahora
              <ArrowRight size={20} />
            </a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-charcoal/40 text-sm mt-6"
          >
            Resultados reales que podÃ©s sostener
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}


'use client';

import { motion } from 'framer-motion';
import { Gift, MessageCircle, Zap, Shield } from 'lucide-react';

const WHATSAPP_URL = 'https://wa.me/5491131491877?text=Hola!%20Quiero%20acceder%20a%20mi%20primera%20semana%20gratis!';

const features = [
  { icon: Zap, text: 'Sin compromiso' },
  { icon: Shield, text: 'Sin tarjeta de crédito' },
  { icon: Gift, text: 'Plan personalizado' },
];

export default function FreeWeek() {
  return (
    <section className="relative py-12 md:py-24 lg:py-32 overflow-hidden bg-rose-muted">
      <div className="absolute top-0 left-1/4 w-96 h-64 bg-rose/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-64 h-48 bg-nude/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl shadow-[0_20px_60px_rgba(232,164,164,0.15)] border border-rose/15 p-8 md:p-16 text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
            className="inline-flex items-center justify-center p-4 bg-rose/10 rounded-2xl mb-8"
          >
            <Gift size={44} className="text-rose" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="section-title mb-5"
          >
            Probá tu primera{' '}
            <span className="text-gradient">semana gratis</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-xl text-charcoal/60 max-w-xl mx-auto mb-10"
          >
            Empezá hoy, conocé el método y comprobá cómo trabajamos.
            Sin compromiso, sin obligación. Solo vos y tus objetivos.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap justify-center gap-3 mb-10"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.text}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="flex items-center gap-2 bg-rose/8 px-4 py-2 rounded-full border border-rose/20"
              >
                <feature.icon size={14} className="text-rose" />
                <span className="text-charcoal/70 text-sm font-medium">{feature.text}</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
          >
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-lg px-10 py-5 animate-pulse-glow inline-flex"
            >
              <MessageCircle size={22} />
              Clic acá y hablame por WhatsApp
            </a>
            <p className="text-charcoal/40 text-sm mt-4">
              Respondo en menos de 2 horas
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

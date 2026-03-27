'use client';

import { motion } from 'framer-motion';
import { Gift, MessageCircle, Zap, Shield } from 'lucide-react';

const WHATSAPP_URL = 'https://wa.me/5491131491877?text=Hola!%20Quiero%20acceder%20a%20mi%20primera%20semana%20gratis!';

const features = [
  { icon: Zap, text: 'Sin compromiso' },
  { icon: Shield, text: 'Sin tarjeta de credito' },
  { icon: Gift, text: 'Plan personalizado' },
];

export default function FreeWeek() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gold/10 via-dark to-rose/10" />
        <div className="absolute inset-0 bg-noise" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-gold via-rose to-gold rounded-3xl blur-xl opacity-20" />
          
          <div className="relative glass-card-gold p-8 md:p-16 text-center">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
              className="inline-flex items-center justify-center p-4 bg-gold/20 rounded-2xl mb-8"
            >
              <Gift size={48} className="text-gold" />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="section-title text-white mb-6"
            >
              Probá Tu Primera{' '}
              <span className="text-gradient">Semana Gratis</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-xl text-white/70 max-w-2xl mx-auto mb-10"
            >
              Empeza hoy, conoce el metodo y comprobá como trabajamos. 
              Sin compromiso, sin obligacion. Solo vos y tus objetivos.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap justify-center gap-4 mb-10"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={feature.text}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="flex items-center gap-2 bg-gold/10 px-4 py-2 rounded-full border border-gold/20"
                >
                  <feature.icon size={16} className="text-gold" />
                  <span className="text-white/80 text-sm">{feature.text}</span>
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
                className="btn-primary text-xl px-12 py-5 animate-pulse-glow"
              >
                <MessageCircle size={26} />
                Clic Aca y Hablame por WhatsApp
              </a>
              <p className="text-white/50 text-sm mt-4">
                Respondo en menos de 2 horas
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

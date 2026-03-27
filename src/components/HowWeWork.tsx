'use client';

import { motion } from 'framer-motion';
import { MessageCircle, Target, Rocket, ArrowRight } from 'lucide-react';

const WHATSAPP_URL = 'https://wa.me/5491131491877?text=Hola!%20Quiero%20empezar%20mi%20transformacion';

const steps = [
  {
    number: '01',
    icon: MessageCircle,
    title: 'Hablamos',
    description: 'Contactame por WhatsApp y contame sobre tus objetivos, nivel actual y disponibilidad. Sin compromiso, solo conversacion.',
  },
  {
    number: '02',
    icon: Target,
    title: 'Evaluamos Tu Objetivo',
    description: 'Hacemos una evaluacion inicial para entender tu punto de partida y disenar un plan 100% personalizado para vos.',
  },
  {
    number: '03',
    icon: Rocket,
    title: 'Empezas Tu Transformacion',
    description: 'Recibis tu plan, te explico cada ejercicio y arrancamos. A partir de ahi, el seguimiento es constante y semanal.',
  },
];

export default function HowWeWork() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-premium-gradient" />
      <div className="absolute inset-0 bg-noise" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-gold font-medium uppercase tracking-widest text-sm">
            Proceso
          </span>
          <h2 className="section-title text-white mt-4 mb-6">
            Como <span className="text-gradient">Trabajamos</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Un proceso simple y efectivo. Tres pasos para empezar tu transformacion. 
            Sin complicaciones, solo accion.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative"
            >
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-[calc(50%+40px)] w-[calc(100%-80px)] h-0.5 bg-gradient-to-r from-gold/50 to-transparent" />
              )}
              
              <div className="glass-card-gold p-8 h-full text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gold/10 mb-6 relative">
                  <step.icon size={36} className="text-gold" />
                  <span className="absolute -top-2 -right-2 bg-gradient-to-r from-gold to-gold-light text-dark text-xs font-bold px-3 py-1 rounded-full">
                    {step.number}
                  </span>
                </div>
                
                <h3 className="text-2xl font-heading font-bold text-white mb-4">
                  {step.title}
                </h3>
                
                <p className="text-white/60 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-16"
        >
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex"
          >
            Empezar Ahora
            <ArrowRight size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

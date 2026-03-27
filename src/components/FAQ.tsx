'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, MessageCircle } from 'lucide-react';

const WHATSAPP_URL = 'https://wa.me/5491131491877?text=Hola!%20Tengo%20una%20consulta';

const faqs = [
  {
    question: 'Los planes son realmente personalizados?',
    answer: 'Si, 100%. No trabajo con planes genericos. Cada programa se disena segun tus objetivos especificos, tu nivel de condicion fisica, tiempo disponible y preferencias. Ademas, se ajusta semanalmente segun tu progreso.',
  },
  {
    question: 'Puedo entrenar online si no estoy en Buenos Aires?',
    answer: 'Absolutamente. El entrenamiento online funciona igual de bien que el presencial. Usamos videollamadas para las sesiones, WhatsApp para seguimiento diario y una app para registrar tus entrenamientos. La distancia no es un impedimento.',
  },
  {
    question: 'Cuanto dura el seguimiento?',
    answer: 'Los planes son mensuales con renovacion. Sin embargo, recomiendo un minimo de 3 meses para ver resultados significativos. Muchos clientes se quedan mas de 6 meses porque los resultados siguen llegando.',
  },
  {
    question: 'Necesito experiencia previa en gym?',
    answer: 'Para nada. Tengo experiencia entrenando desde principiantes hasta atletas avanzados. Si nunca tocaste una pesa, empezas desde cero con la tecnica correcta. No importa tu punto de partida, importa tu compromiso.',
  },
  {
    question: 'Como arranco?',
    answer: 'Es muy simple: hablame por WhatsApp, contame tus objetivos y disponibilidad. Despues hacemos una evaluacion inicial (puede ser por videollamada) y en 48 horas ya tenes tu primer plan en mano.',
  },
  {
    question: 'La primera semana gratis incluye seguimiento?',
    answer: 'Si, incluye un plan de entrenamiento personalizado para esa semana, videos de los ejercicios y seguimiento por WhatsApp. Es para que puedas probar como trabajo sin ningun compromiso de tu parte.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-premium-gradient" />
      <div className="absolute inset-0 bg-noise" />
      
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-gold font-medium uppercase tracking-widest text-sm">
            FAQ
          </span>
          <h2 className="section-title text-white mt-4 mb-6">
            Preguntas <span className="text-gradient">Frecuentes</span>
          </h2>
          <p className="text-white/60 text-lg">
            Resolve tus dudas antes de empezar. Si necesitas mas info, hablame directamente.
          </p>
        </motion.div>

        <div className="space-y-4 mb-12">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="glass-card-gold overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left"
                aria-expanded={openIndex === index}
              >
                <span className="text-lg font-semibold text-white pr-4">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown size={24} className="text-gold shrink-0" />
                </motion.div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6">
                      <p className="text-white/70 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="text-white/60 mb-6">
            Tenes otra pregunta? No te quedes con la duda.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp inline-flex"
          >
            <MessageCircle size={20} />
            Preguntar por WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}

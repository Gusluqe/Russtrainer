'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, MessageCircle } from 'lucide-react';

const WHATSAPP_URL = 'https://wa.me/5491168124464?text=Hola!%20Tengo%20una%20consulta';

const faqs = [
  {
    question: 'Â¿Los planes son realmente personalizados?',
    answer: 'SÃ­, 100%. No trabajo con planes genÃ©ricos. Cada programa se diseÃ±a segÃºn tus objetivos especÃ­ficos, tu nivel de condiciÃ³n fÃ­sica, tiempo disponible y preferencias. AdemÃ¡s, se ajusta semanalmente segÃºn tu progreso.',
  },
  {
    question: 'Â¿Puedo entrenar online si no estoy en Buenos Aires?',
    answer: 'Absolutamente. El entrenamiento online funciona igual de bien que el presencial. Usamos videollamadas para las sesiones, WhatsApp para seguimiento diario y una app para registrar tus entrenamientos. La distancia no es un impedimento.',
  },
  {
    question: 'Â¿CuÃ¡nto dura el seguimiento?',
    answer: 'Los planes son mensuales con renovaciÃ³n. Sin embargo, recomiendo un mÃ­nimo de 3 meses para ver resultados significativos. Muchas clientas se quedan mÃ¡s de 6 meses porque los resultados siguen llegando.',
  },
  {
    question: 'Â¿Necesito experiencia previa en gym?',
    answer: 'Para nada. Tengo experiencia entrenando desde principiantes hasta atletas avanzadas. Si nunca tocaste una pesa, empezÃ¡s desde cero con la tÃ©cnica correcta. No importa tu punto de partida, importa tu compromiso.',
  },
  {
    question: 'Â¿CÃ³mo arranco?',
    answer: 'Es muy simple: hablame por WhatsApp, contame tus objetivos y disponibilidad. DespuÃ©s hacemos una evaluaciÃ³n inicial (puede ser por videollamada) y en 48 horas ya tenÃ©s tu primer plan en mano.',
  },
  {
    question: 'Â¿La primera semana gratis incluye seguimiento?',
    answer: 'SÃ­, incluye un plan de entrenamiento personalizado para esa semana, videos de los ejercicios y seguimiento por WhatsApp. Es para que puedas probar cÃ³mo trabajo sin ningÃºn compromiso de tu parte.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative py-12 md:py-24 lg:py-32 overflow-hidden bg-cream-100">
      <div className="absolute top-1/2 left-0 w-48 h-48 bg-sage/8 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-rose font-medium uppercase tracking-widest text-sm">
            FAQ
          </span>
          <h2 className="section-title mt-4 mb-5">
            Preguntas <span className="text-gradient">frecuentes</span>
          </h2>
          <p className="text-charcoal/60 text-lg">
            ResolvÃ© tus dudas antes de empezar. Si necesitÃ¡s mÃ¡s info, hablame directamente.
          </p>
        </motion.div>

        <div className="space-y-3 mb-12">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="bg-white rounded-2xl overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,0.05)] border border-rose/8"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left"
                aria-expanded={openIndex === index}
              >
                <span className="text-base font-semibold text-charcoal pr-4 font-heading">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown size={20} className="text-rose shrink-0" />
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
                      <p className="text-charcoal/60 leading-relaxed">
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
          <p className="text-charcoal/50 mb-6">
            Â¿TenÃ©s otra pregunta? No te quedÃ©s con la duda.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp inline-flex"
          >
            <MessageCircle size={18} />
            Preguntar por WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  );
}


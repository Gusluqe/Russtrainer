'use client';

import { motion } from 'framer-motion';
import { Star, Quote, MessageCircle } from 'lucide-react';

const WHATSAPP_URL = 'https://wa.me/5491131491877?text=Hola!%20Quiero%20empezar%20mi%20proceso';

const testimonials = [
  {
    handle: '@rocio.romano.581',
    initial: 'R',
    gradient: 'from-rose to-nude',
    content: 'Gracias por ayudarme a salir de mi lugar de confort y empezar a moverme por mí para sentirme mejor, no solo físicamente sino también mentalmente. No sos solo entrenadora, sos un sostén para no caer.',
    rating: 5,
  },
  {
    handle: '@martuservin',
    initial: 'M',
    gradient: 'from-nude to-sage',
    content: 'Se nota el amor que le ponés a lo que hacés, desde el listado que enviás los domingos hasta cómo adaptás cada ejercicio. Gracias por no ser solo una coach de gimnasio, sino alguien que me escucha y me motiva a mejorar cada día.',
    rating: 5,
  },
  {
    handle: '@kaleidoscopioarte',
    initial: 'K',
    gradient: 'from-sage to-rose',
    content: 'Lo que destaco es su energía y la forma en que te impulsa a superarte. Gracias a su acompañamiento mejoré mi confianza y constancia. Se nota tu compromiso y dedicación.',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonios" className="relative py-12 md:py-24 lg:py-32 overflow-hidden bg-white">
      <div className="absolute top-0 left-1/4 w-80 h-80 bg-rose/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-rose font-medium uppercase tracking-widest text-sm">
            Testimonios
          </span>
          <h2 className="section-title mt-4 mb-4">
            Ellas ya empezaron <span className="text-gradient">su proceso</span>
          </h2>
          <p className="text-charcoal/60 text-lg max-w-xl mx-auto">
            Historias reales de mujeres que decidieron entrenar distinto.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.handle}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="card card-hover p-8 relative group"
            >
              <Quote
                size={36}
                className="absolute top-6 right-6 text-rose/15 group-hover:text-rose/25 transition-colors"
              />

              <div className="flex items-center gap-4 mb-5">
                <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${t.gradient} flex items-center justify-center text-white font-bold text-xl shrink-0 shadow-md`}>
                  {t.initial}
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-charcoal">{t.handle}</h3>
                  <p className="text-charcoal/40 text-xs">Cliente real</p>
                </div>
              </div>

              <div className="flex gap-1 mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={14} className="text-rose fill-rose" />
                ))}
              </div>

              <p className="text-charcoal/65 leading-relaxed text-sm font-serif italic mb-6">
                &ldquo;{t.content}&rdquo;
              </p>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-rose hover:text-rose-dark transition-colors text-sm font-medium"
              >
                <MessageCircle size={14} />
                Quiero resultados similares
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

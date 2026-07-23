'use client';

import { motion } from 'framer-motion';
import { Star, Quote, MessageCircle } from 'lucide-react';
import { useContenido } from './ContenidoContext';

const WHATSAPP_URL = 'https://wa.me/5491168124464?text=Hola!%20Quiero%20empezar%20mi%20proceso';

const gradients = ['from-rose to-nude', 'from-nude to-sage', 'from-sage to-rose'];

export default function Testimonials() {
  const contenido = useContenido().testimonios;
  const testimonials = contenido.lista.map((t, i) => ({
    handle: t.handle,
    initial: (t.handle.replace(/^@/, '').charAt(0) || 'R').toUpperCase(),
    gradient: gradients[i % gradients.length],
    content: t.texto,
    rating: 5,
  }));
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
          <span className="kicker">
            {contenido.kicker}
          </span>
          <h2 className="section-title mt-4 mb-4">
            {contenido.titulo} <span className="text-accent">{contenido.tituloAccent}</span>
          </h2>
          <p className="text-charcoal/60 text-lg max-w-xl mx-auto">
            {contenido.subtitulo}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 md:[&>*:last-child]:col-start-2">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
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
                <h3 className="text-sm font-semibold text-charcoal">{t.handle}</h3>
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
                className="inline-flex items-center gap-2 text-rose-deep hover:text-rose-deeper transition-colors text-sm font-medium"
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


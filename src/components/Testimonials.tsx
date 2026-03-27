'use client';

import { motion } from 'framer-motion';
import { Star, Quote, MessageCircle } from 'lucide-react';

const WHATSAPP_URL = 'https://wa.me/5491131491877';

const testimonials = [
  {
    name: 'Luciana Garcia',
    role: 'Emprendedora, 32 anos',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face',
    content: 'Llegue a Russ sin saber nada de entrenamiento. En 3 meses baje 8kg y gane confianza que no tenia. El seguimiento es real, siempre responde y ajusta todo segun progreso.',
    rating: 5,
  },
  {
    name: 'Federico Torres',
    role: 'Empleado, 28 anos',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face',
    content: 'Despues de anos intentando solo en el gym sin resultados, Russ me mostro lo que era entrenar de verdad. 6 meses despues tengo el cuerpo que siempre quise.',
    rating: 5,
  },
  {
    name: 'Valentina Ruiz',
    role: 'Medica, 35 anos',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face',
    content: 'Como profesional de salud, soy exigente con quien confio mi cuerpo. Russ no solo sabe de entrenamiento, entiende de nutricion y descanso. Resultados en tiempo record.',
    rating: 5,
  },
  {
    name: 'Santiago Mehta',
    role: 'Ingeniero, 40 anos',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face',
    content: 'Pensaba que a mi edad era imposible cambiar. Russ me demostro lo contrario. Perdi la panza, gane masa y mejoré mis marcas en gym. El plan es 100% personalizado.',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonios" className="relative py-24 lg:py-32 overflow-hidden">
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
            Testimonios
          </span>
          <h2 className="section-title text-white mt-4 mb-6">
            Lo Que Dicen <span className="text-gradient">Mis Clientes</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            La mejor prueba de mi trabajo son los resultados de quienes confian en mi. 
            Estas son historias reales de transformacion.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card-gold p-8 relative group hover:bg-white/[0.06] transition-all duration-300"
            >
              <Quote 
                size={48} 
                className="absolute top-6 right-6 text-gold/20 group-hover:text-gold/30 transition-colors" 
              />
              
              <div className="flex items-center gap-4 mb-6">
                <div className="relative">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-gold/30"
                  />
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-gold rounded-full flex items-center justify-center">
                    <Star size={10} className="text-dark fill-dark" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    {testimonial.name}
                  </h3>
                  <p className="text-white/50 text-sm">
                    {testimonial.role}
                  </p>
                </div>
              </div>
              
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="text-gold fill-gold" />
                ))}
              </div>
              
              <p className="text-white/70 leading-relaxed mb-6">
                &ldquo;{testimonial.content}&rdquo;
              </p>
              
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-gold hover:text-gold-light transition-colors text-sm font-medium"
              >
                <MessageCircle size={16} />
                Quiero resultados similares
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

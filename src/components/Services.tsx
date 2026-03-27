'use client';

import { motion } from 'framer-motion';
import { Dumbbell, Flame, TrendingUp, Globe, CalendarCheck, Heart, MessageCircle } from 'lucide-react';

const WHATSAPP_URL = 'https://wa.me/5491131491877?text=Hola!%20Quiero%20info%20sobre%20sus%20servicios';

const services = [
  {
    icon: Dumbbell,
    title: 'Entrenamiento Personal',
    description: 'Sesiones 1 a 1 con supervision directa. Maxima atencion y ajustes en tiempo real.',
    popular: false,
  },
  {
    icon: Flame,
    title: 'Plan de Descenso de Peso',
    description: 'Programa integral para perder grasa de forma saludable con seguimiento nutricional.',
    popular: false,
  },
  {
    icon: TrendingUp,
    title: 'Hipertrofia / Ganancia Muscular',
    description: 'Disenio de volumen y fuerza. Tecnicas avanzadas para maximizar tu crecimiento.',
    popular: true,
  },
  {
    icon: Globe,
    title: 'Entrenamiento Online',
    description: 'Desde cualquier lugar del mundo. Programas personalizados con videollamadas.',
    popular: false,
  },
  {
    icon: CalendarCheck,
    title: 'Seguimiento Semanal',
    description: 'Evaluaciones periodicas, ajuste de cargas y correccion de tecnica.',
    popular: false,
  },
  {
    icon: Heart,
    title: 'Asesoramiento Integral',
    description: 'Nutricion, descanso, suplementacion y mentalidad. Todo lo que necesitas saber.',
    popular: false,
  },
];

export default function Services() {
  return (
    <section id="servicios" className="relative py-24 lg:py-32 overflow-hidden">
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
            Servicios
          </span>
          <h2 className="section-title text-white mt-4 mb-6">
            Lo Que <span className="text-gradient">Ofrezco</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Planes disenados para cada objetivo. Elegi el que mejor se adapte a vos 
            y empeza tu transformacion hoy.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative group ${service.popular ? 'lg:scale-105' : ''}`}
            >
              {service.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                  <span className="bg-gradient-to-r from-gold to-gold-light text-dark text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
                    Mas elegido
                  </span>
                </div>
              )}
              
              <div className={`glass-card-gold h-full p-8 transition-all duration-300 group-hover:bg-white/[0.06] group-hover:border-gold/30 ${
                service.popular ? 'border-gold/50' : ''
              }`}>
                <div className={`p-4 rounded-2xl w-fit mb-6 transition-colors duration-300 ${
                  service.popular ? 'bg-gold/20' : 'bg-white/5 group-hover:bg-gold/10'
                }`}>
                  <service.icon 
                    size={32} 
                    className={`transition-colors duration-300 ${
                      service.popular ? 'text-gold' : 'text-white/70 group-hover:text-gold'
                    }`} 
                  />
                </div>
                
                <h3 className="text-xl font-heading font-bold text-white mb-3">
                  {service.title}
                </h3>
                
                <p className="text-white/60 leading-relaxed mb-6">
                  {service.description}
                </p>
                
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 text-sm font-medium transition-colors ${
                    service.popular 
                      ? 'text-gold hover:text-gold-light' 
                      : 'text-white/70 hover:text-gold'
                  }`}
                >
                  <MessageCircle size={16} />
                  Solicitar info
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

'use client';

import { motion } from 'framer-motion';
import { Dumbbell, Flame, TrendingUp, Globe, CalendarCheck, Heart, MessageCircle } from 'lucide-react';

const WHATSAPP_URL = 'https://wa.me/5491168124464?text=Hola!%20Quiero%20info%20sobre%20sus%20servicios';

const services = [
  {
    icon: Dumbbell,
    title: 'Entrenamiento Personal',
    description: 'Sesiones 1 a 1 con supervisiÃ³n directa. MÃ¡xima atenciÃ³n y ajustes en tiempo real.',
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
    description: 'DiseÃ±o de volumen y fuerza. TÃ©cnicas avanzadas para maximizar tu crecimiento.',
    popular: false,
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
    description: 'Evaluaciones periÃ³dicas, ajuste de cargas y correcciÃ³n de tÃ©cnica.',
    popular: false,
  },
  {
    icon: Heart,
    title: 'Asesoramiento Integral',
    description: 'NutriciÃ³n, descanso, suplementaciÃ³n y mentalidad. Todo lo que necesitÃ¡s.',
    popular: false,
  },
];

export default function Services() {
  return (
    <section id="servicios" className="relative py-12 md:py-24 lg:py-32 overflow-hidden bg-cream-100">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-64 bg-rose/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-rose font-medium uppercase tracking-widest text-sm">
            Servicios
          </span>
          <h2 className="section-title mt-4 mb-5">
            Lo que <span className="text-gradient">ofrezco</span>
          </h2>
          <p className="text-charcoal/60 text-lg max-w-2xl mx-auto">
            Planes diseÃ±ados para cada objetivo. ElegÃ­ el que mejor se adapte a vos
            y empezÃ¡ tu transformaciÃ³n hoy.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className={`relative group ${service.popular ? 'lg:scale-105' : ''}`}
            >
              {service.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                  <span className="bg-rose text-white text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-wider">
                    MÃ¡s elegido
                  </span>
                </div>
              )}

              <div className={`card card-hover h-full p-8 ${service.popular ? 'border-rose/30' : ''}`}>
                <div className={`p-4 rounded-2xl w-fit mb-6 transition-colors duration-300 ${
                  service.popular ? 'bg-rose/15' : 'bg-cream-100 group-hover:bg-rose/10'
                }`}>
                  <service.icon
                    size={30}
                    className={`transition-colors duration-300 ${
                      service.popular ? 'text-rose' : 'text-charcoal/50 group-hover:text-rose'
                    }`}
                  />
                </div>

                <h3 className="text-xl font-heading font-bold text-charcoal mb-3">
                  {service.title}
                </h3>

                <p className="text-charcoal/60 leading-relaxed mb-6 text-sm">
                  {service.description}
                </p>

                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 text-sm font-medium transition-colors ${
                    service.popular ? 'text-rose hover:text-rose-dark' : 'text-charcoal/50 hover:text-rose'
                  }`}
                >
                  <MessageCircle size={15} />
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


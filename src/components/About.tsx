'use client';

import { motion } from 'framer-motion';
import { Target, TrendingUp, Users, Award, CheckCircle } from 'lucide-react';

const benefits = [
  {
    icon: Target,
    title: 'Entrenamiento Personalizado',
    description: 'Cada plan se disena segun tus objetivos, nivel y limitaciones.',
  },
  {
    icon: TrendingUp,
    title: 'Seguimiento Constante',
    description: 'Control progresivo y ajustes semanales para garantizar resultados.',
  },
  {
    icon: Users,
    title: 'Plan Segun Objetivos',
    description: 'Ya sea bajar de peso, ganar musculo o mejorar tu rendimiento.',
  },
  {
    icon: Award,
    title: 'Progreso Medible',
    description: 'Seguimiento de metricas, fotos y evaluaciones periodicas.',
  },
];

export default function About() {
  return (
    <section id="sobre" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-premium-gradient" />
      <div className="absolute inset-0 bg-noise" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-gold/20 to-rose/20 rounded-3xl blur-xl" />
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-dark-200 border border-gold/10">
                <img
                  src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80"
                  alt="Russ Trainer entrenando"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent" />
              </div>
              
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, type: 'spring' }}
                className="absolute -bottom-6 -right-6 bg-gradient-to-br from-gold to-gold-light text-dark px-6 py-4 rounded-2xl font-heading font-bold text-2xl shadow-xl shadow-gold/20"
              >
                +100
                <span className="block text-sm font-sans font-normal">Clientes satisfechos</span>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2"
          >
            <span className="text-gold font-medium uppercase tracking-widest text-sm">
              Sobre Russ
            </span>
            <h2 className="section-title text-white mt-4 mb-6">
              Tu Entrenador Personal <span className="text-gradient">de Confianza</span>
            </h2>
            
            <div className="space-y-6 text-white/70 text-lg leading-relaxed mb-10">
              <p>
                Soy Russ, y mi mision es ayudarte a lograr la transformacion que venis 
                buscando hace tiempo. No prometo milagros, prometo{' '}
                <span className="text-white font-semibold">disciplina, seguimiento real 
                y resultados comprobables.</span>
              </p>
              <p>
                Con anos de experiencia en entrenamiento personalizado, entendi que cada 
                cuerpo es diferente. Por eso no trabajo con planes genericos. Cada 
                programa que diseño es unico, pensado para vos y tus objetivos especificos.
              </p>
              <p>
                Mi metodo combina entrenamiento efectivo, nutricion orientada a tus metas 
                y el acompanamiento que necesitas para no rendirte.{' '}
                <span className="text-gold font-semibold">
                  Estoy contigo en cada paso del camino.
                </span>
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-card-gold p-5 card-hover"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gold/10 rounded-xl">
                      <benefit.icon size={24} className="text-gold" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">{benefit.title}</h3>
                      <p className="text-sm text-white/60">{benefit.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

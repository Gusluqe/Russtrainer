'use client';

import { motion } from 'framer-motion';
import { Target, TrendingUp, Users, Award } from 'lucide-react';

const benefits = [
  {
    icon: Target,
    title: 'Entrenamiento Personalizado',
    description: 'Cada plan se diseña según tus objetivos, nivel y limitaciones.',
  },
  {
    icon: TrendingUp,
    title: 'Seguimiento Constante',
    description: 'Control progresivo y ajustes semanales para garantizar resultados.',
  },
  {
    icon: Users,
    title: 'Plan Según Objetivos',
    description: 'Ya sea bajar de peso, ganar músculo o mejorar tu rendimiento.',
  },
  {
    icon: Award,
    title: 'Progreso Medible',
    description: 'Seguimiento de métricas, fotos y evaluaciones periódicas.',
  },
];

export default function About() {
  return (
    <section id="sobre" className="relative py-12 md:py-24 lg:py-32 overflow-hidden bg-white">
      <div className="absolute top-0 left-0 w-64 h-64 bg-sage/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-48 h-48 bg-rose/8 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Foto */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-rose/15 to-nude/10 rounded-3xl blur-2xl" />
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(232,164,164,0.20)]">
                <img
                  src="/foto2.png"
                  alt="Russ entrenando"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/10 via-transparent to-transparent" />
              </div>

              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, type: 'spring' }}
                className="absolute -bottom-6 -right-6 bg-gradient-to-br from-rose to-nude text-white px-6 py-4 rounded-2xl font-heading font-bold text-2xl shadow-[0_8px_24px_rgba(232,164,164,0.40)]"
              >
                +100
                <span className="block text-sm font-sans font-normal opacity-90">Clientes satisfechas</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Texto */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2"
          >
            <span className="text-rose font-medium uppercase tracking-widest text-sm">
              Sobre Russ
            </span>
            <h2 className="section-title mt-4 mb-6">
              Tu entrenadora personal{' '}
              <span className="text-gradient">de confianza</span>
            </h2>

            <div className="space-y-5 text-charcoal/70 text-lg leading-relaxed mb-10">
              <p>
                Soy Russ, y mi misión es ayudarte a lograr la transformación que venís
                buscando hace tiempo. No prometo milagros, prometo{' '}
                <span className="text-charcoal font-semibold">disciplina, seguimiento real
                y resultados comprobables.</span>
              </p>
              <p>
                Con años de experiencia en entrenamiento personalizado, entendí que cada
                cuerpo es diferente. Por eso no trabajo con planes genéricos. Cada
                programa que diseño es único, pensado para vos y tus objetivos específicos.
              </p>
              <p>
                Mi método combina entrenamiento efectivo, nutrición orientada a tus metas
                y el acompañamiento que necesitás para no rendirte.{' '}
                <span className="text-rose font-semibold">
                  Estoy con vos en cada paso del camino.
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
                  className="card card-hover p-5"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-rose/10 rounded-xl">
                      <benefit.icon size={22} className="text-rose" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-charcoal mb-1 text-sm">{benefit.title}</h3>
                      <p className="text-xs text-charcoal/60 leading-relaxed">{benefit.description}</p>
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

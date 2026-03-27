'use client';

import { motion } from 'framer-motion';
import { Users, FileText, Eye, Award, ArrowRight, MessageCircle } from 'lucide-react';

const WHATSAPP_URL = 'https://wa.me/5491131491877?text=Hola!%20Quiero%20ver%20resultados%20reales';

const metrics = [
  { icon: Users, value: '+100', label: 'Clientes acompanhados', color: 'text-gold' },
  { icon: FileText, value: '+500', label: 'Planes personalizados', color: 'text-rose' },
  { icon: Eye, value: '1a1', label: 'Seguimiento personalizado', color: 'text-gold' },
  { icon: Award, value: '100%', label: 'Compromiso con resultados', color: 'text-rose' },
];

const transformations = [
  {
    name: 'Martin',
    goal: 'Bajar 15kg de grasa',
    time: '4 meses',
    result: '-18kg',
    image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=600&h=450&fit=crop',
  },
  {
    name: 'Camila',
    goal: 'Ganar masa muscular',
    time: '6 meses',
    result: '+6kg musculo',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&h=450&fit=crop',
  },
  {
    name: 'Diego',
    goal: 'Definicion y rendimiento',
    time: '3 meses',
    result: '6-pack visible',
    image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c149a?w=600&h=450&fit=crop',
  },
];

export default function Results() {
  return (
    <section id="resultados" className="relative py-24 lg:py-32 overflow-hidden">
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
            Resultados
          </span>
          <h2 className="section-title text-white mt-4 mb-6">
            Transformaciones <span className="text-gradient">Reales</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Estos son resultados de personas reales que confiaron en el proceso. 
            Tu transformacion puede ser la proxima.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card-gold p-6 text-center"
            >
              <metric.icon size={32} className={`mx-auto mb-4 ${metric.color}`} />
              <div className={`text-4xl font-heading font-bold ${metric.color} mb-2`}>
                {metric.value}
              </div>
              <div className="text-white/60 text-sm">
                {metric.label}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-heading font-bold text-white text-center mb-10">
            Casos de Exito
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {transformations.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card-gold overflow-hidden group"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={item.image}
                    alt={`Transformacion de ${item.name}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/20 to-transparent" />
                  
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-gold to-gold-light text-dark font-bold px-4 py-2 rounded-full">
                    {item.result}
                  </div>
                </div>
                
                <div className="p-6">
                  <h4 className="text-xl font-heading font-bold text-white mb-2">
                    {item.name}
                  </h4>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-xs bg-white/10 text-white/70 px-3 py-1 rounded-full">
                      {item.goal}
                    </span>
                    <span className="text-xs bg-gold/20 text-gold px-3 py-1 rounded-full">
                      {item.time}
                    </span>
                  </div>
                  <p className="text-white/50 text-sm">
                    &ldquo;Los resultados hablan por si solos. El metodo de Russ funciona.&rdquo;
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex"
          >
            Quiero Mi Transformacion
            <ArrowRight size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

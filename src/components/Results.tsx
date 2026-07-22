'use client';

import { motion } from 'framer-motion';
import { Users, FileText, Eye, Award, ArrowRight } from 'lucide-react';

const WHATSAPP_URL = 'https://wa.me/5491168124464?text=Hola!%20Quiero%20ver%20resultados%20reales';

const metrics = [
  { icon: Users,       value: '+100', label: 'Clientas acompañadas', color: 'text-rose-deep' },
  { icon: FileText,    value: '+500', label: 'Planes personalizados', color: 'text-nude-dark' },
  { icon: Eye,         value: '1a1',  label: 'Seguimiento personalizado', color: 'text-rose-deep' },
  { icon: Award,       value: '100%', label: 'Compromiso con resultados', color: 'text-sage-dark' },
];

export default function Results() {
  return (
    <section id="resultados" className="relative py-12 md:py-24 lg:py-32 overflow-hidden bg-cream-100">
      <div className="absolute top-1/2 right-0 w-64 h-64 bg-rose/6 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="kicker">
            Resultados
          </span>
          <h2 className="section-title mt-4 mb-5">
            Transformaciones <span className="text-accent">reales</span>
          </h2>
          <p className="text-charcoal/60 text-lg max-w-2xl mx-auto">
            Estos son resultados de mujeres reales que confiaron en el proceso.
            Tu transformación puede ser la próxima.
          </p>
        </motion.div>

        {/* Métricas */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-20">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card card-hover p-6 text-center"
            >
              <metric.icon size={28} className={`mx-auto mb-4 ${metric.color}`} />
              <div className={`text-4xl font-heading font-bold ${metric.color} mb-2`}>
                {metric.value}
              </div>
              <div className="text-charcoal/50 text-sm">
                {metric.label}
              </div>
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
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex"
          >
            Quiero mi transformación
            <ArrowRight size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}


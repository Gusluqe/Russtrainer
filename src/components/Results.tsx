'use client';

import { motion } from 'framer-motion';
import { Users, FileText, Eye, Award, ArrowRight, MessageCircle } from 'lucide-react';

const WHATSAPP_URL = 'https://wa.me/5491131491877?text=Hola!%20Quiero%20ver%20resultados%20reales';

const metrics = [
  { icon: Users,       value: '+100', label: 'Clientes acompañadas', color: 'text-rose' },
  { icon: FileText,    value: '+500', label: 'Planes personalizados', color: 'text-nude' },
  { icon: Eye,         value: '1a1',  label: 'Seguimiento personalizado', color: 'text-rose' },
  { icon: Award,       value: '100%', label: 'Compromiso con resultados', color: 'text-sage-dark' },
];

const transformations = [
  { name: 'Transformación 1', goal: 'Cambio de composición corporal', time: '3 meses', image: '/foto1.png' },
  { name: 'Transformación 2', goal: 'Pérdida de peso', time: '4 meses', image: '/foto2.png' },
  { name: 'Transformación 3', goal: 'Ganancia muscular', time: '5 meses', image: '/foto3.png' },
  { name: 'Transformación 4', goal: 'Definición corporal', time: '3 meses', image: '/foto4.png' },
  { name: 'Transformación 5', goal: 'Cambio de hábitos', time: '6 meses', image: '/foto5.png' },
  { name: 'Transformación 6', goal: 'Rendimiento y salud', time: '4 meses', image: '/foto6.png' },
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
          <span className="text-rose font-medium uppercase tracking-widest text-sm">
            Resultados
          </span>
          <h2 className="section-title mt-4 mb-5">
            Transformaciones <span className="text-gradient">reales</span>
          </h2>
          <p className="text-charcoal/60 text-lg max-w-2xl mx-auto">
            Estos son resultados de personas reales que confiaron en el proceso.
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

        {/* Transformaciones */}
        <div className="mb-16">
          <h3 className="text-2xl font-heading font-bold text-charcoal text-center mb-10">
            Casos de éxito
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {transformations.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="card card-hover overflow-hidden group"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={item.image}
                    alt={`Transformación de ${item.name}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/20 via-transparent to-transparent" />

                  <div className="absolute top-4 right-4 bg-rose text-white font-semibold px-4 py-1.5 rounded-full text-sm">
                    Éxito
                  </div>
                </div>

                <div className="p-6">
                  <h4 className="text-lg font-heading font-bold text-charcoal mb-2">
                    {item.name}
                  </h4>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-xs bg-cream-100 text-charcoal/60 px-3 py-1 rounded-full">
                      {item.goal}
                    </span>
                    <span className="text-xs bg-rose/10 text-rose px-3 py-1 rounded-full">
                      {item.time}
                    </span>
                  </div>
                  <p className="text-charcoal/50 text-sm font-serif italic">
                    &ldquo;Los resultados hablan por sí solos.&rdquo;
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
            Quiero mi transformación
            <ArrowRight size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

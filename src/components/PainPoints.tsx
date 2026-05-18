'use client';

import { motion } from 'framer-motion';
import { Frown, TrendingDown, HelpCircle, Zap, RotateCcw, Quote } from 'lucide-react';

const painPoints = [
  { icon: Frown,        question: '¿No te sentís cómoda con tu cuerpo?' },
  { icon: TrendingDown, question: '¿Te frustrás al no ver resultados?' },
  { icon: HelpCircle,   question: '¿No sabés qué hacer en el gimnasio?' },
  { icon: Zap,          question: '¿Te exigís demasiado y terminás abandonando?' },
  { icon: RotateCcw,    question: '¿Empezás motivada pero no lográs sostener el hábito?' },
];

export default function PainPoints() {
  return (
    <section className="relative py-12 md:py-24 lg:py-32 overflow-hidden bg-cream-100">
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-rose/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-rose font-medium uppercase tracking-widest text-sm">
            ¿Te identificás?
          </span>
          <h2 className="section-title mt-4 mb-4">
            Sabemos cómo <span className="text-gradient">te sentís</span>
          </h2>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-5 mb-14">
          {painPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card card-hover p-6 flex items-start gap-4 w-full sm:w-[calc(50%-10px)] lg:w-[calc(33.333%-14px)]"
            >
              <div className="p-3 bg-rose/10 rounded-2xl shrink-0">
                <point.icon size={22} className="text-rose" />
              </div>
              <p className="text-charcoal/80 text-lg leading-snug font-medium">
                {point.question}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Insight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="bg-rose-muted rounded-3xl p-8 md:p-12 border border-rose/15">
            <Quote size={36} className="text-rose/40 mx-auto mb-5" />
            <p className="text-xl md:text-2xl text-charcoal leading-relaxed font-serif italic">
              "No buscan solo cambiar su cuerpo. Buscan sentirse mejor con ellas mismas
              y dejar de vivir el entrenamiento como una obligación."
            </p>
            <div className="mt-6 w-12 h-0.5 bg-gradient-to-r from-rose to-nude mx-auto" />
            <p className="text-rose text-sm font-medium mt-4 uppercase tracking-widest">
              Entrenar desde el amor, no desde la exigencia
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

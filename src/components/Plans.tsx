'use client';

import { motion } from 'framer-motion';
import { Check, MessageCircle, Sparkles } from 'lucide-react';

const WHATSAPP_URL = 'https://wa.me/5491131491877';

const plans = [
  {
    name: 'Plan Inicial',
    description: 'Ideal para arrancar tu transformacion',
    price: 'Consultar',
    features: [
      'Plan de entrenamiento personalizado',
      'Guia de ejercicios con videos',
      'Seguimiento por WhatsApp',
      'Ajustes mensuales',
      'Primera semana de prueba',
    ],
    cta: 'Elegir Plan Inicial',
    popular: false,
  },
  {
    name: 'Plan Pro',
    description: 'El mas elegido por resultados rapidos',
    price: 'Consultar',
    features: [
      'Todo lo del Plan Inicial',
      'Videollamadas semanales',
      'Plan nutricional basico',
      'Seguimiento de progreso',
      'Correccion de tecnica en vivo',
      'Soporte prioritario',
    ],
    cta: 'Elegir Plan Pro',
    popular: true,
  },
  {
    name: 'Plan Premium',
    description: 'Transformacion completa 360',
    price: 'Consultar',
    features: [
      'Todo lo del Plan Pro',
      'Sesiones 1 a 1 online',
      'Plan nutricional completo',
      'Control de macros personalizado',
      'Evaluaciones semanales',
      'Asesoramiento en suplementacion',
      'Acceso a comunidad VIP',
    ],
    cta: 'Elegir Plan Premium',
    popular: false,
  },
];

export default function Plans() {
  return (
    <section id="planes" className="relative py-24 lg:py-32 overflow-hidden">
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
            Planes
          </span>
          <h2 className="section-title text-white mt-4 mb-6">
            Elegi Tu <span className="text-gradient">Plan</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Todos los planes incluyen seguimiento personalizado. 
            Encontrá el que mejor se adapte a tus objetivos.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative ${plan.popular ? 'md:-mt-4 md:mb-[-1rem]' : ''}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <span className="bg-gradient-to-r from-gold to-gold-light text-dark text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider flex items-center gap-1">
                    <Sparkles size={12} />
                    Mas Elegido
                  </span>
                </div>
              )}
              
              <div className={`relative h-full glass-card-gold overflow-hidden ${
                plan.popular 
                  ? 'border-gold/50 bg-gold/5' 
                  : ''
              }`}>
                {plan.popular && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold to-rose" />
                )}
                
                <div className="p-8">
                  <h3 className="text-2xl font-heading font-bold text-white mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-white/60 text-sm mb-6">
                    {plan.description}
                  </p>
                  
                  <div className="mb-8">
                    <span className="text-4xl font-heading font-bold text-white">
                      {plan.price}
                    </span>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check size={18} className="text-gold mt-0.5 shrink-0" />
                        <span className="text-white/70 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <a
                    href={`${WHATSAPP_URL}?text=Hola!%20Quiero%20info%20sobre%20el%20${encodeURIComponent(plan.name)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={plan.popular ? 'btn-primary w-full' : 'btn-secondary w-full'}
                  >
                    <MessageCircle size={18} />
                    {plan.cta}
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

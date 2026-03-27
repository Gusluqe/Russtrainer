'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Instagram, Send, SendHorizonal, CheckCircle } from 'lucide-react';

const WHATSAPP_URL = 'https://wa.me/5491131491877';
const INSTAGRAM_URL = 'https://instagram.com/russ.trainer';
const TELEGRAM_URL = null;

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contacto" className="relative py-24 lg:py-32 overflow-hidden">
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
            Contacto
          </span>
          <h2 className="section-title text-white mt-4 mb-6">
            Listo Para <span className="text-gradient">Arrancar?</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Hablemos y armemos tu plan. Responde el formulario o contactame directamente. 
            Tu transformacion te esta esperando!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass-card-gold p-8 mb-8">
              <h3 className="text-2xl font-heading font-bold text-white mb-6">
                Contactame Directamente
              </h3>
              
              <div className="space-y-4">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-white/5 rounded-xl hover:bg-[#25D366]/10 transition-colors group"
                >
                  <div className="p-3 bg-[#25D366]/20 rounded-xl">
                    <MessageCircle size={24} className="text-[#25D366]" />
                  </div>
                  <div>
                    <p className="text-white font-medium">WhatsApp</p>
                    <p className="text-white/50 text-sm">+54 9 11 3149-1877</p>
                  </div>
                </a>
                
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-white/5 rounded-xl hover:bg-gold/10 transition-colors group"
                >
                  <div className="p-3 bg-gold/20 rounded-xl">
                    <Instagram size={24} className="text-gold" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Instagram</p>
                    <p className="text-white/50 text-sm">@russ.trainer</p>
                  </div>
                </a>
                
                {TELEGRAM_URL ? (
                  <a
                    href={TELEGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-white/5 rounded-xl hover:bg-gold/10 transition-colors group"
                  >
                    <div className="p-3 bg-gold/20 rounded-xl">
                      <Send size={24} className="text-gold" />
                    </div>
                    <div>
                      <p className="text-white font-medium">Telegram</p>
                      <p className="text-white/50 text-sm">Proximamente</p>
                    </div>
                  </a>
                ) : (
                  <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl opacity-50">
                    <div className="p-3 bg-white/10 rounded-xl">
                      <Send size={24} className="text-white/50" />
                    </div>
                    <div>
                      <p className="text-white font-medium">Telegram</p>
                      <p className="text-white/50 text-sm">Proximamente</p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="glass-card-gold p-8">
              <h3 className="text-2xl font-heading font-bold text-white mb-4">
                Por Que Elegirme?
              </h3>
              <ul className="space-y-3">
                {[
                  'Planes 100% personalizados',
                  'Seguimiento real y constante',
                  'Resultados comprobables',
                  'Comunicacion directa',
                  'Metodo probado con +100 clientes',
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-white/70">
                    <CheckCircle size={18} className="text-gold shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="glass-card-gold p-8">
              <h3 className="text-2xl font-heading font-bold text-white mb-6">
                Enviamos un Mensaje
              </h3>
              
              <div className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white/70 text-sm mb-2">Nombre</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-gold/50 transition-colors"
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div>
                    <label className="block text-white/70 text-sm mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-gold/50 transition-colors"
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-white/70 text-sm mb-2">Telefono (opcional)</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-gold/50 transition-colors"
                    placeholder="+54 9 11 XXXX-XXXX"
                  />
                </div>
                
                <div>
                  <label className="block text-white/70 text-sm mb-2">Mensaje</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-gold/50 transition-colors resize-none"
                    placeholder="Contame sobre tus objetivos..."
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting || isSubmitted}
                  className={`w-full btn-primary ${isSubmitted ? 'bg-green-500' : ''}`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <motion.span
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                        className="inline-block w-5 h-5 border-2 border-dark/30 border-t-dark rounded-full"
                      />
                      Enviando...
                    </span>
                  ) : isSubmitted ? (
                    <span className="flex items-center gap-2">
                      <CheckCircle size={20} />
                      Mensaje Enviado!
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <SendHorizonal size={20} />
                      Enviar Mensaje
                    </span>
                  )}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

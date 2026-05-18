'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Instagram, Send, SendHorizonal, CheckCircle } from 'lucide-react';

const WHATSAPP_URL = 'https://wa.me/5491131491877';
const INSTAGRAM_URL = 'https://instagram.com/russ.trainer';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({ name: '', email: '', phone: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const lines = [
      `Hola Russ! Te escribo desde tu web.`,
      ``,
      `Nombre: ${formData.name}`,
      `Email: ${formData.email}`,
      formData.phone ? `Teléfono: ${formData.phone}` : '',
      ``,
      `Mensaje: ${formData.message}`,
    ].filter(l => l !== null);
    const text = encodeURIComponent(lines.join('\n'));
    window.open(`https://wa.me/5491131491877?text=${text}`, '_blank');
    setIsSubmitting(false);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 4000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contacto" className="relative py-12 md:py-24 lg:py-32 overflow-hidden bg-white">
      <div className="absolute top-0 right-0 w-64 h-64 bg-rose/6 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-sage/6 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-rose font-medium uppercase tracking-widest text-sm">
            Contacto
          </span>
          <h2 className="section-title mt-4 mb-5">
            ¿Lista para <span className="text-gradient">arrancar?</span>
          </h2>
          <p className="text-charcoal/60 text-lg max-w-xl mx-auto">
            Hablemos y armemos tu plan. Respondé el formulario o contactame directamente.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="card p-8 mb-6">
              <h3 className="text-2xl font-heading font-bold text-charcoal mb-6">
                Contactame directamente
              </h3>

              <div className="space-y-4">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-cream-100 rounded-2xl hover:bg-[#25D366]/8 transition-colors group"
                >
                  <div className="p-3 bg-[#25D366]/15 rounded-xl">
                    <MessageCircle size={22} className="text-[#25D366]" />
                  </div>
                  <div>
                    <p className="text-charcoal font-medium">WhatsApp</p>
                    <p className="text-charcoal/50 text-sm">+54 9 11 3149-1877</p>
                  </div>
                </a>

                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-cream-100 rounded-2xl hover:bg-rose/6 transition-colors group"
                >
                  <div className="p-3 bg-rose/10 rounded-xl">
                    <Instagram size={22} className="text-rose" />
                  </div>
                  <div>
                    <p className="text-charcoal font-medium">Instagram</p>
                    <p className="text-charcoal/50 text-sm">@russ.trainer</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 bg-cream-100 rounded-2xl opacity-40">
                  <div className="p-3 bg-charcoal/8 rounded-xl">
                    <Send size={22} className="text-charcoal/50" />
                  </div>
                  <div>
                    <p className="text-charcoal font-medium">Telegram</p>
                    <p className="text-charcoal/50 text-sm">Próximamente</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="card p-8">
              <h3 className="text-xl font-heading font-bold text-charcoal mb-4">
                ¿Por qué elegirme?
              </h3>
              <ul className="space-y-3">
                {[
                  'Planes 100% personalizados',
                  'Seguimiento real y constante',
                  'Resultados comprobables',
                  'Comunicación directa',
                  'Método probado con +100 clientas',
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-charcoal/65 text-sm">
                    <div className="w-5 h-5 rounded-full bg-rose/10 flex items-center justify-center shrink-0">
                      <CheckCircle size={12} className="text-rose" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Formulario */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="card p-8">
              <h3 className="text-2xl font-heading font-bold text-charcoal mb-6">
                Envianos un mensaje
              </h3>

              <div className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-charcoal/60 text-sm mb-2 font-medium">Nombre</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-cream-100 border border-charcoal/10 rounded-xl text-charcoal placeholder-charcoal/30 focus:outline-none focus:border-rose/50 transition-colors text-sm"
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div>
                    <label className="block text-charcoal/60 text-sm mb-2 font-medium">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-cream-100 border border-charcoal/10 rounded-xl text-charcoal placeholder-charcoal/30 focus:outline-none focus:border-rose/50 transition-colors text-sm"
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-charcoal/60 text-sm mb-2 font-medium">Teléfono (opcional)</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-cream-100 border border-charcoal/10 rounded-xl text-charcoal placeholder-charcoal/30 focus:outline-none focus:border-rose/50 transition-colors text-sm"
                    placeholder="+54 9 11 XXXX-XXXX"
                  />
                </div>

                <div>
                  <label className="block text-charcoal/60 text-sm mb-2 font-medium">Mensaje</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 bg-cream-100 border border-charcoal/10 rounded-xl text-charcoal placeholder-charcoal/30 focus:outline-none focus:border-rose/50 transition-colors resize-none text-sm"
                    placeholder="Contame sobre tus objetivos..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting || isSubmitted}
                  className={`w-full btn-primary ${isSubmitted ? '!bg-[#25D366]' : ''}`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <motion.span
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                        className="inline-block w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                      />
                      Enviando...
                    </span>
                  ) : isSubmitted ? (
                    <span className="flex items-center justify-center gap-2">
                      <CheckCircle size={18} />
                      ¡Mensaje enviado!
                    </span>
                  ) : (
                    <span className="flex items-center justify-center gap-2">
                      <SendHorizonal size={18} />
                      Enviar mensaje
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

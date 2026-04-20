'use client';

import { motion } from 'framer-motion';
import { Instagram, MessageCircle, Send } from 'lucide-react';
import Logo from './Logo';

const WHATSAPP_URL = 'https://wa.me/5491131491877';
const INSTAGRAM_URL = 'https://instagram.com/russ.trainer';
const TELEGRAM_URL = null;

const footerLinks = [
  { name: 'Inicio', href: '#inicio' },
  { name: 'Servicios', href: '#servicios' },
  { name: 'Planes', href: '#planes' },
  { name: 'Resultados', href: '#resultados' },
  { name: 'Testimonios', href: '#testimonios' },
  { name: 'Contacto', href: '#contacto' },
];

export default function Footer() {
  return (
    <footer className="relative bg-dark-100 border-t border-gold/10">
      <div className="absolute inset-0 bg-noise" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-1"
          >
            <Logo size="md" />
            <p className="mt-4 text-white/60 text-sm leading-relaxed">
              Transformá tu cuerpo y tu vida con entrenamiento personalizado. 
              Resultados reales, seguimiento constante, disciplina y compromiso.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/5 rounded-xl hover:bg-gold/20 hover:text-gold transition-all duration-300 border border-gold/10"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/5 rounded-xl hover:bg-[#25D366]/20 hover:text-[#25D366] transition-all duration-300 border border-[#25D366]/10"
                aria-label="WhatsApp"
              >
                <MessageCircle size={20} />
              </a>
              {TELEGRAM_URL ? (
                <a
                  href={TELEGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/5 rounded-xl hover:bg-gold/20 hover:text-gold transition-all duration-300 border border-gold/10"
                  aria-label="Telegram"
                >
                  <Send size={20} />
                </a>
              ) : (
                <span
                  className="p-3 bg-white/5 rounded-xl text-white/30 cursor-not-allowed border border-white/5"
                  title="Proximamente en Telegram"
                >
                  <Send size={20} />
                </span>
              )}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-lg font-heading font-bold text-white mb-4">Navegacion</h3>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-gold transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-lg font-heading font-bold text-white mb-4">Servicios</h3>
            <ul className="space-y-3">
              <li className="text-white/60 text-sm">Entrenamiento Personal</li>
              <li className="text-white/60 text-sm">Planes de Descenso</li>
              <li className="text-white/60 text-sm">Hipertrofia</li>
              <li className="text-white/60 text-sm">Entrenamiento Online</li>
              <li className="text-white/60 text-sm">Seguimiento Semanal</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-lg font-heading font-bold text-white mb-4">Contacto</h3>
            <div className="space-y-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/60 hover:text-gold transition-colors text-sm"
              >
                <MessageCircle size={16} />
                WhatsApp
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/60 hover:text-gold transition-colors text-sm"
              >
                <Instagram size={16} />
                @russ.trainer
              </a>
              <p className="text-white/40 text-xs mt-4">
                Buenos Aires, Argentina
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4"
        >
          <p className="text-white/40 text-sm">
            2026 RussTrainer. Todos los derechos reservados.
          </p>
          <p>&copy;Si te gustó esta página 🚀 Creá la tuya hoy en 👉 
        <a href="https://luquetech.com/" target="_blank">luquetech.com</a>
      </p>
          <p className="text-white/40 text-sm">
            Hecho con dedicacion y disciplina
          </p>
        </motion.div>
      </div>
    </footer>
  );
}

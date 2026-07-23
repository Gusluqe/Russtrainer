'use client';

import { motion } from 'framer-motion';
import { Instagram, MessageCircle, Send } from 'lucide-react';
import Logo from './Logo';
import { useContenido } from './ContenidoContext';

const WHATSAPP_URL = 'https://wa.me/5491168124464';
const INSTAGRAM_URL = 'https://instagram.com/russ.trainer';

const footerLinks = [
  { name: 'Inicio', href: '#inicio' },
  { name: 'Planes', href: '#planes' },
  { name: 'Testimonios', href: '#testimonios' },
  { name: 'Contacto', href: '#contacto' },
];

export default function Footer() {
  const { footer } = useContenido();
  return (
    <footer className="relative bg-plum">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-rose/30 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

          {/* Branding */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-1"
          >
            <Logo size="md" dark />
            <p className="mt-4 text-white/50 text-sm leading-relaxed">
              {footer.descripcion}
            </p>
            <p className="mt-3 text-rose/80 text-sm font-serif italic">
              {footer.frase}
            </p>
            <div className="flex items-center gap-3 mt-6">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/5 rounded-full hover:bg-rose/20 hover:text-rose text-white/50 transition-all duration-300 border border-white/8"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/5 rounded-full hover:bg-[#25D366]/20 hover:text-[#25D366] text-white/50 transition-all duration-300 border border-white/8"
                aria-label="WhatsApp"
              >
                <MessageCircle size={18} />
              </a>
              <span
                className="p-3 bg-white/5 rounded-full text-white/20 cursor-not-allowed border border-white/5"
                title="Próximamente en Telegram"
              >
                <Send size={18} />
              </span>
            </div>
          </motion.div>

          {/* Navegación */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-sm font-heading font-bold text-white mb-4 uppercase tracking-wider">Navegación</h3>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/50 hover:text-rose transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Servicios */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-sm font-heading font-bold text-white mb-4 uppercase tracking-wider">Servicios</h3>
            <ul className="space-y-3">
              {['Plan Online Básico', 'Plan Online Personalizado', 'Plan Presencial + Online', 'Primera semana gratis'].map(s => (
                <li key={s} className="text-white/50 text-sm">{s}</li>
              ))}
            </ul>
          </motion.div>

          {/* Contacto */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-sm font-heading font-bold text-white mb-4 uppercase tracking-wider">Contacto</h3>
            <div className="space-y-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/50 hover:text-rose transition-colors text-sm"
              >
                <MessageCircle size={14} />
                WhatsApp
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/50 hover:text-rose transition-colors text-sm"
              >
                <Instagram size={14} />
                @russ.trainer
              </a>
              <p className="text-white/30 text-xs mt-4">Buenos Aires, Argentina</p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 pt-8 border-t border-white/8 flex flex-col sm:flex-row justify-between items-center gap-4"
        >
          <p className="text-white/30 text-sm">
            2026 RussTrainer. Todos los derechos reservados.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-2 text-sm">
            <p className="text-white/30">Hecho con amor, dedicación y disciplina ♥</p>
            <span className="hidden sm:block text-white/15">·</span>
            <a
              href="https://luquetech.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-rose transition-colors"
            >
              ¿Te gustó esta página? 🚀 Creá la tuya en luquetech.com
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}


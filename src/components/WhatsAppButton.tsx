'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const WHATSAPP_URL = 'https://wa.me/5491131491877?text=Hola!%20Quiero%20info%20sobre%20RussTrainer';

export default function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    const tooltipTimer = setTimeout(() => {
      setShowTooltip(false);
    }, 6000);

    return () => {
      clearTimeout(timer);
      clearTimeout(tooltipTimer);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 200, damping: 15 }}
          className="fixed bottom-6 right-6 z-50 flex items-center gap-3"
        >
          <AnimatePresence>
            {showTooltip && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
                className="hidden sm:block bg-gradient-to-r from-gold to-gold-light text-dark text-sm px-4 py-2 rounded-xl shadow-lg whitespace-nowrap font-medium"
              >
                Tenes dudas? Hablemos
              </motion.div>
            )}
          </AnimatePresence>

          <motion.a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="relative group"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Contactar por WhatsApp"
          >
            <div className="absolute -inset-2 bg-[#25D366] rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity" />
            
            <div className="relative flex items-center justify-center w-16 h-16 bg-[#25D366] rounded-full shadow-lg hover:shadow-[0_0_30px_rgba(37,211,102,0.5)] transition-shadow border-2 border-white/20">
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="relative"
              >
                <MessageCircle size={32} className="text-white" />
              </motion.div>
              
              <span className="absolute -top-1 -right-1 flex h-4 w-4">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75"></span>
                <span className="relative inline-flex rounded-full h-4 w-4 bg-gold"></span>
              </span>
            </div>
          </motion.a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

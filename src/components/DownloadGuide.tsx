'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Gift, Download, Loader2, KeyRound, Sparkles, MessageCircle } from 'lucide-react';

const WHATSAPP_URL = 'https://wa.me/5491168124464?text=Hola!%20Quiero%20mi%20c%C3%B3digo%20para%20descargar%20la%20gu%C3%ADa';

type Status = 'idle' | 'loading' | 'success' | 'error';

const ERROR_MESSAGES: Record<string, string> = {
  CODE_INVALID: 'Ese código no es válido. Revisá que esté bien escrito 💗',
  ALREADY_USED: 'Este código ya fue usado en este dispositivo.',
  GENERIC: 'Algo salió mal. Probá de nuevo en un ratito.',
};

export default function DownloadGuide() {
  const [code, setCode] = useState('');
  const [status, setStatus] = useState<Status>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [downloadUrl, setDownloadUrl] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!code.trim() || status === 'loading') return;

    setStatus('loading');
    setErrorMessage('');

    try {
      const res = await fetch('/api/canjear', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code }),
      });
      const data = await res.json();

      if (res.ok && data.downloadUrl) {
        setDownloadUrl(data.downloadUrl);
        setStatus('success');
      } else {
        setErrorMessage(ERROR_MESSAGES[data.error] ?? ERROR_MESSAGES.GENERIC);
        setStatus('error');
      }
    } catch {
      setErrorMessage(ERROR_MESSAGES.GENERIC);
      setStatus('error');
    }
  };

  return (
    <section id="guia" className="relative py-12 md:py-24 lg:py-32 overflow-hidden bg-cream-100">
      <div className="absolute top-0 right-1/4 w-72 h-72 bg-rose/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-sage/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="kicker">Un regalo para vos</span>
          <h2 className="section-title mt-4 mb-5">
            Tu guía, con tu <span className="text-accent">código</span>
          </h2>
          <p className="text-charcoal/60 text-lg max-w-xl mx-auto">
            Si Russ te compartió un código, ingresalo acá y descargá tu guía en PDF.
            Es tuya, para siempre.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="card p-8 md:p-12 relative overflow-hidden"
        >
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-rose/10 rounded-full blur-2xl pointer-events-none" />

          <AnimatePresence mode="wait">
            {status === 'success' ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 260, damping: 16, delay: 0.1 }}
                  className="w-20 h-20 mx-auto mb-6 rounded-full bg-rose-muted flex items-center justify-center"
                >
                  <Sparkles size={34} className="text-rose-deep" />
                </motion.div>

                <h3 className="text-2xl md:text-3xl font-heading font-bold text-charcoal mb-3">
                  ¡Listo, es <span className="text-accent">tuya</span>!
                </h3>
                <p className="text-charcoal/60 mb-8">
                  Tu código es válido. Descargá tu guía y empezá hoy mismo 💗
                </p>

                <a href={downloadUrl} className="btn-primary inline-flex" download>
                  <Download size={18} />
                  Descargar mi guía
                </a>

                <p className="text-charcoal/40 text-xs mt-6">
                  El link dura 10 minutos. Si se vence, volvé a ingresar tu código.
                </p>
              </motion.div>
            ) : (
              <motion.div
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex justify-center mb-6">
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                    className="w-16 h-16 rounded-full bg-rose-muted flex items-center justify-center"
                  >
                    <Gift size={28} className="text-rose-deep" />
                  </motion.div>
                </div>

                <form onSubmit={handleSubmit} className="max-w-md mx-auto">
                  <motion.div
                    animate={status === 'error' ? { x: [0, -10, 10, -8, 8, -4, 4, 0] } : {}}
                    transition={{ duration: 0.45 }}
                  >
                    <label htmlFor="codigo-guia" className="sr-only">
                      Tu código
                    </label>
                    <div className="relative">
                      <KeyRound
                        size={18}
                        className="absolute left-5 top-1/2 -translate-y-1/2 text-rose-deep/50 pointer-events-none"
                      />
                      <input
                        id="codigo-guia"
                        type="text"
                        value={code}
                        onChange={(e) => {
                          setCode(e.target.value.toUpperCase());
                          if (status === 'error') setStatus('idle');
                        }}
                        placeholder="RUSS-XXXXX"
                        maxLength={12}
                        autoComplete="off"
                        spellCheck={false}
                        className={`w-full pl-12 pr-5 py-4 rounded-full bg-cream-50 border-2 text-center
                                   font-semibold tracking-[0.25em] text-charcoal placeholder:text-charcoal/25
                                   placeholder:tracking-[0.25em] focus:outline-none transition-colors duration-300
                                   ${status === 'error' ? 'border-rose-deep/60' : 'border-rose/25 focus:border-rose-deep'}`}
                      />
                    </div>
                  </motion.div>

                  <AnimatePresence>
                    {status === 'error' && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="text-rose-deeper text-sm text-center mt-4"
                      >
                        {errorMessage}
                      </motion.p>
                    )}
                  </AnimatePresence>

                  <button
                    type="submit"
                    disabled={status === 'loading' || !code.trim()}
                    className="btn-primary w-full mt-6 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader2 size={18} className="animate-spin" />
                        Validando...
                      </>
                    ) : (
                      <>
                        Canjear mi código
                        <Sparkles size={18} />
                      </>
                    )}
                  </button>
                </form>

                <p className="text-center text-charcoal/50 text-sm mt-8">
                  ¿Todavía no tenés tu código?{' '}
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-rose-deep hover:text-rose-deeper font-medium transition-colors"
                  >
                    <MessageCircle size={14} />
                    Pedíselo a Russ
                  </a>
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

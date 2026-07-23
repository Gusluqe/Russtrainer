'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Heart, Loader2, Mail, Sparkles, User } from 'lucide-react';
import { useContenido } from './ContenidoContext';

type Status = 'idle' | 'loading' | 'success' | 'error';

export default function Newsletter() {
  const { novedades } = useContenido();
  const [email, setEmail] = useState('');
  const [nombre, setNombre] = useState('');
  const [status, setStatus] = useState<Status>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || status === 'loading') return;

    setStatus('loading');
    try {
      const res = await fetch('/api/suscribir', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim(), nombre: nombre.trim() }),
      });
      setStatus(res.ok ? 'success' : 'error');
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="novedades" className="relative py-12 md:py-24 overflow-hidden bg-cream">
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-rose/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-nude/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="card p-8 md:p-12 relative overflow-hidden text-center"
        >
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-rose/10 rounded-full blur-2xl pointer-events-none" />

          <span className="kicker">{novedades.kicker}</span>
          <h2 className="section-title mt-4 mb-3">
            {novedades.titulo}{' '}
            <span className="text-accent">{novedades.tituloAccent}</span>
          </h2>
          <p className="text-rose-deep font-serif italic text-lg mb-4">
            {novedades.frase}
          </p>
          <p className="text-charcoal/60 text-lg max-w-xl mx-auto mb-8">
            {novedades.subtitulo}
          </p>

          <AnimatePresence mode="wait">
            {status === 'success' ? (
              <motion.div
                key="ok"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="max-w-md mx-auto"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 260, damping: 16, delay: 0.1 }}
                  className="w-16 h-16 mx-auto mb-5 rounded-full bg-rose-muted flex items-center justify-center"
                >
                  <Heart size={26} className="text-rose-deep" />
                </motion.div>
                <p className="text-charcoal font-semibold text-lg">
                  ¡Listo! Ya estás <span className="text-accent">adentro</span> 💗
                </p>
                <p className="text-charcoal/50 text-sm mt-2">
                  Cuando haya novedades, te van a llegar a tu mail.
                </p>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                onSubmit={handleSubmit}
                className="max-w-md mx-auto"
              >
                {/* Honeypot anti-bots: invisible para personas */}
                <input
                  type="text"
                  name="web"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  className="hidden"
                />

                <div className="relative">
                  <Mail
                    size={18}
                    className="absolute left-5 top-1/2 -translate-y-1/2 text-rose-deep/50 pointer-events-none"
                  />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (status === 'error') setStatus('idle');
                    }}
                    placeholder="Email"
                    autoComplete="email"
                    required
                    className={`w-full pl-12 pr-5 py-4 rounded-full bg-cream-50 border-2 text-charcoal
                               placeholder:text-charcoal/30 focus:outline-none transition-colors duration-300
                               ${status === 'error' ? 'border-rose-deep/60' : 'border-rose/25 focus:border-rose-deep'}`}
                  />
                </div>

                <div className="relative mt-4">
                  <User
                    size={18}
                    className="absolute left-5 top-1/2 -translate-y-1/2 text-rose-deep/50 pointer-events-none"
                  />
                  <input
                    type="text"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    placeholder="Nombre"
                    autoComplete="given-name"
                    maxLength={100}
                    className="w-full pl-12 pr-5 py-4 rounded-full bg-cream-50 border-2 border-rose/25
                               text-charcoal placeholder:text-charcoal/30 focus:outline-none
                               focus:border-rose-deep transition-colors duration-300"
                  />
                </div>

                <AnimatePresence>
                  {status === 'error' && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="text-rose-deeper text-sm mt-3"
                    >
                      Revisá que el mail esté bien escrito y probá de nuevo 💗
                    </motion.p>
                  )}
                </AnimatePresence>

                <button
                  type="submit"
                  disabled={status === 'loading' || !email.trim()}
                  className="btn-primary w-full mt-5 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      Anotando...
                    </>
                  ) : (
                    <>
                      {novedades.boton}
                      <Sparkles size={18} />
                    </>
                  )}
                </button>

                <p className="text-charcoal/40 text-xs mt-4">
                  {novedades.nota}
                </p>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

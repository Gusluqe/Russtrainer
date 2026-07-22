'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  Lock,
  LogOut,
  Loader2,
  Save,
  Check,
  User,
  KeyRound,
  Sparkles,
} from 'lucide-react';

type Precios = {
  basico: string;
  personalizado: string;
  presencial: string;
};

const PLANES: { key: keyof Precios; nombre: string; detalle: string }[] = [
  { key: 'basico', nombre: 'Plan Online Básico', detalle: 'Rutina mensual sin seguimiento' },
  { key: 'personalizado', nombre: 'Plan Online Personalizado', detalle: 'El más elegido ✦' },
  { key: 'presencial', nombre: 'Plan Presencial + Online', detalle: '4 clases presenciales al mes' },
];

export default function AdminPage() {
  const [checking, setChecking] = useState(true);
  const [logged, setLogged] = useState(false);

  // login
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [loginStatus, setLoginStatus] = useState<'idle' | 'loading' | 'error'>('idle');

  // precios
  const [precios, setPrecios] = useState<Precios | null>(null);
  const [saveStatus, setSaveStatus] = useState<'idle' | 'saving' | 'saved' | 'error'>('idle');

  useEffect(() => {
    fetch('/api/admin/login')
      .then((r) => r.json())
      .then((d) => setLogged(Boolean(d.ok)))
      .catch(() => setLogged(false))
      .finally(() => setChecking(false));
  }, []);

  useEffect(() => {
    if (!logged) return;
    fetch('/api/precios')
      .then((r) => r.json())
      .then(setPrecios)
      .catch(() => setPrecios(null));
  }, [logged]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (loginStatus === 'loading') return;
    setLoginStatus('loading');
    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ user, password }),
      });
      if (res.ok) {
        setLogged(true);
        setLoginStatus('idle');
        setPassword('');
      } else {
        setLoginStatus('error');
      }
    } catch {
      setLoginStatus('error');
    }
  };

  const handleLogout = async () => {
    await fetch('/api/admin/login', { method: 'DELETE' });
    setLogged(false);
    setPrecios(null);
  };

  const handleSave = async () => {
    if (!precios || saveStatus === 'saving') return;
    setSaveStatus('saving');
    try {
      const res = await fetch('/api/admin/precios', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(precios),
      });
      if (!res.ok) throw new Error();
      const data = await res.json();
      setPrecios(data.precios);
      setSaveStatus('saved');
      setTimeout(() => setSaveStatus('idle'), 2500);
    } catch {
      setSaveStatus('error');
      setTimeout(() => setSaveStatus('idle'), 3000);
    }
  };

  return (
    <main className="min-h-screen bg-cream flex items-center justify-center px-4 py-12">
      <div className="absolute top-0 right-1/4 w-72 h-72 bg-rose/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-sage/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative w-full max-w-lg">
        <AnimatePresence mode="wait">
          {checking ? (
            <motion.div
              key="checking"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex justify-center"
            >
              <Loader2 size={28} className="animate-spin text-rose-deep" />
            </motion.div>
          ) : !logged ? (
            <motion.div
              key="login"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.4 }}
              className="card p-8 md:p-10"
            >
              <div className="text-center mb-8">
                <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-rose-muted flex items-center justify-center">
                  <Lock size={26} className="text-rose-deep" />
                </div>
                <h1 className="text-3xl font-heading font-bold text-charcoal">
                  Panel de <span className="text-accent">Russ</span>
                </h1>
                <p className="text-charcoal/50 text-sm mt-2">
                  Entrá para editar los precios de tus planes
                </p>
              </div>

              <form onSubmit={handleLogin} className="space-y-4">
                <div className="relative">
                  <User
                    size={17}
                    className="absolute left-5 top-1/2 -translate-y-1/2 text-rose-deep/50 pointer-events-none"
                  />
                  <input
                    type="text"
                    value={user}
                    onChange={(e) => {
                      setUser(e.target.value);
                      if (loginStatus === 'error') setLoginStatus('idle');
                    }}
                    placeholder="Usuaria"
                    autoComplete="username"
                    className={`w-full pl-12 pr-5 py-3.5 rounded-full bg-cream-50 border-2 text-charcoal
                               placeholder:text-charcoal/30 focus:outline-none transition-colors duration-300
                               ${loginStatus === 'error' ? 'border-rose-deep/60' : 'border-rose/25 focus:border-rose-deep'}`}
                  />
                </div>

                <motion.div
                  animate={loginStatus === 'error' ? { x: [0, -10, 10, -8, 8, -4, 4, 0] } : {}}
                  transition={{ duration: 0.45 }}
                  className="relative"
                >
                  <KeyRound
                    size={17}
                    className="absolute left-5 top-1/2 -translate-y-1/2 text-rose-deep/50 pointer-events-none"
                  />
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      if (loginStatus === 'error') setLoginStatus('idle');
                    }}
                    placeholder="Contraseña"
                    autoComplete="current-password"
                    className={`w-full pl-12 pr-5 py-3.5 rounded-full bg-cream-50 border-2 text-charcoal
                               placeholder:text-charcoal/30 focus:outline-none transition-colors duration-300
                               ${loginStatus === 'error' ? 'border-rose-deep/60' : 'border-rose/25 focus:border-rose-deep'}`}
                  />
                </motion.div>

                <AnimatePresence>
                  {loginStatus === 'error' && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="text-rose-deeper text-sm text-center"
                    >
                      Usuaria o contraseña incorrecta
                    </motion.p>
                  )}
                </AnimatePresence>

                <button
                  type="submit"
                  disabled={loginStatus === 'loading' || !user.trim() || !password}
                  className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {loginStatus === 'loading' ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      Entrando...
                    </>
                  ) : (
                    <>
                      Entrar
                      <Sparkles size={18} />
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          ) : (
            <motion.div
              key="panel"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="card p-8 md:p-10"
            >
              <div className="flex items-start justify-between mb-8">
                <div>
                  <span className="kicker">Hola Russ</span>
                  <h1 className="text-3xl font-heading font-bold text-charcoal mt-2">
                    Tus <span className="text-accent">precios</span>
                  </h1>
                </div>
                <button
                  onClick={handleLogout}
                  aria-label="Cerrar sesión"
                  className="flex items-center gap-1.5 text-charcoal/40 hover:text-rose-deep text-sm transition-colors mt-1"
                >
                  <LogOut size={15} />
                  Salir
                </button>
              </div>

              {!precios ? (
                <div className="flex justify-center py-10">
                  <Loader2 size={24} className="animate-spin text-rose-deep" />
                </div>
              ) : (
                <div className="space-y-5">
                  {PLANES.map((plan) => (
                    <div
                      key={plan.key}
                      className="flex items-center gap-4 p-4 rounded-2xl bg-cream-50 border border-rose/10"
                    >
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-charcoal text-sm">{plan.nombre}</p>
                        <p className="text-charcoal/40 text-xs mt-0.5">{plan.detalle}</p>
                      </div>
                      <input
                        type="text"
                        value={precios[plan.key]}
                        maxLength={30}
                        onChange={(e) =>
                          setPrecios({ ...precios, [plan.key]: e.target.value })
                        }
                        className="w-32 px-4 py-2.5 rounded-full bg-white border-2 border-rose/25
                                   text-charcoal font-semibold text-center focus:outline-none
                                   focus:border-rose-deep transition-colors"
                      />
                    </div>
                  ))}

                  <button
                    onClick={handleSave}
                    disabled={saveStatus === 'saving'}
                    className="btn-primary w-full mt-2 disabled:opacity-60"
                  >
                    {saveStatus === 'saving' ? (
                      <>
                        <Loader2 size={18} className="animate-spin" />
                        Guardando...
                      </>
                    ) : saveStatus === 'saved' ? (
                      <>
                        <Check size={18} />
                        ¡Guardado!
                      </>
                    ) : (
                      <>
                        <Save size={18} />
                        Guardar cambios
                      </>
                    )}
                  </button>

                  {saveStatus === 'error' && (
                    <p className="text-rose-deeper text-sm text-center">
                      No se pudo guardar. Probá de nuevo.
                    </p>
                  )}

                  <p className="text-charcoal/40 text-xs text-center pt-2">
                    Los cambios se ven al instante en la página, en la sección Planes.
                  </p>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}

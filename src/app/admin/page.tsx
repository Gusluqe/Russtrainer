'use client';

import { useEffect, useRef, useState } from 'react';
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
  ChevronDown,
  Camera,
  Copy,
  Mail,
  Plus,
  Trash2,
} from 'lucide-react';
import type { Contenido, PlanContenido } from '@/lib/contenidoTipos';

type Precios = {
  basico: string;
  personalizado: string;
  presencial: string;
};

type Suscriptora = { email: string; fecha: string };

type Tab = 'precios' | 'textos' | 'planes' | 'fotos' | 'suscriptoras';
type PlanId = 'basico' | 'personalizado' | 'presencial';
type FotoSlot = 'hero' | 'sobre' | 'plan-basico' | 'plan-personalizado' | 'plan-presencial';

const PLANES: { key: PlanId; nombre: string; detalle: string }[] = [
  { key: 'basico', nombre: 'Plan Online Básico', detalle: 'Rutina mensual sin seguimiento' },
  { key: 'personalizado', nombre: 'Plan Online Personalizado', detalle: 'El más elegido ✦' },
  { key: 'presencial', nombre: 'Plan Presencial + Online', detalle: '4 clases presenciales al mes' },
];

const TABS: { key: Tab; label: string }[] = [
  { key: 'precios', label: 'Precios' },
  { key: 'textos', label: 'Textos' },
  { key: 'planes', label: 'Planes' },
  { key: 'fotos', label: 'Fotos' },
  { key: 'suscriptoras', label: 'Suscriptoras' },
];

const FOTOS: { slot: FotoSlot; label: string; detalle: string }[] = [
  { slot: 'hero', label: 'Foto de portada', detalle: 'La foto grande de arriba de todo' },
  { slot: 'sobre', label: 'Foto de "Sobre Russ"', detalle: 'La foto al lado de tu historia' },
  { slot: 'plan-basico', label: 'Foto Plan Online Básico', detalle: 'Tarjeta del plan' },
  { slot: 'plan-personalizado', label: 'Foto Plan Online Personalizado', detalle: 'Tarjeta del plan' },
  { slot: 'plan-presencial', label: 'Foto Plan Presencial + Online', detalle: 'Tarjeta del plan' },
];

const inputCls =
  'w-full px-4 py-2.5 mt-1.5 rounded-2xl bg-white border-2 border-rose/25 text-charcoal text-sm ' +
  'focus:outline-none focus:border-rose-deep transition-colors placeholder:text-charcoal/30';

function Campo({
  label,
  value,
  onChange,
  textarea,
  rows,
  ayuda,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  textarea?: boolean;
  rows?: number;
  ayuda?: string;
}) {
  return (
    <label className="block">
      <span className="text-[11px] font-semibold text-charcoal/60 uppercase tracking-wider">
        {label}
      </span>
      {textarea ? (
        <textarea
          rows={rows ?? 3}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={`${inputCls} resize-y leading-relaxed`}
        />
      ) : (
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={inputCls}
        />
      )}
      {ayuda && <span className="block text-charcoal/40 text-xs mt-1">{ayuda}</span>}
    </label>
  );
}

function Seccion({
  titulo,
  abierta,
  onToggle,
  children,
}: {
  titulo: string;
  abierta: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-rose/15 bg-cream-50 overflow-hidden">
      <button
        type="button"
        onClick={onToggle}
        className="w-full flex items-center justify-between px-5 py-4 text-left"
      >
        <span className="font-semibold text-charcoal text-sm">{titulo}</span>
        <ChevronDown
          size={17}
          className={`text-rose-deep transition-transform duration-300 ${abierta ? 'rotate-180' : ''}`}
        />
      </button>
      {abierta && <div className="px-5 pb-5 space-y-4">{children}</div>}
    </div>
  );
}

// Achica la foto en el navegador antes de subirla (las de celular pesan mucho)
async function comprimirImagen(file: File): Promise<Blob> {
  const bitmap = await createImageBitmap(file);
  const max = 1600;
  const escala = Math.min(1, max / Math.max(bitmap.width, bitmap.height));
  const canvas = document.createElement('canvas');
  canvas.width = Math.round(bitmap.width * escala);
  canvas.height = Math.round(bitmap.height * escala);
  const ctx = canvas.getContext('2d');
  if (!ctx) throw new Error('sin canvas');
  ctx.drawImage(bitmap, 0, 0, canvas.width, canvas.height);
  return new Promise((resolve, reject) =>
    canvas.toBlob((b) => (b ? resolve(b) : reject(new Error('sin blob'))), 'image/jpeg', 0.85)
  );
}

export default function AdminPage() {
  const [checking, setChecking] = useState(true);
  const [logged, setLogged] = useState(false);
  const [tab, setTab] = useState<Tab>('precios');
  const [seccionAbierta, setSeccionAbierta] = useState<string>('portada');

  // login
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [loginStatus, setLoginStatus] = useState<'idle' | 'loading' | 'error'>('idle');

  // precios
  const [precios, setPrecios] = useState<Precios | null>(null);
  const [saveStatus, setSaveStatus] = useState<'idle' | 'saving' | 'saved' | 'error'>('idle');

  // contenido editable
  const [contenido, setContenido] = useState<Contenido | null>(null);
  const [contenidoStatus, setContenidoStatus] = useState<'idle' | 'saving' | 'saved' | 'error'>('idle');

  // fotos
  const [fotoStatus, setFotoStatus] = useState<Partial<Record<FotoSlot, 'subiendo' | 'ok' | 'error'>>>({});
  const fileInputs = useRef<Partial<Record<FotoSlot, HTMLInputElement | null>>>({});

  // suscriptoras
  const [suscriptoras, setSuscriptoras] = useState<Suscriptora[] | null>(null);
  const [copiado, setCopiado] = useState(false);

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
    fetch('/api/contenido')
      .then((r) => r.json())
      .then(setContenido)
      .catch(() => setContenido(null));
    fetch('/api/admin/suscriptoras')
      .then((r) => (r.ok ? r.json() : null))
      .then((d) => d && setSuscriptoras(d.suscriptoras))
      .catch(() => setSuscriptoras(null));
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
    setContenido(null);
    setSuscriptoras(null);
  };

  const handleSavePrecios = async () => {
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

  const handleSaveContenido = async () => {
    if (!contenido || contenidoStatus === 'saving') return;
    setContenidoStatus('saving');
    try {
      const res = await fetch('/api/admin/contenido', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(contenido),
      });
      if (!res.ok) throw new Error();
      const data = await res.json();
      setContenido(data.contenido);
      setContenidoStatus('saved');
      setTimeout(() => setContenidoStatus('idle'), 2500);
    } catch {
      setContenidoStatus('error');
      setTimeout(() => setContenidoStatus('idle'), 3000);
    }
  };

  // Helpers para actualizar el contenido anidado
  const upd = <K extends keyof Contenido>(sec: K, patch: Partial<Contenido[K]>) =>
    setContenido((c) => (c ? { ...c, [sec]: { ...c[sec], ...patch } } : c));

  const updPlan = (id: PlanId, patch: Partial<PlanContenido>) =>
    setContenido((c) =>
      c ? { ...c, planes: { ...c.planes, [id]: { ...c.planes[id], ...patch } } } : c
    );

  const fotoDeSlot = (c: Contenido, slot: FotoSlot): string =>
    slot === 'hero'
      ? c.hero.foto
      : slot === 'sobre'
        ? c.sobre.foto
        : slot === 'plan-basico'
          ? c.planes.basico.foto
          : slot === 'plan-personalizado'
            ? c.planes.personalizado.foto
            : c.planes.presencial.foto;

  const setFotoLocal = (slot: FotoSlot, url: string) => {
    if (slot === 'hero') upd('hero', { foto: url });
    else if (slot === 'sobre') upd('sobre', { foto: url });
    else if (slot === 'plan-basico') updPlan('basico', { foto: url });
    else if (slot === 'plan-personalizado') updPlan('personalizado', { foto: url });
    else updPlan('presencial', { foto: url });
  };

  const subirFoto = async (slot: FotoSlot, file: File) => {
    setFotoStatus((s) => ({ ...s, [slot]: 'subiendo' }));
    try {
      let blob: Blob = file;
      let nombre = `${slot}.jpg`;
      let tipo = 'image/jpeg';
      try {
        blob = await comprimirImagen(file);
      } catch {
        // formato que el navegador no pudo procesar: se sube el original
        blob = file;
        nombre = file.name;
        tipo = file.type || 'image/jpeg';
      }
      if (blob.size > 4.4 * 1024 * 1024) throw new Error('muy grande');

      const fd = new FormData();
      fd.append('slot', slot);
      fd.append('archivo', new File([blob], nombre, { type: tipo }));
      const res = await fetch('/api/admin/foto', { method: 'POST', body: fd });
      if (!res.ok) throw new Error();
      const data = await res.json();
      setFotoLocal(slot, data.url);
      setFotoStatus((s) => ({ ...s, [slot]: 'ok' }));
      setTimeout(() => setFotoStatus((s) => ({ ...s, [slot]: undefined })), 2500);
    } catch {
      setFotoStatus((s) => ({ ...s, [slot]: 'error' }));
      setTimeout(() => setFotoStatus((s) => ({ ...s, [slot]: undefined })), 3500);
    }
  };

  const borrarSuscriptora = async (email: string) => {
    try {
      const res = await fetch('/api/admin/suscriptoras', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) throw new Error();
      const data = await res.json();
      setSuscriptoras(data.suscriptoras);
    } catch {
      // si falla, la lista queda como estaba
    }
  };

  const copiarMails = async () => {
    if (!suscriptoras?.length) return;
    try {
      await navigator.clipboard.writeText(suscriptoras.map((s) => s.email).join(', '));
      setCopiado(true);
      setTimeout(() => setCopiado(false), 2500);
    } catch {
      // sin permiso de portapapeles
    }
  };

  // Gmail limita el largo de la URL: si hay muchos mails, se arma de a grupos
  const gruposGmail: string[][] = [];
  if (suscriptoras) {
    for (let i = 0; i < suscriptoras.length; i += 50) {
      gruposGmail.push(suscriptoras.slice(i, i + 50).map((s) => s.email));
    }
  }

  const botonGuardarContenido = (
    <div className="pt-2">
      <button
        onClick={handleSaveContenido}
        disabled={contenidoStatus === 'saving' || !contenido}
        className="btn-primary w-full disabled:opacity-60"
      >
        {contenidoStatus === 'saving' ? (
          <>
            <Loader2 size={18} className="animate-spin" />
            Guardando...
          </>
        ) : contenidoStatus === 'saved' ? (
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
      {contenidoStatus === 'error' && (
        <p className="text-rose-deeper text-sm text-center mt-3">
          No se pudo guardar. Probá de nuevo.
        </p>
      )}
      <p className="text-charcoal/40 text-xs text-center pt-3">
        Los cambios se ven al instante en la página.
      </p>
    </div>
  );

  const cargando = (
    <div className="flex justify-center py-10">
      <Loader2 size={24} className="animate-spin text-rose-deep" />
    </div>
  );

  return (
    <main className="min-h-screen bg-cream flex items-start justify-center px-4 py-12">
      <div className="absolute top-0 right-1/4 w-72 h-72 bg-rose/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-sage/10 rounded-full blur-3xl pointer-events-none" />

      <div className={`relative w-full ${logged ? 'max-w-3xl' : 'max-w-lg'} my-auto`}>
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
                  Entrá para editar tu página
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
              className="card p-6 md:p-10"
            >
              <div className="flex items-start justify-between mb-6">
                <div>
                  <span className="kicker">Hola Russ</span>
                  <h1 className="text-3xl font-heading font-bold text-charcoal mt-2">
                    Tu <span className="text-accent">página</span>
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

              {/* Pestañas */}
              <div className="flex flex-wrap gap-2 mb-7">
                {TABS.map((t) => (
                  <button
                    key={t.key}
                    onClick={() => setTab(t.key)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                      tab === t.key
                        ? 'bg-rose-deep text-white'
                        : 'bg-cream-50 border border-rose/20 text-charcoal/60 hover:text-rose-deep'
                    }`}
                  >
                    {t.label}
                    {t.key === 'suscriptoras' && suscriptoras ? ` (${suscriptoras.length})` : ''}
                  </button>
                ))}
              </div>

              {/* ─── PRECIOS ─── */}
              {tab === 'precios' &&
                (!precios ? (
                  cargando
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
                      onClick={handleSavePrecios}
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
                ))}

              {/* ─── TEXTOS ─── */}
              {tab === 'textos' &&
                (!contenido ? (
                  cargando
                ) : (
                  <div className="space-y-3">
                    <Seccion
                      titulo="Portada (lo primero que se ve)"
                      abierta={seccionAbierta === 'portada'}
                      onToggle={() => setSeccionAbierta(seccionAbierta === 'portada' ? '' : 'portada')}
                    >
                      <Campo label="Etiqueta de arriba" value={contenido.hero.badge} onChange={(v) => upd('hero', { badge: v })} />
                      <Campo label="Título" value={contenido.hero.titulo} onChange={(v) => upd('hero', { titulo: v })} />
                      <Campo label="Título (parte en rosa)" value={contenido.hero.tituloAccent} onChange={(v) => upd('hero', { tituloAccent: v })} />
                      <Campo label="Frase en cursiva" value={contenido.hero.frase} onChange={(v) => upd('hero', { frase: v })} />
                      <Campo label="Texto descriptivo" textarea value={contenido.hero.subtitulo} onChange={(v) => upd('hero', { subtitulo: v })} />
                      <Campo label="Nota bajo los botones" value={contenido.hero.nota} onChange={(v) => upd('hero', { nota: v })} />
                    </Seccion>

                    <Seccion
                      titulo="¿Te identificás? (preguntas)"
                      abierta={seccionAbierta === 'dolores'}
                      onToggle={() => setSeccionAbierta(seccionAbierta === 'dolores' ? '' : 'dolores')}
                    >
                      <Campo label="Etiqueta" value={contenido.dolores.kicker} onChange={(v) => upd('dolores', { kicker: v })} />
                      <Campo label="Título" value={contenido.dolores.titulo} onChange={(v) => upd('dolores', { titulo: v })} />
                      <Campo label="Título (parte en rosa)" value={contenido.dolores.tituloAccent} onChange={(v) => upd('dolores', { tituloAccent: v })} />
                      <Campo
                        label="Preguntas (una por renglón)"
                        textarea
                        rows={6}
                        value={contenido.dolores.preguntas.join('\n')}
                        onChange={(v) => upd('dolores', { preguntas: v.split('\n') })}
                      />
                      <Campo label="Cita destacada" textarea value={contenido.dolores.cita} onChange={(v) => upd('dolores', { cita: v })} />
                      <Campo label="Lema (abajo de la cita)" value={contenido.dolores.lema} onChange={(v) => upd('dolores', { lema: v })} />
                    </Seccion>

                    <Seccion
                      titulo="Sobre Russ"
                      abierta={seccionAbierta === 'sobre'}
                      onToggle={() => setSeccionAbierta(seccionAbierta === 'sobre' ? '' : 'sobre')}
                    >
                      <Campo label="Etiqueta" value={contenido.sobre.kicker} onChange={(v) => upd('sobre', { kicker: v })} />
                      <Campo label="Título" value={contenido.sobre.titulo} onChange={(v) => upd('sobre', { titulo: v })} />
                      <Campo label="Título (parte en rosa)" value={contenido.sobre.tituloAccent} onChange={(v) => upd('sobre', { tituloAccent: v })} />
                      {contenido.sobre.parrafos.map((p, i) => (
                        <Campo
                          key={i}
                          label={`Párrafo ${i + 1}`}
                          textarea
                          rows={4}
                          value={p}
                          onChange={(v) =>
                            upd('sobre', {
                              parrafos: contenido.sobre.parrafos.map((x, j) => (j === i ? v : x)),
                            })
                          }
                          ayuda={i === 0 ? 'Lo que pongas entre ** ** sale en negrita' : undefined}
                        />
                      ))}
                    </Seccion>

                    <Seccion
                      titulo="Proceso (los 5 pasos)"
                      abierta={seccionAbierta === 'proceso'}
                      onToggle={() => setSeccionAbierta(seccionAbierta === 'proceso' ? '' : 'proceso')}
                    >
                      <Campo label="Etiqueta" value={contenido.proceso.kicker} onChange={(v) => upd('proceso', { kicker: v })} />
                      <Campo label="Título" value={contenido.proceso.titulo} onChange={(v) => upd('proceso', { titulo: v })} />
                      <Campo label="Título (parte en rosa)" value={contenido.proceso.tituloAccent} onChange={(v) => upd('proceso', { tituloAccent: v })} />
                      <Campo label="Texto descriptivo" textarea value={contenido.proceso.subtitulo} onChange={(v) => upd('proceso', { subtitulo: v })} />
                      {contenido.proceso.pasos.map((paso, i) => (
                        <div key={i} className="p-4 rounded-2xl bg-white/60 border border-rose/10 space-y-3">
                          <Campo
                            label={`Paso ${i + 1} — título`}
                            value={paso.titulo}
                            onChange={(v) =>
                              upd('proceso', {
                                pasos: contenido.proceso.pasos.map((x, j) =>
                                  j === i ? { ...x, titulo: v } : x
                                ),
                              })
                            }
                          />
                          <Campo
                            label={`Paso ${i + 1} — descripción`}
                            textarea
                            value={paso.descripcion}
                            onChange={(v) =>
                              upd('proceso', {
                                pasos: contenido.proceso.pasos.map((x, j) =>
                                  j === i ? { ...x, descripcion: v } : x
                                ),
                              })
                            }
                          />
                        </div>
                      ))}
                      <Campo label="Frase de cierre" textarea rows={2} value={contenido.proceso.frase} onChange={(v) => upd('proceso', { frase: v })} />
                    </Seccion>

                    <Seccion
                      titulo="Testimonios"
                      abierta={seccionAbierta === 'testimonios'}
                      onToggle={() => setSeccionAbierta(seccionAbierta === 'testimonios' ? '' : 'testimonios')}
                    >
                      <Campo label="Etiqueta" value={contenido.testimonios.kicker} onChange={(v) => upd('testimonios', { kicker: v })} />
                      <Campo label="Título" value={contenido.testimonios.titulo} onChange={(v) => upd('testimonios', { titulo: v })} />
                      <Campo label="Título (parte en rosa)" value={contenido.testimonios.tituloAccent} onChange={(v) => upd('testimonios', { tituloAccent: v })} />
                      <Campo label="Texto descriptivo" value={contenido.testimonios.subtitulo} onChange={(v) => upd('testimonios', { subtitulo: v })} />
                      {contenido.testimonios.lista.map((t, i) => (
                        <div key={i} className="p-4 rounded-2xl bg-white/60 border border-rose/10 space-y-3">
                          <div className="flex items-end gap-3">
                            <div className="flex-1">
                              <Campo
                                label={`Testimonio ${i + 1} — Instagram`}
                                value={t.handle}
                                onChange={(v) =>
                                  upd('testimonios', {
                                    lista: contenido.testimonios.lista.map((x, j) =>
                                      j === i ? { ...x, handle: v } : x
                                    ),
                                  })
                                }
                              />
                            </div>
                            <button
                              type="button"
                              onClick={() =>
                                upd('testimonios', {
                                  lista: contenido.testimonios.lista.filter((_, j) => j !== i),
                                })
                              }
                              aria-label="Quitar testimonio"
                              className="mb-1 p-2.5 rounded-full text-charcoal/30 hover:text-rose-deep hover:bg-rose/10 transition-colors"
                            >
                              <Trash2 size={16} />
                            </button>
                          </div>
                          <Campo
                            label="Lo que dijo"
                            textarea
                            rows={4}
                            value={t.texto}
                            onChange={(v) =>
                              upd('testimonios', {
                                lista: contenido.testimonios.lista.map((x, j) =>
                                  j === i ? { ...x, texto: v } : x
                                ),
                              })
                            }
                          />
                        </div>
                      ))}
                      {contenido.testimonios.lista.length < 12 && (
                        <button
                          type="button"
                          onClick={() =>
                            upd('testimonios', {
                              lista: [...contenido.testimonios.lista, { handle: '@', texto: '' }],
                            })
                          }
                          className="w-full flex items-center justify-center gap-2 py-3 rounded-2xl border-2 border-dashed border-rose/30 text-rose-deep text-sm font-medium hover:bg-rose/5 transition-colors"
                        >
                          <Plus size={16} />
                          Agregar testimonio
                        </button>
                      )}
                    </Seccion>

                    <Seccion
                      titulo="Guía con código"
                      abierta={seccionAbierta === 'guia'}
                      onToggle={() => setSeccionAbierta(seccionAbierta === 'guia' ? '' : 'guia')}
                    >
                      <Campo label="Etiqueta" value={contenido.guia.kicker} onChange={(v) => upd('guia', { kicker: v })} />
                      <Campo label="Título" value={contenido.guia.titulo} onChange={(v) => upd('guia', { titulo: v })} />
                      <Campo label="Título (parte en rosa)" value={contenido.guia.tituloAccent} onChange={(v) => upd('guia', { tituloAccent: v })} />
                      <Campo label="Texto descriptivo" textarea value={contenido.guia.subtitulo} onChange={(v) => upd('guia', { subtitulo: v })} />
                    </Seccion>

                    <Seccion
                      titulo="Encabezado de Planes"
                      abierta={seccionAbierta === 'planes-titulo'}
                      onToggle={() => setSeccionAbierta(seccionAbierta === 'planes-titulo' ? '' : 'planes-titulo')}
                    >
                      <Campo label="Etiqueta" value={contenido.planes.kicker} onChange={(v) => upd('planes', { kicker: v })} />
                      <Campo label="Título" value={contenido.planes.titulo} onChange={(v) => upd('planes', { titulo: v })} />
                      <Campo label="Título (parte en rosa)" value={contenido.planes.tituloAccent} onChange={(v) => upd('planes', { tituloAccent: v })} />
                      <Campo label="Texto descriptivo" value={contenido.planes.subtitulo} onChange={(v) => upd('planes', { subtitulo: v })} />
                      <Campo label="Frase de cierre" textarea rows={2} value={contenido.planes.frase} onChange={(v) => upd('planes', { frase: v })} />
                    </Seccion>

                    <Seccion
                      titulo="Novedades (suscripción por mail)"
                      abierta={seccionAbierta === 'novedades'}
                      onToggle={() => setSeccionAbierta(seccionAbierta === 'novedades' ? '' : 'novedades')}
                    >
                      <Campo label="Etiqueta" value={contenido.novedades.kicker} onChange={(v) => upd('novedades', { kicker: v })} />
                      <Campo label="Título" value={contenido.novedades.titulo} onChange={(v) => upd('novedades', { titulo: v })} />
                      <Campo label="Título (parte en rosa)" value={contenido.novedades.tituloAccent} onChange={(v) => upd('novedades', { tituloAccent: v })} />
                      <Campo label="Texto descriptivo" textarea value={contenido.novedades.subtitulo} onChange={(v) => upd('novedades', { subtitulo: v })} />
                    </Seccion>

                    <Seccion
                      titulo="Pie de página"
                      abierta={seccionAbierta === 'footer'}
                      onToggle={() => setSeccionAbierta(seccionAbierta === 'footer' ? '' : 'footer')}
                    >
                      <Campo label="Descripción" textarea value={contenido.footer.descripcion} onChange={(v) => upd('footer', { descripcion: v })} />
                      <Campo label="Frase en cursiva" value={contenido.footer.frase} onChange={(v) => upd('footer', { frase: v })} />
                    </Seccion>

                    {botonGuardarContenido}
                  </div>
                ))}

              {/* ─── PLANES (textos de las 3 tarjetas) ─── */}
              {tab === 'planes' &&
                (!contenido ? (
                  cargando
                ) : (
                  <div className="space-y-3">
                    {(
                      [
                        ['basico', 'Plan Online Básico'],
                        ['personalizado', 'Plan Online Personalizado'],
                        ['presencial', 'Plan Presencial + Online'],
                      ] as [PlanId, string][]
                    ).map(([id, etiqueta]) => (
                      <Seccion
                        key={id}
                        titulo={etiqueta}
                        abierta={seccionAbierta === `plan-${id}`}
                        onToggle={() =>
                          setSeccionAbierta(seccionAbierta === `plan-${id}` ? '' : `plan-${id}`)
                        }
                      >
                        <Campo label="Nombre del plan" value={contenido.planes[id].nombre} onChange={(v) => updPlan(id, { nombre: v })} />
                        <Campo label="Frase corta (bajo el nombre)" value={contenido.planes[id].tagline} onChange={(v) => updPlan(id, { tagline: v })} />
                        <Campo
                          label="Qué incluye (un punto por renglón)"
                          textarea
                          rows={8}
                          value={contenido.planes[id].features.join('\n')}
                          onChange={(v) => updPlan(id, { features: v.split('\n') })}
                        />
                        <Campo
                          label="Nota chiquita (opcional)"
                          textarea
                          rows={2}
                          value={contenido.planes[id].nota}
                          onChange={(v) => updPlan(id, { nota: v })}
                        />
                        <Campo label="Texto del botón" value={contenido.planes[id].cta} onChange={(v) => updPlan(id, { cta: v })} />
                      </Seccion>
                    ))}
                    <p className="text-charcoal/40 text-xs text-center">
                      Los precios se cambian en la pestaña Precios, y las fotos en la pestaña Fotos.
                    </p>
                    {botonGuardarContenido}
                  </div>
                ))}

              {/* ─── FOTOS ─── */}
              {tab === 'fotos' &&
                (!contenido ? (
                  cargando
                ) : (
                  <div className="space-y-4">
                    {FOTOS.map(({ slot, label, detalle }) => {
                      const estado = fotoStatus[slot];
                      return (
                        <div
                          key={slot}
                          className="flex items-center gap-4 p-4 rounded-2xl bg-cream-50 border border-rose/10"
                        >
                          <div className="w-16 h-16 rounded-xl overflow-hidden bg-rose/10 shrink-0">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                              src={fotoDeSlot(contenido, slot)}
                              alt={label}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="font-semibold text-charcoal text-sm">{label}</p>
                            <p className="text-charcoal/40 text-xs mt-0.5">{detalle}</p>
                            {estado === 'error' && (
                              <p className="text-rose-deeper text-xs mt-1">
                                No se pudo subir. Probá con otra foto.
                              </p>
                            )}
                          </div>
                          <input
                            ref={(el) => {
                              fileInputs.current[slot] = el;
                            }}
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={(e) => {
                              const file = e.target.files?.[0];
                              if (file) subirFoto(slot, file);
                              e.target.value = '';
                            }}
                          />
                          <button
                            type="button"
                            onClick={() => fileInputs.current[slot]?.click()}
                            disabled={estado === 'subiendo'}
                            className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-white border-2 border-rose/25
                                       text-rose-deep text-sm font-medium hover:border-rose-deep transition-colors
                                       disabled:opacity-60 shrink-0"
                          >
                            {estado === 'subiendo' ? (
                              <>
                                <Loader2 size={15} className="animate-spin" />
                                Subiendo...
                              </>
                            ) : estado === 'ok' ? (
                              <>
                                <Check size={15} />
                                ¡Lista!
                              </>
                            ) : (
                              <>
                                <Camera size={15} />
                                Cambiar
                              </>
                            )}
                          </button>
                        </div>
                      );
                    })}
                    <p className="text-charcoal/40 text-xs text-center pt-2">
                      La foto nueva se guarda y se ve en la página al instante, sin apretar nada más.
                    </p>
                  </div>
                ))}

              {/* ─── SUSCRIPTORAS ─── */}
              {tab === 'suscriptoras' &&
                (!suscriptoras ? (
                  cargando
                ) : suscriptoras.length === 0 ? (
                  <div className="text-center py-10">
                    <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-rose-muted flex items-center justify-center">
                      <Mail size={26} className="text-rose-deep" />
                    </div>
                    <p className="text-charcoal font-semibold">Todavía no hay suscriptoras</p>
                    <p className="text-charcoal/50 text-sm mt-2 max-w-sm mx-auto">
                      Cuando alguien deje su mail en la sección Novedades de tu página,
                      va a aparecer acá.
                    </p>
                  </div>
                ) : (
                  <div className="space-y-5">
                    <div className="flex flex-wrap gap-3">
                      <button
                        type="button"
                        onClick={copiarMails}
                        className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-white border-2 border-rose/25
                                   text-rose-deep text-sm font-medium hover:border-rose-deep transition-colors"
                      >
                        {copiado ? <Check size={15} /> : <Copy size={15} />}
                        {copiado ? '¡Copiados!' : 'Copiar todos los mails'}
                      </button>
                      {gruposGmail.map((grupo, i) => (
                        <a
                          key={i}
                          href={`https://mail.google.com/mail/?view=cm&fs=1&bcc=${encodeURIComponent(grupo.join(','))}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-primary !py-2.5 !px-4 text-sm"
                        >
                          <Mail size={15} />
                          {gruposGmail.length > 1
                            ? `Escribir en Gmail (grupo ${i + 1})`
                            : 'Escribir novedades en Gmail'}
                        </a>
                      ))}
                    </div>

                    <p className="text-charcoal/40 text-xs">
                      El botón abre Gmail con todos los mails ya cargados en CCO (copia oculta):
                      escribís tu novedad una sola vez y les llega a todas, sin que se vean los
                      mails entre sí.
                    </p>

                    <div className="rounded-2xl border border-rose/10 overflow-hidden divide-y divide-rose/10">
                      {suscriptoras.map((s) => (
                        <div
                          key={s.email}
                          className="flex items-center gap-3 px-4 py-3 bg-cream-50"
                        >
                          <Mail size={14} className="text-rose-deep/40 shrink-0" />
                          <span className="flex-1 min-w-0 truncate text-sm text-charcoal">
                            {s.email}
                          </span>
                          <span className="text-charcoal/35 text-xs shrink-0">
                            {new Date(s.fecha).toLocaleDateString('es-AR')}
                          </span>
                          <button
                            type="button"
                            onClick={() => borrarSuscriptora(s.email)}
                            aria-label={`Borrar ${s.email}`}
                            className="p-2 rounded-full text-charcoal/25 hover:text-rose-deep hover:bg-rose/10 transition-colors shrink-0"
                          >
                            <Trash2 size={14} />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}

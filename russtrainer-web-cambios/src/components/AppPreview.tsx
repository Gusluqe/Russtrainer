'use client';

import { motion } from 'framer-motion';

// Vista previa de la app "Mi Rutina": dos pantallas dibujadas con los mismos
// colores y la misma tipografía de la app real, con puntos numerados que
// señalan cada parte.

const APP_FONT = "'Nunito', system-ui, sans-serif";

function Dot({ n, className = '' }: { n: number; className?: string }) {
  return (
    <span
      className={`absolute z-20 w-6 h-6 rounded-full bg-rose-deep text-white text-xs font-bold flex items-center justify-center ring-2 ring-white shadow-md ${className}`}
      aria-hidden="true"
    >
      {n}
    </span>
  );
}

const APP_URL = 'https://russtrainer01-cpu.github.io/RussTrainer-rutina/';

function Phone({ children, label }: { children: React.ReactNode; label: string }) {
  return (
    <a
      href={APP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label + ' (toca para ver la app)'}
      className="relative block transition-transform duration-300 hover:-translate-y-1 w-[270px] sm:w-[290px] shrink-0 rounded-[2.6rem] bg-plum p-2.5 shadow-[0_30px_70px_rgba(59,42,36,0.28)]"
    >
      <div
        className="relative h-[560px] sm:h-[590px] rounded-[2.1rem] overflow-hidden bg-cream"
        style={{ fontFamily: APP_FONT }}
      >
        {children}
      </div>
    </a>
  );
}

function Blobs() {
  return (
    <div aria-hidden="true" className="absolute inset-x-0 top-0 h-72 overflow-hidden pointer-events-none">
      <i className="absolute -left-16 -top-16 w-52 h-52 rounded-full bg-[#d4848f] opacity-40 blur-3xl" />
      <i className="absolute -right-14 -top-10 w-48 h-48 rounded-full bg-[#b98468] opacity-30 blur-3xl" />
      <i className="absolute left-24 top-32 w-48 h-36 rounded-full bg-[#e9c9bd] opacity-60 blur-3xl" />
    </div>
  );
}

function MiniLogo() {
  return (
    <div className="flex items-center gap-2">
      <span className="w-6 h-6 rounded-md border-2 border-[#a85c68] grid place-items-center text-[11px] font-bold text-[#a85c68] font-heading">
        R
      </span>
      <span className="font-heading font-bold text-[15px] text-[#3b2a24]">
        Russ<span className="italic text-[#a85c68] ml-1">Trainer</span>
      </span>
    </div>
  );
}

function PantallaInicio() {
  return (
    <Phone label="Pantalla de inicio de la app: tu rutina del día y tu semana">
      <Blobs />
      <div className="relative px-4 pt-7">
        <MiniLogo />
        <p className="mt-3 text-[26px] leading-none font-semibold text-[#3b2a24]">Hola, Ale</p>

        <div className="relative mt-4 rounded-[22px] px-4 py-4 text-white shadow-[0_14px_30px_rgba(90,58,46,0.3)] bg-gradient-to-br from-[#5a3a2e] via-[#8a5548] to-[#c47a82]">
          <Dot n={1} className="-top-2 -right-2" />
          <p className="text-[10px] font-extrabold tracking-[0.14em] text-[#f1d9d4]">HOY TOCA</p>
          <p className="mt-1 text-[19px] font-black leading-tight">Día 2 - Glúteos</p>
          <p className="text-xs font-bold text-[#f1d9d4]">6 ejercicios</p>
          <span className="mt-3 inline-flex h-9 items-center rounded-full bg-cream px-4 text-[13px] font-black text-[#4a2f27]">
            Empezar →
          </span>
        </div>

        <div className="mt-3 grid grid-cols-2 gap-2.5">
          <div className="rounded-[18px] bg-white/70 py-2.5 text-center shadow-sm">
            <p className="text-xl font-black text-[#a85c68]">1/4</p>
            <p className="text-[9px] font-extrabold tracking-wide text-[#6e655d]">DÍAS ESTA SEMANA</p>
          </div>
          <div className="rounded-[18px] bg-white/70 py-2.5 text-center shadow-sm">
            <p className="text-xl font-black text-[#3f6b3f]">3</p>
            <p className="text-[9px] font-extrabold tracking-wide text-[#6e655d]">DÍAS SEGUIDOS</p>
          </div>
        </div>

        <div className="relative mt-4">
          <Dot n={2} className="-top-3 right-0" />
          <div className="flex items-center gap-2">
            <p className="text-[17px] font-black text-[#3b2a24]">Semana 4</p>
            <span className="rounded-full bg-[#dfe9da] px-2 py-0.5 text-[10px] font-black text-[#2f5a2f]">Actual</span>
          </div>
          <div className="mt-2 flex gap-1">
            <span className="h-1.5 flex-1 rounded bg-[#5b8f6f]" />
            <span className="h-1.5 flex-1 rounded bg-[#d4848f]" />
            <span className="h-1.5 flex-1 rounded bg-[#e4dfd0]" />
            <span className="h-1.5 flex-1 rounded bg-[#e4dfd0]" />
          </div>
          <div className="mt-3 space-y-2">
            {[
              { n: '✓', t: 'Espalda + Hombros', s: 'Completado', bg: 'bg-white/70', dot: 'bg-[#5b8f6f] text-white', sc: 'text-[#3f6b3f]' },
              { n: '2', t: 'Glúteos', s: 'Hoy toca', bg: 'bg-[#f4c9cd]/70', dot: 'bg-[#a85c68] text-white', sc: 'text-[#a85c68]' },
              { n: '3', t: 'Tríceps + Abs', s: 'Pendiente', bg: 'bg-white/70', dot: 'border-2 border-[#b9b0a0] text-[#6e655d]', sc: 'text-[#6e655d]' },
            ].map((d) => (
              <div key={d.t} className={`flex items-center gap-2.5 rounded-2xl px-3 py-2 ${d.bg}`}>
                <span className={`w-6 h-6 shrink-0 rounded-full text-[11px] font-black flex items-center justify-center ${d.dot}`}>{d.n}</span>
                <div className="min-w-0">
                  <p className="text-[13px] font-black text-[#3b2a24] truncate">{d.t}</p>
                  <p className={`text-[11px] font-bold ${d.sc}`}>{d.s}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Phone>
  );
}

function PantallaRutina() {
  return (
    <Phone label="Pantalla de un ejercicio: video, descanso, series y registro">
      <Blobs />
      <div className="relative px-4 pt-6">
        <div className="flex items-center gap-2">
          <span className="text-[10px] font-black text-[#6e655d]">Rutina de hoy</span>
          <span className="relative h-1.5 flex-1 rounded bg-[#efe6e2] overflow-hidden">
            <span className="absolute inset-y-0 left-0 w-1/3 rounded bg-gradient-to-r from-[#e9c9bd] to-[#d4848f]" />
          </span>
          <span className="text-[10px] font-black text-[#3b2a24]">33%</span>
        </div>
        <p className="mt-3 text-[22px] leading-none font-semibold text-[#3b2a24]">Día 2 - Glúteos</p>

        <div className="relative mt-3 rounded-[24px] bg-white/80 p-3.5 shadow-[0_12px_30px_rgba(59,42,36,0.1)]">
          <div className="relative">
            <Dot n={3} className="-top-2 -right-2" />
            <p className="text-[15px] font-extrabold text-[#3b2a24]">Hip Thrust</p>
            <p className="text-xs font-semibold text-[#6e655d]">Objetivo: 3 series × 12 · 20kg</p>
          </div>

          <div className="relative mt-2.5 flex gap-1.5">
            <Dot n={4} className="-top-2 left-24" />
            <span className="whitespace-nowrap rounded-full bg-[#f4e6e6] px-3 py-1.5 text-[11px] font-extrabold text-[#3b2a24]">🎥 Técnica</span>
            <span className="relative whitespace-nowrap rounded-full bg-[#f4e6e6] px-3 py-1.5 text-[11px] font-extrabold text-[#3b2a24]">
              <Dot n={5} className="-top-3 right-0" />
              ⏱️ Descanso
            </span>
          </div>

          <div className="relative mt-3 flex items-center gap-3">
            <Dot n={6} className="-top-3 left-24" />
            <span className="w-9 h-9 rounded-full bg-[#f4e6e6] flex items-center justify-center text-[#a85c68] font-black">−</span>
            <span className="whitespace-nowrap text-base font-black text-[#3b2a24]">1 / 3</span>
            <span className="w-9 h-9 rounded-full bg-[#d4848f] flex items-center justify-center text-[#1a0d0f] font-black">+</span>
            <span className="ml-auto whitespace-nowrap rounded-full bg-[#f4e6e6] px-2.5 py-2 text-[11px] font-extrabold text-[#3b2a24]">✓ Lo cumplí</span>
          </div>

          <div className="relative mt-3 grid grid-cols-4 gap-1.5">
            <Dot n={7} className="-top-3 -right-2" />
            {['😌', '👍', '😮‍💨', '🥵'].map((e, i) => (
              <span
                key={e}
                className={`h-9 rounded-full flex items-center justify-center text-base ${i === 1 ? 'bg-[#d4848f]' : 'bg-[#f4e6e6]'}`}
              >
                {e}
              </span>
            ))}
          </div>

          <div className="relative mt-3">
            <Dot n={8} className="-top-3 -right-2" />
            <div className="h-9 rounded-full bg-white px-3 text-xs font-semibold text-[#6e655d] flex items-center shadow-[inset_0_0_0_1.5px_#eadcdc]">Peso que usaste (kg): 20</div>
          </div>

          <div className="relative mt-3">
            <Dot n={9} className="-top-3 -right-2" />
            <span className="flex h-10 items-center justify-center rounded-full bg-[#4a2f27] text-sm font-black text-cream">Registrar</span>
          </div>
        </div>

        <div className="mt-3 rounded-[24px] bg-white/80 p-3.5 shadow-[0_12px_30px_rgba(59,42,36,0.1)]">
          <p className="text-[15px] font-extrabold text-[#3b2a24]">Clamshell con mancuerna</p>
          <p className="text-xs font-semibold text-[#6e655d]">Objetivo: 3 series × 15 · 5kg</p>
          <span className="mt-2.5 inline-block whitespace-nowrap rounded-full bg-[#f4e6e6] px-3 py-1.5 text-[11px] font-extrabold text-[#3b2a24]">🎥 Técnica</span>
        </div>
      </div>
    </Phone>
  );
}

const LEYENDA_INICIO = [
  'Tu rutina del día, lista para empezar',
  'Tu semana: lo que ya hiciste y lo que viene',
];
const LEYENDA_EJERCICIO = [
  'El ejercicio, con tus series y repeticiones',
  'El video para ver cómo se hace',
  'El tiempo de descanso, con aviso al terminar',
  'Anotás cada serie que hacés',
  'Cómo te sentiste: fácil, justo, difícil o al límite',
  'El peso que usaste, y un comentario para mí',
  'Registrás y queda guardado en tu progreso',
];

export default function AppPreview() {
  return (
    <section id="app" className="relative py-12 md:py-24 lg:py-28 overflow-hidden bg-cream-100">
      <div className="absolute -top-10 -left-10 w-64 h-64 bg-rose/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-nude/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="kicker">Tu app</span>
          <h2 className="section-title mt-4 mb-5">
            Así vas a entrenar <span className="text-accent">con tu app</span>
          </h2>
          <p className="text-charcoal/60 text-lg max-w-2xl mx-auto">
            Entrás con tu nombre y ves tu rutina del día. Cada ejercicio tiene su video, su tiempo de descanso y un lugar para registrar cómo te fue.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[auto_1fr] gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-6"
          >
            <PantallaInicio />
            <div className="sm:mt-14">
              <PantallaRutina />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <p className="font-heading font-bold text-charcoal text-xl mb-3">En el inicio</p>
            <ol className="space-y-3 mb-8">
              {LEYENDA_INICIO.map((t, i) => (
                <li key={t} className="flex items-start gap-3">
                  <span className="w-6 h-6 shrink-0 rounded-full bg-rose-deep text-white text-xs font-bold flex items-center justify-center mt-0.5">{i + 1}</span>
                  <span className="text-charcoal/75">{t}</span>
                </li>
              ))}
            </ol>
            <p className="font-heading font-bold text-charcoal text-xl mb-3">En cada ejercicio</p>
            <ol className="space-y-3" start={3}>
              {LEYENDA_EJERCICIO.map((t, i) => (
                <li key={t} className="flex items-start gap-3">
                  <span className="w-6 h-6 shrink-0 rounded-full bg-rose-deep text-white text-xs font-bold flex items-center justify-center mt-0.5">{i + 3}</span>
                  <span className="text-charcoal/75">{t}</span>
                </li>
              ))}
            </ol>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a href={APP_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
                Ver cómo es la app
              </a>
              <a href="#planes" className="font-semibold text-rose-deep underline underline-offset-4">
                Quiero empezar
              </a>
            </div>
            <p className="mt-3 text-sm text-charcoal/60">Toca cualquier pantalla para verla funcionando.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

# DESIGN.md — RussTrainer

## Color

Estrategia: **Committed rose** sobre crema. El rosa carga la identidad.

- `cream #FCFCF7` fondo base (50/100/200/300 para capas)
- `rose #E8A4A4` tinte suave (fondos, bordes, glows) — nunca como texto chico ni botón
- `rose-deep #B85C68` la voz: CTAs, acentos tipográficos, badges
- `rose-deeper #A34D59` hover y texto chico sobre crema (contraste ≥4.5)
- `nude #D4A99A` secundario cálido
- `sage #B8C9B5` respiro verde, uso mínimo
- `charcoal #2D2D2D` texto
- `plum #33222A` oscuro cálido del footer (carbón entibiado a rosa, nunca negro neutro)

## Tipografía

- Headings: **Playfair Display** (identidad ya establecida, se conserva)
- Body: **DM Sans**
- Acento emocional: Playfair **italic** en `rose-deep` (`.text-accent`). Reemplaza al viejo gradient-text, que está prohibido.

## Componentes

- `.btn-primary` — rose-deep, pill, hover rose-deeper con glow rosa
- `.btn-secondary` — borde rose-deep, pill
- `.kicker` — label uppercase tracking-widest en rose-deeper con ornamentos ✦ a los lados
- `.card` — blanco, rounded-3xl, sombra suave, borde rose/10

## Motion

- framer-motion: reveals con fade+y, ease-out. Nada de bounce.
- Sparkles flotantes (✦) solo en el hero, sutiles, aria-hidden.

## Prohibido

- Gradient text (background-clip: text)
- `#000` / `#fff` puros en superficies grandes nuevas
- Rosa pálido (#E8A4A4) como color de texto o botón: no contrasta

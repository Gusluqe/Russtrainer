# RussTrainer - Landing Page Premium

Landing page profesional y moderna para marca personal de fitness "RussTrainer".

## Stack Tecnológico

- **Next.js 14** - Framework de React con Server Components
- **React 18** - Librería de interfaz de usuario
- **Tailwind CSS 3** - Framework de estilos
- **Framer Motion** - Librería de animaciones
- **TypeScript** - Lenguaje tipado
- **Lucide React** - Librería de íconos

## Características

- Diseño moderno y premium estilo 2026
- Mobile-first y fully responsive
- Animaciones suaves con Framer Motion
- SEO optimizado con Open Graph
- Botón flotante de WhatsApp
- Video background en hero section
- Glassmorphism y efectos visuales modernos
- Formulario de contacto funcional
- FAQ con acordeón animado
- Secciones: Hero, About, Servicios, Plans, Resultados, Testimonios, FAQ, Contacto

## Estructura del Proyecto

```
RussTrainer/
├── src/
│   ├── app/
│   │   ├── globals.css      # Estilos globales y componentes Tailwind
│   │   ├── layout.tsx       # Layout principal con metadata SEO
│   │   └── page.tsx        # Página principal
│   └── components/
│       ├── About.tsx       # Sección "Sobre Russ"
│       ├── Contact.tsx     # Sección de contacto
│       ├── FAQ.tsx         # Preguntas frecuentes
│       ├── Footer.tsx       # Footer
│       ├── FreeWeek.tsx    # Sección primera semana gratis
│       ├── Hero.tsx        # Hero con video background
│       ├── HowWeWork.tsx   # Sección "Cómo trabajamos"
│       ├── Logo.tsx        # Logo SVG
│       ├── Navbar.tsx      # Navegación sticky
│       ├── Plans.tsx       # Sección de planes
│       ├── Results.tsx     # Sección de resultados
│       ├── Services.tsx    # Sección de servicios
│       ├── Testimonials.tsx # Testimonios
│       └── WhatsAppButton.tsx # Botón flotante
├── public/
├── next.config.js
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── tsconfig.json
└── README.md
```

## Instalación

1. Clonar o descargar el proyecto
2. Instalar dependencias:

```bash
npm install
```

3. Ejecutar en desarrollo:

```bash
npm run dev
```

4. Abrir [http://localhost:3000](http://localhost:3000)

## Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Construye la aplicación para producción
- `npm run start` - Inicia el servidor de producción
- `npm run lint` - Ejecuta el linter

## Configuración

### WhatsApp

El número de WhatsApp está configurado como: `5491131491877` (Argentina)

Para cambiar el número, buscar y reemplazar `5491131491877` en:
- `src/components/Navbar.tsx`
- `src/components/Hero.tsx`
- `src/components/Footer.tsx`
- `src/components/Services.tsx`
- `src/components/FreeWeek.tsx`
- `src/components/Plans.tsx`
- `src/components/Results.tsx`
- `src/components/FAQ.tsx`
- `src/components/Contact.tsx`
- `src/components/WhatsAppButton.tsx`

### Instagram

URL: `https://instagram.com/russ.trainer`

Para cambiar, buscar y reemplazar `russ.trainer` en los archivos mencionados.

### Telegram

El botón de Telegram está preparado pero deshabilitado. Para habilitarlo:
1. Obtener un username de Telegram confirmado
2. Crear una constante `TELEGRAM_URL` con el enlace `https://t.me/username`
3. En los archivos, cambiar `TELEGRAM_URL = null` por el valor correcto

## Personalización

### Imágenes y Videos

El hero usa un video de Mixkit como placeholder. Para cambiarlo:
1. Reemplazar la URL del video en `src/components/Hero.tsx`
2. Cambiar también el `poster` para dispositivos que no soporten video

Imágenes placeholder de Unsplash están marcadas para替换 con fotos reales.

### Colores

Los colores principales están definidos en `tailwind.config.js`:
- Primary: `#00ff88` (verde lima)
- Dark: `#0a0a0a` (negro)
- Accent Blue: `#00d4ff` (azul eléctrico)

### Tipografías

- Headings: Bebas Neue (Google Fonts)
- Body: Inter (Google Fonts)

## Deploy

### Vercel (Recomendado)

1. Subir el proyecto a GitHub
2. Conectar con Vercel
3. Deploy automático

### Build Local

```bash
npm run build
npm start
```

## Performance

- Imágenes optimizadas con Next.js Image
- Tipografías con display: swap
- Lazy loading de componentes
- Código splitted automáticamente

## Compatibilidad

- Chrome 90+
- Firefox 90+
- Safari 14+
- Edge 90+
- Mobile (iOS Safari 14+, Chrome Android 90+)

## Licencia

Proyecto privado para RussTrainer © 2026

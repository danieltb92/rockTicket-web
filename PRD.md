# RockTicket Web — Product Requirements Document

## 1. Purpose

Landing page promocional para **RockTicket**, una aplicación móvil de compra de entradas para conciertos y festivales de rock. El sitio funciona como carta de presentación del producto, mostrando sus funcionalidades principales y dirigiendo a los usuarios a descargar la app.

## 2. Goals

| Objetivo | Métrica |
|----------|---------|
| Atraer usuarios a la app | Tasa de clics en CTAs de descarga |
| Comunicar valor del producto | Tiempo en página, scroll depth |
| Carga rápida en cualquier dispositivo | Lighthouse Performance > 90 |
| SEO para búsquedas de conciertos | Core Web Vitals verdes |

## 3. Functional Requirements

### 3.1 Hero Section
- Video de fondo full-bleed (rock concert footage)
- Título principal con animación de entrada
- Botones CTA: App Store y Google Play
- Efecto de glow en textos y bordes

### 3.2 Features Section
- Grid de tarjetas destacando funcionalidades:
  - Compra de entradas
  - Notificaciones de eventos
  - Escaneo QR en acceso
- Mockups de la app en dispositivos
- Animaciones al hacer scroll (reveal)

### 3.3 Carousel / Gallery
- Carrusel de imágenes del producto
- Slider automático con pausa en hover
- Navegación manual (dots / arrows)

### 3.4 Video Section
- Video promocional embebido
- Controles de reproducción
- Lazy loading para rendimiento

### 3.5 CTA Section
- Llamado a la acción final con mockup
- Botones de descarga destacados
- Efecto de acento visual

### 3.6 Slider de Palabras
- Texto animado tipo marquee con términos clave ("Rock", "Conciertos", "Festivales", etc.)

### 3.7 Header & Navigation
- Logo + navegación responsive
- Menú mobile hamburguesa
- Transparencia con blur al hacer scroll

### 3.8 Footer
- Enlaces a redes sociales
- Información legal / copyright
- Diseño consistente con el theme oscuro

## 4. Non-Functional Requirements

### 4.1 Performance
- Astro Islands Architecture (mínimo JS posible)
- Imágenes optimizadas con Sharp
- Lazy loading en secciones below-fold
- Puntuación Lighthouse > 90 en todas las categorías

### 4.2 SEO
- Meta tags OG para redes sociales
- Datos estructurados (Schema.org)
- Canonical URLs
- `sitemap.xml` generado por Astro

### 4.3 Responsive Design
- Mobile-first
- Breakpoints: sm 640px, md 768px, lg 1024px, xl 1280px
- Navegación adaptativa

### 4.4 Accesibilidad
- Skip-to-content link
- Roles ARIA en componentes interactivos
- Contraste mínimo 4.5:1
- Navegación por teclado

### 4.5 Animaciones
- Motion (react) para interactividad
- Animaciones significativas (scroll reveals, hover states)
- `prefers-reduced-motion` soportado

## 5. Technical Architecture

### 5.1 Stack

| Capa | Tecnología |
|------|-----------|
| Framework | Astro 6.x |
| UI Interactiva | React 19.x |
| Estilos | Tailwind CSS 4.x (CSS-based) |
| Animaciones | Motion 12.x |
| Package Manager | pnpm |
| Type System | TypeScript |

### 5.2 Estructura

```
src/
├── assets/              # Imágenes, íconos, videos
├── components/
│   ├── icons/           # Wrappers Astro de SVG
│   ├── islands/         # React components (client:load)
│   ├── layout/          # Header, Footer
│   ├── sections/        # Secciones de página
│   └── ui/              # Primitivas reutilizables
├── layouts/             # Layout base
├── pages/               # Rutas (index.astro)
└── styles/              # Tema Tailwind v4 (@theme, @utility)
```

### 5.3 Static Generation

- `output: static` (SSG)
- Despliegue a GitHub Pages via GitHub Actions
- Base URL: `/rockTicket-web`

## 6. Design System

### 6.1 Colors
- **Primary**: `#141454` (deep blue)
- **Secondary**: `#007E7C` (teal)
- **Accent**: `#00CDC8` (bright teal)
- **Surface**: `#000000`
- Escalas definidas en `DESIGN.md` y `src/styles/global.css`

### 6.2 Typography
- **Headings**: Squada One (bold, industrial)
- **Body**: Source Sans Pro / Source Sans 3
- **Fallbacks**: Inter, Geist, JetBrains Mono

### 6.3 Spacing
- Base unit: 4px
- Escala: 0, 4, 8, 12, 16, 20, 24, 32, 40, 48, 64px

## 7. Roadmap

### v1 — Lanzamiento
- [x] Hero con video
- [x] Sección de features
- [x] Carousel de imágenes
- [x] Video promocional
- [x] CTA final
- [x] Slider de palabras
- [x] Header y Footer
- [x] Tema oscuro con Tailwind v4
- [x] Animaciones con Motion
- [x] Despliegue automatizado a GitHub Pages

### v2 — Próximas iteraciones
- [ ] Página de detalles de concierto (dinámica)
- [ ] Integración con CMS para contenido
- [ ] Modo i18n (EN / ES)
- [ ] PWA con service worker
- [ ] Analytics (Vercel / PostHog)
- [ ] Tests unitarios con Vitest
- [ ] Storybook para el design system

### v3 — Futuro
- [ ] Integración con API de ticketera
- [ ] Búsqueda de eventos
- [ ] Página de artista individual
- [ ] Dashboard de admin (Astro + React)

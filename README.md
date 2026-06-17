# RockTicket Web

Landing page para la compra de entradas de conciertos y festivales de rock. Construida con Astro 6, React, Tailwind CSS v4 y Motion.

## Stack

| Tecnología     | Versión |
| -------------- | ------- |
| Astro          | 6.x     |
| React          | 19.x    |
| Tailwind CSS   | 4.x     |
| Motion         | 12.x    |
| pnpm           | —       |
| TypeScript     | —       |

## Comandos

| Comando           | Acción                              |
| :---------------- | :---------------------------------- |
| `pnpm dev`        | Inicia servidor local en `:4321`    |
| `pnpm build`      | Compila producción a `./dist/`      |
| `pnpm preview`    | Previsualiza el build localmente    |
| `pnpm astro check`| Ejecuta type checking de Astro      |

## Estructura

```
src/
├── assets/           # Íconos, imágenes, videos
├── components/
│   ├── icons/        # Wrappers Astro de íconos SVG
│   ├── islands/      # Componentes React con hidratación
│   ├── layout/       # Header, Footer
│   ├── sections/     # Secciones de página (Hero, CTA, etc.)
│   └── ui/           # Primitivas reutilizables
├── layouts/          # Shell de página
├── pages/            # Rutas
└── styles/           # CSS global + tema Tailwind v4
```

## Tema

Configuración Tailwind v4 vía `@theme` en `src/styles/global.css`. Incluye colores (primary, secondary, accent, surface), tipografías personalizadas (Squada One, Source Sans, Inter, Geist) y utilidades como `btn-primary`, `glass-card` y `text-gradient`.

## Despliegue

Automatizado con GitHub Actions. Cada push a `main` construye el sitio y lo publica en GitHub Pages:

[https://danieltb92.github.io/rockTicket-web](https://danieltb92.github.io/rockTicket-web)

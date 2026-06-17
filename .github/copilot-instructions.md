# AGENTS.md - rockTicket-web

## Project Overview

This is an Astro project with React and Tailwind CSS for a rock concert ticket landing page.

**Tech Stack:**
- Astro 6.x with React integration
- Tailwind CSS v4 (CSS-based configuration via `@theme`)
- TypeScript
- Motion (framer-motion) for animations
- pnpm (package manager)

---

## Commands

### Development
```bash
pnpm dev          # Start local dev server at localhost:4321
pnpm start        # Alias for dev
```

### Build & Preview
```bash
pnpm build         # Build production site to ./dist/
pnpm preview       # Preview build locally
pnpm astro check   # Run Astro type checking
```

### Adding Integrations
```bash
pnpm astro add react    # Add React integration
pnpm astro add tailwind # Add Tailwind integration
```

### Testing
No test framework is currently configured. To add tests:
```bash
# Install Vitest (recommended for Astro)
pnpm add -D vitest @testing-library/react @testing-library/jest-dom jsdom

# Run all tests
pnpm vitest run

# Run a single test file
pnpm vitest run src/components/__tests__/Button.test.tsx

# Run tests in watch mode
pnpm vitest
```

---

## Code Style Guidelines

### General Principles
- Write clean, concise code without unnecessary comments
- Use functional components and hooks in React
- Prefer Astro components for static content, React for interactive UI

### File Naming
- **Astro components**: `PascalCase.astro` (e.g., `Button.astro`, `SectionVideo.astro`)
- **React islands**: `PascalCase.tsx` in `src/components/islands/` (e.g., `HeroAnimated.tsx`)
- **Icon components**: `PascalCase.astro` in `src/components/icons/` (e.g., `AppStore.astro`)
- **Assets**: `src/assets/` — SVG/icons in `icons/`, images in `images/<section>/`, media at root or `media/`

### Component Structure

#### Astro Components
```astro
---
// Frontmatter: imports, types, props
import Component from './Component';
export interface Props {
  title: string;
}
const { title = 'Default' } = Astro.props;
---

<!-- Template -->
<div>{title}</div>
```

#### React Components
```tsx
import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import type { FC } from 'react';

interface Props {
  title: string;
}

export default function Component({ title }: Props) {
  return <div>{title}</div>;
}
```

### TypeScript Guidelines
- Use TypeScript for all React components (`.tsx` preferred over `.jsx`)
- Define interfaces for component props
- Use Astro's built-in type checking with `astro check`
- Prefer explicit return types for functions

```tsx
interface ButtonProps {
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
  children: React.ReactNode;
}

export const Button: FC<ButtonProps> = ({ variant = 'primary', children }) => {
  return <button className={`btn btn-${variant}`}>{children}</button>;
};
```

### Imports
- Order imports logically: external libs, then relative paths
- Use absolute imports for internal modules when configured
- Import types separately when needed: `import { type FC } from 'react'`

```tsx
// External libraries first
import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

// Internal components
import Button from '../components/Button';
import type { ButtonProps } from '../types';
```

### Tailwind CSS v4
- Tailwind v4 uses CSS-based configuration via `@theme` directive in `src/styles/global.css`
- No `tailwind.config.*` file — all theme values defined in CSS
- Use `@utility` for custom component classes (e.g., `btn-primary`, `glass-card`)
- Use utility classes consistently
- Group related classes logically
- Custom fonts: `font-squada`, `font-sourceSans`, `font-inter`, `font-jetbrains`, `font-geist`, `font-geist-mono`

```html
<div class="font-squada font-bold text-h1 text-secondary">Text</div>
```

### Animations (Motion)
- Use `motion.` prefix for animated elements
- Keep animation configs consistent
- Import from `motion/react` (not `framer-motion`)

```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, ease: 'easeOut' }}
>
```

### Error Handling
- Use try/catch for async operations
- Provide fallback UI for error states
- Handle loading states with conditional rendering

```tsx
const [data, setData] = useState<Data | null>(null);
const [loading, setLoading] = useState(true);
const [error, setError] = useState<string | null>(null);

useEffect(() => {
  fetchData()
    .then(setData)
    .catch((err) => setError(err.message))
    .finally(() => setLoading(false));
}, []);
```

### Accessibility
- Always include `alt` attributes for images
- Use semantic HTML elements
- Ensure proper contrast ratios with defined colors

---

## Project Structure

```
src/
├── assets/              # Static files processed by Astro
│   ├── icons/           # Raw SVGs (app-store, google-play, menu, …)
│   ├── images/          # PNG/SVG by section (carousel/, features-img/, sectionCTA/, …)
│   └── favicon.svg
├── components/
│   ├── icons/           # Astro icon wrappers (.astro)
│   ├── islands/         # React components with client hydration
│   ├── layout/          # Header, Footer
│   ├── sections/        # Page sections (Hero, SectionVideo, SectionCTA, …)
│   └── ui/              # Reusable primitives (Button, Carousel, FeatureCard, …)
├── layouts/             # Page shells
├── pages/               # Routes
├── styles/              # Global CSS (Tailwind v4 @theme configuration)
└── env.d.ts
```

### Import aliases

Use path aliases configured in `astro.config.mjs` and `tsconfig.json`:

- `@/...` — src root
- `@components/...` — components
- `@assets/...` — images, icons, video
- `@layouts/...` — layouts
- `@styles/...` — styles

---

## Configuration Files

- `astro.config.mjs` - Astro configuration (integrations, Vite plugins, path aliases)
- `tsconfig.json` - TypeScript base config (extends `astro/tsconfigs/base`)
- `src/styles/global.css` - Tailwind v4 theme via `@theme`, custom utilities via `@utility`
- `pnpm-workspace.yaml` - pnpm workspace config (build allowances for esbuild, sharp)

### Tailwind v4 Theme Reference

Theme defined in `src/styles/global.css` using `@theme`:

**Colors:** primary, secondary, accent, surface, neutral, white + scales
**Fonts:** squada, sourceSans, inter, jetbrains, geist, geist-mono
**Typography:** h1 (40px), h2 (32px), h3 (24px), h4 (18px), h5 (14px), title-h1 (60px), title-h2 (40px)
**Spacing:** 0–16 range (4px base), plus padding-desktop (32px), padding-mobile (16px)
**Border Radius:** none, xs (4px), sm (6px), md (8px), lg (12px), xl (16px), full (999px)

Use `@utility` classes: `section-container`, `btn-primary`, `glow-accent`, `glow-line`, `section-divider`, `glass-card`, `text-gradient`

---

## Best Practices

1. **Static vs Interactive**: Use Astro components for static content, React only where interactivity is needed
2. **Performance**: Optimize images, use lazy loading for below-fold content
3. **Responsive**: Design for mobile-first, use Tailwind breakpoints (default + custom `md: 768px`)
4. **Keep it simple**: Avoid over-engineering; Astro is designed for simplicity
5. **Type safety**: Run `pnpm astro check` before committing to catch type errors
6. **pnpm**: Always use `pnpm` for package management (never npm or yarn)

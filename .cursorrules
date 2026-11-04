# AGENTS.md - rockTicket-web

## Project Overview

This is an Astro project with React and Tailwind CSS for a rock concert ticket landing page.

**Tech Stack:**
- Astro 4.x with React integration
- Tailwind CSS for styling
- TypeScript
- Motion (framer-motion) for animations

---

## Commands

### Development
```bash
npm run dev      # Start local dev server at localhost:4321
npm run start    # Alias for dev
```

### Build & Preview
```bash
npm run build          # Build production site to ./dist/
npm run preview        # Preview build locally
npm run astro check    # Run Astro type checking
```

### Adding Integrations
```bash
npx astro add react    # Add React integration
npx astro add tailwind # Add Tailwind integration
```

### Testing
No test framework is currently configured. To add tests:
```bash
# Install Vitest (recommended for Astro)
npm install -D vitest @testing-library/react @testing-library/jest-dom jsdom

# Run all tests
npx vitest run

# Run a single test file
npx vitest run src/components/__tests__/Button.test.tsx

# Run tests in watch mode
npx vitest
```

---

## Code Style Guidelines

### General Principles
- Write clean, concise code without unnecessary comments
- Use functional components and hooks in React
- Prefer Astro components for static content, React for interactive UI

### File Naming
- **Astro components**: `PascalCase.astro` (e.g., `Button.astro`, `SectionVideo.astro`)
- **React islands**: `PascalCase.jsx` or `.tsx` in `src/components/islands/` (e.g., `Hero2.jsx`)
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
import { motion } from 'framer-motion';
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
import { motion } from 'framer-motion';

// Internal components
import Button from '../components/Button';
import type { ButtonProps } from '../types';
```

### Tailwind CSS
- Use utility classes consistently
- Group related classes logically
- Use semantic color names from `tailwind.config.mjs`:
  - `primary`, `secondary`, `tertiary`, etc.
- Custom fonts: `font-inter`, `font-jetbrains`, `font-geist`, `font-geist-mono`

```html
<div class="font-geist font-bold text-8xl text-secondary">Text</div>
```

### Animations (Motion/framer-motion)
- Use `motion.` prefix for animated elements
- Keep animation configs consistent

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
│   ├── dev/             # Experimental / WIP (Test, prototypes)
│   ├── icons/           # Astro icon wrappers (.astro)
│   ├── islands/         # React components with client hydration
│   ├── layout/          # Header, Footer
│   ├── sections/        # Page sections (Hero, SectionVideo, SectionCTA, …)
│   └── ui/              # Reusable primitives (Button, Carousel, FeatureCard, …)
├── layouts/             # Page shells
└── pages/               # Routes
```

### Import aliases

Use path aliases configured in `astro.config.mjs` and `tsconfig.json`:

- `@components/...` — components
- `@assets/...` — images, icons, video
- `@layouts/...` — layouts

---

## Configuration Files

- `astro.config.mjs` - Astro configuration
- `tailwind.config.mjs` - Tailwind theme with custom colors/fonts
- `tsconfig.json` - TypeScript base config (extends `astro/tsconfigs/base`)

---

## Best Practices

1. **Static vs Interactive**: Use Astro components for static content, React only where interactivity is needed
2. **Performance**: Optimize images, use lazy loading for below-fold content
3. **Responsive**: Design for mobile-first, use Tailwind breakpoints (default + custom `md: 769px`)
4. **Keep it simple**: Avoid over-engineering; Astro is designed for simplicity
5. **Type safety**: Run `npm run astro check` before committing to catch type errors

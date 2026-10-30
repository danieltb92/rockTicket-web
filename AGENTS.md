# AGENTS.md

Compact instructions for working on the RockTicket Web repository.

## Project Overview
Landing page for RockTicket mobile app, built with **Astro 6** (SSG), **React 19**, **Tailwind CSS v4**, and **Motion**.

## Key Commands
| Action | Command |
| :--- | :--- |
| Start Dev Server | `pnpm dev` |
| Build Production | `pnpm build` |
| Type Checking | `pnpm astro check` |

## Technical Quirks & Constraints
- **Tailwind v4**: Uses the `@theme` and `@utility` directives in `src/styles/global.css` instead of `tailwind.config.js`. Do not look for a config file.
- **Base Path**: The site is served from the **root (/)**. Do not hardcode `/rockTicket-web/` in any paths.
- **Rendering**: Static Site Generation (SSG).
- **Environment**: Managed via Vercel.

## Important Patterns
- **Layouts**: Use `src/layouts/Layout.astro` for global structure (Head, Metadata).
- **Components**: 
  - `src/components/islands/`: React components requiring hydration (use `client:*` directives).
  - `src/components/sections/`: Primary layout sections.
- **Styles**: Theme defined in `src/styles/global.css`.

## Deployment
- Automated via **Vercel** on push to `main`.

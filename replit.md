# Maryam Babaee Portfolio

A multi-page personal academic portfolio website for Maryam Babaee — PhD researcher in Educational Technology and Learning Experience Designer.

## Run & Operate

- `pnpm --filter @workspace/portfolio run dev` — run the portfolio (port auto-assigned)
- `pnpm --filter @workspace/api-server run dev` — run the API server (port 5000)
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- Frontend: React 19 + Vite + Wouter (routing) + Framer Motion (animations)
- UI: Tailwind CSS v4, shadcn/ui components
- API: Express 5 (shared API server)
- Fonts: Playfair Display (serif headings) + Inter (sans body) via Google Fonts

## Where things live

- `artifacts/portfolio/src/pages/` — all 7 page components (home, research, projects, teaching, notes, cv, contact)
- `artifacts/portfolio/src/components/layout/` — Navbar + Footer
- `artifacts/portfolio/src/index.css` — theme tokens (warm cream/terracotta palette)
- `artifacts/portfolio/src/App.tsx` — router setup

## Architecture decisions

- Presentation-first site: all content is hardcoded, no backend API calls needed
- Framer Motion used throughout for scroll-triggered reveals, staggered entrance, and hover transitions
- AI-generated portrait and project images embedded as static public assets
- React Icons replaced with lucide-react (SiLinkedin was incompatible with react-icons v5)
- Single `artifacts/portfolio` at root previewPath `/` for clean top-level URL

## Product

Seven-page academic portfolio: Home (hero + research previews + projects + publications), Research (thematic paper sections), Projects (visual grid with generated images), Teaching & Design, Notes (journal/blog), CV (academic layout), Contact (form + links).

## User preferences

_Populate as you build — explicit user instructions worth remembering across sessions._

## Gotchas

- react-icons v5 removed SiLinkedin — use lucide-react Linkedin instead
- Google Fonts @import must be the VERY FIRST line of index.css (before @import "tailwindcss")
- CSS custom properties use space-separated HSL values (no hsl() wrapper) in :root

## Pointers

- See the `pnpm-workspace` skill for workspace structure and TypeScript setup
- See the `react-vite` skill for frontend development guidelines

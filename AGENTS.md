# AGENTS.md

## Cursor Cloud specific instructions

This repo contains engineering docs (`docs/`) and a functional frontend prototype (`web/`).
There is **no backend** — the prototype uses in-memory mock data (`web/src/data/`).

### Web prototype (`web/`)

- Stack: React 18 + TypeScript + Vite 5 + Tailwind, package manager **npm** (see `web/package-lock.json`).
- All commands must run from the `web/` directory. Standard scripts are documented in `web/README.md`
  and defined in `web/package.json` (`dev`, `build`, `preview`, `lint`, `typecheck`).
- Dev server: `npm run dev` serves on `http://localhost:5173/` (Vite default).
- `npm run build` runs a TypeScript project build (`tsc -b`) before `vite build`, so type errors fail the build.
- No environment variables or secrets are required to run, lint, build, or test the app.

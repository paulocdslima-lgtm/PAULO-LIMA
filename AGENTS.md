# Nexus CRM

Repository with engineering docs (`docs/`) and a functional frontend prototype (`web/`).
Only `web/` is runnable code; `docs/` and `previews/` are documentation/assets.

## Cursor Cloud specific instructions

### Service overview
- `web/` is the only runnable service: a React 18 + TypeScript + Vite + Tailwind SPA that
  uses in-memory mock data (no backend, no database, no env vars required).

### Running / building / linting / testing
- All commands run from `web/`. Standard scripts are in `web/package.json`
  (`dev`, `build`, `preview`, `lint`, `typecheck`). See `web/README.md`.
- Dev server: `npm run dev` (Vite on port 5173, `host: true`).
- There is no automated test suite (no `test` script); validation is lint + build + manual.

### Non-obvious gotchas
- The app has TWO entry points (see `vite.config.ts`): `index.html` is a static marketing
  portal served at `/`, while the actual CRM SPA is at **`/crm.html`**. When testing the CRM,
  open `http://localhost:5173/crm.html`.
- The CRM uses `HashRouter`, so in-app routes look like `/crm.html#/contatos`,
  `/crm.html#/pipeline`, etc.
- Theme (light/dark) is persisted in `localStorage` under the key `nexus-crm-theme`.
- `web/scripts/screenshots.mjs` requires Playwright, which is intentionally NOT a project
  dependency — install it on demand (`npm i -D playwright && npx playwright install chromium`)
  only if you need to regenerate `previews/`.

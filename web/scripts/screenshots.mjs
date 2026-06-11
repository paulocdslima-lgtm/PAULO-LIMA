// Gera capturas de tela do protótipo (desktop claro/escuro + mobile).
// Pré-requisitos (instale sob demanda — não fazem parte das deps do app):
//   npm i -D playwright && npx playwright install chromium
// Uso: inicie o app (`npm run dev`) e rode `node scripts/screenshots.mjs`.
import { chromium } from 'playwright';
import { mkdirSync } from 'node:fs';

const BASE = 'http://localhost:5173';
const OUT = '/workspace/previews';
mkdirSync(OUT, { recursive: true });

const routes = [
  { path: '/', name: 'dashboard' },
  { path: '/contatos', name: 'contatos' },
  { path: '/pipeline', name: 'pipeline' },
  { path: '/tarefas', name: 'tarefas' },
  { path: '/chat', name: 'chat' },
  { path: '/relatorios', name: 'relatorios' },
  { path: '/configuracoes', name: 'configuracoes' },
];

const browser = await chromium.launch();

async function shoot({ width, height, theme, suffix }) {
  const context = await browser.newContext({
    viewport: { width, height },
    deviceScaleFactor: 2,
    colorScheme: theme,
  });
  const page = await context.newPage();
  // define o tema persistido antes de carregar o app
  await page.addInitScript((t) => {
    window.localStorage.setItem('nexus-crm-theme', t);
  }, theme);

  for (const route of routes) {
    await page.goto(`${BASE}${route.path}`, { waitUntil: 'networkidle' });
    await page.waitForTimeout(900); // aguarda animações/gráficos
    await page.screenshot({ path: `${OUT}/${route.name}-${suffix}.png` });
    console.log(`ok: ${route.name}-${suffix}.png`);
  }
  await context.close();
}

await shoot({ width: 1440, height: 900, theme: 'light', suffix: 'desktop-light' });
await shoot({ width: 1440, height: 900, theme: 'dark', suffix: 'desktop-dark' });
await shoot({ width: 390, height: 844, theme: 'light', suffix: 'mobile-light' });

await browser.close();
console.log('done');

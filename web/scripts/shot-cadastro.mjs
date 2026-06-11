import { chromium } from 'playwright';
import { mkdirSync } from 'node:fs';

const FILE = 'file:///workspace/standalone/cadastro-cliente.html';
const OUT = '/workspace/previews';
mkdirSync(OUT, { recursive: true });

const browser = await chromium.launch();

async function shoot({ width, height, theme, suffix, panel }) {
  const ctx = await browser.newContext({ viewport: { width, height }, deviceScaleFactor: 2 });
  const page = await ctx.newPage();
  if (theme) {
    await page.addInitScript((t) => localStorage.setItem('cortitex-theme', t), theme);
  }
  await page.goto(FILE, { waitUntil: 'networkidle' });
  if (panel) {
    await page.click(`.tab[data-tab="${panel}"]`);
    await page.waitForTimeout(300);
  }
  await page.waitForTimeout(400);
  await page.screenshot({ path: `${OUT}/cadastro-${suffix}.png`, fullPage: true });
  console.log('ok', suffix);
  await ctx.close();
}

await shoot({ width: 1280, height: 860, theme: 'light', suffix: 'desktop-light' });
await shoot({ width: 1280, height: 860, theme: 'dark', suffix: 'desktop-dark' });
await shoot({ width: 1280, height: 860, theme: 'light', suffix: 'enderecos', panel: 'enderecos' });
await shoot({ width: 390, height: 844, theme: 'light', suffix: 'mobile-light' });

await browser.close();
console.log('done');

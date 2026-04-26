// gunkler/check-console.mjs — load each page in Playwright, capture console + page errors

import { chromium } from 'playwright';

const PAGES = [
  '/', '/leistungen.html', '/altersgerecht.html', '/referenzen.html',
  '/ueber-uns.html', '/kontakt.html', '/impressum.html', '/datenschutz.html',
];

const browser = await chromium.launch();
let totalIssues = 0;

for (const path of PAGES) {
  const ctx = await browser.newContext({ viewport: { width: 1280, height: 800 } });
  const page = await ctx.newPage();

  const messages = [];
  page.on('console', msg => {
    const type = msg.type();
    if (['error', 'warning'].includes(type)) {
      messages.push({ type, text: msg.text() });
    }
  });
  page.on('pageerror', err => messages.push({ type: 'pageerror', text: err.message }));
  page.on('requestfailed', req => messages.push({
    type: 'request-failed',
    text: `${req.url()} — ${req.failure()?.errorText || 'unknown'}`
  }));

  await page.goto(`http://localhost:3000${path}`, { waitUntil: 'networkidle', timeout: 15000 });
  await page.waitForTimeout(500);

  console.log(`\n→ ${path}`);
  if (messages.length === 0) {
    console.log('  ✓ no console errors/warnings');
  } else {
    for (const m of messages) {
      console.log(`  [${m.type}] ${m.text}`);
      totalIssues++;
    }
  }

  await ctx.close();
}

await browser.close();
console.log(`\n=== ${totalIssues} console issue(s) total ===`);
process.exit(totalIssues > 0 ? 1 : 0);

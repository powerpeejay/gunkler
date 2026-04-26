// gunkler/generate-og.mjs — render og-card.html to og-image.jpg (1200x630)

import { chromium } from 'playwright';

const browser = await chromium.launch();
const ctx = await browser.newContext({
  viewport: { width: 1200, height: 630 },
  deviceScaleFactor: 2,
});
const page = await ctx.newPage();
await page.goto('http://localhost:3000/og-card.html', { waitUntil: 'networkidle' });
await page.evaluate(() => document.fonts?.ready ?? Promise.resolve());
await page.waitForTimeout(300);
await page.screenshot({
  path: 'og-image.jpg',
  type: 'jpeg',
  quality: 90,
  clip: { x: 0, y: 0, width: 1200, height: 630 },
});
await browser.close();
console.log('✓ og-image.jpg generated');

// gunkler/audit.mjs — single-shot polish audit:
//   1. Network requests per page (DSGVO discipline)
//   2. axe-core a11y scan
//
// Usage: node audit.mjs            # all 8 pages
//        node audit.mjs /kontakt.html

import { chromium } from 'playwright';
import { AxeBuilder } from '@axe-core/playwright';

const BASE = 'http://localhost:3000';

const PAGES = [
  '/',
  '/leistungen.html',
  '/altersgerecht.html',
  '/referenzen.html',
  '/ueber-uns.html',
  '/kontakt.html',
  '/impressum.html',
  '/datenschutz.html',
];

const explicit = process.argv.slice(2).filter(a => a.startsWith('/'));
const targets = explicit.length ? explicit : PAGES;

// Hosts that are ALLOWED to be requested (from EXTERNAL_ASSETS.md)
const ALLOWED_HOSTS = new Set(['localhost:3000', 'placehold.co']);

const browser = await chromium.launch();
let totalA11yViolations = 0;
let totalForbiddenRequests = 0;

for (const path of targets) {
  const url = `${BASE}${path}`;
  console.log(`\n→ ${path}`);
  const ctx = await browser.newContext({ viewport: { width: 1280, height: 800 } });
  const page = await ctx.newPage();

  // 1. Network audit
  const requests = [];
  page.on('request', req => {
    try {
      const u = new URL(req.url());
      requests.push({ host: u.host, url: req.url(), type: req.resourceType() });
    } catch {}
  });

  await page.goto(url, { waitUntil: 'networkidle', timeout: 15000 });

  const hosts = new Map();
  for (const r of requests) {
    hosts.set(r.host, (hosts.get(r.host) || 0) + 1);
  }

  console.log('  hosts requested:');
  for (const [host, count] of [...hosts.entries()].sort((a, b) => b[1] - a[1])) {
    const allowed = ALLOWED_HOSTS.has(host);
    const flag = allowed ? '✓' : '✗ FORBIDDEN';
    console.log(`    ${flag}  ${count}×  ${host}`);
    if (!allowed) totalForbiddenRequests += count;
  }

  // Forbidden host samples
  const forbidden = requests.filter(r => !ALLOWED_HOSTS.has(r.host));
  if (forbidden.length) {
    console.log('  forbidden URLs:');
    for (const r of forbidden.slice(0, 5)) console.log(`      ${r.url} (${r.type})`);
  }

  // 2. axe-core a11y scan
  const axe = await new AxeBuilder({ page })
    .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa', 'best-practice'])
    .analyze();

  if (axe.violations.length === 0) {
    console.log('  a11y: ✓ zero violations');
  } else {
    console.log(`  a11y: ✗ ${axe.violations.length} violation type(s)`);
    for (const v of axe.violations) {
      console.log(`      [${v.impact}] ${v.id}: ${v.help}  (×${v.nodes.length})`);
      for (const n of v.nodes.slice(0, 2)) {
        console.log(`           target: ${n.target.join(' ')}`);
      }
    }
    totalA11yViolations += axe.violations.length;
  }

  await ctx.close();
}

await browser.close();

console.log('\n=== summary ===');
console.log(`Pages audited:           ${targets.length}`);
console.log(`Forbidden requests:      ${totalForbiddenRequests}`);
console.log(`Total a11y violations:   ${totalA11yViolations}`);
process.exit(totalA11yViolations + totalForbiddenRequests > 0 ? 1 : 0);

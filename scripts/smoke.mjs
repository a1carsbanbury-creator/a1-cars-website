// Usage: node scripts/smoke.mjs [baseUrl]   (default http://localhost:3000)
const base = (process.argv[2] ?? 'http://localhost:3000').replace(/\/$/, '');
const pages = ['/', '/local-taxi', '/airport-transfers', '/executive-travel', '/group-minibus', '/fleet', '/about', '/contact', '/privacy', '/terms'];
const redirects = {
  '/about.html': '/about', '/contact.html': '/contact', '/services/services-overview.html': '/local-taxi', '/services': '/local-taxi',
  '/locations/locations': '/local-taxi', '/locations': '/local-taxi', '/locations/shipston-on-stour.html': '/local-taxi',
};
let fail = 0;
const check = (ok, msg) => { if (!ok) fail++; console.log(`${ok ? 'PASS' : 'FAIL'}  ${msg}`); };
const titles = new Set();
for (const p of pages) {
  const r = await fetch(base + p); const html = await r.text();
  const title = html.match(/<title>([^<]*)<\/title>/)?.[1];
  const canon = html.match(/<link rel="canonical" href="([^"]+)"/)?.[1];
  check(r.status === 200, `${p} 200`);
  check(!!title && !titles.has(title), `${p} unique title: ${title}`); titles.add(title);
  check(!!canon && new URL(canon).pathname === p, `${p} self canonical: ${canon}`);
  check(html.includes('01295 266 778'), `${p} phone present`);
  check(!html.includes('banburytravels'), `${p} no old email`);
}
for (const [from, to] of Object.entries(redirects)) {
  const r = await fetch(base + from, { redirect: 'manual' });
  check([301, 308].includes(r.status) && new URL(r.headers.get('location'), base).pathname === to, `${from} -> ${to} (${r.status})`);
}
for (const p of ['/sitemap.xml', '/robots.txt', '/favicon.ico', '/apple-touch-icon.png', '/icon-192.png']) check((await fetch(base + p)).status === 200, `${p} 200`);
check((await fetch(base + '/does-not-exist')).status === 404, '404 for unknown page');
const home = await (await fetch(base + '/')).text();
check(home.includes('G-K9SG5GLPBK'), 'GA4 tag present');
check(home.includes('rel="icon"') && home.includes('favicon.ico'), 'favicon linked from homepage');
console.log(fail ? `\n${fail} FAILED` : '\nAll passed'); process.exit(fail ? 1 : 0);

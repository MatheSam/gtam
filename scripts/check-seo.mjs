import assert from 'node:assert/strict';
import { readFile, access } from 'node:fs/promises';
import { resolve } from 'node:path';

const html = await readFile('dist/index.html', 'utf8');
const sitemap = await readFile('dist/sitemap.xml', 'utf8');
const robots = await readFile('dist/robots.txt', 'utf8');
const canonical = html.match(/<link rel="canonical" href="([^"]+)"/)[1];
assert.equal((html.match(/rel="canonical"/g) || []).length, 1);
assert.equal((html.match(/<h1[ >]/g) || []).length, 1);
assert.match(html, /<html lang="pt-BR">/);
assert.match(html, /<h1>Ferramentaria de precisão/);
assert.match(html, /id="duvidas"/);
assert.match(html, /<details>/);
assert.match(html, /fetchPriority="high"/i);
assert.doesNotMatch(html, /<div id="root"><\/div>|%BASE_URL%|noindex/);
assert.ok(sitemap.includes(`<loc>${canonical}</loc>`));
assert.ok(robots.includes(`Sitemap: ${canonical}sitemap.xml`));
assert.ok(!robots.includes('Disallow: /'));
assert.ok(html.includes(`property="og:url" content="${canonical}"`));
const data = JSON.parse(html.match(/<script type="application\/ld\+json">(.*?)<\/script>/s)[1]);
const business = data['@graph'].find(node => node['@type'] === 'LocalBusiness');
assert.equal(business.url, canonical);
assert.equal(business.address.addressLocality, 'São José dos Pinhais');
assert.equal(business.hasOfferCatalog.itemListElement.length, 3);
for (const offer of business.hasOfferCatalog.itemListElement) {
  assert.ok(html.includes(`id="${new URL(offer.itemOffered.url).hash.slice(1)}"`));
}
const base = html.match(/<script[^>]+src="([^"]+)assets\//)[1];
const ids = new Set([...html.matchAll(/\bid="([^"]+)"/g)].map(match => match[1]));
for (const match of html.matchAll(/href="#([^"]+)"/g)) assert.ok(ids.has(match[1]), `Âncora inexistente: ${match[1]}`);
for (const match of html.matchAll(/(?:src|href)="([^"#]+)"/g)) {
  const path = match[1];
  if (!path.startsWith(base) || path.startsWith('//')) continue;
  await access(resolve('dist', path.slice(base.length)));
}
console.log(`SEO validado: HTML completo, H1 único, âncoras, arquivos, canonical, sitemap e JSON-LD (${canonical}).`);

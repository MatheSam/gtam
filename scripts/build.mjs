import { build, loadEnv } from 'vite';
import { readFile, writeFile, mkdtemp, rm } from 'node:fs/promises';
import { resolve, join } from 'node:path';
import { pathToFileURL } from 'node:url';

const modeIndex = process.argv.indexOf('--mode');
const mode = modeIndex >= 0 ? process.argv[modeIndex + 1] : 'production';
if (!mode || mode.startsWith('-')) throw new Error('Informe um modo válido depois de --mode.');
const env = loadEnv(mode, process.cwd(), '');
// Current public deployment documented by the project; never infer a company domain.
const site = new URL(env.SITE_URL || 'https://mathesam.github.io/gtam/');
if (!['https:', 'http:'].includes(site.protocol) || site.search || site.hash || site.username || site.password) {
  throw new Error('SITE_URL deve ser uma URL HTTP(S), sem parâmetros ou fragmentos.');
}
site.pathname = `${site.pathname.replace(/\/+$/, '')}/`;
const base = env.SITE_URL ? site.pathname : mode === 'github' ? '/gtam/' : '/';
const url = site.href;
const escape = value => value.replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[char]);
const title = 'Ferramentaria em São José dos Pinhais | GTAM';
const description = 'Ferramentaria de precisão em São José dos Pinhais, PR. Fabricação e recuperação de mordentes, facas industriais e máquinas sob medida. Solicite orçamento.';

await build({ mode, base });
const temp = await mkdtemp(resolve('.seo-render-'));
try {
  await build({ mode, base, publicDir: false, build: { ssr: 'src/entry-server.tsx', outDir: temp, emptyOutDir: true, rollupOptions: { output: { entryFileNames: 'entry-server.mjs' } } } });
  const { render, structuredData } = await import(pathToFileURL(join(temp, 'entry-server.mjs')).href);
  const htmlPath = resolve('dist/index.html');
  let html = await readFile(htmlPath, 'utf8');
  const metadata = `
    <link rel="canonical" href="${escape(url)}" />
    <meta name="robots" content="index, follow, max-image-preview:large" />
    <meta property="og:type" content="website" />
    <meta property="og:locale" content="pt_BR" />
    <meta property="og:site_name" content="GTAM Ferramentaria" />
    <meta property="og:title" content="${escape(title)}" />
    <meta property="og:description" content="${escape(description)}" />
    <meta property="og:url" content="${escape(url)}" />
    <meta property="og:image" content="${escape(`${url}images/hero.webp`)}" />
    <meta property="og:image:alt" content="Mordentes de selagem da GTAM Ferramentaria" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${escape(title)}" />
    <meta name="twitter:description" content="${escape(description)}" />
    <meta name="twitter:image" content="${escape(`${url}images/hero.webp`)}" />
    <script type="application/ld+json">${JSON.stringify(structuredData(url)).replace(/</g, '\\u003c')}</script>
  `;
  if (!html.includes('<div id="root"></div>')) throw new Error('Contêiner de pré-renderização não encontrado.');
  html = html.replace('<div id="root"></div>', `<div id="root">${render()}</div>`).replace('</head>', `${metadata}</head>`);
  await writeFile(htmlPath, html);
  await writeFile(resolve('dist/sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>${escape(url)}</loc></url></urlset>\n`);
  await writeFile(resolve('dist/robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${url}sitemap.xml\n`);
  console.log(`HTML pré-renderizado, metadados e sitemap gerados para ${url}`);
} finally {
  await rm(temp, { recursive: true, force: true });
}

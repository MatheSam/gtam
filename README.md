# GTAM Ferramentaria

Landing page responsiva em React, TypeScript, Vite e Tailwind CSS 4. Sem formulários e sem serviços externos necessários para renderizar a página.

## Executar

```sh
npm install
npm run dev
```

## Produção

```sh
npm run build
npm run preview
```

O build estático fica em `dist/`. Pode ser hospedado em qualquer servidor de arquivos estáticos.

O build pré-renderiza o React: textos, serviços, contatos e dúvidas já estão no HTML,
mesmo sem JavaScript. O navegador hidrata esse conteúdo para ativar o menu e as animações.
Não é necessário um servidor Node em produção nem novas dependências.

Depois de gerar o site, valide os artefatos com `npm run check:seo`.

Consulte [SEO e Google Ads](docs/seo-e-google-ads.md) para configurar a URL de produção,
Search Console e mensuração de contatos. `SITE_URL` em `.env.local` permite mudar de
domínio; no GitHub Actions, use a variável de repositório `SITE_URL`.

## GitHub Pages

O workflow `.github/workflows/deploy.yml` publica a cada push na `main`.
No GitHub, em **Settings → Pages → Source**, selecione **GitHub Actions**.
O endereço é https://mathesam.github.io/gtam/.

Para conferir o mesmo build localmente:

```sh
npm run build -- --mode github
npm run preview -- --mode github
```

Abra o caminho `/gtam/` no servidor de preview. O modo `github` aplica o prefixo
`/gtam/`; o build padrão continua compatível com hospedagens na raiz do domínio.

## Organização

- `src/components/`: elementos compartilhados e navegação.
- `src/sections/`: apresentação, parceiros, empresa, serviços, estrutura, trabalhos, ESG e contato.
- `src/data/company.ts`: contatos, endereço e serviços.
- `src/hooks/`: animação discreta ao entrar na tela.
- `src/styles.css`: Tailwind e estilos visuais responsivos.
- `public/images/`: fotos reais extraídas do folder da empresa e otimizadas em WebP.
- `img/logos/`: logos fornecidos das empresas parceiras, importados pelo Vite.
- `img/imgs/`: imagens ilustrativas fornecidas de usinagem; as versões JPEG otimizadas usadas na seção Estrutura ficam em `public/images/`.

Os dados exibem 14 anos de experiência, contato Nicolas/Tadeu e o endereço R. Faustino Sabotta, 345. WhatsApp, telefones e e-mail seguem os dados fornecidos no folder. As imagens não contêm os contatos antigos. A seção ESG informa o processo de validação em andamento, conforme informado pela empresa, sem afirmar uma certificação concluída. A estrutura lista apenas os equipamentos confirmados: fresadora CNC, fresadora convencional (manual) e torno.

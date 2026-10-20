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
- `src/sections/`: apresentação, empresa, serviços, trabalhos e contato.
- `src/data/company.ts`: contatos, endereço e serviços.
- `src/hooks/`: animação discreta ao entrar na tela.
- `src/styles.css`: Tailwind e estilos visuais responsivos.
- `public/images/`: fotos reais extraídas do folder da empresa e otimizadas em WebP.

Os dados exibem 14 anos de experiência, contato Nicolas/Tadeu e o endereço R. Faustino Sabotta, 345. WhatsApp, telefones e e-mail seguem os dados fornecidos no folder. As imagens não contêm os contatos antigos. Não são utilizados depoimentos, certificações ou resultados numéricos não fornecidos.

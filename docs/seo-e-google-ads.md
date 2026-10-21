# SEO e página de destino para Google Ads

## Implementado

- HTML completo gerado no build, compartilhando os mesmos componentes React com o navegador.
- Título, descrição e H1 com serviço principal e localização real.
- Canonical absoluto, Open Graph, Twitter Card e imagem de compartilhamento.
- JSON-LD `LocalBusiness`, `WebSite`, `WebPage` e catálogo dos serviços exibidos.
- `sitemap.xml` e `robots.txt` gerados com a mesma URL do canonical.
- Imagem principal no HTML com prioridade alta; demais fotografias mantêm carregamento adiado.
- Conteúdo específico sobre fabricação, recuperação, usinagem, mordentes e facas, sem acrescentar equipamentos ou certificações não confirmados.
- Dúvidas frequentes e orientações sobre o que enviar para solicitar orçamento.
- Âncoras por serviço e mensagens específicas de orçamento no WhatsApp.
- Sinal de clique de contato preparado para uma futura integração de métricas.
- Validação de artefatos antes da publicação pelo workflow do GitHub Pages.

## Endereço de produção

Sem configuração, os metadados usam a publicação documentada do projeto:
`https://mathesam.github.io/gtam/`. O modo `github` mantém os arquivos em `/gtam/`;
o build padrão usa a raiz para permitir o preview padrão.

Para usar outro domínio, copie `.env.example` para `.env.local` e defina `SITE_URL`
com a URL pública definitiva, incluindo o caminho quando houver. Essa configuração
controla tanto os metadados quanto o caminho dos arquivos, inclusive no preview.
No CI, configure a mesma variável no ambiente do build. Não use o domínio do e-mail
como domínio do site sem confirmar que é a hospedagem correta.

Execute `npm run build` (ou `npm run build -- --mode github`) e `npm run check:seo`.
Sirva `dist/`, nunca apenas o HTML original da raiz do repositório.

Em um site de projeto do GitHub Pages, `/gtam/robots.txt` não controla o rastreamento:
os buscadores consultam `/robots.txt` na raiz de `mathesam.github.io`. Cadastre
`https://mathesam.github.io/gtam/sitemap.xml` diretamente no Search Console e,
se houver controle do site raiz, adicione ali a referência ao sitemap.
Em domínio próprio na raiz, o `robots.txt` gerado funciona no local esperado.

## Publicação e validação externa

1. Confirmar domínio, endereço e contatos com a empresa antes de publicar.
2. Cadastrar/verificar a propriedade no Google Search Console, enviar o sitemap e inspecionar a URL publicada.
3. Testar a URL pública no Rich Results Test e no PageSpeed Insights, em celular e desktop.
4. Manter o Perfil da Empresa no Google atualizado com o mesmo nome, endereço e telefone.
5. Acompanhar indexação, consultas, contatos qualificados e desempenho real ao longo do tempo.

Não foram criadas avaliações, preços, horários comerciais, coordenadas ou promessas
de entrega sem dados confirmados. O FAQ visível ajuda o visitante; não se promete
exibição de resultados enriquecidos de FAQ para este tipo de empresa.

## Configuração de campanhas

A relevância e a utilidade da página de destino são parte da avaliação de qualidade
do Google Ads. O trabalho no site não garante posição, CPC ou aprovação de campanha.
Os anúncios e palavras-chave precisam corresponder ao que está oferecido na página.

Sugestões iniciais para validar no Planejador de Palavras-chave, sem estimativas de volume:

| Grupo de anúncios | Intenção a avaliar | Destino na página |
| --- | --- | --- |
| Ferramentaria | ferramentaria em São José dos Pinhais; ferramentas de precisão | `#ferramentaria-de-precisao` |
| Mordentes e facas | fabricação de mordentes; recuperação de mordentes; afiação de facas industriais | `#mordentes-e-facas-industriais` |
| Máquinas dedicadas | fabricação de máquinas sob medida; retrofit de equipamentos | `#maquinas-sob-medida` |

As âncoras facilitam a navegação para o conteúdo correspondente; não são páginas
independentes nem entradas separadas no sitemap. Defina o alcance geográfico da
campanha conforme a capacidade real de atendimento da empresa. Confira termos de
pesquisa e negativas a partir dos dados da campanha, sem presumir demanda ou cobertura.

## Mensuração de contatos

Se existir `window.dataLayer`, um clique em WhatsApp, telefone ou e-mail adiciona:

```js
{ event: 'contact_click', contact_method: 'whatsapp', contact_section: 'inicio' }
```

O método também pode ser `phone` ou `email`; a seção identifica a origem na página.
Não são enviados número, e-mail, mensagem, identificadores de campanha ou dados
pessoais nesse evento. O site não instala Google Tag Manager, GA4, Google Ads,
cookies de publicidade ou chamadas externas de mensuração por conta própria.

Ao conectar a conta e a ferramenta de métricas, configurar consentimento e privacidade
conforme a implementação efetiva, consumir o evento personalizado e testar duplicidade.
Clique em contato é intenção: a pessoa ainda pode não enviar mensagem. Tratar como
microconversão e, quando possível, medir leads qualificados e vendas em separado.

## Referências

- [Guia de SEO do Google](https://developers.google.com/search/docs/fundamentals/seo-starter-guide?hl=pt-br)
- [SEO para JavaScript e pré-renderização](https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics)
- [Dados estruturados de empresas locais](https://developers.google.com/search/docs/appearance/structured-data/local-business)
- [Índice de qualidade do Google Ads](https://support.google.com/google-ads/answer/6167118?hl=pt-BR)

import { renderToString } from 'react-dom/server';
import App from './App';
import { company, services } from './data/company';
import { contentRoutes } from './data/routes';

export const sitePages = [
  { page: 'home', path: '', title: 'Ferramentaria em São José dos Pinhais | GTAM', description: 'Ferramentaria de precisão em São José dos Pinhais, PR. Fabricação e recuperação de mordentes, facas industriais e máquinas sob medida. Solicite orçamento.' },
  { page: 'privacy', path: 'privacidade/', title: 'Política de privacidade | GTAM Ferramentaria', description: 'Saiba como a GTAM Ferramentaria trata dados pessoais no site e no atendimento. Consulte seus direitos e nosso canal de contato sobre privacidade.' },
  { page: 'contact', path: 'contato/', title: 'Contato | GTAM Ferramentaria', description: 'Fale com a GTAM Ferramentaria, consulte nossos canais de atendimento e veja no mapa como chegar à unidade em São José dos Pinhais, PR.' },
  ...contentRoutes.map(route => ({ page: route.id, path: route.path, title: route.title, description: route.description })),
];

export function render(page = 'home') {
  return renderToString(<App page={page} />);
}

export function structuredData(url: string) {
  const businessId = `${url}#empresa`;
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'LocalBusiness', '@id': businessId, name: company.name, url,
        image: `${url}images/hero.webp`,
        telephone: ['+5541998400155', '+554130810319'], email: company.email,
        description: 'Ferramentaria de precisão, fabricação e recuperação de mordentes, facas industriais e máquinas sob medida em São José dos Pinhais, PR.',
        address: {
          '@type': 'PostalAddress', streetAddress: 'Rua Faustino Sabotta, 345 — Zacarias Pena',
          addressLocality: 'São José dos Pinhais', addressRegion: 'PR', postalCode: company.cep, addressCountry: 'BR',
        },
        hasMap: company.maps,
        hasOfferCatalog: {
          '@type': 'OfferCatalog', name: 'Serviços de ferramentaria e soluções industriais',
          itemListElement: services.map(service => ({
            '@type': 'Offer', itemOffered: {
              '@type': 'Service', name: service.title, description: service.description,
              url: `${url}#${service.id}`, provider: { '@id': businessId },
            },
          })),
        },
      },
      { '@type': 'WebSite', '@id': `${url}#site`, url, name: company.name, inLanguage: 'pt-BR', publisher: { '@id': businessId } },
      { '@type': 'WebPage', '@id': `${url}#pagina`, url, name: 'Ferramentaria em São José dos Pinhais | GTAM', inLanguage: 'pt-BR', isPartOf: { '@id': `${url}#site` }, about: { '@id': businessId } },
    ],
  };
}

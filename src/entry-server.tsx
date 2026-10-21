import { renderToString } from 'react-dom/server';
import App from './App';
import { company, services } from './data/company';

export function render(page: 'home' | 'privacy' = 'home') {
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

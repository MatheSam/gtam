export type ContentRoute = {
  id: string;
  path: string;
  type: 'machines' | 'machine' | 'solutions' | 'solution' | 'partners' | 'clients';
  title: string;
  description: string;
};

export const contentRoutes: ContentRoute[] = [
  { id: 'machines', path: 'maquinas/', type: 'machines', title: 'Máquinas | GTAM Ferramentaria', description: 'Conheça as máquinas utilizadas pela GTAM Ferramentaria.' },
  { id: 'machine-okada-855s', path: 'maquinas/okada-855s/', type: 'machine', title: 'Centro de usinagem CNC Okada 855S | GTAM', description: 'Conheça o centro de usinagem vertical CNC Okada 855S da GTAM.' },
  { id: 'machine-clever-l-1860', path: 'maquinas/clever-l-1860/', type: 'machine', title: 'Torno mecânico Clever L-1860 | GTAM', description: 'Conheça o torno mecânico Clever L-1860 da GTAM.' },
  { id: 'machine-milling', path: 'maquinas/fresadora-ferramenteira/', type: 'machine', title: 'Fresadora ferramenteira | GTAM', description: 'Conheça a fresadora ferramenteira utilizada pela GTAM.' },
  { id: 'solutions', path: 'solucoes/', type: 'solutions', title: 'Soluções industriais | GTAM Ferramentaria', description: 'Conheça as soluções de usinagem, ferramentaria e manutenção industrial da GTAM.' },
  { id: 'solution-moldes', path: 'solucoes/manutencao-moldes-injecao/', type: 'solution', title: 'Manutenção de moldes de injeção | GTAM', description: 'Manutenção e recuperação de moldes de injeção pela GTAM Ferramentaria.' },
  { id: 'solution-fixtures', path: 'solucoes/dispositivos-bercos-bancadas/', type: 'solution', title: 'Dispositivos, berços e bancadas | GTAM', description: 'Dispositivos, berços e bancadas de montagem para aplicações industriais.' },
  { id: 'solution-machining', path: 'solucoes/usinagem-desenho-amostra/', type: 'solution', title: 'Usinagem a partir de desenho ou amostra | GTAM', description: 'Usinagem e engenharia reversa a partir de desenho, modelo 3D ou amostra.' },
  { id: 'solution-recovery', path: 'solucoes/recuperacao-componentes-industriais/', type: 'solution', title: 'Recuperação de componentes industriais | GTAM', description: 'Recuperação de componentes para equipamentos industriais.' },
  { id: 'solution-injection-nozzles', path: 'solucoes/bicos-ponteiras-injetoras/', type: 'solution', title: 'Bicos e ponteiras para injetoras | GTAM', description: 'Usinagem de bicos e ponteiras para injetoras.' },
  { id: 'partners', path: 'parceiros/', type: 'partners', title: 'Parceiros e tecnologias | GTAM', description: 'Conheça os parceiros de tecnologia e fornecedores da GTAM.' },
  { id: 'clients', path: 'clientes/', type: 'clients', title: 'Clientes e homologações | GTAM', description: 'Conheça setores atendidos, trabalhos realizados e homologações da GTAM.' },
];

export function routeFromPath(pathname: string, baseUrl = '/') {
  const basePath = new URL(baseUrl, window.location.origin).pathname;
  const relative = pathname.startsWith(basePath) ? pathname.slice(basePath.length) : pathname.replace(/^\/+/, '');
  const normalized = relative.replace(/index\.html$/, '').replace(/^\/+|\/+$/g, '');
  if (!normalized) return 'home';
  if (normalized === 'privacidade') return 'privacy';
  if (normalized === 'contato') return 'contact';
  return contentRoutes.find(route => route.path.replace(/\/+$/, '') === normalized)?.id ?? 'not-found';
}

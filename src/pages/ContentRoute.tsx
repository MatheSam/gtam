import { contentRoutes } from '../data/routes';
import { company } from '../data/company';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ContentHero, Breadcrumbs, ContentCardGrid } from '../components/ContentPatterns';

export function ContentRoute({ page }: { page: string }) {
  const route = contentRoutes.find(item => item.id === page);
  if (!route) return <><Header/><main className="content-page"><div className="container content-not-found"><p className="eyebrow">GTAM FERRAMENTARIA</p><h1>Página não encontrada</h1><a className="button button-primary" href={import.meta.env.BASE_URL}>Voltar à página inicial</a></div></main><Footer/></>;
  const siblings = contentRoutes.filter(item => route.type === 'machines' ? item.type === 'machine' : route.type === 'solutions' ? item.type === 'solution' : item.type === route.type || (route.type === 'machine' && item.type === 'machines') || (route.type === 'solution' && item.type === 'solutions'));
  const isDetail = route.type === 'machine' || route.type === 'solution';
  const eyebrow = route.type === 'machine' || route.type === 'machines' ? 'ESTRUTURA E CAPACIDADE' : route.type === 'partners' ? 'REDE DE TECNOLOGIA' : route.type === 'clients' ? 'EXPERIÊNCIA POR SETOR' : 'ENGENHARIA E USINAGEM';
  const breadcrumbItems = [{ label: 'Início', href: import.meta.env.BASE_URL }, { label: route.type === 'machine' ? 'Máquinas' : 'Soluções', href: `${import.meta.env.BASE_URL}${route.type === 'machine' ? 'maquinas/' : 'solucoes/'}` }, { label: route.title.split('|')[0].trim() }];
  const cards = siblings.filter(item => item.id !== route.id && !['machines', 'solutions'].includes(item.type)).map(item => ({ id: item.id, path: item.path, title: item.title.split('|')[0].trim() }));
  return <><a href="#conteudo" className="skip-link">Ir para o conteúdo</a><Header/><main id="conteudo" className="content-page"><ContentHero eyebrow={eyebrow} title={route.title.split('|')[0].trim()} description={route.description}/><section className="section content-main"><div className="container">{isDetail && <Breadcrumbs items={breadcrumbItems}/>}<p className="eyebrow">CONTEÚDO TÉCNICO GTAM</p><h2>{isDetail ? 'Conheça este trabalho' : route.type === 'machines' ? 'Equipamentos da GTAM' : route.type === 'solutions' ? 'Como podemos ajudar sua operação' : route.type === 'partners' ? 'Tecnologias que fazem parte do nosso trabalho' : 'Trabalhos e necessidades atendidas'}</h2><p className="content-intro">{isDetail ? 'Esta página reúne informações sobre o equipamento ou serviço. Os dados técnicos específicos serão apresentados somente quando confirmados para a operação da GTAM.' : 'Selecione um assunto para conhecer os equipamentos, serviços e experiências da GTAM.'}</p><ContentCardGrid items={cards} baseUrl={import.meta.env.BASE_URL}/><a className="button button-primary content-contact" href={company.whatsapp} target="_blank" rel="noopener noreferrer">Converse com a equipe <span aria-hidden="true">↗</span></a></div></section></main><Footer/></>;
}

import { ArrowUpRight } from 'lucide-react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ContentHero } from '../components/ContentPatterns';
import { company } from '../data/company';

const homologations = [
  { name: 'Volkswagen', url: 'https://www.vw.com.br/pt.html', sector: 'Automotivo', work: 'Dispositivos e bancadas para peças de veículos Volkswagen, como o T-Cross, entregues via Simoldes.', need: 'Apoio de ferramentaria e montagem para aplicações automotivas.', note: 'Fornecedor homologado' },
  { name: 'Neodent', url: 'https://neodent.com.br/', sector: 'Implantes odontológicos', work: 'Serviços de usinagem para a indústria de implantes odontológicos.', need: 'Peças usinadas para processos de fabricação.', note: 'Fornecedor homologado' },
];

const projects = [
  { name: 'Simoldes Plásticos', url: 'https://www.simoldes.com/plastics/inicio/', sector: 'Autopeças injetadas', work: 'Bancadas de aplicação de fita, berços, dispositivos de montagem e postiços de molde.', need: 'Dispositivos de apoio à montagem e ao processo de injeção.' },
  { name: 'Jasmine Alimentos', url: 'https://jasminealimentos.com/', sector: 'Alimentício', work: 'Recuperação de braços, eixos, mancais e cilindros hidráulicos de fornos industriais; engrenagens de nylon.', need: 'Manutenção e reposição de componentes de equipamentos industriais.' },
  { name: 'Medfio', url: 'https://medfio.com.br/', sector: 'Higiene bucal', work: 'Manutenção de moldes de injeção multicavidade e peças das tufadeiras.', need: 'Manutenção de moldes e componentes de máquinas de produção.' },
  { name: 'América Embalagens', url: 'https://www.americaembalagens.com/', sector: 'Embalagens plásticas', work: 'Bicos e ponteiras de injetoras.', need: 'Componentes para equipamentos de injeção.' },
  { name: 'Fibracem', url: 'https://www.fibracem.com/', sector: 'Fibra óptica e telecomunicações', work: 'Peças usinadas.', need: 'Fabricação de componentes usinados.' },
  { name: 'Focus', sector: 'Indústria de vidro', work: 'Berços e integração de sistema de visão ao CLP da máquina.', need: 'Dispositivos de apoio e integração de visão ao processo.' },
];

function ClientCard({ item, homologated = false }: { item: typeof projects[number]; homologated?: boolean }) {
  return <article className={`client-case-card${homologated ? ' client-case-homologated' : ''}`}>
    <div className="client-case-heading"><p className="eyebrow">{item.sector}</p>{homologated && <span className="client-homologation">Fornecedor homologado</span>}</div>
    <h3>{item.url ? <a href={item.url} target="_blank" rel="noreferrer">{item.name} <ArrowUpRight size={15} aria-hidden="true"/></a> : item.name}</h3>
    <dl><div><dt>Trabalho feito</dt><dd>{item.work}</dd></div><div><dt>Necessidade atendida</dt><dd>{item.need}</dd></div></dl>
  </article>;
}

export function ClientsPage() {
  return <><a href="#conteudo" className="skip-link">Ir para o conteúdo</a><Header/><main id="conteudo" className="content-page">
    <ContentHero eyebrow="CLIENTES E HOMOLOGAÇÕES" title="Experiência aplicada a diferentes setores" description="Conheça alguns trabalhos realizados pela GTAM e as necessidades industriais atendidas em cada projeto."/>
    <section className="section client-cases"><div className="container">
      <div className="client-section-heading"><p className="eyebrow">HOMOLOGAÇÕES</p><h2>Fornecedores homologados</h2><p>Relações de fornecimento informadas pela GTAM, com exemplos do tipo de trabalho realizado.</p></div>
      <div className="client-case-grid client-homologation-grid">{homologations.map(item => <ClientCard key={item.name} item={item} homologated/>)}</div>
      <div className="client-section-heading client-project-heading"><p className="eyebrow">PROJETOS POR SETOR</p><h2>Trabalhos e necessidades atendidas</h2><p>Os exemplos mostram a variedade de demandas que podem envolver usinagem, ferramentaria, manutenção e integração.</p></div>
      <div className="client-case-grid">{projects.map(item => <ClientCard key={item.name} item={item}/>)}</div>
    </div></section>
    <aside className="client-cta"><div className="container"><div><p className="eyebrow">TEM UMA NECESSIDADE PARECIDA?</p><h2>Vamos conversar sobre sua aplicação.</h2></div><a className="button button-primary" href={company.whatsapp} target="_blank" rel="noopener noreferrer">Fale com a GTAM <ArrowUpRight size={17}/></a></div></aside>
  </main><Footer/></>;
}

import { ArrowUpRight } from 'lucide-react';
import hexagonLogo from '../../img/imgs/Hexagon_logo.svg';
import workncLogo from '../../img/logos/worknc.png';
import renishawLogo from '../../img/logos/renishaw.png';
import solidworksLogo from '../../img/logos/solidworks.png';
import skaLogo from '../../img/logos/ska.png';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ContentHero } from '../components/ContentPatterns';
import { company } from '../data/company';

type Partner = { name: string; url: string; mark?: string[]; relation: string; use: string };
type PartnerGroup = { title: string; intro: string; items: Partner[] };

const groups: PartnerGroup[] = [
  { title: 'Automação e robótica', intro: 'Integração e projetos de automação industrial.', items: [
    { name: 'Festo', url: 'https://www.festo.com/br/pt/', relation: 'A GTAM é integradora Festo em automação.', use: 'Automação industrial.' },
    { name: 'GME Robotics', url: 'https://www.gmebrasil.com.br/gme-robotics/', relation: 'Parceria em projetos com robôs.', use: 'Projetos de automação com robôs.' },
  ] },
  { title: 'Visão, sensores e medição', intro: 'Tecnologias usadas em dispositivos e na medição dentro da máquina.', items: [
    { name: 'Keyence', url: 'https://www.keyence.com.br/', relation: 'Câmeras e sensores usados nos dispositivos, com contato direto.', use: 'Sistemas de visão e sensores.' },
    { name: 'Renishaw', url: 'https://www.renishaw.com/pt/', mark: [renishawLogo], relation: 'Apalpador e software de medição na máquina.', use: 'Medição na máquina.' },
  ] },
  { title: 'CAD, CAM e engenharia', intro: 'Ferramentas digitais e suporte técnico para projeto e programação.', items: [
    { name: 'Hexagon / WorkNC', url: 'https://hexagon.com/products/worknc', mark: [hexagonLogo, workncLogo], relation: 'Software CAM da Hexagon usado pela GTAM.', use: 'Programação CAM para moldes e superfícies complexas.' },
    { name: 'SOLIDWORKS', url: 'https://www.solidworks.com/', mark: [solidworksLogo], relation: 'Software CAD utilizado pela GTAM.', use: 'Modelagem 3D e desenho técnico.' },
    { name: 'SKA', url: 'https://www.ska.com.br/', mark: [skaLogo], relation: 'Fornecedor e treinamento dos softwares.', use: 'Softwares e treinamento.' },
  ] },
];

function PartnerCard({ partner }: { partner: Partner }) {
  return <article className="partner-detail-card"><a className={`partner-mark${partner.mark ? '' : ' partner-wordmark-only'}`} href={partner.url} target="_blank" rel="noreferrer" aria-label={`Visitar o site de ${partner.name}`}>{partner.mark ? partner.mark.map((src, index) => <img key={src} src={src} alt={index === 0 && partner.name.includes('/') ? 'Hexagon' : partner.name.includes('/') ? 'WorkNC' : partner.name} loading="lazy"/>) : <span className="partner-wordmark">{partner.name}</span>}</a><p className="eyebrow">{partner.name.includes('Festo') || partner.name.includes('GME') ? 'AUTOMAÇÃO' : partner.name.includes('Keyence') || partner.name.includes('Renishaw') ? 'VISÃO E MEDIÇÃO' : 'TECNOLOGIA'}</p><h3><a href={partner.url} target="_blank" rel="noreferrer">{partner.name} <ArrowUpRight size={15} aria-hidden="true"/></a></h3><dl><div><dt>Relação com a GTAM</dt><dd>{partner.relation}</dd></div><div><dt>Aplicação</dt><dd>{partner.use}</dd></div></dl></article>;
}

export function PartnersPage() {
  return <><a href="#conteudo" className="skip-link">Ir para o conteúdo</a><Header/><main id="conteudo" className="content-page"><ContentHero eyebrow="PARCEIROS E TECNOLOGIAS" title="Tecnologias que apoiam o trabalho da GTAM" description="Conheça as empresas e ferramentas que fazem parte da rede de automação, medição, projeto e usinagem da GTAM."/><section className="section partners-detail"><div className="container">{groups.map(group => <section className="partner-group" key={group.title}><div className="partner-group-heading"><p className="eyebrow">PARCEIROS GTAM</p><h2>{group.title}</h2><p>{group.intro}</p></div><div className="partner-detail-grid">{group.items.map(partner => <PartnerCard key={partner.name} partner={partner}/>)}</div></section>)}<aside className="partner-event-note"><strong>Tem um projeto em vista?</strong><p>Converse com a equipe sobre como essas tecnologias podem apoiar sua necessidade.</p><a href={company.whatsapp} target="_blank" rel="noopener noreferrer">Fale com a GTAM <ArrowUpRight size={16}/></a></aside></div></section></main><Footer/></>;
}

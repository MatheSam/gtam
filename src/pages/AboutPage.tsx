import { ArrowUpRight } from 'lucide-react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ContentHero, Breadcrumbs } from '../components/ContentPatterns';
import { CompanyExperience } from '../components/CompanyExperience';
import { ContactButton } from '../components/ContactButton';
import { useTimelineProgress } from '../hooks/useTimelineProgress';

export function AboutPage() {
  const timelineRef = useTimelineProgress();
  return <><a href="#conteudo" className="skip-link">Ir para o conteúdo</a><Header/><main id="conteudo" className="content-page about-page">
    <ContentHero eyebrow="A GTAM" title="Experiência que transforma necessidades em soluções." description="Desde 1º de novembro de 2010, unimos conhecimento em ferramentaria, usinagem e automação para apoiar a produção dos nossos clientes."/>
    <section className="section"><div className="container">
      <Breadcrumbs items={[{ label: 'Início', href: import.meta.env.BASE_URL }, { label: 'A GTAM' }]}/>
      <div className="about-story-layout"><div className="about-story">
        <p className="eyebrow">NOSSA HISTÓRIA</p><h2>Da ferramentaria às soluções dedicadas.</h2>
        <p>A GTAM Ferramentaria é uma empresa de pequeno porte, com sede em São José dos Pinhais, no Paraná. Iniciou suas atividades em 1º de novembro de 2010 para atender às mais diversas necessidades de ferramentaria e usinagem, incluindo a confecção e a manutenção de ferramentas e moldes.</p>
        <p>Desde o início, a GTAM foi criada com o propósito de atuar na manutenção de moldes plásticos de grande porte, como os utilizados na fabricação de painéis de instrumentos, para-choques e painéis de porta. Essa experiência também abrange moldes de injeção sobre tecido, moldes bicolores e ferramentas CDR.</p>
        <p>Com o tempo, as demandas dos próprios clientes nos levaram à fabricação de máquinas, ferramentas e dispositivos dedicados, desenvolvendo o ferramental necessário aos seus processos fabris. Cada situação e cada implementação representam um universo particular dentro da automação, com aplicações nos setores automotivo, alimentício, dental e em outras áreas da indústria.</p>
        <p>Em 2018, começamos a trabalhar com dispositivos de pequeno porte. Desde então, ampliamos nosso conhecimento prático em cada aplicação e consolidamos nossa atuação em soluções dedicadas às necessidades de cada cliente.</p>
        <p>Com uma equipe preparada e experiente, conquistamos confiança e espaço no mercado a cada ano. Combinamos esse conhecimento com o uso de inteligência artificial em nossos equipamentos e processos para apoiar a eficiência e desenvolver soluções cada vez mais adequadas a cada operação.</p>
        <p>Hoje, nosso foco está em compreender os desafios de produção dos clientes e transformar essas necessidades em máquinas, dispositivos e ferramentas sob medida, com cuidado técnico em cada etapa.</p>
        <ContactButton>Fale com nossa equipe</ContactButton>
      </div><aside className="about-milestones"><p className="eyebrow">NOSSA TRAJETÓRIA</p><ol ref={timelineRef}>
        <li><strong>2010</strong><p>Início das atividades e atuação em manutenção de moldes de grande porte.</p></li>
        <li><strong>2018</strong><p>Início dos trabalhos com dispositivos de pequeno porte.</p></li>
        <li><strong>2021</strong><p>Modernização interna da gestão financeira, melhorando nosso fluxo de trabalho para proporcionar entregas cada vez melhores aos clientes.</p></li>
        <li><strong>2025</strong><p>Mudança para um novo barracão, ampliando nossa capacidade para trabalhar com componentes ainda maiores.</p></li>
        <li><strong>2026</strong><p>Aquisição e início da operação do centro de usinagem CNC Okada 855S, ampliando nossos recursos de usinagem de precisão.</p><p>Adoção de inteligência artificial para apoiar tanto a produção de peças quanto a elaboração de orçamentos para os clientes.</p><p>Início do processo de certificação ESG, reforçando nosso compromisso com as práticas ambientais, sociais e de governança.</p></li>
        <li><strong>Hoje</strong><p>Soluções dedicadas, máquinas, dispositivos e ferramentas para diferentes setores industriais.</p></li>
      </ol><p className="about-years"><CompanyExperience/> de experiência na indústria.</p><a className="equipment-link" href={`${import.meta.env.BASE_URL}maquinas/`}>Conheça nossa estrutura <ArrowUpRight size={18}/></a></aside></div>
    </div></section>
  </main><Footer/></>;
}

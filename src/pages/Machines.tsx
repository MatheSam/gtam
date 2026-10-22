import { ArrowUpRight } from 'lucide-react';
import { company } from '../data/company';
import { Breadcrumbs, ContentHero } from '../components/ContentPatterns';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

type Machine = {
  id: string;
  path: string;
  name: string;
  short: string;
  image: string;
  alt: string;
  caption: string;
  credit?: { label: string; href: string; licenseLabel?: string; licenseHref?: string; changes?: string };
  facts: { label: string; value: string }[];
  explanation: string;
};

const machines: Machine[] = [
  {
    id: 'machine-okada-855s', path: 'maquinas/okada-855s/', name: 'Centro de usinagem vertical CNC Okada 855S',
    short: 'Usinagem CNC com mesa de 1.000 × 500 mm, comando Mitsubishi M80 e apalpador Renishaw.',
    image: `${import.meta.env.BASE_URL}images/illustrative/cnc-milling-cc-by-sa.jpg`, alt: 'Ferramenta removendo material em uma operação de fresamento CNC, com fluido de corte.',
    caption: 'Exemplo ilustrativo de fresamento CNC; não retrata a máquina da GTAM. Imagem mantida sem alterações.', credit: { label: 'Impressionmanufacturer, via Wikimedia Commons', href: 'https://commons.wikimedia.org/wiki/File:CNC_milling_machine.jpg', licenseLabel: 'Licença CC BY-SA 4.0', licenseHref: 'https://creativecommons.org/licenses/by-sa/4.0/' },
    facts: [
      { label: 'Mesa', value: '1.000 × 500 mm' }, { label: 'Curso do eixo X', value: '800 mm' },
      { label: 'Curso do eixo Y', value: '550 mm' }, { label: 'Curso do eixo Z', value: '550 mm' },
      { label: 'Comando', value: 'Mitsubishi M80' }, { label: 'Medição na máquina', value: 'Apalpador Renishaw com software Productivity+' },
    ],
    explanation: 'A mesa é a superfície onde a peça ou o dispositivo é fixado. Os cursos indicam o deslocamento disponível em cada eixo da máquina; não definem, isoladamente, o tamanho máximo de uma peça. O comando CNC controla os movimentos programados. O apalpador e o Productivity+ são usados nas rotinas de medição informadas pela GTAM.',
  },
  {
    id: 'machine-clever-l-1860', path: 'maquinas/clever-l-1860/', name: 'Torno mecânico Clever L-1860',
    short: 'Torneamento convencional em um torno com 460 mm sobre o barramento e 1.500 mm entre pontas.',
    image: `${import.meta.env.BASE_URL}images/illustrative/metal-lathe.jpg`, alt: 'Torno mecânico em uma oficina, visto em perspectiva.',
    caption: 'Torno mecânico em oficina — imagem ilustrativa; não corresponde à unidade Clever L-1860 da GTAM.', credit: { label: 'Foto: cnrdmroglu / Pexels', href: 'https://www.pexels.com/photo/lathe-in-workshop-15603045/', licenseLabel: 'Licença Pexels', licenseHref: 'https://www.pexels.com/license/' },
    facts: [
      { label: 'Diâmetro sobre o barramento', value: '460 mm' },
      { label: 'Distância entre pontas', value: '1.500 mm' },
    ],
    explanation: 'O diâmetro sobre o barramento descreve o diâmetro máximo que pode girar acima da base do torno, conforme a especificação informada. A distância entre pontas é o espaço entre os centros do cabeçote e da contraponta. A fixação e a geometria da peça também influenciam se um serviço é adequado para o equipamento.',
  },
  {
    id: 'machine-milling', path: 'maquinas/fresadora-ferramenteira/', name: 'Fresadora ferramenteira',
    short: 'Fresamento convencional, furação e ajustes em operações de ferramentaria.',
    image: `${import.meta.env.BASE_URL}images/illustrative/conventional-milling.jpg`, alt: 'Operador trabalhando em uma fresadora universal para usinar uma peça de alumínio.',
    caption: 'Fresamento convencional de metal — imagem de arquivo ilustrativa; não retrata a equipe ou a oficina da GTAM.', credit: { label: 'Foto: U.S. Navy / Aaron Burden', href: 'https://commons.wikimedia.org/wiki/File:US_Navy_050517-N-7130B-018_Machinery_Repairman_3rd_Class_Kevin_Weeks_uses_a_universal_milling_machine_to_mill_a_piece_of_aluminum_in_the_machine_shop_aboard_the_Nimitz-class_aircraft_carrier_USS_Ronald_Reagan_(CVN_76).jpg', licenseLabel: 'Public Domain Mark 1.0', licenseHref: 'https://creativecommons.org/publicdomain/mark/1.0/' },
    facts: [
      { label: 'Tipo de operação', value: 'Fresamento convencional' },
      { label: 'Outras operações', value: 'Furação e ajustes' },
    ],
    explanation: 'A fresadora ferramenteira permite aproximar a ferramenta de corte da peça por movimentos controlados pelo operador. A GTAM informou o uso desse equipamento para fresamento convencional, furação e ajustes. Marca, modelo e dimensões de trabalho ainda não foram confirmados.',
  },
];

function ImageFigure({ machine }: { machine: Machine }) {
  return <figure className="machine-figure"><img src={machine.image} alt={machine.alt} loading="lazy"/><figcaption>{machine.caption}{machine.credit && <> <a href={machine.credit.href} target="_blank" rel="noreferrer">{machine.credit.label}</a>{machine.credit.licenseHref && <> · <a href={machine.credit.licenseHref} target="_blank" rel="noreferrer">{machine.credit.licenseLabel}</a></>}{machine.credit.changes && <> · {machine.credit.changes}</>}</>}</figcaption></figure>;
}

function MachineCard({ machine }: { machine: Machine }) {
  return <article className="machine-card"><figure className="machine-card-visual"><a className="machine-card-image" href={`${import.meta.env.BASE_URL}${machine.path}`}><img src={machine.image} alt={machine.alt} loading="lazy"/><span className="machine-image-label">Imagem ilustrativa</span></a><figcaption>{machine.caption}{machine.credit && <> <a href={machine.credit.href} target="_blank" rel="noreferrer">{machine.credit.label}</a>{machine.credit.licenseHref && <> · <a href={machine.credit.licenseHref} target="_blank" rel="noreferrer">{machine.credit.licenseLabel}</a></>}{machine.credit.changes && <> · {machine.credit.changes}</>}</>}</figcaption></figure><div className="machine-card-copy"><p className="eyebrow">MÁQUINA GTAM</p><h2>{machine.name}</h2><p>{machine.short}</p><a className="machine-card-link" href={`${import.meta.env.BASE_URL}${machine.path}`}>Conheça a máquina <ArrowUpRight size={18}/></a></div></article>;
}

export function MachinesPage({ page }: { page: string }) {
  if (page === 'machines') return <><a href="#conteudo" className="skip-link">Ir para o conteúdo</a><Header/><main id="conteudo" className="content-page"><ContentHero eyebrow="ESTRUTURA E CAPACIDADE" title="Máquinas da GTAM" description="Conheça os equipamentos usados em nossos trabalhos de ferramentaria e usinagem."/><section className="section"><div className="container machine-grid">{machines.map(machine => <MachineCard key={machine.id} machine={machine}/>)}</div></section><section className="machine-cta"><div className="container"><p>Tem um desenho, uma amostra ou uma necessidade de usinagem?</p><a className="button button-primary" href={company.whatsapp} target="_blank" rel="noopener noreferrer">Converse com a equipe <ArrowUpRight size={17}/></a></div></section></main><Footer/></>;

  const machine = machines.find(item => item.id === page);
  if (!machine) return null;
  return <><a href="#conteudo" className="skip-link">Ir para o conteúdo</a><Header/><main id="conteudo" className="content-page"><ContentHero eyebrow="MÁQUINAS GTAM" title={machine.name} description={machine.short}/><section className="section machine-detail"><div className="container"><Breadcrumbs items={[{ label: 'Início', href: import.meta.env.BASE_URL }, { label: 'Máquinas', href: `${import.meta.env.BASE_URL}maquinas/` }, { label: machine.name }]}/><div className="machine-detail-grid"><ImageFigure machine={machine}/><div><p className="eyebrow">DADOS INFORMADOS PELA GTAM</p><h2>Especificações</h2><dl className="machine-spec-list">{machine.facts.map(fact => <div key={fact.label}><dt>{fact.label}</dt><dd>{fact.value}</dd></div>)}</dl></div></div><section className="machine-explainer"><p className="eyebrow">EM TERMOS SIMPLES</p><h2>O que esses dados indicam</h2><p>{machine.explanation}</p></section><aside className="machine-note"><strong>Está avaliando um serviço?</strong><p>Envie o desenho, o modelo 3D ou explique a necessidade para a equipe avaliar o escopo e a máquina adequada.</p><a className="button button-primary" href={company.whatsapp} target="_blank" rel="noopener noreferrer">Fale com a GTAM <ArrowUpRight size={17}/></a></aside></div></section></main><Footer/></>;
}

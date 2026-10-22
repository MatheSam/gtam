import { ArrowUpRight, Check, Drill } from 'lucide-react';
import { company } from '../data/company';
import { contentRoutes } from '../data/routes';
import { Breadcrumbs, ContentHero } from '../components/ContentPatterns';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { MoldGuide } from './MoldGuide';
import { FixtureGuide, MachiningGuide, NozzleGuide, RecoveryGuide } from './SolutionGuides';

type Solution = {
  id: string;
  title: string;
  summary: string;
  intro: string;
  contextHeading: string;
  context: string[];
  when: string[];
  steps: { title: string; text: string }[];
  send: string[];
  relatedMachines?: string[];
  image: { src: string; alt: string; caption: string; source: string; sourceHref: string; license: string; licenseHref: string; changes?: string };
};

const solutions: Solution[] = [
  {
    id: 'solution-moldes', title: 'Manutenção de moldes de injeção',
    summary: 'Desmontagem, reparo, ajuste e montagem de moldes, inclusive multicavidade de grande porte.',
    intro: 'A GTAM atua na manutenção de moldes de injeção, incluindo moldes multicavidade e de grande porte. Cada serviço começa pela avaliação da condição do molde e da necessidade relatada.',
    contextHeading: 'O que é um molde de injeção?',
    context: ['É uma ferramenta montada na injetora que contém uma ou mais cavidades com o formato da peça. A máquina aquece e injeta o plástico no molde; o material esfria, o molde abre e a peça é retirada.', 'Esse processo é usado para fabricar em série muitos produtos plásticos, como embalagens, tampas, peças automotivas e componentes de equipamentos. Ao longo do uso, o molde pode precisar de inspeção, ajuste ou reparo. A necessidade concreta depende da condição do conjunto e é avaliada caso a caso.'],
    when: ['O molde precisa ser desmontado para avaliação ou reparo.', 'São necessários ajustes e montagem após a intervenção.', 'O molde é multicavidade e o escopo precisa ser entendido antes do orçamento.'],
    steps: [{ title: 'Entender o caso', text: 'Reunimos a identificação do molde, a falha ou necessidade informada e os materiais de referência disponíveis.' }, { title: 'Avaliar o escopo', text: 'A equipe analisa as informações e define o que precisa ser considerado na proposta.' }, { title: 'Executar o serviço', text: 'O trabalho pode envolver desmontagem, reparo, ajuste e montagem, de acordo com o escopo aprovado.' }],
    send: ['Fotos gerais e detalhes do molde.', 'Identificação do molde e da máquina em que trabalha, se disponíveis.', 'Descrição do problema observado e prazo desejado.'],
    image: { src: 'injection-mold-cc0.jpg', alt: 'Vista em corte de um molde de injeção, mostrando cavidades e componentes internos.', caption: 'Vista em corte de um molde de injeção — imagem técnica ilustrativa; não é um molde da GTAM.', source: 'Foto: Bricetofly / Wikimedia Commons', sourceHref: 'https://commons.wikimedia.org/wiki/File:Injection_mold_-_(1).jpg', license: 'CC0 1.0', licenseHref: 'https://creativecommons.org/publicdomain/zero/1.0/' },
  },
  {
    id: 'solution-fixtures', title: 'Dispositivos, berços e bancadas',
    summary: 'Bancadas de aplicação de fita, berços, dispositivos de montagem e postiços de molde.',
    intro: 'A GTAM fabrica soluções de apoio à montagem e ao processo industrial, como bancadas de aplicação de fita, berços, dispositivos de montagem e postiços de molde.',
    contextHeading: 'Para que servem dispositivos, berços e bancadas?',
    context: ['São recursos físicos preparados para uma tarefa de produção. Um dispositivo ou berço apoia, posiciona ou segura uma peça durante uma operação; uma bancada oferece uma superfície de trabalho organizada para atividades de montagem, aplicação ou inspeção.', 'Eles podem ser usados em linhas de montagem e outras operações industriais em que uma peça precisa ficar apoiada ou posicionada para uma tarefa definida. O formato depende da peça, da sequência de trabalho e do espaço disponível. A GTAM também fabrica postiços de molde, componentes instalados no conjunto do molde conforme o projeto.'],
    when: ['Uma operação precisa apoiar ou posicionar a peça durante a montagem.', 'É necessário um dispositivo ou berço para uma aplicação definida.', 'A operação precisa de uma bancada desenhada para a tarefa.'],
    steps: [{ title: 'Definir a operação', text: 'Entendemos a peça, a tarefa executada e como o operador interage com o conjunto.' }, { title: 'Reunir referências', text: 'A avaliação parte de desenho, modelo 3D, amostra ou informações dimensionais disponíveis.' }, { title: 'Orçar o escopo', text: 'A proposta descreve o dispositivo ou bancada a ser feito, conforme as informações validadas.' }],
    send: ['Desenho ou modelo 3D da peça e dos pontos de apoio.', 'Fotos ou vídeo da operação atual.', 'Descrição da tarefa, espaço disponível e necessidades de acesso.'],
    image: { src: 'workbench-vise.jpg', alt: 'Morsa fixada em uma bancada de trabalho de oficina.', caption: 'Bancada com morsa — imagem ilustrativa; não representa um dispositivo ou bancada fabricada pela GTAM.', source: 'Foto: Ahmet Çiftçi / Pexels', sourceHref: 'https://www.pexels.com/photo/a-bench-with-a-vise-and-a-tool-on-it-28231752/', license: 'Licença Pexels', licenseHref: 'https://www.pexels.com/license/' },
  },
  {
    id: 'solution-machining', title: 'Usinagem a partir de desenho ou amostra',
    summary: 'Avaliação de peças com desenho técnico, modelo 3D ou amostra física; engenharia reversa quando não há desenho.',
    intro: 'A equipe pode partir de um desenho, arquivo 3D ou amostra. Quando não há desenho, a GTAM informou que realiza engenharia reversa a partir da peça original, com modelagem no SolidWorks e programação CAM no WorkNC.',
    contextHeading: 'O que significa usinar uma peça?',
    context: ['Usinagem é um processo de fabricação em que uma ferramenta de corte remove material de uma peça bruta até chegar à forma desejada. No fresamento, a ferramenta gira e corta o material; no torneamento, a peça gira enquanto a ferramenta atua sobre ela.', 'O processo é usado para produzir ou ajustar componentes com superfícies, furos, rasgos e outras formas definidas em projeto. Um desenho técnico ou arquivo 3D descreve essas formas; quando a referência é uma peça física, a engenharia reversa pode ajudar a reconstruir seu modelo digital. A viabilidade é avaliada conforme a geometria, o material e a aplicação.'],
    when: ['Você tem um desenho técnico ou arquivo 3D para enviar.', 'A peça existe, mas não há desenho disponível.', 'É preciso conversar sobre a fabricação ou reprodução de uma peça.'],
    steps: [{ title: 'Receber a referência', text: 'Analisamos o desenho, arquivo 3D ou amostra e as informações sobre a aplicação.' }, { title: 'Modelar e programar', text: 'Quando necessário, a GTAM modela no SolidWorks e prepara a programação CAM no WorkNC.' }, { title: 'Avaliar a usinagem', text: 'A equipe define o escopo e o processo adequado após analisar as referências recebidas.' }],
    send: ['Arquivo 3D ou desenho técnico, se houver.', 'Fotos com escala ou a amostra física, quando não houver desenho.', 'Material, quantidade e aplicação, se essas informações estiverem disponíveis.'],
    relatedMachines: ['machine-okada-855s', 'machine-clever-l-1860', 'machine-milling'],
    image: { src: 'cnc-milling-cc-by-sa.jpg', alt: 'Ferramenta removendo material de uma peça durante fresamento CNC.', caption: 'Operação de fresamento CNC — imagem de processo ilustrativa; não é peça ou serviço da GTAM. Imagem mantida sem alterações.', source: 'Foto: Impressionmanufacturer / Wikimedia Commons', sourceHref: 'https://commons.wikimedia.org/wiki/File:CNC_milling_machine.jpg', license: 'CC BY-SA 4.0', licenseHref: 'https://creativecommons.org/licenses/by-sa/4.0/' },
  },
  {
    id: 'solution-recovery', title: 'Recuperação de componentes industriais',
    summary: 'Recuperação de braços, eixos, mancais e cilindros hidráulicos de fornos industriais, além de engrenagens de nylon.',
    intro: 'A GTAM recebe demandas de recuperação de componentes industriais. Os exemplos informados incluem braços, eixos, mancais e cilindros hidráulicos de fornos industriais, além de engrenagens de nylon.',
    contextHeading: 'O que envolve a recuperação de um componente?',
    context: ['É a avaliação de uma peça usada para entender seu estado e verificar se há uma intervenção possível antes de decidir pela substituição. O tipo de trabalho depende do dano, do material, das dimensões e da função do componente no equipamento.', 'Essa necessidade aparece na manutenção de máquinas e instalações industriais: por exemplo, em braços, eixos, mancais e cilindros hidráulicos de fornos. A GTAM também informou trabalhos com engrenagens de nylon. Cada peça é analisada individualmente para definir se existe um escopo adequado de recuperação ou usinagem.'],
    when: ['Um componente apresenta desgaste, dano ou precisa ser avaliado para recuperação.', 'A peça faz parte de um equipamento industrial e sua aplicação precisa ser explicada.', 'Você precisa avaliar uma alternativa de recuperação antes de definir o próximo passo.'],
    steps: [{ title: 'Identificar o componente', text: 'Reunimos fotos, dimensões disponíveis e informações sobre o equipamento de origem.' }, { title: 'Entender a necessidade', text: 'A equipe considera o problema observado e a função da peça na operação.' }, { title: 'Avaliar o serviço', text: 'Com as referências, a GTAM analisa se pode propor um escopo de recuperação ou usinagem.' }],
    send: ['Fotos da peça e das regiões danificadas.', 'Dimensões ou desenho, se disponíveis.', 'Material, equipamento de origem e descrição da falha observada.'],
    relatedMachines: ['machine-clever-l-1860', 'machine-milling'],
    image: { src: 'industrial-repair.jpg', alt: 'Técnico trabalhando em um conjunto mecânico em uma oficina industrial.', caption: 'Manutenção de equipamento industrial — imagem ilustrativa; não mostra componente ou reparo feito pela GTAM.', source: 'Foto: Bulat843 / Pexels', sourceHref: 'https://www.pexels.com/photo/technician-repairing-industrial-equipment-in-workshop-36861983/', license: 'Licença Pexels', licenseHref: 'https://www.pexels.com/license/' },
  },
  {
    id: 'solution-injection-nozzles', title: 'Bicos e ponteiras para injetoras',
    summary: 'Usinagem de bicos e ponteiras para máquinas injetoras de plástico.',
    intro: 'A GTAM informou a fabricação de bicos e ponteiras para injetoras. Para avaliar uma solicitação, é importante entender o modelo da máquina, o desenho ou a peça de referência e a aplicação.',
    contextHeading: 'O que são bicos e ponteiras de injetora?',
    context: ['Na moldagem por injeção, o bico fica na unidade de injeção da máquina e faz a interface com a entrada de material do molde. A ponteira pode ser parte dessa região de passagem; os nomes e configurações variam conforme o conjunto e o fabricante.', 'Esses componentes são usados em máquinas que produzem peças plásticas por injeção. Como precisam corresponder à interface da máquina e do molde, o modelo da injetora, o desenho e a peça de referência ajudam a identificar dimensões e formato antes de avaliar uma fabricação.'],
    when: ['A injetora precisa de um bico ou ponteira de reposição.', 'Há uma peça de referência, mas é necessário discutir a fabricação.', 'Você tem um desenho ou modelo com as dimensões da peça.'],
    steps: [{ title: 'Identificar a aplicação', text: 'Registramos o modelo da injetora e a função do bico ou da ponteira no conjunto.' }, { title: 'Analisar a referência', text: 'A avaliação parte do desenho, arquivo 3D ou componente de referência.' }, { title: 'Definir a proposta', text: 'A equipe confirma o escopo possível a partir das informações recebidas.' }],
    send: ['Fabricante e modelo da injetora.', 'Desenho, arquivo 3D ou peça de referência.', 'Quantidade e prazo pretendido.'],
    relatedMachines: ['machine-clever-l-1860', 'machine-okada-855s'],
    image: { src: 'injection-nozzle-cc0.jpg', alt: 'Bico metálico utilizado em processo de injeção de plástico.', caption: 'Bico de injeção para moldagem de plástico — imagem ilustrativa; não é uma peça fornecida pela GTAM.', source: 'Foto: Bricetofly / Wikimedia Commons', sourceHref: 'https://commons.wikimedia.org/wiki/File:Nozzle_-_injection_molding_(1).jpg', license: 'CC0 1.0', licenseHref: 'https://creativecommons.org/publicdomain/zero/1.0/' },
  },
];

function SolutionCard({ solution }: { solution: Solution }) {
  const route = contentRoutes.find(item => item.id === solution.id)!;
  return <article className="solution-card"><p className="eyebrow">SOLUÇÃO GTAM</p><h2>{solution.title}</h2><p>{solution.summary}</p><a href={`${import.meta.env.BASE_URL}${route.path}`}>Ver como funciona <ArrowUpRight size={18}/></a></article>;
}

function SolutionFigure({ solution }: { solution: Solution }) {
  const image = solution.image;
  return <figure className="solution-figure"><img src={`${import.meta.env.BASE_URL}images/illustrative/${image.src}`} alt={image.alt} loading="lazy"/><figcaption>{image.caption} <a href={image.sourceHref} target="_blank" rel="noreferrer">{image.source}</a> · <a href={image.licenseHref} target="_blank" rel="noreferrer">{image.license}</a>{image.changes && ` · ${image.changes}`}</figcaption></figure>;
}

export function SolutionsPage({ page }: { page: string }) {
  const solution = solutions.find(item => item.id === page);
  if (!solution) return <><a href="#conteudo" className="skip-link">Ir para o conteúdo</a><Header/><main id="conteudo" className="content-page"><ContentHero eyebrow="ENGENHARIA E USINAGEM" title="Soluções industriais" description="Serviços de ferramentaria e usinagem explicados a partir das necessidades que atendemos."/><section className="section"><div className="container"><div className="solution-grid">{solutions.map(item => <SolutionCard key={item.id} solution={item}/>)}</div><aside className="solution-contact"><div><strong>Não encontrou o que procura?</strong><p>Conte à equipe sobre sua peça, equipamento ou processo.</p></div><a className="button button-primary" href={company.whatsapp} target="_blank" rel="noopener noreferrer">Fale com a GTAM <ArrowUpRight size={17}/></a></aside></div></section></main><Footer/></>;

  const route = contentRoutes.find(item => item.id === solution.id)!;
  const related = (solution.relatedMachines ?? []).map(id => contentRoutes.find(item => item.id === id)).filter((item): item is NonNullable<typeof item> => Boolean(item));
  return <><a href="#conteudo" className="skip-link">Ir para o conteúdo</a><Header/><main id="conteudo" className="content-page"><ContentHero eyebrow="SOLUÇÕES GTAM" title={solution.title} description={route.description}/><section className="section solution-detail"><div className="container"><Breadcrumbs items={[{ label: 'Início', href: import.meta.env.BASE_URL }, { label: 'Soluções', href: `${import.meta.env.BASE_URL}solucoes/` }, { label: solution.title }]}/><SolutionFigure solution={solution}/><p className="solution-intro">{solution.intro}</p><section className="solution-context"><p className="eyebrow">ENTENDA O CONCEITO</p><h2>{solution.contextHeading}</h2><div>{solution.context.map(paragraph => <p key={paragraph}>{paragraph}</p>)}</div></section>{solution.id === 'solution-moldes' && <MoldGuide/>}{solution.id === 'solution-fixtures' && <FixtureGuide/>}{solution.id === 'solution-machining' && <MachiningGuide/>}{solution.id === 'solution-recovery' && <RecoveryGuide/>}{solution.id === 'solution-injection-nozzles' && <NozzleGuide/>}<div className="solution-detail-grid"><section><p className="eyebrow">QUANDO PROCURAR</p><h2>Necessidades que atendemos</h2><ul className="solution-list">{solution.when.map(item => <li key={item}><Check size={18}/><span>{item}</span></li>)}</ul></section><section><p className="eyebrow">ETAPAS DO SERVIÇO</p><h2>Como a GTAM atua</h2><ol className="solution-steps">{solution.steps.map((step, index) => <li key={step.title}><span className="solution-step-number">{String(index + 1).padStart(2, '0')}</span><div><h3>{step.title}</h3><p>{step.text}</p></div></li>)}</ol></section></div><section className="solution-send"><p className="eyebrow">PARA AVALIAR O SERVIÇO</p><h2>O que enviar para a equipe</h2><ul>{solution.send.map(item => <li key={item}><Drill size={17} strokeWidth={1.8} aria-hidden="true"/><span>{item}</span></li>)}</ul><p>Envie o que já tiver. A equipe pode orientar a conversa sobre as informações que faltarem.</p></section>{related.length > 0 && <section className="solution-related"><p className="eyebrow">CONHEÇA TAMBÉM AS MÁQUINAS DA GTAM</p><div className="solution-related-grid">{related.map(item => <a key={item.id} href={`${import.meta.env.BASE_URL}${item.path}`}>{item.title.split('|')[0].trim()} <ArrowUpRight size={17}/></a>)}</div></section>}<aside className="solution-contact"><div><strong>Vamos conversar sobre seu serviço?</strong><p>Compartilhe o desenho, a amostra ou as informações que você já tem.</p></div><a className="button button-primary" href={company.whatsapp} target="_blank" rel="noopener noreferrer">Fale com a GTAM <ArrowUpRight size={17}/></a></aside></div></section></main><Footer/></>;
}

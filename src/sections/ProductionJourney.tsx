import { Box, ClipboardList, DraftingCompass, Ruler, Truck, Wrench } from 'lucide-react';

const steps = [
  { icon: ClipboardList, number: '01', title: 'Desenho ou amostra', text: 'Recebemos o arquivo 3D, o desenho técnico ou a peça original para entender a necessidade.' },
  { icon: Box, number: '02', title: 'Avaliação e orçamento', text: 'Avaliamos modelo, material e escopo; a proposta detalha as etapas e os tempos estimados.' },
  { icon: DraftingCompass, number: '03', title: 'Programação e preparação', text: 'Quando o escopo envolve usinagem, programamos e preparamos a operação conforme o projeto.' },
  { icon: Wrench, number: '04', title: 'Usinagem e medição', text: 'Executamos a usinagem e, quando aplicável, conferimos medidas na máquina com apalpador.' },
  { icon: Ruler, number: '05', title: 'Bancada e inspeção', text: 'A peça segue para os ajustes e a inspeção previstos no escopo do serviço.' },
  { icon: Truck, number: '06', title: 'Entrega', text: 'Com o trabalho concluído, a equipe combina a entrega com o cliente.' },
];

export function ProductionJourney() {
  return <section id="processo" className="section production-journey" aria-labelledby="production-journey-title"><div className="container">
    <div className="production-intro reveal"><div><p className="eyebrow light">ORÇAMENTO À ENTREGA</p><h2 id="production-journey-title">Cada etapa acompanhada.<br/><span>Da referência inicial ao serviço pronto.</span></h2></div><p>O processo de trabalho da GTAM é acompanhado por um sistema próprio de gestão, da avaliação inicial à produção.</p></div>
    <ol className="production-steps">{steps.map(({ icon: Icon, number, title, text }) => <li className="production-step reveal" key={number}><span className="production-step-number">{number}</span><div className="production-step-icon"><Icon size={23} strokeWidth={1.7}/></div><div><h3>{title}</h3><p>{text}</p></div></li>)}</ol>
    <aside className="production-system reveal"><div className="production-system-copy"><p className="eyebrow light">SISTEMA PRÓPRIO DE GESTÃO</p><h3><strong>Inteligência artificial</strong> no orçamento e na produção.</h3><p>O sistema da GTAM analisa o arquivo 3D para apoiar as estimativas e acompanha o serviço até a entrega.</p></div><ul><li><strong>Orçamento com IA:</strong> análise do modelo 3D e estimativas de programação, preparação, usinagem e material.</li><li><strong>Apontamento:</strong> cada etapa é registrada pelo celular junto à máquina.</li><li><strong>Painel:</strong> situação, prazo e comparação entre tempo orçado e realizado.</li><li><strong>Melhoria contínua:</strong> os tempos reais ajudam a calibrar as próximas estimativas.</li></ul></aside>
  </div></section>;
}

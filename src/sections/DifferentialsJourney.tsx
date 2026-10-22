const items = [
  { title: 'Do desenho ou da amostra à peça pronta', text: 'Modelamos no SolidWorks, programamos no WorkNC e usinamos na GTAM. Sem desenho, fazemos engenharia reversa a partir da peça original.' },
  { title: 'Medição dentro da máquina', text: 'Apalpador Renishaw e Productivity+ ajudam a referenciar a peça e conferir medidas antes de ela sair da máquina.' },
  { title: 'Programação CAM para ferramentaria', text: 'WorkNC, da Hexagon, para gerar trajetórias de usinagem de moldes e superfícies complexas.' },
  { title: 'Quem orça conhece a usinagem', text: 'O orçamento é feito por quem programa e opera as máquinas, com conversa técnica direta.' },
  { title: 'Produção acompanhada', text: 'Orçamentos, apontamento de horas e andamento de cada serviço ficam reunidos no sistema próprio da GTAM.' },
  { title: 'Experiência em manutenção de moldes', text: 'Desmontagem, reparo, ajuste e montagem de moldes de injeção, inclusive multicavidade.' },
  { title: 'Atendimento na sua planta', text: 'Visitas técnicas para levantamento, análise e ajustes no local.' },
  { title: 'Fornecedores homologados', text: 'A GTAM é fornecedora homologada Volkswagen e Neodent.' },
];

export function DifferentialsJourney() {
  return <section id="diferenciais" className="section differentials-journey" aria-labelledby="differentials-title"><div className="container">
    <div className="section-heading reveal"><div><p className="eyebrow">COMO TRABALHAMOS</p><h2 id="differentials-title">Um caminho claro, do desafio à entrega.</h2></div><p>Veja como projeto, programação, produção e acompanhamento se conectam em cada trabalho.</p></div>
    <ol className="differentials-track">{items.map(({ title, text }, index) => <li className="differential-step reveal" key={title}><span className="differential-number">{String(index + 1).padStart(2, '0')}</span><div><h3>{title}</h3><p>{text}</p></div></li>)}</ol>
  </div></section>;
}

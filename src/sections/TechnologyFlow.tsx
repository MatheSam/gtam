import { ArrowRight, Box, DraftingCompass, Gauge, ScanLine } from 'lucide-react';
import type { CSSProperties } from 'react';

const stages = [
  { icon: DraftingCompass, step: '01', name: 'SOLIDWORKS', label: 'Projeto e engenharia reversa', detail: 'Modelagem 3D e desenho técnico a partir do projeto ou da peça original.' },
  { icon: Box, step: '02', name: 'WORKNC · HEXAGON', label: 'Programação CAM', detail: 'Preparação de trajetórias para moldes, superfícies complexas e usinagem segura.' },
  { icon: Gauge, step: '03', name: 'MITSUBISHI M80', label: 'Usinagem CNC', detail: 'Comando do centro de usinagem vertical Okada 855S.' },
  { icon: ScanLine, step: '04', name: 'RENISHAW', label: 'Medição na máquina', detail: 'Apalpador e Productivity+ para referenciar e conferir medidas antes de soltar a peça.' },
];

export function TechnologyFlow() {
  return <section id="tecnologia" className="section technology-flow" aria-labelledby="technology-flow-title"><div className="container">
    <div className="section-heading reveal"><div><p className="eyebrow">TECNOLOGIA NO FLUXO DE TRABALHO</p><h2 id="technology-flow-title">Do modelo à conferência da peça.</h2></div><p>Ferramentas conectadas em cada etapa do trabalho, do planejamento à verificação dentro da máquina.</p></div>
    <ol className="technology-flow-track reveal">{stages.map(({ icon: Icon, step, name, label, detail }, index) => <li className="technology-flow-step reveal" key={step} style={{ '--flow-order': index } as CSSProperties}><span className="technology-flow-number">{step}</span><div className={`technology-flow-icon technology-flow-icon-${step}`}><Icon size={24} strokeWidth={1.7} aria-hidden="true"/></div><p className="technology-flow-name">{name}</p><h3>{label}</h3><p className="technology-flow-detail">{detail}</p>{index < stages.length - 1 && <ArrowRight className="technology-flow-arrow" size={20} aria-hidden="true"/>}</li>)}</ol>
  </div></section>;
}

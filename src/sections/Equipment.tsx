import { ArrowUpRight, Check } from 'lucide-react';
import { company } from '../data/company';

const equipment = [
  { title: 'Fresadora CNC', text: 'Usinagem com comando numérico para executar geometrias com precisão e repetibilidade.' },
  { title: 'Fresadora convencional (manual)', text: 'Versatilidade para ajustes, desenvolvimento e usinagem de peças sob medida.' },
  { title: 'Torno', text: 'Torneamento de peças cilíndricas, eixos e componentes conforme a necessidade de cada projeto.' },
];

export function Equipment() {
  return <section id="estrutura" className="section equipment-section" aria-labelledby="equipment-title">
    <div className="container">
      <div className="section-heading reveal">
        <div><p className="eyebrow">NOSSA ESTRUTURA</p><h2 id="equipment-title">Máquinas e técnica para<br/>dar forma ao seu projeto.</h2></div>
        <p>Trabalhamos com fresadora CNC, fresadora convencional e torno para atender diferentes necessidades de usinagem.</p>
      </div>
      <div className="equipment-layout">
        <div className="equipment-gallery reveal">
          <figure className="equipment-main-photo"><img src={`${import.meta.env.BASE_URL}images/usinagem-fresadora.jpg`} alt="Operação de fresamento de uma peça metálica" loading="lazy" width="1400" height="934" /></figure>
          <figure><img src={`${import.meta.env.BASE_URL}images/ferramentas-usinagem.jpg`} alt="Conjunto de fresas e ferramentas de usinagem" loading="lazy" width="1400" height="935" /></figure>
          <figure><img src={`${import.meta.env.BASE_URL}images/fresa-detalhe.jpg`} alt="Detalhe de uma fresa com pastilhas de corte" loading="lazy" width="1400" height="945" /></figure>
          <p className="equipment-caption">Imagens ilustrativas de operações e ferramentas de usinagem.</p>
        </div>
        <div className="equipment-copy reveal">
          {equipment.map(item => <article className="equipment-item" key={item.title}><Check size={21} aria-hidden="true"/><div><h3>{item.title}</h3><p>{item.text}</p></div></article>)}
          <a className="equipment-link" href={company.whatsapp} target="_blank" rel="noopener noreferrer">Converse sobre a sua peça <ArrowUpRight size={19}/></a>
        </div>
      </div>
    </div>
  </section>;
}

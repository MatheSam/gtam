import { ArrowUpRight } from 'lucide-react';

const equipment = [
  { title: 'Centro de usinagem vertical CNC Okada 855S', text: 'Mesa de 1.000 × 500 mm, cursos X/Y/Z de 800 × 550 × 550 mm e comando Mitsubishi M80.', path: 'maquinas/okada-855s/' },
  { title: 'Torno mecânico Clever L-1860', text: 'Ø 460 mm sobre o barramento e 1.500 mm entre pontas.', path: 'maquinas/clever-l-1860/' },
  { title: 'Fresadora ferramenteira', text: 'Fresamento convencional, furação e ajustes.', path: 'maquinas/fresadora-ferramenteira/' },
];

export function Equipment() {
  return <section id="estrutura" className="section equipment-section" aria-labelledby="equipment-title">
    <div className="container">
      <div className="section-heading reveal">
        <div><p className="eyebrow">NOSSA ESTRUTURA</p><h2 id="equipment-title">Máquinas e técnica para<br/>dar forma ao seu projeto.</h2></div>
        <p>Conheça as máquinas da GTAM e as informações técnicas confirmadas para cada equipamento.</p>
      </div>
      <div className="equipment-layout">
        <div className="equipment-gallery reveal">
          <figure className="equipment-main-photo"><img src={`${import.meta.env.BASE_URL}images/usinagem-fresadora.jpg`} alt="Operação de fresamento de uma peça metálica" loading="lazy" width="1400" height="934" /></figure>
          <figure><img src={`${import.meta.env.BASE_URL}images/ferramentas-usinagem.jpg`} alt="Conjunto de fresas e ferramentas de usinagem" loading="lazy" width="1400" height="935" /></figure>
          <figure><img src={`${import.meta.env.BASE_URL}images/fresa-detalhe.jpg`} alt="Detalhe de uma fresa com pastilhas de corte" loading="lazy" width="1400" height="945" /></figure>
          <p className="equipment-caption">Imagens ilustrativas de operações e ferramentas de usinagem.</p>
        </div>
        <div className="equipment-copy reveal">
          {equipment.map(item => <a className="equipment-item equipment-item-link" href={`${import.meta.env.BASE_URL}${item.path}`} key={item.title}><div><h3>{item.title}</h3><p>{item.text}</p><span>Ver máquina <ArrowUpRight size={16}/></span></div></a>)}
          <a className="equipment-link" href={`${import.meta.env.BASE_URL}maquinas/`}>Ver todas as máquinas <ArrowUpRight size={19}/></a>
        </div>
      </div>
    </div>
  </section>;
}

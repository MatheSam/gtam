import { ArrowUpRight } from 'lucide-react';
import { EsgAnimatedIcon } from '../components/EsgAnimatedIcon';
import { RotatingCommitment } from '../components/RotatingCommitment';

const pillars = [
  { kind: 'environmental' as const, label: 'AMBIENTAL', title: 'Mais cuidado com os recursos', text: 'A avaliação de práticas ambientais ajuda a identificar oportunidades de reduzir desperdícios, usar materiais com responsabilidade e melhorar a gestão de resíduos.' },
  { kind: 'social' as const, label: 'SOCIAL', title: 'Pessoas no centro do trabalho', text: 'Valorizar saúde, segurança e respeito nas relações de trabalho contribui para um ambiente mais responsável e para relações duradouras com a comunidade.' },
  { kind: 'governance' as const, label: 'GOVERNANÇA', title: 'Transparência que gera confiança', text: 'Processos claros, ética e acompanhamento de indicadores fortalecem a gestão e dão mais visibilidade aos compromissos assumidos com clientes e parceiros.' },
];

export function Sustainability() {
  return <section id="esg" className="section esg-section" aria-labelledby="esg-title">
    <div className="container">
      <div className="esg-intro reveal">
        <div><p className="eyebrow"><RotatingCommitment/></p><h2 id="esg-title">Precisão no presente.<br/>Responsabilidade para o futuro.</h2></div>
        <div><span className="esg-status"><span aria-hidden="true"/>Relatório ESG em elaboração</span><p>A GTAM está elaborando seu primeiro relatório de sustentabilidade com base nas Normas GRI. O trabalho organiza os temas ambientais, sociais e de governança relevantes para a empresa e seus públicos.</p></div>
      </div>
      <div className="esg-grid">
        {pillars.map(({ kind, label, title, text }) => <article className="esg-card reveal" key={label}><EsgAnimatedIcon kind={kind}/><p className="esg-label">{label}</p><h3>{title}</h3><p>{text}</p></article>)}
      </div>
      <a className="esg-more-link" href={`${import.meta.env.BASE_URL}esg/`}>Leia mais sobre ESG na GTAM <ArrowUpRight size={18}/></a>
      <div className="esg-report reveal">
        <div>
          <p className="esg-label">RELATÓRIO DE SUSTENTABILIDADE</p>
          <h3>Conheça o benchmark e o diagnóstico ESG da GTAM</h3>
          <p>O diagnóstico de dupla materialidade climática e a estruturação do relatório são desenvolvidos com a <a href="https://redwood.red/" target="_blank" rel="noopener noreferrer"><strong>Redwood Estratégia &amp; Impacto</strong></a>. O relatório está em elaboração.</p>
        </div>
        <a className="esg-hero-button" href="https://gtambench.netlify.app/#" target="_blank" rel="noopener noreferrer">Ver benchmark GTAM<ArrowUpRight size={18}/><span className="sr-only"> (abre em outra aba)</span></a>
      </div>
    </div>
  </section>;
}

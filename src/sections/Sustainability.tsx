import { Leaf, Users, ClipboardCheck } from 'lucide-react';

const pillars = [
  { icon: Leaf, label: 'AMBIENTAL', title: 'Mais cuidado com os recursos', text: 'A avaliação de práticas ambientais ajuda a identificar oportunidades de reduzir desperdícios, usar materiais com responsabilidade e melhorar a gestão de resíduos.' },
  { icon: Users, label: 'SOCIAL', title: 'Pessoas no centro do trabalho', text: 'Valorizar saúde, segurança e respeito nas relações de trabalho contribui para um ambiente mais responsável e para relações duradouras com a comunidade.' },
  { icon: ClipboardCheck, label: 'GOVERNANÇA', title: 'Transparência que gera confiança', text: 'Processos claros, ética e acompanhamento de indicadores fortalecem a gestão e dão mais visibilidade aos compromissos assumidos com clientes e parceiros.' },
];

export function Sustainability() {
  return <section id="esg" className="section esg-section" aria-labelledby="esg-title">
    <div className="container">
      <div className="esg-intro reveal">
        <div><p className="eyebrow">COMPROMISSO COM O FUTURO</p><h2 id="esg-title">Precisão no presente.<br/>Responsabilidade para o futuro.</h2></div>
        <div><span className="esg-status"><span aria-hidden="true"/>Relatório ESG em elaboração</span><p>A GTAM está elaborando seu primeiro relatório de sustentabilidade com base nas Normas GRI. O trabalho organiza os temas ambientais, sociais e de governança relevantes para a empresa e seus públicos.</p></div>
      </div>
      <div className="esg-grid">
        {pillars.map(({ icon: Icon, label, title, text }) => <article className="esg-card reveal" key={label}><Icon size={28} strokeWidth={1.5} aria-hidden="true"/><p className="esg-label">{label}</p><h3>{title}</h3><p>{text}</p></article>)}
      </div>
      <div className="esg-report reveal">
        <div>
          <p className="esg-label">RELATÓRIO DE SUSTENTABILIDADE</p>
          <h3>Conheça o diagnóstico ESG da GTAM</h3>
          <p>O diagnóstico de dupla materialidade climática e a estruturação do relatório são desenvolvidos com a <strong>Redwood Estratégia &amp; Impacto</strong>. O relatório está em elaboração.</p>
        </div>
        <a className="esg-report-link" href="https://gtambench.netlify.app/#" target="_blank" rel="noopener noreferrer">Ver relatório ESG<span aria-hidden="true">↗</span><span className="sr-only"> (abre em outra aba)</span></a>
      </div>
    </div>
  </section>;
}

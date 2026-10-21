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
        <div><span className="esg-status"><span aria-hidden="true"/>Validação ESG em andamento</span><p>A GTAM está em processo de validação ESG, que reúne os pilares ambiental, social e de governança. Esse caminho busca fortalecer práticas responsáveis e a melhoria contínua da nossa gestão.</p></div>
      </div>
      <div className="esg-grid">
        {pillars.map(({ icon: Icon, label, title, text }) => <article className="esg-card reveal" key={label}><Icon size={28} strokeWidth={1.5} aria-hidden="true"/><p className="esg-label">{label}</p><h3>{title}</h3><p>{text}</p></article>)}
      </div>
      <p className="esg-note reveal">A validação pode ajudar a demonstrar compromissos, orientar melhorias e fortalecer a confiança de clientes e parceiros. O processo está em andamento; a certificação ainda não foi concluída.</p>
    </div>
  </section>;
}

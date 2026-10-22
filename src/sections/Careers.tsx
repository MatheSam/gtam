import { ArrowUpRight, BriefcaseBusiness } from 'lucide-react';
import { company } from '../data/company';

export function Careers() {
  const subject = encodeURIComponent('Trabalhe conosco — GTAM Ferramentaria');
  return <section id="trabalhe-conosco" className="section careers-section" aria-labelledby="careers-title">
    <div className="container careers-layout">
      <div className="careers-copy reveal">
        <p className="eyebrow">OPORTUNIDADES NA GTAM</p>
        <h2 id="careers-title">Trabalhe conosco</h2>
        <p>Quer fazer parte da equipe da GTAM? Conte um pouco sobre sua experiência e a área em que gostaria de atuar. Vamos manter seu contato para conversar sobre oportunidades.</p>
      </div>
      <div className="careers-card reveal">
        <BriefcaseBusiness size={30} strokeWidth={1.6} aria-hidden="true" />
        <div>
          <h3>Envie sua apresentação</h3>
          <p>Escreva para nosso e-mail. Se desejar, anexe seu currículo.</p>
          <a className="careers-link" href={`mailto:${company.email}?subject=${subject}`}>
            Falar sobre oportunidades <ArrowUpRight size={17} aria-hidden="true" />
          </a>
          <span className="careers-email">{company.email}</span>
        </div>
      </div>
    </div>
  </section>;
}

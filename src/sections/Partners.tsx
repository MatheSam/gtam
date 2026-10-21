import hexagon from '../../img/imgs/Hexagon_logo.svg';
import renishaw from '../../img/logos/renishaw.png';
import ska from '../../img/logos/ska.png';
import solidworks from '../../img/logos/solidworks.png';
import worknc from '../../img/logos/worknc.png';

const partners = [
  { name: 'Hexagon', logo: hexagon },
  { name: 'Renishaw', logo: renishaw },
  { name: 'SKA', logo: ska },
  { name: 'SOLIDWORKS', logo: solidworks },
  { name: 'WORKNC', logo: worknc },
];

export function Partners() {
  return <section id="parceiros" className="partners-section" aria-labelledby="partners-title">
    <div className="container">
      <div className="partners-heading reveal">
        <p className="eyebrow">EMPRESAS PARCEIRAS</p>
        <h2 id="partners-title">Tecnologia e parceria em cada projeto.</h2>
      </div>
      <ul className="partners-grid reveal">
        {partners.map(partner => <li key={partner.name} className={partner.name === 'SOLIDWORKS' || partner.name === 'Renishaw' ? 'partner-logo-large' : undefined}>
          <img src={partner.logo} alt={partner.name} loading="lazy" />
        </li>)}
      </ul>
    </div>
  </section>;
}

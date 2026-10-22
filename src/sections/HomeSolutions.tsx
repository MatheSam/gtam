import { ArrowUpRight } from "lucide-react";
const solutions = [
  {
    title: "Manutenção de moldes de injeção",
    detail: "Desmontagem, recuperação, ajuste e montagem.",
    href: "solucoes/manutencao-moldes-injecao/",
  },
  {
    title: "Dispositivos, berços e bancadas",
    detail: "Apoio à montagem e às aplicações industriais.",
    href: "solucoes/dispositivos-bercos-bancadas/",
  },
  {
    title: "Usinagem a partir de desenho ou amostra",
    detail: "Avaliação técnica para fabricar ou recuperar componentes.",
    href: "solucoes/usinagem-desenho-amostra/",
  },
];
export function HomeSolutions() {
  return (
    <section id="solucoes" className="section home-solutions">
      <div className="container">
        <div className="section-heading reveal">
          <div>
            <p className="eyebrow">SOLUÇÕES GTAM</p>
            <h2>Trabalhos para necessidades reais da indústria.</h2>
          </div>
          <p>
            Explore alguns dos serviços da GTAM e conheça como funciona cada
            tipo de trabalho.
          </p>
        </div>
        <div className="home-solution-grid">
          {solutions.map((item, index) => (
            <a
              className="home-solution-card reveal"
              href={`${import.meta.env.BASE_URL}${item.href}`}
              key={item.href}
            >
              <span className="differential-number">0{index + 1}</span>
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
              <b>
                Conheça a solução <ArrowUpRight size={16} />
              </b>
            </a>
          ))}
        </div>
        <a
          className="home-all-solutions"
          href={`${import.meta.env.BASE_URL}solucoes/`}
        >
          Ver todas as soluções <ArrowUpRight size={16} />
        </a>
      </div>
    </section>
  );
}

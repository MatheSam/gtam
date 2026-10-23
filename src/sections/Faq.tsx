import { ContactButton } from '../components/ContactButton';

const questions = [
  { question: 'Quais serviços de ferramentaria a GTAM oferece?', answer: 'Fabricamos e recuperamos ferramentas de precisão, ferramentas progressivas, estampos CDR, moldes plásticos, punções e matrizes. Também desenvolvemos dispositivos de verificação e berços de apoio.' },
  { question: 'Vocês fabricam e recuperam mordentes de selagem?', answer: 'Sim. Trabalhamos com mordentes horizontais, verticais e especiais, além de soluções Eurolock. A fabricação e a recuperação são avaliadas conforme a aplicação de selagem e as características da peça.' },
  { question: 'A GTAM faz afiação de facas industriais?', answer: 'Sim. Realizamos confecção, afiação e recuperação de facas industriais. Envie as medidas, o material e a aplicação da faca para que a equipe avalie o serviço necessário.' },
  { question: 'Quais equipamentos e materiais são utilizados na usinagem?', answer: 'Nossa estrutura conta com fresadora CNC, fresadora convencional e torno. Trabalhamos com aços especiais, alumínio e inox, conforme a necessidade de cada projeto.' },
  { question: 'Onde fica a GTAM Ferramentaria?', answer: 'Estamos na Rua Faustino Sabotta, 345, Zacarias Pena, em São José dos Pinhais, Paraná, CEP 83020-840. Entre em contato com Nicolas ou Tadeu por WhatsApp, telefone ou e-mail para conversar sobre o seu projeto.' },
  { question: 'Como solicitar um orçamento de uma peça ou máquina sob medida?', answer: 'Envie pelo WhatsApp ou e-mail uma descrição do serviço e, se disponíveis, o desenho, as medidas, o material e a quantidade. Para máquinas dedicadas, informe a necessidade da linha de produção. Escopo, viabilidade e prazo são definidos após avaliação técnica.' },
];

export function Faq() {
  return <section id="duvidas" className="section faq-section" aria-labelledby="faq-title">
    <div className="container faq-layout">
      <div><p className="eyebrow">ANTES DE SOLICITAR SEU ORÇAMENTO</p><h2 id="faq-title">Dúvidas sobre nossos<br/>serviços industriais</h2><p>Converse com a equipe da GTAM sobre a ferramenta, peça ou equipamento de que sua empresa precisa.</p><ContactButton className="project-pulse">Falar sobre meu projeto</ContactButton></div>
      <div className="faq-list">{questions.map(({ question, answer }) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div>
    </div>
  </section>;
}

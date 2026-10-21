import { ArrowLeft, Mail } from 'lucide-react';
import { Brand } from '../components/Brand';
import { Footer } from '../components/Footer';
import { company } from '../data/company';

const topics = [
  ['responsavel', 'Quem é responsável'],
  ['dados', 'Dados e finalidades'],
  ['compartilhamento', 'Serviços de terceiros'],
  ['cookies', 'Cookies e navegação'],
  ['conservacao', 'Conservação dos dados'],
  ['direitos', 'Seus direitos'],
  ['atualizacoes', 'Atualizações'],
] as const;

export function Privacy() {
  const home = import.meta.env.BASE_URL;
  return <>
    <a href="#conteudo" className="skip-link">Ir para o conteúdo</a>
    <header className="site-header privacy-header">
      <div className="container header-inner">
        <Brand href={`${home}#inicio`} />
        <a className="privacy-back" href={home}><ArrowLeft size={18} aria-hidden="true" />Voltar ao site</a>
      </div>
    </header>
    <main id="conteudo" className="privacy-page">
      <div className="privacy-intro">
        <div className="container">
          <p className="eyebrow">TRANSPARÊNCIA NO ATENDIMENTO</p>
          <h1>Política de privacidade</h1>
          <p>Saiba como a GTAM Ferramentaria trata dados pessoais na navegação pelo site e no contato para informações e orçamentos.</p>
          <p className="privacy-updated">Última atualização: <time dateTime="2026-10-21">21 de outubro de 2026</time></p>
        </div>
      </div>
      <div className="container privacy-layout">
        <nav className="privacy-index" aria-label="Nesta política">
          <h2>Nesta página</h2>
          <ol>{topics.map(([id, title]) => <li key={id}><a href={`#${id}`}>{title}</a></li>)}</ol>
        </nav>
        <article className="privacy-content" aria-label="Como tratamos seus dados">
          <section id="responsavel">
            <h2>1. Quem é responsável</h2>
            <p>A {company.name} é responsável pelas decisões sobre o tratamento dos dados pessoais recebidos em seu atendimento. Estamos na {company.address}, {company.city}, CEP {company.cep}.</p>
            <p>Para dúvidas sobre esta política ou solicitações relacionadas aos seus dados, entre em contato pelo e-mail <a href={`mailto:${company.email}`}>{company.email}</a>.</p>
          </section>
          <section id="dados">
            <h2>2. Quais dados utilizamos e por quê</h2>
            <p>O site é institucional e não possui formulário de cadastro ou de orçamento. Você pode iniciar uma conversa por WhatsApp, telefone ou e-mail.</p>
            <p>Nesse atendimento, podemos receber seu nome, telefone, e-mail, empresa que representa e informações enviadas sobre o serviço, como medidas, desenhos e especificações de peças. Envie apenas os dados necessários para avaliar sua solicitação.</p>
            <ul>
              <li><strong>Atendimento e orçamento:</strong> usamos as informações para responder, avaliar a necessidade apresentada e preparar propostas. Quando relacionados a uma contratação solicitada por você, esses usos se apoiam nos procedimentos preliminares e na execução de contrato.</li>
              <li><strong>Prestação do serviço:</strong> os dados necessários podem ser usados para combinar condições, executar o serviço e manter a comunicação sobre o pedido, com base na execução de contrato.</li>
              <li><strong>Obrigações legais e defesa de direitos:</strong> registros podem ser mantidos para cumprir obrigações legais ou regulatórias e exercer direitos em processos, quando aplicável.</li>
            </ul>
            <p>Se uma finalidade depender de consentimento, ele deverá ser solicitado de forma específica. A simples navegação no site não equivale a autorizar qualquer uso dos seus dados.</p>
          </section>
          <section id="compartilhamento">
            <h2>3. Compartilhamento e serviços de terceiros</h2>
            <p>Os links de WhatsApp e Google Maps levam a serviços externos. Ao utilizá-los, o tratamento realizado por esses serviços segue também suas próprias políticas de privacidade. O mesmo se aplica ao provedor de e-mail utilizado na comunicação.</p>
            <p>A infraestrutura de hospedagem e os serviços de comunicação podem processar dados técnicos ou de contato necessários ao seu funcionamento. Informações também podem ser fornecidas a autoridades quando houver obrigação legal ou determinação válida.</p>
            <p>Alguns fornecedores podem processar dados fora do Brasil. Quando houver transferência internacional sob responsabilidade da GTAM, devem ser observados os mecanismos e as garantias exigidos pela LGPD e pela regulamentação aplicável.</p>
          </section>
          <section id="cookies">
            <h2>4. Cookies e dados de navegação</h2>
            <p>Esta versão do site não instala cookies próprios de publicidade ou de análise de audiência e não incorpora ferramentas de rastreamento como Google Analytics ou pixels de anúncios.</p>
            <p>O provedor de hospedagem pode tratar registros técnicos de acesso, como endereço IP, data e horário, navegador e recurso solicitado, conforme a operação da infraestrutura. Esses registros são distintos dos cookies armazenados no navegador.</p>
            <p>Serviços externos acessados por links podem utilizar seus próprios cookies. Se novas ferramentas forem adicionadas ao site, esta política deverá ser atualizada e, quando necessário, serão disponibilizados controles de escolha antes de ativar tratamentos que dependam de consentimento.</p>
          </section>
          <section id="conservacao">
            <h2>5. Por quanto tempo os dados são conservados</h2>
            <p>O tempo de conservação depende da finalidade: atendimento da solicitação, negociação do orçamento, execução do serviço e cumprimento dos prazos legais aplicáveis. Registros necessários ao exercício de direitos podem ser conservados durante os respectivos prazos.</p>
            <p>Encerrada a finalidade e inexistindo fundamento para conservação, os dados devem ser eliminados ou anonimizados. Para informações sobre um registro específico, utilize nosso canal de contato.</p>
          </section>
          <section id="direitos">
            <h2>6. Seus direitos e como exercê-los</h2>
            <p>Nos termos da Lei Geral de Proteção de Dados Pessoais (LGPD), você pode solicitar:</p>
            <ul>
              <li>Confirmação de tratamento e acesso aos seus dados pessoais.</li>
              <li>Correção de informações incompletas, inexatas ou desatualizadas.</li>
              <li>Informações sobre o compartilhamento dos seus dados.</li>
              <li>Anonimização, bloqueio ou eliminação de dados desnecessários, excessivos ou tratados em desconformidade com a lei.</li>
              <li>Portabilidade e eliminação de dados tratados com consentimento, observados os requisitos e as exceções legais.</li>
              <li>Revogação de consentimento e informações sobre a possibilidade de não consentir e suas consequências, quando aplicável.</li>
              <li>Oposição ao tratamento nas hipóteses previstas em lei.</li>
            </ul>
            <p>Envie sua solicitação para <a href={`mailto:${company.email}?subject=Privacidade%20e%20dados%20pessoais`}>{company.email}</a>, indicando o direito que deseja exercer e informações suficientes para localizar seu atendimento. Poderemos solicitar informações proporcionais para confirmar sua identidade e proteger seus dados.</p>
            <p>Pedidos de exclusão estão sujeitos às hipóteses legais de conservação. Você também pode apresentar uma petição à <a href="https://www.gov.br/anpd/pt-br" target="_blank" rel="noopener noreferrer">ANPD<span className="sr-only"> (abre em outra aba)</span></a>, conforme os procedimentos da agência.</p>
          </section>
          <section id="atualizacoes">
            <h2>7. Atualizações desta política</h2>
            <p>Esta política poderá ser atualizada para acompanhar mudanças no site, nos serviços ou nas exigências legais. A data no início da página indica a versão disponibilizada.</p>
            <p>Consulte a <a href="https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm" target="_blank" rel="noopener noreferrer">Lei nº 13.709/2018 (LGPD)<span className="sr-only"> (abre em outra aba)</span></a> para conhecer a legislação.</p>
          </section>
          <aside className="privacy-contact" aria-label="Contato sobre privacidade">
            <Mail size={26} aria-hidden="true" />
            <div><h2>Fale com a GTAM</h2><p>Para dúvidas sobre privacidade e solicitações sobre seus dados:</p><a href={`mailto:${company.email}?subject=Privacidade%20e%20dados%20pessoais`}>{company.email}</a></div>
          </aside>
        </article>
      </div>
    </main>
    <Footer />
  </>;
}

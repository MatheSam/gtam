import type { ReactNode } from 'react';

type GuideCard = { title: string; text: string };

function GuideSection({ title, intro, cards }: { title: string; intro?: string; cards: GuideCard[] }) {
  return <section className="solution-guide-section"><h3>{title}</h3>{intro && <p className="solution-guide-intro">{intro}</p>}<div className="solution-guide-grid">{cards.map(card => <article className="solution-guide-card" key={card.title}><h4>{card.title}</h4><p>{card.text}</p></article>)}</div></section>;
}

function Sources({ items }: { items: { label: string; href: string }[] }) {
  return <aside className="solution-guide-sources"><p className="eyebrow">REFERÊNCIAS TÉCNICAS</p><ul>{items.map(item => <li key={item.href}><a href={item.href} target="_blank" rel="noreferrer">{item.label}</a></li>)}</ul></aside>;
}

function GuideShell({ children, note, sources }: { children: ReactNode; note: string; sources: { label: string; href: string }[] }) {
  return <section className="solution-guide" aria-label="Guia técnico da solução">{children}<aside className="solution-guide-note reveal solution-scroll-reveal"><strong>O que ajuda na avaliação</strong><p>{note}</p></aside><Sources items={sources}/></section>;
}

export function FixtureGuide() {
  return <GuideShell note="Modelo 3D ou desenho da peça, fotos ou vídeo da operação, quantidade prevista, espaço disponível e como o operador acessa a peça. Se houver, inclua pontos de apoio, referências de posicionamento e restrições do processo." sources={[
    { label: 'Haas — fundamentos de fixação e segurança da peça na fresadora', href: 'https://www.haascnc.com/content/dam/haascnc/en/service/manual/supplement/english---toolroom-mill-operator%27s-manual-supplement---2009.pdf' },
    { label: 'Autodesk University — fundamentos de projeto de fixação: simplicidade, rigidez e repetibilidade', href: 'https://static.au-uw2-prd.autodesk.com/CP11498_AU2015_PrototypeDesignHandout_Grevstad.pdf' },
    { label: 'Haas — localização repetível de dispositivos de fixação', href: 'https://www.haascnc.com/productivity/workholding/zero-pnt-kit-manual.html' },
  ]}>
    <p className="eyebrow">GUIA TÉCNICO</p><h2>Tipos, elementos e critérios de projeto</h2>
    <p className="solution-guide-intro">Um dispositivo industrial é projetado em torno de uma peça e de uma tarefa. Ele pode apoiar, posicionar, prender ou guiar o trabalho; o formato depende do processo, da repetição necessária e da interação com o operador.</p>
    <GuideSection title="Tipos de solução" cards={[
      { title: 'Berço de apoio', text: 'Recebe a peça em uma posição definida. Pode acompanhar seu contorno ou apoiar apenas regiões escolhidas para evitar balanço e interferências.' },
      { title: 'Dispositivo de montagem', text: 'Ajuda a localizar componentes entre si durante uma montagem. Pinos, batentes ou referências físicas podem orientar a posição, conforme o projeto.' },
      { title: 'Bancada de aplicação', text: 'Organiza a superfície e os apoios necessários para uma tarefa, como a aplicação de fita informada entre os trabalhos da GTAM.' },
      { title: 'Postiço de molde', text: 'Elemento substituível instalado no molde para formar uma região ou detalhe da peça. Geometria, ajuste e material precisam seguir o projeto do molde.' },
    ]}/>
    <GuideSection title="Elementos básicos" cards={[
      { title: 'Base e estrutura', text: 'Sustentam o conjunto e precisam manter estabilidade durante o uso. Dimensão e rigidez variam com a peça e os esforços da operação.' },
      { title: 'Referências e localizadores', text: 'Batentes, pinos ou superfícies indicam onde a peça deve ficar. Referências bem definidas ajudam a repetir o posicionamento.' },
      { title: 'Apoios e grampos', text: 'Apoios recebem a peça; grampos ou outros meios de retenção impedem movimento quando necessário. O tipo depende do acesso e da tarefa.' },
      { title: 'Guias e recursos de operação', text: 'Guias podem orientar ferramentas ou componentes. Identificação, acesso e organização podem ser incorporados quando fazem parte do escopo.' },
    ]}/>
    <GuideSection title="O que considerar no projeto" cards={[
      { title: 'Repetibilidade', text: 'A peça precisa voltar às mesmas referências em cada ciclo de uso, dentro dos requisitos definidos para a tarefa.' },
      { title: 'Acesso e ergonomia', text: 'A operação precisa permitir carregar, posicionar e retirar a peça com acesso adequado ao trabalho previsto.' },
      { title: 'Rigidez e segurança', text: 'A retenção deve ser adequada aos esforços da operação, sem deixar a peça solta ou interferir com ferramenta, máquina ou processo.' },
      { title: 'Inspeção e manutenção', text: 'Pontos de desgaste, peças substituíveis, limpeza e verificação podem ser considerados para facilitar o uso contínuo.' },
    ]}/>
  </GuideShell>;
}

export function MachiningGuide() {
  return <GuideShell note="Desenho técnico ou arquivo 3D, material, quantidade, tolerâncias importantes e aplicação. Sem desenho, fotos com escala e a amostra física ajudam a discutir a geometria; peças gastas podem não representar as dimensões originais." sources={[
    { label: 'Autodesk Fusion — fluxo CAD/CAM: modelo, preparação, trajetórias, simulação e código CNC', href: 'https://help.autodesk.com/cloudhelp/ENU/Fusion-CAM/files/GUID-BEC5DEA9-AC3E-4FA8-998E-4AE8CD0D0B1E.htm' },
    { label: 'Autodesk — programação CAM e usinagem CNC', href: 'https://www.autodesk.com/uk/solutions/cnc-machining-software' },
    { label: 'Autodesk — reconstrução de CAD a partir de dados de digitalização 3D', href: 'https://www.autodesk.com/support/technical/article/caas/sfdcarticles/sfdcarticles/Reverse-engineering-of-3D-scan-into-CAD-model-using-Inventor.html' },
  ]}>
    <p className="eyebrow">GUIA TÉCNICO</p><h2>Processos, referências e etapas da usinagem</h2>
    <p className="solution-guide-intro">Usinar é remover material de uma peça bruta até obter as formas especificadas. A escolha do processo depende da geometria, material, tolerâncias, acabamento e quantidade — por isso a avaliação parte da referência disponível e da aplicação.</p>
    <GuideSection title="Processos comuns" cards={[
      { title: 'Fresamento', text: 'A ferramenta de corte gira e avança em relação à peça. Pode produzir faces, bolsões, rasgos, furos e contornos; geometrias mais complexas podem exigir várias ferramentas e preparações.' },
      { title: 'Torneamento', text: 'A peça gira enquanto a ferramenta remove material. É usado principalmente em componentes com formas cilíndricas, como eixos, buchas e superfícies concêntricas.' },
      { title: 'Furação e ajustes', text: 'Furos e operações complementares podem fazer parte do roteiro. A posição, o diâmetro, a profundidade e a tolerância definem ferramenta e método.' },
    ]}/>
    <GuideSection title="Da referência ao componente" cards={[
      { title: 'Desenho técnico', text: 'Comunica dimensões, tolerâncias, material, acabamento e relações entre superfícies. Nem toda dimensão tem a mesma importância funcional.' },
      { title: 'Modelo 3D', text: 'Descreve a forma digital da peça e pode apoiar planejamento e programação CAM. O desenho continua útil para tolerâncias, acabamento e requisitos que não aparecem só na geometria.' },
      { title: 'Amostra física', text: 'Pode servir como referência quando não há desenho. É importante informar se está desgastada, deformada ou modificada, pois o estado atual pode diferir da geometria original.' },
      { title: 'Engenharia reversa', text: 'Reconstrói um modelo digital a partir de uma peça ou de dados de medição. A GTAM informou que modela no SolidWorks a partir da peça original; dimensões críticas devem ser identificadas e validadas com o cliente.' },
    ]}/>
    <GuideSection title="Planejamento e controle" cards={[
      { title: 'Material e sobremetal', text: 'A matéria-prima precisa permitir produzir a geometria final e as superfícies de referência previstas. Material e condição de fornecimento afetam corte e acabamento.' },
      { title: 'Fixação e preparação', text: 'A peça deve ficar apoiada e presa de modo adequado. A forma de fixar influencia acesso da ferramenta, rigidez e quantidade de preparações.' },
      { title: 'Programação CAM', text: 'No fluxo informado pela GTAM, o WorkNC gera trajetórias para operações de usinagem. A programação considera ferramenta, estratégia, material e limites da máquina.' },
      { title: 'Medição', text: 'Dimensões funcionais são conferidas conforme o escopo acordado. Desenho, tolerâncias e pontos de medição orientam a inspeção.' },
    ]}/>
  </GuideShell>;
}

export function RecoveryGuide() {
  return <GuideShell note="Fotos da peça inteira e do dano, dimensões medidas, desenho ou peça equivalente, equipamento de origem, função, material conhecido, condições de trabalho e urgência. Se o componente estiver em operação, inclua sintomas observados e histórico disponível." sources={[
    { label: 'EASA — guia técnico de projeto, fabricação e substituição de eixos', href: 'https://www.rmemnc.com/wp-content/uploads/2024/03/Section-10-Mechanical.pdf' },
    { label: 'SKF — seleção de ajuste entre eixo, rolamento e alojamento', href: 'https://cdn.skfmediahub.skf.com/api/public/0901d1968024f02a/pdf_preview_medium/0901d1968024f02a_pdf_preview_medium.pdf' },
    { label: 'Parker — construção e componentes de cilindros hidráulicos', href: 'https://www.parker.com/content/dam/Parker-com/Literature/Schrader-Bellows/Schrader/Cat/English/SB0106-7_SecC.pdf' },
    { label: 'Ensinger — poliamida (nylon), desgaste e aplicações mecânicas', href: 'https://www.ensingerplastics.com/en-us/thermoplastic-materials/pa-polyamide' },
  ]}>
    <p className="eyebrow">GUIA TÉCNICO</p><h2>Peças, sinais de desgaste e avaliação</h2>
    <p className="solution-guide-intro">Recuperar um componente começa por entender o que ele faz e qual requisito deixou de atender. A inspeção e as medidas ajudam a definir se há uma intervenção possível; nem todo dano é recuperável, e a decisão pode exigir dados do fabricante ou avaliação de engenharia.</p>
    <GuideSection title="Componentes que a GTAM informou atender" cards={[
      { title: 'Eixos', text: 'Transferem movimento ou sustentam elementos rotativos. Diâmetros de apoio, concentricidade, retitude, ombros e encaixes podem ser funcionais e precisam ser avaliados conforme o conjunto.' },
      { title: 'Mancais e alojamentos', text: 'Apoiam e posicionam eixos ou rolamentos. O ajuste do alojamento e a relação com o eixo influenciam alinhamento e funcionamento do conjunto.' },
      { title: 'Braços e articulações', text: 'Fazem parte de mecanismos que transmitem movimento ou força. Furos, pinos, buchas, folgas e deformação podem ser relevantes à inspeção.' },
      { title: 'Cilindros hidráulicos', text: 'Transformam pressão do fluido em movimento linear. Haste, tubo, cabeçote, êmbolo, guias e vedações são componentes típicos; a recuperação depende do defeito e da condição do conjunto.' },
      { title: 'Engrenagens de nylon', text: 'Engrenagens de poliamida podem ser usadas em transmissões e mecanismos. Carga, temperatura, lubrificação, umidade e o engrenamento influenciam a aplicação e a substituição.' },
    ]}/>
    <GuideSection title="O que observar antes de definir o serviço" cards={[
      { title: 'Desgaste e folga', text: 'Marcas de contato, folga excessiva, ovalização ou perda de material podem indicar que uma dimensão funcional precisa ser verificada.' },
      { title: 'Trincas e deformação', text: 'Trincas, empenamento ou perda de seção podem comprometer resistência. Uma alteração dimensional isolada não basta para aprovar uma recuperação.' },
      { title: 'Ajustes e superfícies', text: 'Assentos de rolamento, sedes de vedação, furos e faces de encosto trabalham em conjunto. Medidas e tolerâncias devem vir do desenho ou requisito aplicável.' },
      { title: 'Causa da falha', text: 'Lubrificação, desalinhamento, carga, contaminação ou montagem podem contribuir para a falha. Considerar a causa ajuda a não tratar apenas o sintoma.' },
    ]}/>
    <div className="solution-guide-callout reveal solution-scroll-reveal"><strong>Recuperar ou substituir?</strong><p>A decisão considera a integridade da peça, material, função, dimensões críticas, método disponível e risco de serviço. O guia não promete recuperação: cada componente precisa ser avaliado, e casos críticos podem requerer aprovação de engenharia ou do fabricante.</p></div>
  </GuideShell>;
}

export function NozzleGuide() {
  return <GuideShell note="Modelo e fabricante da injetora, identificação do conjunto, desenho ou bico usado como referência, dimensões da ponta e do orifício, tipo de assentamento na bucha do molde, resina processada e sintomas observados. Informe também alterações anteriores, se houver." sources={[
    { label: 'EMS-GRIVORY — interface entre bico da máquina e bucha do molde', href: 'https://www.emsgrivory.com/fileadmin/user_upload/EMS-GRIVORY/documents/Brochures/English/7005_Spritzgiessen_01-2023_en_web.pdf' },
    { label: 'Covestro — projeto do molde e assentamento do bico na bucha de injeção', href: 'https://solutions.covestro.com/-/media/covestro/solution-center/brands/downloads/imported/1557217270.pdf?hash=CC8783FE97DA5E504AC93AAD40DC740E&rev=cdbceecaac104d808c99be8d2654b785' },
    { label: 'Delrin — manual técnico de bicos de canal quente (componente distinto do bico da máquina)', href: 'https://www.delrin.com/delrin-acetal-homopolymer-hot-runner-manual-na/' },
  ]}>
    <p className="eyebrow">GUIA TÉCNICO</p><h2>Tipos, encaixe e dimensões importantes</h2>
    <p className="solution-guide-intro">O bico da injetora fica na unidade de injeção e conduz o plástico fundido até a bucha de injeção do molde. Ele não é o mesmo que um bico de canal quente, que pertence ao sistema instalado no molde. A GTAM informou fabricar bicos e ponteiras para injetoras; o modelo da máquina e a interface são fundamentais para avaliar cada peça.</p>
    <GuideSection title="Configurações e interfaces" cards={[
      { title: 'Bico aberto', text: 'Tem uma passagem contínua para o material. O formato da ponta, o comprimento e o orifício precisam corresponder ao conjunto e ao processo.' },
      { title: 'Bico com fechamento', text: 'Inclui mecanismo de obturação para controlar a saída de material entre injeções. É uma arquitetura específica; compatibilidade e manutenção dependem do modelo.' },
      { title: 'Ponta esférica ou plana', text: 'Descreve formas de contato com a bucha do molde. O raio ou a face precisam assentar corretamente; um encaixe incompatível pode favorecer vazamento ou retenção de material.' },
      { title: 'Geometria cônica', text: 'Algumas interfaces usam superfícies cônicas para centralização e contato. Ângulo e dimensões devem ser confirmados pelo desenho ou documentação do fabricante.' },
    ]}/>
    <GuideSection title="Dimensões e pontos de atenção" cards={[
      { title: 'Raio ou ângulo de assentamento', text: 'A ponta do bico e a sede da bucha precisam formar o contato previsto pelo projeto. Não se deve copiar uma medida sem identificar a máquina e a bucha correspondentes.' },
      { title: 'Orifício de saída', text: 'Diâmetro e forma influenciam a passagem do material e precisam ser compatíveis com a bucha e o processo. Alterações podem afetar fluxo e pressão.' },
      { title: 'Comprimento e conexão', text: 'Comprimento total, rosca ou conexão e posição de instalação determinam se a peça encaixa na unidade de injeção.' },
      { title: 'Material e desgaste', text: 'Material e tratamento dependem da resina, aditivos, temperatura, pressão e desgaste esperado. Especificação deve seguir o conjunto e o fabricante.' },
    ]}/>
    <GuideSection title="Sintomas que ajudam a investigar" cards={[
      { title: 'Vazamento no assentamento', text: 'Pode estar associado a contato, alinhamento, dano ou incompatibilidade entre bico e bucha. A causa deve ser verificada antes de fabricar uma reposição.' },
      { title: 'Gotejamento ou fios de material', text: 'Podem envolver geometria do bico, resina e regulagem do processo. O sintoma sozinho não define que o bico precise ser substituído.' },
      { title: 'Obstrução ou fluxo irregular', text: 'Resíduo, degradação, orifício danificado ou condição de processo podem ser investigados. A inspeção deve considerar limpeza e histórico de uso.' },
    ]}/>
    <div className="solution-guide-callout reveal solution-scroll-reveal"><strong>Atenção ao componente correto</strong><p>“Bico da injetora” e “bico de canal quente” podem ter nomes parecidos, mas ficam em partes diferentes do sistema. A identificação do equipamento evita especificar uma peça incompatível.</p></div>
  </GuideShell>;
}

const moldTypes = [
  { group: 'Pela construção', items: [
    { title: 'Duas placas', text: 'As duas metades principais se encontram na linha de fechamento. É uma construção comum; a posição de entrada do plástico e a geometria da peça influenciam o projeto.' },
    { title: 'Três placas', text: 'Inclui um plano adicional de abertura, que pode separar o canal de alimentação da peça e permitir outras posições de entrada.' },
  ] },
  { group: 'Pelo sistema de alimentação', items: [
    { title: 'Canal frio', text: 'O plástico também solidifica nos canais que levam o material até a cavidade. Esse canal sai junto ou separado da peça e precisa ser considerado no ciclo e no aproveitamento do material.' },
    { title: 'Canal quente', text: 'Canais aquecidos mantêm o plástico fundido até os pontos de entrada das cavidades. Podem reduzir o material solidificado no canal, mas aumentam o investimento e a complexidade de controle e manutenção.' },
  ] },
  { group: 'Pelo número e arranjo de cavidades', items: [
    { title: 'Uma cavidade', text: 'Forma uma peça por ciclo de injeção.' },
    { title: 'Múltiplas cavidades', text: 'Forma várias unidades da mesma peça em um ciclo. O arranjo precisa considerar preenchimento, dimensões do molde e capacidade da injetora.' },
    { title: 'Molde família', text: 'Reúne cavidades de peças diferentes no mesmo molde. O preenchimento e o equilíbrio entre as peças precisam ser avaliados no projeto.' },
  ] },
];

const components = [
  { title: 'Cavidade e núcleo', text: 'Superfícies que formam, respectivamente, as regiões externas e internas da peça. A separação entre elas define a linha de abertura do molde.' },
  { title: 'Base e placas', text: 'Estrutura que sustenta os elementos do molde e permite sua fixação e movimentação na injetora.' },
  { title: 'Sistema de alimentação', text: 'Bucha, canais e entradas conduzem o plástico fundido da máquina até uma ou mais cavidades. A configuração depende do molde.' },
  { title: 'Refrigeração', text: 'Canais e conexões conduzem fluido para retirar calor do molde e ajudar a peça a resfriar antes da extração.' },
  { title: 'Extração', text: 'Pinos, placas ou outros mecanismos empurram a peça para fora depois que o molde abre. A solução depende da geometria e da posição de apoio.' },
  { title: 'Guias, postiços e movimentos', text: 'Guias alinham as metades. Postiços substituíveis, gavetas ou outros movimentos podem ser usados para formar detalhes específicos, como furos laterais ou encaixes.' },
];

const materials = [
  { name: 'P20', use: 'Aço pré-endurecido usado em uma ampla variedade de moldes para plástico.', notes: 'Boa usinabilidade e não é inoxidável. A designação abrange variantes; conferir a ficha do fornecedor, condição de fornecimento e dureza.' },
  { name: 'H13', use: 'Aço ferramenta para trabalho a quente, considerado quando o molde ou componentes exigem resistência térmica e mecânica.', notes: 'Pode ser opção para condições de desgaste ou temperatura mais exigentes. Não significa, por si só, “mais de 1 milhão de peças”; vida depende do conjunto e do processo.' },
  { name: 'S136 / inox para moldes', use: 'Aço inoxidável para moldes, útil quando resistência à corrosão ou alto polimento são requisitos.', notes: 'Fabricantes recomendam classes inoxidáveis para materiais corrosivos, como PVC, e aplicações que exigem acabamento polido. Confirmar a composição e especificação do lote; nomes comerciais e equivalências variam.' },
  { name: 'Alumínio', use: 'Pode ser considerado em moldes-protótipo e algumas séries curtas, conforme geometria e requisitos.', notes: 'Tem menor resistência ao desgaste e à pressão que muitos aços para moldes. Adequação precisa ser analisada para a peça e o volume pretendido.' },
];

const costFactors = [
  { title: 'Dimensão e complexidade da peça', text: 'Peças maiores, tolerâncias apertadas, superfícies de alto polimento e detalhes difíceis de usinar aumentam o trabalho de projeto e fabricação.' },
  { title: 'Cavidades e movimentos', text: 'Mais cavidades, gavetas, postiços, machos móveis ou mecanismos de desenroscar podem elevar tamanho, quantidade de componentes, ajuste e manutenção.' },
  { title: 'Aço e tratamento', text: 'A classe do aço, suas dimensões, condição de fornecimento, tratamento térmico e acabamento influenciam o custo do material e das operações.' },
  { title: 'Alimentação e refrigeração', text: 'Canal quente, número e posição das entradas, circuitos de refrigeração e controle de temperatura mudam o projeto e os componentes comprados.' },
  { title: 'Acabamento e validação', text: 'Polimento, textura, ajuste das metades, testes de injeção e correções depois dos testes entram no planejamento do molde.' },
  { title: 'Volume de produção', text: 'Um molde de várias cavidades pode produzir mais peças por ciclo, mas tende a ser maior e mais complexo. A decisão afeta o investimento inicial e o custo por peça.' },
];

export function MoldGuide() {
  return <section className="mold-guide" aria-labelledby="mold-guide-title">
    <p className="eyebrow">GUIA TÉCNICO</p>
    <h2 id="mold-guide-title">Tipos, componentes, materiais e custos</h2>
    <p className="mold-guide-intro">“Tipo de molde” pode descrever características diferentes. Estrutura, alimentação e número de cavidades são escolhas independentes: por exemplo, um molde pode ter três placas, canal quente e várias cavidades ao mesmo tempo.</p>

    <section className="mold-guide-section"><h3>Tipos de molde</h3>
      {moldTypes.map(group => <div className="mold-guide-group" key={group.group}><h4>{group.group}</h4><div className="mold-guide-grid">{group.items.map(item => <article className="mold-guide-card" key={item.title}><h5>{item.title}</h5><p>{item.text}</p></article>)}</div></div>)}
      <div className="mold-mechanism-note"><strong>Detalhes que exigem movimentos adicionais</strong><p>Rebaixos, furos laterais, ganchos e roscas podem exigir gavetas, levantadores ou núcleos móveis. São mecanismos do projeto, não uma categoria que substitui as classificações acima.</p></div>
    </section>

    <section className="mold-guide-section"><h3>Componentes básicos</h3><p className="mold-guide-section-intro">A configuração varia, mas estes elementos ajudam a entender como o molde recebe o material, forma a peça e a libera.</p><div className="mold-component-grid">{components.map(item => <article className="mold-component-card" key={item.title}><h4>{item.title}</h4><p>{item.text}</p></article>)}</div></section>

    <section className="mold-guide-section"><h3>Materiais do molde</h3><p className="mold-guide-section-intro">A escolha depende da resina, dos aditivos, do volume esperado, do acabamento, da corrosão e do desgaste. Um mesmo molde também pode combinar materiais diferentes em sua base, cavidades e postiços.</p><div className="mold-material-list">{materials.map(item => <article className="mold-material-card" key={item.name}><h4>{item.name}</h4><div><strong>Uso possível</strong><p>{item.use}</p><strong>O que considerar</strong><p>{item.notes}</p></div></article>)}</div>
      <aside className="mold-cycle-note"><strong>Sobre ciclos e quantidade de peças</strong><p>“500 mil ciclos” ou “mais de 1 milhão de peças” não são garantias associadas automaticamente a um aço. Um ciclo pode produzir uma ou várias peças, conforme o número de cavidades; a vida do molde depende também do projeto, material processado, parâmetros, acabamento, manutenção e critérios de desgaste.</p></aside>
    </section>

    <section className="mold-guide-section"><h3>O que influencia o custo?</h3><p className="mold-guide-section-intro">Não há um preço único por tipo de aço. O orçamento depende da peça, do volume e da configuração necessária para produzir com segurança e atender aos requisitos definidos.</p><div className="mold-cost-grid">{costFactors.map(item => <article key={item.title}><h4>{item.title}</h4><p>{item.text}</p></article>)}</div><p className="mold-cost-disclaimer">Para avaliar um molde existente, fotos, identificação, histórico da falha e necessidade de produção ajudam a definir o escopo da manutenção. Para um molde novo, desenho ou modelo 3D da peça e volume previsto são referências importantes para estimar o projeto.</p></section>

    <div className="mold-sources"><p className="eyebrow">REFERÊNCIAS TÉCNICAS</p><ul>
      <li><a href="https://help.autodesk.com/cloudhelp/2016/ENU/MoldflowComm/files/GUID-E402E280-A20E-4D1D-A8D6-C54F2D430EF2.htm" target="_blank" rel="noreferrer">Autodesk Moldflow: moldes de três placas</a></li>
      <li><a href="https://help.autodesk.com/cloudhelp/2015/ENU/MoldflowComm/files/GUID-D764A355-68BE-417E-9604-C19E06317C14.htm" target="_blank" rel="noreferrer">Autodesk Moldflow: moldes com canal quente</a></li>
      <li><a href="https://www.uddeholm.com/app/uploads/sites/247/2024/09/Tech-Uddeholm-Steel-for-moulds-EN.pdf" target="_blank" rel="noreferrer">Uddeholm: seleção de aços para moldes de plástico</a></li>
      <li><a href="https://www.uddeholm.com/app/uploads/sites/230/2024/05/Tech-Uddeholm-Stavax-ESR-EN.pdf" target="_blank" rel="noreferrer">Uddeholm: aço inoxidável para moldes e resistência à corrosão</a></li>
      <li><a href="https://www.uddeholm.com/us/en-us/products/h13-esr/" target="_blank" rel="noreferrer">Uddeholm: H13 para aplicações de trabalho a quente</a></li>
      <li><a href="https://www.bohler-edelstahl.com/en/products/m238/" target="_blank" rel="noreferrer">Böhler: M238, aço pré-endurecido para moldes plásticos</a></li>
    </ul></div>
  </section>;
}

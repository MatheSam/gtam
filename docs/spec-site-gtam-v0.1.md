# GTAM — Spec do novo site (v0.1)

## Objetivo

Evoluir o site de uma landing page para uma presença institucional e técnica que também ajude potenciais clientes a encontrar respostas sobre máquinas, processos e soluções da GTAM. O conteúdo será permanente e informativo, sem formato de notícias ou blog.

Preservar o conteúdo atual do site. Algumas informações podem mudar de seção ou página, mas não devem ser descartadas.

## Mapa do site aprovado

- `/` — página principal com apresentação da GTAM e o fluxo de trabalho.
- `/solucoes` — catálogo de soluções, com uma página para cada assunto aprofundado.
- `/maquinas` — catálogo das máquinas, com uma página por equipamento.
- `/parceiros` — relações com fornecedores, marcas e parceiros de tecnologia.
- `/clientes` — clientes, homologações e trabalhos por setor.
- `/privacidade` — página existente.

Usar slugs sem acentos e rotas subordinadas para conteúdo agrupado, por exemplo `/maquinas/okada-855s` e `/solucoes/manutencao-moldes-injecao`.

## Navegação

Itens propostos no menu: **A GTAM**, **Soluções**, **Máquinas**, **Parceiros**, **Clientes e homologações** e um botão de **Contato**. Soluções, máquinas, parceiros e clientes são acessados por páginas próprias; páginas de parceiros e clientes não precisam de uma seção de logos ou lista de projetos na home.

## Página principal

Manter a apresentação, serviços, trabalhos, ESG, perguntas frequentes e contato atuais. O conteúdo de parceiros que hoje aparece na home passa para `/parceiros`, preservado e ampliado. A seção atual de estrutura/equipamentos passa a apontar para o catálogo `/maquinas`.

Adicionar seções resumidas para:

1. Soluções em destaque, conectadas às páginas aprofundadas.
2. Tecnologia, apresentada como fluxo visual **SolidWorks → WorkNC/Hexagon → Renishaw Productivity+**. O comando Mitsubishi M80 aparece associado ao centro de usinagem Okada.
3. Processo da GTAM, em etapas: **desenho ou amostra → avaliação e orçamento → programação e preparação → usinagem e medição → inspeção e entrega**. O sistema próprio apoiado por IA acompanha esse processo.
4. Máquinas em destaque, com link para `/maquinas` e para as páginas individuais.
5. Diferenciais resumidos ao longo do fluxo, sem repetir textos longos em várias seções.

A identidade visual dos fluxos deve favorecer leitura profissional, simples e contínua. A animação pode revelar etapas durante a rolagem; o conteúdo permanece legível sem movimento, inclusive para quem prefere movimento reduzido. Tecnologia explica as ferramentas, Processo explica como o serviço avança e Diferenciais resume benefícios ao cliente.

## Soluções

As páginas de solução são conteúdos técnicos permanentes. Cada uma deve explicar, conforme as informações disponíveis, quando a solução é indicada, como o trabalho é feito, o que ajuda a avaliar o serviço e exemplos relacionados. Evitar alegações de desempenho sem dados confirmados.

Temas iniciais propostos, sujeitos à confirmação de conteúdo suficiente:

- Manutenção e recuperação de moldes de injeção multicavidade.
- Fabricação de dispositivos, berços e bancadas de montagem.
- Usinagem a partir de desenho, modelo 3D ou amostra.
- Recuperação de componentes industriais, como eixos, mancais e cilindros hidráulicos.
- Fabricação de bicos e ponteiras para injetoras.

Integrar esses conteúdos aos serviços já apresentados no site, sem perder informações existentes.

## Máquinas

`/maquinas` lista todos os equipamentos. Cada cartão mostra nome, resumo, imagem e link para a página correspondente. A página individual apresenta uma descrição simples, especificações verificadas, explicação do que os dados significam, imagem com origem/licença registradas e contato. Nesta primeira versão, procurar imagens adequadas na internet; imagens genéricas ou de outro equipamento devem ser identificadas como ilustrativas. No futuro, substituir por fotos próprias fornecidas pela GTAM.

### Centro de usinagem vertical CNC Okada 855S

Dados informados pela GTAM: mesa de 1.000 × 500 mm; cursos X/Y/Z de 800 × 550 × 550 mm; comando Mitsubishi M80; apalpador Renishaw com Productivity+.

Pesquisa encontrou dados do modelo **Okamura Pro OKM-855S** em ficha da Alltech, incluindo mesa de 1.000 × 500 mm, BT40, spindle de 12.000 rpm e magazine de 24 ferramentas. A ficha indica cursos de 850 × 550 × 600 mm, divergentes dos dados da GTAM. A carga da mesa também diverge entre página e catálogo. Não atribuir esses dados à máquina da GTAM até confirmar fabricante, modelo e configuração pela plaqueta/manual.

Fontes de referência: [ficha Alltech](https://www.grupoalltech.com.br/maquina/centro-de-usinagem-vertical-okamura-pro-okm-855s/) e [catálogo Alltech](https://www.grupoalltech.com.br/wp-content/uploads/2025/02/Catalogo-Okada-PT.pdf).

### Torno mecânico Clever L-1860

Dados informados pela GTAM: Ø 460 mm sobre o barramento e 1.500 mm entre pontas.

A ficha CIMHSA do L-1860 lista também Ø 270 mm sobre o carro transversal, furo do eixo-árvore de 58 mm, 12 velocidades de 25–2.000 rpm e motor de 7,5 HP, entre outras especificações. Confirmar os valores na unidade instalada antes de publicar, pois há diferenças entre versões e anúncios.

Fonte de referência: [ficha CIMHSA](https://www.cimhsa.com.br/por/p/product/product/produtos/40/l-1860.htm).

### Fresadora ferramenteira

Descrição confirmada: fresamento convencional, furação e ajustes. Marca, modelo e especificações adicionais permanecem pendentes.

## Tecnologia e gestão da produção

Tecnologias informadas: SolidWorks para modelagem 3D, desenho técnico e engenharia reversa; WorkNC/Hexagon para programação CAM; Renishaw Productivity+ para medição na máquina; Mitsubishi M80 como comando do centro de usinagem.

A GTAM informou que utiliza sistema próprio de gestão apoiado por IA: orçamento baseado no arquivo 3D, estimativa de programação/preparação/usinagem e material, apontamentos das etapas pelo celular, painel de situação/prazo/tempos e calibração de estimativas pelos tempos reais. Apresentar esses pontos em linguagem clara e confirmar o funcionamento vigente antes da publicação.

## Parceiros — `/parceiros`

Página própria acessível pelo menu, com cards agrupados por área. Cada card contém logo oficial, categoria, relação precisa com a GTAM e explicação breve da aplicação.

- **Automação e robótica:** Festo — integradora Festo em automação; GME Robotics — parceria em projetos com robôs.
- **Visão, sensores e medição:** Keyence — câmeras e sensores usados em dispositivos, com contato direto; Renishaw — apalpador e software de medição na máquina.
- **CAD/CAM e engenharia:** Hexagon/WorkNC — software CAM; SolidWorks — software CAD e modelagem 3D; SKA — fornecimento e treinamento de softwares.

Usar versões oficiais dos logos e confirmar autorização/orientações de marca. Divulgar a apresentação de case em evento WorkNC quando evento e participação estiverem confirmados para publicação.

## Clientes e homologações — `/clientes`

Página própria acessível pelo menu, com homologações em destaque e cards de projetos por setor. Formato editorial: **setor → trabalho feito → tipo de necessidade atendida**. Só declarar resultados mensuráveis quando houver dados confirmados.

- Volkswagen — automotivo; fornecedor homologado; dispositivos e bancadas para peças de veículos, incluindo T-Cross, entregues via Simoldes.
- Neodent — implantes odontológicos; fornecedor homologado e serviços de usinagem.
- Simoldes Plásticos — autopeças injetadas; bancadas de aplicação de fita, berços, dispositivos de montagem e postiços de molde.
- Jasmine Alimentos — alimentício; recuperação de braços, eixos, mancais e cilindros hidráulicos de fornos industriais; engrenagens de nylon.
- Medfio — higiene bucal; manutenção de moldes de injeção multicavidade e peças das tufadeiras.
- América Embalagens — embalagens plásticas; bicos e ponteiras de injetoras.
- Fibracem — fibra óptica e telecom; peças usinadas.
- Focus — indústria de vidro; berços e integração de sistema de visão ao CLP da máquina.

Confirmar autorização antes de usar logos, fotos ou detalhes que identifiquem trabalhos de clientes. Manter explícito que os projetos Volkswagen mencionados foram entregues via Simoldes.

## Imagens e ativos

Pesquisar em paralelo logos oficiais, manuais de marca e imagens externas de uso permitido para máquinas, ferramentas, usinagem, moldes, automação e medição. Para cada imagem, registrar fonte, licença e atribuição exigida; para cada logo, registrar a fonte oficial e as orientações da marca, sem presumir que disponibilidade pública significa autorização irrestrita. Imagens que não retratam a máquina/unidade específica da GTAM devem ser identificadas como ilustrativas; não apresentar material de terceiros como foto própria da GTAM. A empresa poderá substituir as imagens por fotos próprias no futuro. O inventário inicial, com créditos e pendências, está em [docs/assets-and-sources.md](assets-and-sources.md).

## Pendências antes da publicação

- Confirmar fabricante, modelo e especificações do centro CNC pela plaqueta/manual.
- Confirmar especificações da unidade Clever L-1860 instalada.
- Identificar marca/modelo da fresadora ferramenteira.
- Confirmar as versões oficiais e a cobertura de uso dos logos de Renishaw, Hexagon/WorkNC, SOLIDWORKS e SKA reproduzidos na página de parceiros. Até essa confirmação, a publicação da página com esses logos permanece condicionada; nomes tipográficos são a alternativa.
- Confirmar pela plaqueta ou manual o fabricante/modelo completo e cursos do centro CNC, devido à divergência encontrada nas fichas públicas.
- Confirmar especificações adicionais da unidade Clever L-1860 e identificar marca/modelo da fresadora ferramenteira antes de acrescentar dados.
- Validar se a descrição do sistema próprio apoiado por IA e suas etapas refletem o funcionamento vigente antes da publicação.
- Manter imagens externas identificadas como ilustrativas quando não retratarem a unidade GTAM; a empresa poderá substituí-las por fotos próprias no futuro.
- Obter autorização antes de acrescentar logos, fotos ou detalhes identificáveis de clientes.

## Fora de escopo nesta fase

Publicação do site e alegações técnicas/comerciais ainda sem confirmação. A implementação local das páginas e fluxos previstos neste spec foi concluída nesta rodada; os itens acima são pendências de validação para publicação ou para futuras ampliações.

## Plano de implementação

As tarefas devem ser executadas em sequência. Só iniciar uma tarefa depois que a anterior estiver concluída conforme seus critérios de conclusão. O plano detalhado e o acompanhamento de status ficam em [implementation-tasks.md](implementation-tasks.md).

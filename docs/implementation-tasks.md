# GTAM — Tarefas de implementação

Este plano transforma o spec do site em trabalho executável e revisável.

## Regra de execução

- Executar as tarefas **uma por vez, na ordem abaixo**.
- Não iniciar a tarefa seguinte enquanto a atual não atender a todos os critérios de conclusão.
- Se uma tarefa depender de informação que não temos, registrar a pendência e pedir a informação necessária; não avançar silenciosamente com conteúdo inventado.
- A pesquisa de textos, fontes, imagens e logos pode ser feita por um agente em paralelo **dentro da tarefa de levantamento de conteúdo e ativos**. Nesta versão, usar imagens externas com permissão de uso registrada; identificar como ilustrativas quando não mostrarem a unidade da GTAM. Registrar separadamente fonte/licença de fotos e fonte/orientação de uso de logos; disponibilidade pública não presume autorização irrestrita. Fotos próprias poderão substituí-las no futuro. A implementação das páginas segue a sequência deste plano.
- Atualizar o status e resumir o resultado ao concluir cada tarefa.

## Status

T01–T10 estão **Concluídas** para implementação local. Pendências de autorização e validação técnica para publicação estão listadas no spec e no inventário de ativos.

## Tarefas

### T01 — Fechar conteúdo e reunir ativos

**Objetivo:** preparar os fatos, textos e materiais necessários para criar as páginas.

**Trabalho:**

- Confirmar fabricante, modelo e especificações do centro CNC pela plaqueta ou manual; comparar com a pesquisa do modelo OKM-855S.
- Validar as especificações adicionais do torno Clever L-1860 na unidade da GTAM.
- Identificar marca/modelo da fresadora ferramenteira e registrar somente capacidades confirmadas.
- Pesquisar em paralelo logos oficiais e manuais de marca, além de imagens externas com permissão de uso registrada para máquinas, parceiros, ferramentas e processos. Identificar imagens ilustrativas; a GTAM poderá substituí-las por fotos próprias no futuro.
- Confirmar a redação das relações com parceiros, homologações e clientes; registrar orientações de uso de logos e permissões/licenças de imagens.
- Confirmar quais soluções já têm informação suficiente para páginas iniciais.

**Critérios de conclusão:** fatos afirmativos estão baseados no material informado pela GTAM; dados de máquina ainda não confirmados estão excluídos da publicação e listados como pendência; ativos externos selecionados têm fonte e condição de uso registradas; os temas iniciais de soluções foram listados a partir dos trabalhos informados.

**Status:** Concluída. Pendências factuais e de autorização permanecem no inventário de fontes.

### T02 — Preparar rotas e geração das páginas

**Objetivo:** permitir páginas estáticas acessíveis por rota direta, incluindo caminhos aninhados.

**Trabalho:** implementar a estrutura para `/maquinas`, `/maquinas/slug`, `/solucoes`, `/solucoes/slug`, `/parceiros` e `/clientes`, preservando `/` e `/privacidade`.

**Critérios de conclusão:** cada rota planejada é gerada no build e abre diretamente; títulos, descrições, canonical e sitemap correspondem à página; URLs usam slugs sem acentos e funcionam no deploy GitHub Pages existente.

**Status:** Concluída. O build gera as rotas listadas, com canonical, metadados, JSON-LD e sitemap.

### T03 — Criar padrões visuais reutilizáveis

**Objetivo:** estabelecer componentes e estilos compartilhados para páginas de catálogo e conteúdo.

**Trabalho:** criar estrutura de página, navegação, breadcrumbs, cartões, blocos técnicos, galerias, chamadas para contato e padrões responsivos coerentes com a identidade atual da GTAM.

**Critérios de conclusão:** os padrões suportam conteúdo técnico e institucional; navegação por teclado e movimento reduzido são contemplados; o conteúdo continua legível em telas pequenas.

**Status:** Concluída. Cabeçalho/rodapé compartilhados, breadcrumbs, cartões reutilizáveis e padrões responsivos criados; navegação por teclado e movimento reduzido considerados.

### T04 — Criar catálogo e páginas das máquinas

**Objetivo:** publicar `/maquinas` e uma página para cada equipamento confirmado.

**Trabalho:** construir cartões de catálogo e páginas individuais para Okada, Clever e fresadora, com dados confirmados, fotos autorizadas, explicações simples e contato.

**Critérios de conclusão:** catálogo lista todas as máquinas confirmadas e cada cartão leva à página correta; cada página exibe apenas especificações validadas e imagens autorizadas com legendas precisas; conteúdo pode ser entendido por leitores sem formação técnica.

**Status:** Concluída. As três máquinas têm página, dados fornecidos pela GTAM, explicação acessível e imagem ilustrativa creditada; especificações não confirmadas foram omitidas.

### T05 — Criar índice e páginas iniciais de soluções

**Objetivo:** publicar `/solucoes` e as páginas aprofundadas escolhidas em T01.

**Trabalho:** escrever conteúdos permanentes sobre indicação, processo, informações necessárias para avaliação e exemplos autorizados, conectando soluções a máquinas e tecnologias relevantes.

**Critérios de conclusão:** índice liga a todas as páginas publicadas; cada página tem conteúdo específico e útil, CTA de contato e metadados próprios; não há afirmações de capacidade ou resultado sem base confirmada.

**Status:** Concluída. O índice e cinco páginas explicam quando cada solução é pertinente, como a GTAM atua e que informações ajudam na avaliação; vínculos às máquinas foram rotulados como navegação geral.

### T06 — Criar a página de parceiros

**Objetivo:** publicar `/parceiros` com relações corretas e logos oficiais aprovados.

**Trabalho:** agrupar os sete parceiros por automação e robótica, visão/sensores/medição e CAD/CAM/engenharia; criar cards com logo, papel da empresa e uso na GTAM.

**Critérios de conclusão:** relações não sugerem certificações ou parcerias não confirmadas; todos os logos têm fonte e condição de uso registradas; os cards funcionam em desktop e celular.

**Status:** Concluída. Reutiliza os cinco arquivos de logo que já apareciam na faixa de parceiros da página inicial; Festo, GME Robotics e Keyence aparecem como nomes tipográficos. A confirmação de versão oficial e cobertura de uso dos cinco arquivos existentes permanece registrada no inventário de ativos.

### T07 — Criar a página de clientes e homologações

**Objetivo:** publicar `/clientes` com homologações e exemplos de projetos por setor.

**Trabalho:** destacar Volkswagen e Neodent; criar cards no formato **setor → trabalho feito → tipo de necessidade atendida** para os casos aprovados.

**Critérios de conclusão:** Volkswagen é descrita com a entrega via Simoldes; status de homologação e escopos estão aprovados; logos e imagens respeitam permissões; nenhum resultado mensurável é inventado.

**Status:** Concluída. `/clientes` destaca Volkswagen e Neodent como fornecedores homologados e organiza os seis demais clientes por setor, trabalho feito e necessidade atendida. Não reproduz logos de clientes sem autorização confirmada.

### T08 — Atualizar a página principal e integrar o fluxo GTAM

**Objetivo:** apresentar na home a operação da GTAM, as soluções e os principais diferenciais, preservando as informações atuais.

**Trabalho:** incluir destaques de soluções e máquinas; criar o fluxo tecnológico animado; apresentar orçamento até entrega em etapas; resumir diferenciais no fluxo; integrar os conteúdos atuais de apresentação, serviços, trabalhos, ESG, FAQ e contato. Mover o conteúdo atual de parceiros para `/parceiros` sem descartá-lo.

**Critérios de conclusão:** home comunica a jornada de trabalho da GTAM; tecnologia, processo e diferenciais têm papéis distintos e não repetem blocos extensos; animações respeitam movimento reduzido; conteúdo e seções atuais continuam disponíveis no site.

**Status:** Concluída. A página inicial apresenta a jornada da referência inicial até a entrega; o sistema próprio com IA aparece como apoio transversal. Os destaques de máquinas e soluções levam às páginas dedicadas; as seções institucionais anteriores foram mantidas e o conteúdo de parceiros está em `/parceiros`.

### T09 — Revisar navegação e conexões entre páginas

**Objetivo:** garantir que o visitante consiga percorrer o site e chegar ao contato a partir dos conteúdos relevantes.

**Trabalho:** finalizar rótulos e ordem do menu; adicionar links entre home, soluções, máquinas, parceiros, clientes e contato; revisar chamadas e breadcrumbs.

**Critérios de conclusão:** todas as páginas são alcançáveis pela navegação prevista; links internos levam às rotas corretas; contato está acessível nos pontos definidos pelo spec.

**Status:** Concluída. Menu desktop e móvel levam a A GTAM, Soluções, Tecnologia, Máquinas, Parceiros e Clientes e homologações; detalhes têm breadcrumbs e os cards da home, listas e CTAs conectam às páginas e ao contato.

### T10 — Revisão final de conteúdo e apresentação

**Objetivo:** revisar o conjunto integrado antes da publicação.

**Trabalho:** revisar textos, metadados, imagens, responsividade e comportamento visual de todas as páginas; conferir os conteúdos existentes que foram reorganizados.

**Critérios de conclusão:** páginas finais correspondem ao spec aprovado; dados, imagens e relações estão validados; apresentação consistente nos tamanhos de tela previstos; pendências estão explicitadas antes de qualquer publicação.

**Status:** Concluída. A revisão integrada confirmou as rotas, metadados, créditos de imagens, consistência dos conteúdos e comportamento de movimento reduzido. O build GitHub Pages passou; as pendências de publicação foram atualizadas no spec e no inventário de ativos.

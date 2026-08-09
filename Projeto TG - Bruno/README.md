https://github.com/ElbertJean/API-1

https://github.com/ElbertJean/API-2-semestre

https://github.com/ElbertJean/morpheus

https://github.com/ElbertJean/API_4S_Visiona_PolygonEditor

https://github.com/ElbertJean/API-5-Semestre


# Elbert Jean dos Santos

![perfil](https://github.com/elbertjean.png)

## Introdução

Este portfólio acadêmico reúne os projetos desenvolvidos ao longo da minha formação em Tecnologia em Banco de Dados pela [Faculdade de Tecnologia de São José dos Campos - Prof. Jessen Vidal](https://fatecsjc-prd.azurewebsites.net/).

Iniciei o curso em 2023 e, paralelamente à formação acadêmica, passei a atuar profissionalmente na área de tecnologia, ingressando na SpotSat e posteriormente assumindo a posição de Desenvolvedor Front-End. Essa experiência simultânea entre faculdade e mercado teve um papel importante na minha formação: enquanto profissionalmente aprofundei meus conhecimentos em desenvolvimento de interfaces, integração com APIs, visualização de dados e aplicações web, na Fatec ampliei minha experiência com banco de dados, desenvolvimento backend, modelagem de sistemas e processamento de dados.

A trajetória passou por fundamentos de desenvolvimento web, processamento de dados geoespaciais, pipelines ETL, autenticação e conformidade com a LGPD, até a entrega de sistemas distribuídos com arquitetura de banco de dados dual. Em paralelo ao desenvolvimento técnico, conduzi equipes em ambientes de alta pressão, lidando com conflitos interpessoais, recomposições de time e acúmulo de funções, experiências que moldaram minha visão sobre liderança e entrega de valor.

A combinação entre a formação em Banco de Dados e a experiência profissional em desenvolvimento Front-End contribuiu para uma visão mais completa sobre desenvolvimento de software, permitindo compreender e atuar no ciclo completo de criação de sistemas — desde a análise do problema e estruturação da solução, passando pelo desenvolvimento, modelagem de dados e integração de serviços, até aspectos de segurança, deploy e manutenção. Essa vivência aproximou áreas que inicialmente estudava de forma separada e consolidou meu interesse por arquitetura de sistemas, desenvolvimento Full Stack e construção de soluções orientadas a dados.

## Meus Projetos

## :heavy_check_mark: 1º Semestre - 2023-2

### Parceiro Acadêmico
[Faculdade de Tecnologia de São José dos Campos - Prof. Jessen Vidal](https://fatecsjc-prd.azurewebsites.net/)

<details>
<summary>Fatec São José dos Campos - Prof. Jessen Vidal</summary>
<img src="./images/fatec.png" alt="Fatec São José dos Campos - Prof. Jessen Vidal">
<b>Figura 1: Fachada da Fatec SJC</b>
</details>

No primeiro semestre, em parceria com a própria Fatec São José dos Campos, foi proposto o desenvolvimento de uma solução para auxiliar no gerenciamento dos ciclos de avaliação utilizados pela instituição. O desafio estava relacionado ao acompanhamento dos scores dos alunos e ao cálculo do FEE (Fator de Ensino Evolutivo), buscando centralizar e organizar informações que faziam parte desse processo.

O [TimeMorize](https://github.com/ElbertJean/API-1) desenvolveu uma aplicação web voltada à gestão desses ciclos de avaliação, permitindo o gerenciamento de turmas, grupos, alunos, professores e atividades, além do lançamento e acompanhamento dos scores e da exportação dos dados consolidados.

O projeto foi desenvolvido utilizando Python e Flask e, por se tratar do primeiro semestre do curso, um dos requisitos era trabalhar a persistência de dados sem a utilização de bancos de dados SQL ou NoSQL. Dessa forma, o sistema utilizou arquivos como JSON para armazenamento das informações, proporcionando os primeiros contatos com desenvolvimento web, organização de dados e construção de uma aplicação a partir de requisitos apresentados por um cliente.

<details>
<summary>Visão geral do projeto</summary>
<img src="./assets/1-semestre/visao_geral.gif">
<b>Figura 2: Visão geral, passando por todas as sessões do projeto</b>
</details>

A persistência dos dados foi implementada utilizando arquivos JSON, sem o uso de um sistema gerenciador de banco de dados, conforme os requisitos estabelecidos para o primeiro semestre. As informações eram carregadas e manipuladas pela aplicação em Python com Flask, permitindo o gerenciamento dos dados relacionados a alunos, turmas, grupos, atividades e ciclos de avaliação.

A partir dos dados registrados, o sistema realizava o processamento das avaliações e dos scores dos alunos, possibilitando o acompanhamento dos resultados de cada ciclo e a consolidação das informações utilizadas no processo de avaliação.

Antes do início do desenvolvimento, foi elaborado um fluxograma para representar o comportamento esperado da aplicação e organizar os diferentes fluxos de navegação de acordo com o perfil do usuário. O diagrama definiu as principais funcionalidades disponíveis para alunos, professores e diretores, servindo como referência para a implementação das telas e regras do sistema.

<details>
<summary>Fluxograma de Funcionamento do Sistema</summary>
<img src="./assets/1-semestre/fluxograma_1.png" alt="Modelagem de Dados em Json">
<img src="./assets/1-semestre/fluxograma_2.png" alt="Modelagem de Dados em Json">
<b>Figura 3 e 4: Fluxograma de funcionamento e navegação do sistema TimeMorize</b>
</details>

### Tecnologias utilizadas

- **HTML5 / CSS3:** Utilizados na estruturação e estilização das páginas da aplicação, definindo a organização visual e a apresentação das diferentes funcionalidades do sistema.
- **Python:** Linguagem utilizada no desenvolvimento da lógica do backend, responsável pelo processamento das informações e pelas regras de negócio da aplicação.
- **Flask:** Framework utilizado para construção do backend da aplicação, realizando o roteamento das páginas, processamento das requisições e integração entre a interface e os dados do sistema.
- **JSON:** Utilizado para persistência dos dados da aplicação, permitindo o armazenamento das informações sem a utilização de um sistema gerenciador de banco de dados, conforme os requisitos definidos para o primeiro semestre.
- **Bootstrap:** Framework utilizado para auxiliar na construção e estilização das interfaces, proporcionando componentes reutilizáveis e responsividade às páginas.
- **jQuery:** Utilizado para manipulação de elementos da interface e implementação de comportamentos dinâmicos no frontend.
- **Axios:** Utilizado para realizar requisições HTTP entre o frontend e os endpoints disponibilizados pelo backend.
- **Figma:** Utilizado no planejamento e prototipação das interfaces da aplicação antes da implementação.
- **Miro:** Utilizado para elaboração do mapeamento dos fluxos da aplicação, definindo a navegação, funcionalidades e comportamentos esperados para cada perfil de usuário.
- **Git / GitHub:** Utilizados para versionamento do código-fonte, organização do repositório e colaboração entre os integrantes da equipe durante o desenvolvimento.

### Contribuições Pessoais

Atuei como Product Owner durante o projeto, o que me colocou diretamente no processo de entendimento do problema apresentado pela Fatec. Antes de pensar na implementação, precisei compreender como os diferentes perfis utilizariam o sistema e transformar os requisitos apresentados pelos professores em um fluxo de funcionamento claro para a equipe. A partir disso, desenvolvi o fluxograma completo da aplicação, posteriormente validado com os professores, além do wireframe e da proposta visual que serviram como referência para o desenvolvimento das telas.

Durante a implementação, também participei diretamente do desenvolvimento da aplicação, contribuindo na construção e padronização das interfaces e na organização da estrutura utilizada para persistência dos dados em JSON. Foi meu primeiro contato acadêmico com a necessidade de pensar não apenas na tela, mas também em como as informações seriam estruturadas, relacionadas e utilizadas pelo restante do sistema.

Além do desenvolvimento, tive participação significativa na documentação do projeto, organizando informações sobre o funcionamento da aplicação, requisitos, funcionalidades e entregas realizadas durante as sprints. Por atuar simultaneamente entre produto, documentação e desenvolvimento, esse primeiro semestre foi importante para começar a compreender o software como um conjunto: entender o problema, planejar a solução, documentá-la e, por fim, participar da sua implementação.

### Hard Skills

- Estruturação e estilização de páginas com HTML5, CSS3 e Bootstrap: **Sei fazer com autonomia**;
- Lógica de programação com Python: **Sei fazer com ajuda**;
- Desenvolvimento de aplicações web e rotas utilizando Flask: **Sei fazer com ajuda**;
- Manipulação e estruturação de dados em arquivos JSON: **Sei fazer com autonomia**;
- Integração entre frontend e backend através de requisições HTTP: **Sei fazer com ajuda**;
- Prototipação e criação de wireframes utilizando Figma: **Sei fazer com autonomia**;
- Modelagem de fluxos de navegação e funcionalidades utilizando Miro: **Sei fazer com autonomia**;
- Versionamento de código com Git e GitHub: **Sei fazer com ajuda**;
- Levantamento, organização e documentação de requisitos: **Sei fazer com ajuda**;
- Organização de backlog e aplicação de práticas Scrum no papel de Product Owner: **Sei fazer com ajuda**.

### Soft Skills

O primeiro semestre também representou meu primeiro contato real com o desenvolvimento de um projeto em equipe. Precisei aprender a trabalhar com pessoas com diferentes opiniões, formas de comunicação e níveis de comprometimento, conciliando ideias e responsabilidades enquanto lidávamos com prazos de sprint e entregas acadêmicas.

Por atuar como Product Owner, parte desse desafio passou também pela organização do grupo e pelo acompanhamento das entregas. Nem todos os integrantes apresentaram o mesmo nível de comprometimento com o projeto e, ao final da segunda sprint, foi necessário tomar a decisão de retirar três integrantes da equipe devido à recorrência de problemas relacionados à participação, responsabilidade com as atividades e comportamento dentro do grupo. Foi uma decisão difícil, principalmente por ser meu primeiro contato com uma situação desse tipo, mas necessária para evitar que a falta de comprometimento de alguns integrantes continuasse prejudicando o trabalho dos demais.

Essa experiência me ensinou que trabalhar em equipe vai muito além de dividir tarefas. Comecei a desenvolver habilidades de **comunicação**, **gestão de conflitos**, **tomada de decisão**, **responsabilidade**, **organização de prazos** e **liderança**, além de entender a importância de estabelecer expectativas claras e acompanhar o comprometimento de cada integrante. Foi também meu primeiro contato com a necessidade de tomar decisões desconfortáveis pensando no resultado coletivo e na continuidade do projeto.

---

## :heavy_check_mark: 2º Semestre - 2024-1

### Parceiro Acadêmico
[Faculdade de Tecnologia de São José dos Campos - Prof. Jessen Vidal](https://fatecsjc-prd.azurewebsites.net/)

No segundo semestre, novamente em parceria com a Fatec São José dos Campos, foi proposto o desenvolvimento de uma solução para o gerenciamento e análise de dados meteorológicos provenientes de estações localizadas no estado de São Paulo. O desafio estava relacionado à existência de múltiplos arquivos CSV, provenientes de diferentes estações e com diferentes formatos, tornando necessário validar, organizar e armazenar essas informações de maneira estruturada.

A [Equipe Javali](https://github.com/ElbertJean/API-2-semestre) desenvolveu uma aplicação desktop em Java capaz de realizar a leitura e validação desses arquivos, armazenar os registros em um banco de dados relacional e disponibilizar relatórios para análise das variáveis climáticas. O sistema também permitia o gerenciamento de cidades, estações e unidades de medida, além da identificação e tratamento de medições consideradas suspeitas.

Este projeto representou uma evolução importante em relação ao primeiro semestre, principalmente pela introdução da modelagem e persistência em banco de dados relacional. Durante o desenvolvimento, tivemos contato com Java, JDBC, modelagem de entidades e relacionamentos, processamento de arquivos CSV e construção de consultas para geração de relatórios, começando a trabalhar de forma mais estruturada com a relação entre aplicação e banco de dados.

<details>
<summary>Visão geral da aplicação</summary>
<img src="./assets/2-semestre/visao_geral.gif" alt="Visão geral da aplicação desenvolvida pela Equipe Javali">
<b>Figura 5: Visão geral do funcionamento da aplicação</b>
</details></br>


Diferentemente do primeiro semestre, neste projeto a persistência passou a ser realizada em um banco de dados relacional. Para estruturar os dados meteorológicos e seus relacionamentos, foram desenvolvidos os modelos conceitual e lógico do banco de dados, representando entidades como cidades, estações, registros, variáveis climáticas e unidades de medida.

<details>
<summary>Modelagem de Dados</summary>

<h4>Modelo Conceitual</h4>

<img src="./assets/2-semestre/mer.png" alt="Modelo conceitual do banco de dados">

<b>Figura 5: Modelo Entidade-Relacionamento dos dados meteorológicos</b>

<br><br>

<h4>Modelo Lógico</h4>

<img src="./assets/2-semestre/modeloLogico.png" alt="Modelo lógico do banco de dados">

<b>Figura 6: Modelo lógico do banco de dados da aplicação</b>

</details></br>

A aplicação permite importar e validar arquivos CSV contendo dados meteorológicos, armazenando as informações em um banco de dados relacional. O sistema disponibiliza o gerenciamento de cidades, estações e unidades de medida, além da geração de relatórios das variáveis climáticas e do tratamento de registros considerados suspeitos a partir dos limites configurados para cada medição.

### Tecnologias Utilizadas

- **Java:** Linguagem principal utilizada no desenvolvimento da aplicação, responsável pela implementação das regras de negócio, processamento dos arquivos CSV e comunicação com o banco de dados.
- **JavaFX:** Framework utilizado para construção da interface gráfica desktop da aplicação, permitindo o desenvolvimento das telas e componentes utilizados pelo usuário.
- **Scene Builder:** Ferramenta utilizada em conjunto com o JavaFX para criação e organização visual das interfaces da aplicação.
- **PostgreSQL:** Sistema gerenciador de banco de dados relacional utilizado para persistência dos dados meteorológicos, armazenando informações de cidades, estações, variaveis climáticas, unidades de medida e registros coletados.
- **JDBC:** Utilizado para realizar a comunicação entre a aplicação Java e o banco de dados PostgreSQL, permitindo consultas, inserções, atualizações e demais operações de persistência.
- **Maven:** Ferramenta utilizada para gerenciamento das dependências e organização do projeto Java, facilitando a configuração e execução da aplicação.
- **Docker:** Utilizado para criação e padronização do ambiente necessário para execução dos serviços utilizados pelo projeto, principalmente do banco de dados.
- **Git / GitHub:** Utilizados para versionamento do código-fonte, organização do repositório e colaboração entre os integrantes da equipe durante as sprints.

### Contribuições Pessoais

Durante o segundo semestre, concentrei minha atuação principalmente no desenvolvimento das interfaces da aplicação e na integração dessas telas com as funcionalidades implementadas em Java. Trabalhei com JavaFX e FXML na construção da tela principal do sistema e de seus fluxos de navegação, conectando as diferentes funcionalidades desenvolvidas pela equipe.

Uma das minhas principais contribuições foi o desenvolvimento do fluxo do relatório BoxPlot. Participei desde a criação das interfaces até a implementação dos controllers responsáveis pela seleção de cidade, estação e período para geração do relatório. Para integrar essa funcionalidade aos dados da aplicação, também implementei consultas ao banco de dados para carregar as cidades cadastradas e suas respectivas estações.

Além disso, contribuí com ajustes no relatório de valor médio e com a integração entre as interfaces e a camada de dados da aplicação. Esse semestre foi meu primeiro contato mais aprofundado com Java, JavaFX, JDBC e banco de dados relacional, exigindo que eu entendesse não apenas como construir uma interface, mas como fazer com que ela consultasse, processasse e apresentasse informações persistidas no PostgreSQL.

### Hard Skills

- Desenvolvimento de aplicações desktop com Java e JavaFX: **Sei fazer com ajuda**;
- Criação de interfaces com Scene Builder e FXML: **Sei fazer com autonomia**;
- Integração com banco de dados PostgreSQL utilizando JDBC: **Sei fazer com ajuda**;
- Operações CRUD e consultas em banco de dados relacional: **Sei fazer com ajuda**;
- Arquitetura em camadas: **Sei fazer com ajuda**;
- Metodologia Ágil Scrum: **Sei fazer com ajuda**.

### Soft Skills

O segundo semestre trouxe um tipo de desafio diferente do primeiro, pois foi quando passei a atuar de forma mais direta no desenvolvimento da API. A equipe precisou lidar com uma stack praticamente nova, utilizando Java, JavaFX, JDBC e banco de dados relacional, além de conceitos como CRUD e arquitetura em camadas, que até então ainda não faziam parte da minha experiência.

Esse cenário exigiu bastante **adaptação** e **aprendizado contínuo**, principalmente por precisar absorver novas tecnologias ao mesmo tempo em que as entregas das sprints continuavam acontecendo. Foi necessário aprender a lidar melhor com **prazos**, organizar as atividades e buscar soluções mesmo quando ainda não dominava completamente as ferramentas utilizadas.

Também desenvolvi mais minha **colaboração em equipe**, já que muitas das funcionalidades dependiam diretamente do trabalho de outros integrantes. Construir uma tela, integrar dados e finalizar uma entrega exigia comunicação constante para entender o que já havia sido desenvolvido e como cada parte deveria se conectar.

Foi um semestre importante para desenvolver **resiliência**, **responsabilidade com entregas** e maior segurança para enfrentar tecnologias desconhecidas. Mais do que aprender Java ou banco de dados relacional, comecei a entender na prática que desenvolver software também envolve saber lidar com incerteza, dependências entre pessoas e pressão de prazo.

## Contatos
* [GitHub](https://github.com/elbertjean)
* [LinkedIn](https://www.linkedin.com/in/elbertjean)

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

## Contatos
* [GitHub](https://github.com/elbertjean)
* [LinkedIn](https://www.linkedin.com/in/elbertjean)

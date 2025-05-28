# Documentação Backend

## Introdução

O backend da Plataforma Digital foi criado para simplificar a gestão e divulgação de projetos, oferecendo ferramentas práticas como controle de inscrições, publicação de resultados e registro de demandas. Desenvolvido com tecnologias acessíveis e escaláveis, ele atende às necessidades do campus e da comunidade, sendo uma base sólida para melhorias futuras.

## Dependências

- **ASP.NET Core Web API**: Escolhido para construir a API com arquitetura MVC, garantindo organização e flexibilidade.
- **MySQL**: Banco de dados relacional integrado via Entity Framework Core para armazenamento eficiente dos dados.
- **.NET Core / .NET 6+**: Framework base que suporta o desenvolvimento da aplicação.
- **Entity Framework Core**: ORM que facilita a interação com o MySQL.
- **Docker**: Utilizado para conteinerização, permitindo deploy consistente e portátil.

## Requisitos Funcionais (RF)

### RF01 - Página de Divulgação de Projetos

- Título, descrição e objetivos
- Botão para inscrever-se
- Imagem de exposição
- Método de download e upload
- Número de vagas disponíveis

### RF02 - Sistema de Demandas

- Cadastrar novas demandas
- Atribuir uma demanda a algum integrante
- Central de demandas

### RF03 - Controle de Alunos nos Projetos Atuais

- Exibir nomes e turmas dos alunos presentes no projeto
- Funcionalidade para designar líder do projeto ou expulsar
- Mostrar a situação atual do aluno

### RF04 - Cadastro de Projetos

- Nome, limite de vagas, quantidade de horas, requisitos, objetivos e descrição
- Upload de imagem
- Botão de cadastro

### RF05 - Sistema de Acesso com Perfis

Usuários com diferentes papéis:
- **Administrador**: Controle geral do sistema
- **Aluno**: Pode visualizar e se inscrever

### RF06 - Gerenciamento do Perfil

- Editar perfil
- Visualizar perfil

## Arquitetura

A arquitetura escolhida foi o MVC (Model-View-Controller) pela sua organização e escalabilidade, facilitando manutenção e integração com o frontend React.js via API RESTful. Pontos positivos incluem divisão clara de responsabilidades e agilidade no desenvolvimento, enquanto a complexidade inicial e esforço de configuração são desvantagens. Foi optada por oferecer uma solução robusta para a plataforma. Inclui:

- **Controllers**: Gerencia requisições HTTP.
- **Models**: Acesso ao MySQL via Entity Framework Core.
- **Integração com Frontend**: Fornece dados em JSON.
- **Deploy**: Conteinerização com Docker.

## Diagrama de Classes

![Diagrama de Classes](https://github.com/Plataforma-Digital-Senai/projeto-extensao/blob/docs/imagens/img/image.png)

## Diagrama ER

![Diagrama ER](https://github.com/Plataforma-Digital-Senai/projeto-extensao/blob/docs/imagens/img/Modelagem_Projeto_PDS%5B1%5D.PNG.png)

## Entidade Usuário

Vão ter dois tipos de Usuários, os Alunos e os Professores, onde os professores terão mais funcionalidades na plataforma. Ambos vão estar relacionados com alguma turma, onde o professor pode estar em mais de 1.

## Entidade Projeto

Cada Projeto tem seu próprio nome, função social e um objetivo a ser atingido. Cada projeto vai ter um professor que será o responsável e uma determinada quantidade de participantes, podendo adicionar ou vetar a inscrição de novos alunos no projeto, além disso temos a data de início e do fim do projeto, fora um status, que será usado para identificar se já foi finalizado ou se está em desenvolvimento.

## Entidade Participantes

O nome do participante será igual ao nome do usuário, definido pela Chave estrangeira usuario_id, cada um terá um cargo (Líder, Aluno, Professor) e uma função, que será determinada pelo líder e pelos professores conforme a organização do grupo. Os Participantes também vão ter uma data de entrada e de saída além de uma contribuição, que será uma booleana, tendo em vista que não serão contadas as horas e sim se o participante teve relevância ao decorrer do projeto.

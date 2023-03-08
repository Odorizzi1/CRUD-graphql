# CRUD com GraphQL e Mongoose

Este projeto implementa um CRUD (Create, Read, Update, Delete) utilizando GraphQL e Mongoose. A aplicação permite criar, listar, atualizar e deletar usuários.

## Tecnologias Utilizadas

- Node.js
- Express.js
- GraphQL
- Mongoose

## Como executar o projeto

1. Clone este repositório em sua máquina local 
3. Na pasta do projeto, execute o comando `npm install` para instalar as dependências
4. Configure as variáveis de ambiente no arquivo `.env`
5. Execute o comando `npm run dev` para iniciar o servidor em modo de desenvolvimento
6. Acesse `http://localhost:3001/graphql` para acessar o playground do GraphQL e testar as operações CRUD

## Exemplo de consulta

Para realizar uma consulta de todos os usuários cadastrados na aplicação, basta executar a seguinte operação no playground do GraphQL:

query {
getUsers {
id
name
email
phone
}
}


## Exemplo de mutation

Para criar um novo usuário na aplicação, basta executar a seguinte operação no playground do GraphQL:

mutation {
createUser(input: {
name: "Jonathan",
email: "jonathan@teste.com",
phone: "(11) 99999-9999"
}) {
id
name
email
phone
}
}

## Autor

- Jonathan Odorizzi

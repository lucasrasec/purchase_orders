# Desafio Imersão FullCycle 17

Este projeto foi desenvolvido como parte do desafio da 17ª edição da Imersão FullCycle. É uma aplicação em Nest.js que implementa as seguintes rotas:

- **Listar assets:** `GET /api/assets`
- **Criar assets:** `POST /api/assets`
- **Criar orders:** `POST /api/orders`
- **Listar orders:** `GET /api/orders`

Além disso, foram adicionadas rotas para pesquisar por ID de order e asset.

- **Buscar assets** `GET /api/assets/id`
- **Buscar oeders** `GET /api/orders/id`

As rotas podem ser testadas utilizando o arquivo `api.http` fornecido no projeto.

## Executando o Projeto

Para executar o projeto, siga as seguintes etapas:

1. Instale as dependências:
   ```bash
   npm install
2. Inicie o projeto:
   ```bash
   npm run start:dev

Abra http://localhost:3000 para ver a versão de produção do seu projeto.

Tecnologias Utilizadas
Next.js
React
Material-UI

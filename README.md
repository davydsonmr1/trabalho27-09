# API de Gerenciamento de Pedidos

Sistema de API em Node.js para gerenciamento de pedidos usando Fastify e Knex.js com MySQL.

## Tecnologias

- Fastify
- Knex.js
- MySQL

## Como executar

1. Instalar dependencias:
```
npm install
```

2. Configurar banco MySQL e executar migrations:
```
npm run migrate
```

3. Popular banco com dados iniciais:
```
npm run seed
```

4. Iniciar servidor:
```
npm start
```

O servidor ira rodar na porta 3000.

## Rotas disponiveis

- GET /marcas
- GET /marcas/:id  
- DELETE /marcas/:id
- GET /produtos
- GET /produtos/:id
- POST /produtos
- GET /clientes
- GET /clientes/:id
- POST /clientes
- GET /pedidos
- GET /pedidos/:id
- GET /pedidos/cidade/:cidade
- POST /pedidos
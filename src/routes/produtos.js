const knex = require('knex')(require('../../knexfile').development);

async function produtosRoutes(fastify, options) {
  fastify.get('/produtos', async (request, reply) => {
    try {
      const produtos = await knex('produtos').select('*');
      return {
        message: 'Produtos listados com sucesso',
        data: produtos,
        error: false
      };
    } catch (error) {
      reply.status(500);
      return {
        message: error.message,
        data: null,
        error: true
      };
    }
  });

  fastify.get('/produtos/:id', async (request, reply) => {
    try {
      const { id } = request.params;
      const produto = await knex('produtos').where('id', id).first();
      
      if (!produto) {
        reply.status(404);
        return {
          message: 'Produto não encontrado',
          data: null,
          error: true
        };
      }

      return {
        message: 'Produto encontrado com sucesso',
        data: produto,
        error: false
      };
    } catch (error) {
      reply.status(500);
      return {
        message: error.message,
        data: null,
        error: true
      };
    }
  });

  fastify.post('/produtos', async (request, reply) => {
    try {
      const { nome, preco, estoque, id_marca } = request.body;
      const [id] = await knex('produtos').insert({
        nome,
        preco,
        estoque,
        id_marca
      });

      const novoProduto = await knex('produtos').where('id', id).first();

      return {
        message: 'Produto criado com sucesso',
        data: novoProduto,
        error: false
      };
    } catch (error) {
      reply.status(500);
      return {
        message: error.message,
        data: null,
        error: true
      };
    }
  });
}

module.exports = produtosRoutes;
const knex = require('knex')(require('../../knexfile').development);

async function clientesRoutes(fastify, options) {
  fastify.get('/clientes', async (request, reply) => {
    try {
      const clientes = await knex('clientes').select('*');
      return {
        message: 'Clientes listados com sucesso',
        data: clientes,
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

  fastify.get('/clientes/:id', async (request, reply) => {
    try {
      const { id } = request.params;
      const cliente = await knex('clientes').where('id', id).first();
      
      if (!cliente) {
        reply.status(404);
        return {
          message: 'Cliente não encontrado',
          data: null,
          error: true
        };
      }

      return {
        message: 'Cliente encontrado com sucesso',
        data: cliente,
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

  fastify.post('/clientes', async (request, reply) => {
    try {
      const { nome, email, cidade } = request.body;
      const [id] = await knex('clientes').insert({
        nome,
        email,
        cidade
      });

      const novoCliente = await knex('clientes').where('id', id).first();

      return {
        message: 'Cliente criado com sucesso',
        data: novoCliente,
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

module.exports = clientesRoutes;
const knex = require('knex')(require('../../knexfile').development);

async function marcasRoutes(fastify, options) {
  fastify.get('/marcas', async (request, reply) => {
    try {
      const marcas = await knex('marcas').select('*');
      return {
        message: 'Marcas listadas com sucesso',
        data: marcas,
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

  fastify.get('/marcas/:id', async (request, reply) => {
    try {
      const { id } = request.params;
      const marca = await knex('marcas').where('id', id).first();
      
      if (!marca) {
        reply.status(404);
        return {
          message: 'Marca não encontrada',
          data: null,
          error: true
        };
      }

      return {
        message: 'Marca encontrada com sucesso',
        data: marca,
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

  fastify.delete('/marcas/:id', async (request, reply) => {
    try {
      const { id } = request.params;
      const deleted = await knex('marcas').where('id', id).del();
      
      if (!deleted) {
        reply.status(404);
        return {
          message: 'Marca não encontrada',
          data: null,
          error: true
        };
      }

      reply.status(204);
      return;
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

module.exports = marcasRoutes;
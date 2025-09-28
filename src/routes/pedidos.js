const knex = require('knex')(require('../../knexfile').development);

async function pedidosRoutes(fastify, options) {
  fastify.get('/pedidos', async (request, reply) => {
    try {
      const pedidos = await knex('pedidos').select('*');
      
      for (let pedido of pedidos) {
        const itens = await knex('itens_pedidos')
          .where('id_pedido', pedido.id)
          .select('*');
        pedido.itens = itens;
      }

      return {
        message: 'Pedidos listados com sucesso',
        data: pedidos,
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

  fastify.get('/pedidos/:id', async (request, reply) => {
    try {
      const { id } = request.params;
      const pedido = await knex('pedidos').where('id', id).first();
      
      if (!pedido) {
        reply.status(404);
        return {
          message: 'Pedido não encontrado',
          data: null,
          error: true
        };
      }

      const itens = await knex('itens_pedidos')
        .where('id_pedido', pedido.id)
        .select('*');
      pedido.itens = itens;

      return {
        message: 'Pedido encontrado com sucesso',
        data: pedido,
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

  fastify.get('/cidade/:cidade', async (request, reply) => {
    try {
      const { cidade } = request.params;
      const pedidos = await knex('pedidos')
        .join('clientes', 'pedidos.id_cliente', 'clientes.id')
        .where('clientes.cidade', cidade)
        .select('pedidos.*');
      
      for (let pedido of pedidos) {
        const itens = await knex('itens_pedidos')
          .where('id_pedido', pedido.id)
          .select('*');
        pedido.itens = itens;
      }

      return {
        message: `Pedidos da cidade ${cidade} listados com sucesso`,
        data: pedidos,
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

  fastify.post('/pedidos', async (request, reply) => {
    try {
      const { id_cliente, itens } = request.body;
      
      return await knex.transaction(async (trx) => {
        let valor_total = 0;
        
        for (let item of itens) {
          const produto = await trx('produtos')
            .where('id', item.id_produto)
            .first();
          
          if (!produto) {
            throw new Error(`Produto com id ${item.id_produto} não encontrado`);
          }
          
          valor_total += produto.preco * item.quantidade;
        }
        
        const [pedido_id] = await trx('pedidos').insert({
          id_cliente,
          data_pedido: new Date(),
          valor_total
        });
        
        for (let item of itens) {
          const produto = await trx('produtos')
            .where('id', item.id_produto)
            .first();
            
          await trx('itens_pedidos').insert({
            quantidade: item.quantidade,
            preco_unitario: produto.preco,
            id_pedido: pedido_id,
            id_produto: item.id_produto
          });
        }
        
        const novoPedido = await trx('pedidos').where('id', pedido_id).first();
        const itensPedido = await trx('itens_pedidos')
          .where('id_pedido', pedido_id)
          .select('*');
        
        novoPedido.itens = itensPedido;
        
        return {
          message: 'Pedido criado com sucesso',
          data: novoPedido,
          error: false
        };
      });
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

module.exports = pedidosRoutes;
const fastify = require('fastify')({ logger: true });

async function start() {
  try {
    await fastify.register(require('./src/routes/marcas'), { prefix: '/marcas' });
    await fastify.register(require('./src/routes/produtos'), { prefix: '/produtos' });
    await fastify.register(require('./src/routes/clientes'), { prefix: '/clientes' });
    await fastify.register(require('./src/routes/pedidos'), { prefix: '/pedidos' });

    await fastify.listen({ port: 3000 });
    console.log('Servidor rodando na porta 3000');
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
}

start();
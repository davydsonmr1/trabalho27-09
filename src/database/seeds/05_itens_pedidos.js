exports.seed = function(knex) {
  return knex('itens_pedidos').del()
    .then(function () {
      return knex('itens_pedidos').insert([
        { id: 1, quantidade: 1, preco_unitario: 3999.99, id_pedido: 1, id_produto: 1 },
        { id: 2, quantidade: 1, preco_unitario: 2199.99, id_pedido: 1, id_produto: 6 },
        { id: 3, quantidade: 2, preco_unitario: 299.99, id_pedido: 1, id_produto: 9 },
        { id: 4, quantidade: 2, preco_unitario: 799.99, id_pedido: 1, id_produto: 9 },
        { id: 5, quantidade: 2, preco_unitario: 1299.99, id_pedido: 2, id_produto: 8 },
        { id: 6, quantidade: 1, preco_unitario: 3999.99, id_pedido: 3, id_produto: 1 },
        { id: 7, quantidade: 1, preco_unitario: 7999.99, id_pedido: 4, id_produto: 3 },
        { id: 8, quantidade: 1, preco_unitario: 2599.99, id_pedido: 4, id_produto: 11 },
        { id: 9, quantidade: 2, preco_unitario: 1299.99, id_pedido: 5, id_produto: 8 },
        { id: 10, quantidade: 1, preco_unitario: 4299.99, id_pedido: 6, id_produto: 5 },
        { id: 11, quantidade: 1, preco_unitario: 299.99, id_pedido: 6, id_produto: 9 }
      ]);
    });
};
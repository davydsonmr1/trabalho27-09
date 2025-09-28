exports.seed = function(knex) {
  return knex('pedidos').del()
    .then(function () {
      return knex('pedidos').insert([
        { id: 1, data_pedido: '2025-09-27 10:30:00', valor_total: 7199.98, id_cliente: 1 },
        { id: 2, data_pedido: '2025-09-27 14:15:00', valor_total: 1599.98, id_cliente: 2 },
        { id: 3, data_pedido: '2025-09-27 16:45:00', valor_total: 3999.99, id_cliente: 3 },
        { id: 4, data_pedido: '2025-09-26 09:20:00', valor_total: 8799.98, id_cliente: 4 },
        { id: 5, data_pedido: '2025-09-26 11:30:00', valor_total: 2599.98, id_cliente: 5 },
        { id: 6, data_pedido: '2025-09-25 15:00:00', valor_total: 4599.98, id_cliente: 6 }
      ]);
    });
};
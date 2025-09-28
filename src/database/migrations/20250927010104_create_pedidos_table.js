exports.up = function(knex) {
  return knex.schema.createTable('pedidos', function(table) {
    table.increments('id').primary();
    table.datetime('data_pedido').notNullable();
    table.decimal('valor_total', 10, 2).notNullable();
    table.integer('id_cliente').unsigned();
    table.foreign('id_cliente').references('id').inTable('clientes').onDelete('SET NULL');
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('pedidos');
};
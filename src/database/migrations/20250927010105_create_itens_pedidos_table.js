exports.up = function(knex) {
  return knex.schema.createTable('itens_pedidos', function(table) {
    table.increments('id').primary();
    table.integer('quantidade').notNullable();
    table.decimal('preco_unitario', 10, 2).notNullable();
    table.integer('id_pedido').unsigned();
    table.foreign('id_pedido').references('id').inTable('pedidos').onDelete('CASCADE');
    table.integer('id_produto').unsigned();
    table.foreign('id_produto').references('id').inTable('produtos').onDelete('SET NULL');
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('itens_pedidos');
};
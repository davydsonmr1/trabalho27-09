exports.up = function(knex) {
  return knex.schema.createTable('produtos', function(table) {
    table.increments('id').primary();
    table.string('nome').notNullable();
    table.decimal('preco', 10, 2).notNullable();
    table.integer('estoque').notNullable();
    table.integer('id_marca').unsigned();
    table.foreign('id_marca').references('id').inTable('marcas').onDelete('CASCADE');
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('produtos');
};
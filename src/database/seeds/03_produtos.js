exports.seed = function(knex) {
  return knex('produtos').del()
    .then(function () {
      return knex('produtos').insert([
        { id: 1, nome: 'iPhone 13', preco: 3999.99, estoque: 50, id_marca: 1 },
        { id: 2, nome: 'iPhone 14 Pro', preco: 5499.99, estoque: 25, id_marca: 1 },
        { id: 3, nome: 'MacBook Air M2', preco: 7999.99, estoque: 15, id_marca: 1 },
        { id: 4, nome: 'Galaxy S23', preco: 3599.99, estoque: 40, id_marca: 2 },
        { id: 5, nome: 'Galaxy Note 20', preco: 4299.99, estoque: 30, id_marca: 2 },
        { id: 6, nome: 'Galaxy Tab S8', preco: 2199.99, estoque: 20, id_marca: 2 },
        { id: 7, nome: 'Mi 12 Pro', preco: 2799.99, estoque: 35, id_marca: 3 },
        { id: 8, nome: 'Redmi Note 11', preco: 1299.99, estoque: 60, id_marca: 3 },
        { id: 9, nome: 'Mi Band 7', preco: 299.99, estoque: 100, id_marca: 3 },
        { id: 10, nome: 'P50 Pro', preco: 3899.99, estoque: 20, id_marca: 4 },
        { id: 11, nome: 'MatePad Pro', preco: 2599.99, estoque: 25, id_marca: 4 },
        { id: 12, nome: 'Watch GT 3', preco: 899.99, estoque: 45, id_marca: 4 }
      ]);
    });
};
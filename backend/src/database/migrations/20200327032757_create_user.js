
exports.up = function(knex) {
  return knex.schema.createTable('usuario', function(table){
     table.string('cpf').primary().notNullable();
     table.string('rg').notNullable();
     table.string('nome').notNullable();
     table.datetime('dataNascimento').notNullable();
     table.string('endereço').notNullable();
     table.string('telefone').notNullable();
     table.string('celular').notNullable();
     table.string('carteirinha').notNullable();
  });
};

exports.down = function(knex) {
    return knex.schema.dropTable();
};

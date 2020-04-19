
exports.up = function(knex) {
    return knex.schema.createTable('responsavelTecnico', function(table){
        table.string('crf').notNullable();
        table.string('nome').notNullable();
        table.string('email').notNullable();
        table.string('telefone').notNullable();
        table.string('celular').notNullable();
        table.string('cnpj').primary().notNullable();
        table.foreign('cnpj').references('cnpj').inTable('hospital');
    });
  };
  
  exports.down = function(knex) {
      return knex.schema.dropTable();
  };
  
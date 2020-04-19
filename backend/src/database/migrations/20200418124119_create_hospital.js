
exports.up = function(knex) {
    return knex.schema.createTable('hospital', function(table){
        table.string('cnpj').primary().notNullable();
        table.string('longitude').notNullable();
        table.string('latitude').notNullable();
        table.string('afe').notNullable();
        table.string('email').notNullable()
        table.string('senha').notNullable()
        table.integer('passwordExpired', 1).notNullable()
        table.string('nome').notNullable();
        table.string('endereço').notNullable();
        table.string('telefone').notNullable();
        table.integer('maxLeitosIsolamento').notNullable();
        table.integer('leitosIsolamentoOcupados').notNullable();
        table.integer('maxLeitosUti').notNullable();
        table.integer('leitosUtiOcupados').notNullable();
    });
  };
  
  exports.down = function(knex) {
      return knex.schema.dropTable();
  };
  
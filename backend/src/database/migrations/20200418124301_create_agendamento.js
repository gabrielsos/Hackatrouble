
exports.up = function(knex) {
    return knex.schema.createTable('agendamento', function(table){
        table.datetime('data').notNullable();
        table.boolean('atendido').notNullable();
        table.string('cnpj')
        table.string('cpf').notNullable();
        table.foreign('cpf').references('cpf').inTable('usuario');
        table.foreign('cnpj').references('cnpj').inTable('hospital');
        table.primary(['cnpj','cpf', 'data']);
    });
  };
  
  exports.down = function(knex) {
      return knex.schema.dropTable();
  };
  
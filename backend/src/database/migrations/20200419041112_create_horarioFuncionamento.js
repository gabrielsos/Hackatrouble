
exports.up = function(knex) {
    return knex.schema.createTable('horarioFuncionamento', function(table){
        table.integer('diaSemana').notNullable();
        table.string('horaAbertura').notNullable();
        table.string('horaFechamento').notNullable();
        table.string('cnpj').notNullable();
        table.foreign('cnpj').references('cnpj').inTable('hospital');
        table.primary(['diaSemana', 'cnpj'])
    });
  };
  
  exports.down = function(knex) {
      return knex.schema.dropTable();
  };
  
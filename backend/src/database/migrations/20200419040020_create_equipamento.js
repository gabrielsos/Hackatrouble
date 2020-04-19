
exports.up = function(knex) {
    return knex.schema.createTable('equipamento', function(table){
        table.string('numeroDeSerie').primary().notNullable();
        table.string('nomeEquipamento').notNullable();
        table.integer('qtdTotal').notNullable();
        table.integer('qtdEmUso').notNullable();
        table.string('cnpj').notNullable();
        table.foreign('cnpj').references('cnpj').inTable('hospital');
    });
  };
  
  exports.down = function(knex) {
      return knex.schema.dropTable();
  };
  
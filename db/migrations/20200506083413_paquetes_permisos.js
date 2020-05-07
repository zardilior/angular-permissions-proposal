const { PAQUETES } = require('../databaseNames')
exports.up = function(knex) {
  return knex.schema.createTable(PAQUETES, table => {
    table.increments('id').unsigned().primary() 
    table.string('nombre').notNullable();
    table.string('categoria').notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable(PAQUETES);  
};

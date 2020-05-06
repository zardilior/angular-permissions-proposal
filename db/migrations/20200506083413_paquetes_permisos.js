const { PAQUETES } = require('../databaseNames')
exports.up = function(knex) {
  knex.schema.createTable(PAQUETES, table => {
    table.increments('id').unsigned().primary() 
    table.string('nombre').notNullable();
    table.string('categoria').notNullable();
  });
};

exports.down = function(knex) {
  knex.schema.dropTable(PAQUETES);  
};

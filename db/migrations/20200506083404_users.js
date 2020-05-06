const { USERS } = require('../databaseNames')
exports.up = function(knex) {
  knex.schema.createTable(USERS, table => {
    table.increments('id').unsigned().primary() 
    table.string('nombre_mostrable').notNullable();
  });
};

exports.down = function(knex) {
  knex.schema.dropTable(USERS);  
};

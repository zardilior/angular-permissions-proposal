const { USERS } = require('../databaseNames')
exports.up = function(knex) {
  return knex.schema.createTable(USERS, table => {
    table.increments('id').unsigned().primary() 
    table.string('nombre_mostrable').notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable(USERS);  
};

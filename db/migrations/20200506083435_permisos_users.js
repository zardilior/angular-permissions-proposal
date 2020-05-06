const { 
  PERMISOS_USERS,
  USERS,
  PERMISOS,
} = require('../databaseNames')
exports.up = function(knex) {
  knex.schema.createTable(PERMISOS_USERS, table => {
    table.increments('id').unsigned().index().references('id').inTable(USERS);
    table.string('nombre').usnigned().index().references('nombre').inTable(PERMISOS);
  });
};

exports.down = function(knex) {
  knex.schema.dropTable(PERMISOS_USERS);  
};

const { 
  PERMISOS_USERS,
  USERS,
  PERMISOS,
} = require('../databaseNames')
exports.up = function(knex) {
  return knex.schema.createTable(PERMISOS_USERS, table => {
    table.integer('users_id').unsigned().index().references('id').inTable(USERS);
    table.string('permisos_nombre').index().references('nombre').inTable(PERMISOS);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable(PERMISOS_USERS);  
};

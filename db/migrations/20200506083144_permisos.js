const { PERMISOS } = require('../databaseNames')
exports.up = function(knex) {
  return knex.schema.createTable(PERMISOS, table => {
     table.string('nombre').primary()
     table.string('nombre_mostrable')
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable(PERMISOS);  
};

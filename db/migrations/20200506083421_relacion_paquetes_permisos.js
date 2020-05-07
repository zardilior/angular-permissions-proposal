const { 
  PAQUETES_PERMISOS,
  PAQUETES,
  PERMISOS,
} = require('../databaseNames')
exports.up = function(knex) {
  return knex.schema.createTable(PAQUETES_PERMISOS, table => {
    table.integer('paquetes_permisos_id').unsigned().index().references('id').inTable(PAQUETES);
    table.string('permisos_nombre').index().references('nombre').inTable(PERMISOS);
  });
  
};

exports.down = function(knex) {
  return knex.schema.dropTable(PAQUETES_PERMISOS);  
};

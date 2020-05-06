const { 
  PAQUETE_PERMISOS,
  PAQUETES,
  PERMISOS,
} = require('../databaseNames')
exports.up = function(knex) {
  knex.schema.createTable(PAQUETES_PERMISOS, table => {
    table.increments('id').unsigned().index().references('id').inTable(PAQUETES);
    table.string('nombre').usnigned().index().references('nombre').inTable(PERMISOS);
  });
  
};

exports.down = function(knex) {
  knex.schema.dropTable(PAQUETES_PERMISOS);  
};

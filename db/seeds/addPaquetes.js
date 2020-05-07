const { PAQUETES } = require('../databaseNames')
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex(PAQUETES).del()
    .then(function () {
      // Inserts seed entries
      return knex(PAQUETES).insert([
        {id: 1, nombre: 'Permisos', categoria:'original'},
        {id: 2, nombre: 'Paquetes', categoria:'original'},
        {id: 3, nombre: 'Permisos de Usuarios', categoria:'original'},
      ]);
    });
};

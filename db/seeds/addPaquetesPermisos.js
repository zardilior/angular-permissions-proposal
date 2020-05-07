const { PAQUETES_PERMISOS } = require('../databaseNames')
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex(PAQUETES_PERMISOS).del()
    .then(function () {
      // Inserts seed entries
      return knex(PAQUETES_PERMISOS).insert([
        { paquetes_permisos_id: 1, permisos_nombre: 'borrar-permiso' },
        { paquetes_permisos_id: 1, permisos_nombre: 'crear-permiso' },
        { paquetes_permisos_id: 1, permisos_nombre: 'listar-permiso' },
        { paquetes_permisos_id: 1, permisos_nombre: 'pagina-permisos' },
        { paquetes_permisos_id: 2, permisos_nombre: 'asignar-paquete' },
        { paquetes_permisos_id: 2, permisos_nombre: 'borrar-paquete' },
        { paquetes_permisos_id: 2, permisos_nombre: 'crear-paquete' },
        { paquetes_permisos_id: 2, permisos_nombre: 'listar-paquete' },
        { paquetes_permisos_id: 2, permisos_nombre: 'pagina-paquetes' },
        { paquetes_permisos_id: 3, permisos_nombre: 'asignar-permisos-usuario' },
        { paquetes_permisos_id: 3, permisos_nombre: 'listar-permisos-usuario' },
        { paquetes_permisos_id: 3, permisos_nombre: 'mover-paquetes-permisos-usuario' },
        { paquetes_permisos_id: 3, permisos_nombre: 'pagina-permisos-usuario' },
      ]);
    });
};

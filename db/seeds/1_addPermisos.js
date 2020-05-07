const { PERMISOS } = require('../databaseNames')
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex(PERMISOS).del()
    .then(function () {
      // Inserts seed entries
      return knex(PERMISOS).insert([
        { nombre:'asignar-paquete',nombre_mostrable: 'Paquetes - Asignar Permisos' },
        { nombre:'asignar-permisos-usuario',nombre_mostrable: 'Permisos de Usuarios - Asignar' },
        { nombre:'borrar-paquete',nombre_mostrable: 'Paquetes - Borrar' },
        { nombre:'borrar-permiso',nombre_mostrable: 'Permisos - Borrar' },
        { nombre:'crear-paquete',nombre_mostrable: 'Paquetes - Crear' },
        { nombre:'crear-permiso',nombre_mostrable: 'Permisos - Crear' },
        { nombre:'listar-paquete',nombre_mostrable: 'Paquetes - listar' },
        { nombre:'listar-permiso',nombre_mostrable: 'Permisos - listar' },
        { nombre:'listar-permisos-usuario',nombre_mostrable: 'Permisos de Usuario - Listar permisos usuario' },
        { nombre:'mover-paquetes-permisos-usuario',nombre_mostrable: 'Permisos de Usuario - mover paquetes' },
        { nombre:'pagina-paquetes',nombre_mostrable: 'Paquetes - pagina' },
        { nombre:'pagina-permisos',nombre_mostrable: 'Permisos - pagina' },
        { nombre:'pagina-permisos-usuario',nombre_mostrable: 'Permisos de Usuario - Acceso a Pagina' },
      ]);
    });
};

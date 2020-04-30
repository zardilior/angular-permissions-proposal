import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SampleService } from './sample/sample.service';
import { Controlador1Controller } from './controlador1/controlador1.controller';
import { Controlador2Controller } from './controlador2/controlador2.controller';
import { Service1Service } from './service1/service1.service';
import { Service2Service } from './service2/service2.service';
import { AccessService } from './access.service';
import { AccesoFallidoService } from './acceso-fallido.service';
import { MiInfoService } from './mi-info.service';
// DB
import { DBFactory } from './DB';
import { PermisosController } from './permisos/permisos.controller';
import { PaquetesService } from './paquetes/paquetes.service';
import { PermisosPaquetesService } from './permisos-paquetes/permisos-paquetes.service';
import { PermisosService } from './permisos/permisos.service';
import { PermisosPaquetesController } from './permisos-paquetes/permisos-paquetes.controller';
import { PaquetesController } from './paquetes/paquetes.controller';
import { PermisosUsuariosService } from './permisos-usuarios/permisos-usuarios.service';
import { PermisosUsuariosController } from './permisos-usuarios/permisos-usuarios.controller';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';

@Module({
  imports: [],
  controllers: [AppController, Controlador1Controller, Controlador2Controller, PermisosController, PaquetesController, PermisosPaquetesController, PermisosUsuariosController, UsersController],
  providers: [
    AppService,
    SampleService,
    Service1Service,
    Service2Service,
    AccessService,
    PermisosService,
    MiInfoService,
    AccesoFallidoService,
    {
      provide: 'DB',
      useFactory: DBFactory
    },
    PermisosPaquetesService,
    PaquetesService,
    PermisosUsuariosService,
    UsersService
  ],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { DBFactory } from './DB';
import { PermisosController } from './permisos/permisos.controller';
import { PaquetesService } from './paquetes/paquetes.service';
import { PermisosService } from './permisos/permisos.service';
import { PaquetesController } from './paquetes/paquetes.controller';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';

@Module({
  imports: [],
  controllers: [
    PermisosController,
    PaquetesController,
    UsersController
  ],
  providers: [
    PermisosService,
    {
      provide: 'DB',
      useFactory: DBFactory
    },
    PaquetesService,
    UsersService
  ],
})
export class AppModule {}

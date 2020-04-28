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
import { PermisosService } from './permisos.service';

@Module({
  imports: [],
  controllers: [AppController, Controlador1Controller, Controlador2Controller],
  providers: [
    AppService,
    SampleService,
    Service1Service,
    Service2Service,
    AccessService,
    PermisosService,
    MiInfoService,
    AccesoFallidoService,
  ],
})
export class AppModule {}

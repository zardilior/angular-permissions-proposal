import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { AccessService } from './access.service';
import { AccesoFallidoService } from './acceso-fallido.service';
import { MiInfoService } from './mi-info.service';
import { PermisosService } from './permisos.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private miInfoService:MiInfoService,
    private permisosService:PermisosService,
    private accesoFallidoService:AccesoFallidoService
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}

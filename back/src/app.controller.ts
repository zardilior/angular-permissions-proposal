import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { AccessService } from './access.service';
import { AccesoFallidoService } from './acceso-fallido.service';
import { MiInfoService } from './mi-info.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private accesoFallidoService:AccesoFallidoService,
    private accessService:AccessService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}

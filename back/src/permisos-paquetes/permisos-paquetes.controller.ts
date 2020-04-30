import { 
  Controller,
  Post ,
  Param,
  Body,
  HttpCode,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { PermisosPaquetesService } from './permisos-paquetes.service';

@Controller('permisos-paquetes')
@UsePipes(new ValidationPipe())
export class PermisosPaquetesController {
  constructor(
    private service:PermisosPaquetesService
  ) {
  }
  @Post('/:idPaquete')
  @HttpCode(204)
  async replace(
    @Param('idPaquete') id: number,
    @Body('add') addPermisos:string[] =[],
    @Body('remove') removePermisos:string[]=[]
  ){
    await Promise.all([
      this.service.remove(id,removePermisos),
      this.service.add(id, addPermisos),
    ])
  }
}

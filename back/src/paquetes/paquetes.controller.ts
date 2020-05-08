import { 
  Controller,
  Get,
  Post,
  Delete,
  ValidationPipe,
  UsePipes,
  Body,
  Param,
  HttpCode,
} from '@nestjs/common';
import { PaquetesService } from './paquetes.service';
import { Paquete } from './paquetes.class';


@Controller('paquetes')
@UsePipes(new ValidationPipe())
export class PaquetesController {
  constructor(
    private service: PaquetesService
  ){
  }

  @Get('/')
  getAll(): Promise<Paquete[]> {
    return this.service.getAll()  
  }
  @Post('/')
  create(@Body() paquetes:Paquete) {
    return this.service.create(paquetes)  
  }
  @Delete('/:id')
  async remove(@Param('id') id:number) {
    await this.service.remove(id)  
  }

  @Post('/:idPaquete/permisos')
  @HttpCode(204)
  async replacePermisos(
    @Param('idPaquete') id: number,
    @Body('add') addPermisos:string[] =[],
    @Body('remove') removePermisos:string[]=[]
  ):Promise<void>{
    await Promise.all([
      this.service.removePermisos(id,removePermisos),
      this.service.addPermisos(id, addPermisos),
    ])
  }
}

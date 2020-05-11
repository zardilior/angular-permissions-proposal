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
  Logger,
} from '@nestjs/common';
import { PaquetesService } from './paquetes.service';
import { Paquete } from './paquetes.class';
import { Traceable, Trace } from 'src/decorators/trace-everything.decorator';

@Controller('paquetes')
@UsePipes(new ValidationPipe())
@Traceable
export class PaquetesController {

  constructor(
    private service: PaquetesService
  ){
  }

  @Get('/')
  @Trace
  getAll(): Promise<Paquete[]> {
    return this.service.getAll()  
  }
  @Post('/')
  @Trace
  create(@Body() paquetes:Paquete) {
    return this.service.create(paquetes)  
  }
  @Delete('/:idPaquete')
  @Trace
  async remove(@Param('idPaquete') id:number) {
    await this.service.remove(id)  
  }

  @Post('/:idPaquete/permisos')
  @HttpCode(204)
  @Trace
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

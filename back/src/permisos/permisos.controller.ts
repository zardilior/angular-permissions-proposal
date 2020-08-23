import { 
  Controller,
  ValidationPipe,
  UsePipes,
  Get,
  Post,
  Delete,
  Body,
  Param,
  Logger,
} from '@nestjs/common';
import { PermisosService } from './permisos.service';
import { Permiso } from './permisos.class';
import { Trace } from 'src/decorators/trace-everything.decorator';

@Controller('permisos')
@UsePipes(new ValidationPipe())
export class PermisosController {
  public logger = new Logger(PermisosController.name);
  constructor(
    private service: PermisosService
  ){
  }

  @Get('/')
  @Trace
  getAll(): Promise<Permiso[]> {
    return this.service.getAll()  
  }
  @Post('/')
  @Trace
  create(@Body() permisos:Permiso) {
    return this.service.create(permisos)  
  }
  @Delete('/:nombre')
  @Trace
  async delete(@Param('nombre') nombre:string) {
    await this.service.delete(nombre);
  }
}

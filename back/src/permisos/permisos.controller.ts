import { 
  Controller,
  ValidationPipe,
  UsePipes,
  Get,
  Post,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { PermisosService } from './permisos.service';
import { Permiso } from './permisos.class';

@Controller('permisos')
@UsePipes(new ValidationPipe())
export class PermisosController {
  constructor(
    private service: PermisosService
  ){
  }

  @Get('/')
  getAll(): Promise<Permiso[]> {
    return this.service.getAll()  
  }
  @Post('/')
  create(@Body() permisos:Permiso) {
    return this.service.create(permisos)  
  }
  @Delete('/:nombre')
  async delete(@Param('nombre') nombre:string) {
    await this.service.delete(nombre);
  }
}

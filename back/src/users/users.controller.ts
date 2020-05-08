import { 
  Controller,
  Get,
  Post,
  Param,
  Body,
  HttpCode,
} from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('usuarios')
export class UsersController {

  constructor(
    private service: UsersService 
  ){
  }

  @Get('/')
  getAll(): Promise<any[]> {
    return this.service.getAll()  
  }
  @Get('/:usuarioId/permisos')
  getPermisosByUserId(@Param('usuarioId') usuarioId: number):Promise<string[]> {
    return this.service.getPermisosByUserId(usuarioId);
  }

  @Post('/:usuarioId/permisos')
  @HttpCode(204)
  async replacePermisos(
    @Param('usuarioId') usuarioId: number,
    @Body('add') addPermisos: string[]=[],
    @Body('remove') removePermisos: string[]=[]
  ):Promise<void> {
    await Promise.all([
      this.service.addPermisos(usuarioId,addPermisos),
      this.service.removePermisos(usuarioId,removePermisos),
    ]);
  }
}

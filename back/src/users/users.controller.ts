import { 
  Controller,
  Get,
  Post,
  Param,
  Body,
  HttpCode,
  Logger,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { Trace } from 'src/decorators/trace-everything.decorator';

@Controller('usuarios')
export class UsersController {

  private logger = new Logger(UsersController.name);
  constructor(
    private service: UsersService 
  ){
  }

  @Get('/')
  @Trace
  getAll(): Promise<any[]> {
    return this.service.getAll()  
  }

  @Get('/:usuarioId/permisos')
  @Trace
  getPermisosByUserId(@Param('usuarioId') usuarioId: number):Promise<string[]> {
    return this.service.getPermisosByUserId(usuarioId);
  }

  @Post('/:usuarioId/permisos')
  @HttpCode(204)
  @Trace
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

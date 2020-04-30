import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  HttpCode,
} from '@nestjs/common';
import { PermisosUsuariosService } from './permisos-usuarios.service'

@Controller('permisos-usuarios')
export class PermisosUsuariosController {
  constructor(
    private service:PermisosUsuariosService
  ) {
  }

  @Get('/:usuarioId')
  getPermisosUsuario(@Param('usuarioId') usuarioId: number) {
    return this.service.getPermisosUsuario(usuarioId);
  }
  @Post('/:usuarioId')
  @HttpCode(204)
  async replacePermisosUsuario(
    @Param('usuarioId') usuarioId: number,
    @Body('add') addPermisos: string[]=[],
    @Body('remove') removePermisos: string[]=[]
  ) {
    await Promise.all([
      this.service.add(usuarioId,addPermisos),
      this.service.remove(usuarioId,removePermisos),
    ]);
  }
}

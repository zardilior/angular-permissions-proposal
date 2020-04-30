import { Injectable } from '@nestjs/common';
import { MiInfoService } from './mi-info.service';
import { PermisosUsuariosService } from './permisos-usuarios/permisos-usuarios.service';

@Injectable()
export class AccessService {

  private static service = undefined;

  public constructor(
    private permisosUsuarios: PermisosUsuariosService,
  ) {
     AccessService.service = this;
  }
  public static getService() {
     if(!AccessService.service) {
         throw new Error('AccessService not initialized');
     }
     return AccessService.service;
  }
  public async hasAccess(nombre) {
    // TODO: change for an actual user
    const userId = 1;
    if (!userId){
      return false
    }
    const permisos = await this.permisosUsuarios.getPermisosUsuario(userId)
    return permisos.find(
      permiso => permiso==nombre
    )!=undefined;
  }
}

import { Injectable } from '@angular/core';
import { MiInfoService } from './mi-info.service';
import { PermisosService } from './permisos.service';

@Injectable({
  providedIn: 'root'
})
export class AccessService {

  private static service = undefined;

  public constructor(
    private permisosService: PermisosService,
    private miInfoService: MiInfoService,
  ) {
     AccessService.service = this;
  }
  public static getService() {
     if(!AccessService.service) {
         throw new Error('AccessService not initialized');
     }
     return AccessService.service;
  }
  public hasAccess(nombre) {
    const role = this.miInfoService.getRole();
    if (!role){
      return false
    }
    return this.permisosService.getPermisos(role).find(permiso => permiso==nombre)!=undefined;
  }
}

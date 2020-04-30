import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FailedAccessService } from './failed-access-service.interface';
import { PermisosService } from './permisos-service.interface';
import { KeyService } from './key-service.interface';

@Injectable({
  providedIn: 'root'
})
export class AccessService {

  private static service = undefined;
  private static keySubscription:Observable<string>;
  private static key:string;
  public static keyService:KeyService;
  public static permisosService:PermisosService;
  public static failedAccessService:FailedAccessService;

  public constructor(
  ) {
     AccessService.service = this;
  }
  public static getService() {
     if(!AccessService.service) {
         throw new Error('AccessService not initialized');
     }
     return AccessService.service;
  }

  // initialize access service
  public initialize(
    keyService: KeyService,
    permisosService: PermisosService,
    failedAccess: FailedAccessService
  ) {
    AccessService.permisosService = permisosService;
    AccessService.keyService = keyService;
    AccessService.failedAccessService = failedAccess;
  }

  public hasAccess(nombre) {
    return AccessService.permisosService.getAccesoPermisos(AccessService.key).find(
      permiso => permiso == nombre
    ) != undefined;
  }
}

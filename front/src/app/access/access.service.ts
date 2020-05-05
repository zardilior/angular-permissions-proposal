import {
  Injectable,
  Inject 
} from '@angular/core';
import { Observable } from 'rxjs';
import {
  FailedAccessService,
  FailedAccessServiceToken
} from './failed-access-service.interface';
import {
  PermisosService,
  PermisosServiceToken 
} from './permisos-service.interface';
import { 
  KeyService,
  KeyServiceToken
} from './key-service.interface';

@Injectable({
  providedIn: 'root'
})
export class AccessService {

  private static service = undefined;
  private keySubscription:Observable<string>;
  private key:string;

  public constructor(
    @Inject(PermisosServiceToken) public permisosService: PermisosService,
    @Inject(KeyServiceToken) public keyService:KeyService,
    @Inject(FailedAccessServiceToken) public failedAccess: FailedAccessService
  ) {
    AccessService.service = this;
    this.keyService.keyObservable.subscribe(
      key => this.key = key
    );
  }
  public static getService() {
     if(!AccessService.service) {
         throw new Error('AccessService not initialized');
     }
     return AccessService.service;
  }

  public hasAccess(nombre) {
    const result = this.permisosService.getAccesoPermisos(this.key).find(
      permiso => permiso == nombre
    ) != undefined;
    console.log(this.permisosService,this.key)
    return result;
  }
}

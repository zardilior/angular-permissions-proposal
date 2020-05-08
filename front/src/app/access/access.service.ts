import {
  Injectable,
  Inject 
} from '@angular/core';
import {
  Router,
  CanActivate, ActivatedRouteSnapshot 
} from '@angular/router';
import { Observable, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AccessService implements CanActivate {

  private static service: AccessService;
  private permisos:string[];
  private permisosChanges:Subject<string[]> = new Subject<string[]>();

  public constructor(
    private router: Router
  ) {
    this.permisos = [];
    AccessService.service = this;
  }

  public static getService(): AccessService {
     if(AccessService.service === undefined) {
         throw new Error('AccessService not initialized');
     }
     return AccessService.service;
  }

  public setPermisos(permisos: string[]): void {
    this.permisos = permisos;
    this.permisosChanges.next(permisos);
  }
  public getPermisosChanges(): Subject<string[]> {
    return this.permisosChanges;
  }
  public getPermisos(): string[] {
    return this.permisos;
  }

  public hasAccess(nombre):boolean {
    const result = this.permisos.find(
      permiso => permiso == nombre
    ) != undefined;
    return result;
  }
  canActivate(route:ActivatedRouteSnapshot): boolean {
    const nombre = route.data.access
    if (!this.hasAccess(nombre)) {
      this.router.navigate(['']);
      return false;
    }
    return true;
  }
}

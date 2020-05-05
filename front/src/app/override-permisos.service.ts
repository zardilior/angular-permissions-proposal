import { Injectable } from '@angular/core';
import { PermisosService } from 'src/app/permisos/permisos.service';

@Injectable({
  providedIn: 'root'
})
export class OverridePermisosService {

  constructor(
    private service: PermisosService
  ) { 
    
  }
  overridePermisos(permisos:string[]): void {
    this.service.permisosUsuario.push(...permisos);
    this.service.keyObservable.next('1');
  }
}

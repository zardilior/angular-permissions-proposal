import { Component } from '@angular/core';
import { PermisosService } from './permisos/permisos.service' 
import { AccessService } from './access/access.service' 
import { OverridePermisosService } from './override-permisos.service' 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'front';

  constructor(
    private access:AccessService,
    private permisos:PermisosService,
    private override:OverridePermisosService
  ){
  }
  recargarPermisos() {
    this.permisos.loadPermisosUsuario();
  }
  overridePermisos(){
    const permisos = [
      'asignar-permisos-usuario',
      'pagina-permisos-usuario',
      'listar-permisos-usuario',
    ]
    this.override.overridePermisos(permisos);
  }
}

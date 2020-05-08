import { Component } from '@angular/core';
import { PermisosService } from './permisos/permisos.service' 
import { AccessService } from './access/access.service' 

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
  ){
    this.recargarPermisos();
  }
  recargarPermisos() {
    this.permisos.getPermisosUsuario(1).subscribe(
      permisosUsuario => {
        console.log(permisosUsuario);
        this.access.setPermisos(permisosUsuario)
      },
      error => alert('No se pudieron cargar los permisos. Asegurese de que su backend y db esten correctos')
    )
  }
  overridePermisos(){
    const permisos = this.access.getPermisos().concat([
      'asignar-permisos-usuario',
      'pagina-permisos-usuario',
      'listar-permisos-usuario',
      'mover-paquetes-permisos-usuario'
    ]);
    this.access.setPermisos(permisos);
  }
}

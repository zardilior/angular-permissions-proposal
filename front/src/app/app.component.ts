import { Component } from '@angular/core';
import { AccessService } from './access.service';
import { AccesoFallidoService } from './acceso-fallido.service';
import { MiInfoService } from './mi-info.service';
import { PermisosService } from './permisos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'front';
  selected:String;

  constructor(
    private accessService:AccessService,
    private miInfoService:MiInfoService,
    private permisosService:PermisosService,
    private accesoFallidoService:AccesoFallidoService
  ){
    this.accessService = accessService;
  }
  get rol() {
    return this.miInfoService.getRole() || 'ninguno';
  }
  set rol(rol) {
    this.selected = '';
    this.miInfoService.setRole(rol);
  }
  get permisos() {
    return this.permisosService.getPermisos(this.rol);
  }
}

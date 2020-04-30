import { Component } from '@angular/core';
import { PermisosService } from './permisos/permisos.service' 
  /*
import { AccessService } from './access/access.service' 
   */

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'front';

  constructor(
    private service:PermisosService //,
    //private access:AcessService
  ){
    //access.initialize(service,service,service);
  }
}

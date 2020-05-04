import { 
  Component,
  OnInit,
  Input
} from '@angular/core';
import { PermisosService } from '../../permisos.service';

@Component({
  selector: 'app-permisos',
  templateUrl: './permisos.component.html',
  styleUrls: ['./permisos.component.scss']
})
export class PermisosComponent implements OnInit {

  nuevoPermiso: any = {};
  permisos: any[] = [];
  constructor(
    private servicio: PermisosService
  ) {
  }

  ngOnInit(): void {
  }
  ngOnDestroy(): void {
  }
  addPermiso() {
    this.servicio.createPermiso(this.nuevoPermiso).subscribe(
      permiso => this.permisos.push(permiso),
      error => alert('No se pudo crear. Cheque si ya hay un permiso con ese nombre')
    );
  }

}

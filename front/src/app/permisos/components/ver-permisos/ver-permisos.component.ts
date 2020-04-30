import { 
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { PermisosService } from '../../permisos.service';

@Component({
  selector: 'app-ver-permisos',
  templateUrl: './ver-permisos.component.html',
  styleUrls: ['./ver-permisos.component.scss']
})
export class VerPermisosComponent implements OnInit {

  @Input() title:string = 'Lista Permisos';
  @Input() initialLoad:boolean = true;
  @Input() canDelete:boolean = true;
  @Input() permisos: any[] = [];
  @Output() permisosChange = new EventEmitter<any[]>();
  @Output('permisoSelected') selectPermisoEmitter = new EventEmitter<string>();
  search:string = '';
  constructor(
    private servicio: PermisosService
  ) {
  }

  ngOnInit(): void {
    if(this.initialLoad){
      this.servicio.getPermisos().subscribe(
        permisos => this.permisosChange.emit(permisos)
      );
    }
  }

  selectPermiso(nombre: string): void {
    this.selectPermisoEmitter.emit(nombre);
  }

  deletePermiso(nombre) {
    const answer = confirm(`Quieres de verdad borrar el permiso: ${nombre}`)
    if(answer) {
      this.servicio.deletePermiso(nombre).subscribe(
        result => {
          const index = this.permisos.findIndex(permiso=>permiso.nombre==nombre)
          const permisos = [...this.permisos]
          permisos.splice(index,1);
          this.permisosChange.emit(permisos)
        }
      );
    }
  }

  trackByFn(index, item) { 
    return item.nombre;
  }

  get displayPermisos() { 
    if (this.search === '')
      return this.permisos
    return this.permisos.filter(
      (permiso) => permiso.nombre.toLowerCase().indexOf(this.search.toLowerCase()) != -1
    );
  }


}

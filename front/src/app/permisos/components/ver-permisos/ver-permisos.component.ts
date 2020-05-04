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
  displayPermisos: any[] = [];
  _permisos: any[] = [];
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
          const index = this._permisos.findIndex(permiso=>permiso.nombre==nombre)
          const permisos = [...this._permisos]
          permisos.splice(index,1);
          this.permisosChange.emit(permisos)
        },
        error => alert('Este paquete no se pudo borrar, revise si no pertenece a un paquete o a un usuario')
      );
    }
  }

  @Input() set permisos(permisos){
    this._permisos = permisos;
    this.calculateDisplayPermisos();
  }

  setSearch(search){
    this.search = search;
    this.calculateDisplayPermisos();
  }

  trackByFn(index, item) { 
    return item.nombre;
  }

  calculateDisplayPermisos() { 
    if (this.search === ''){
      this.displayPermisos =  this._permisos;
      return
    }
    this.displayPermisos =  this._permisos.filter(
      (permiso) => permiso.nombre.toLowerCase().indexOf(this.search.toLowerCase()) != -1
    );
  }


}

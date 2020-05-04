import { Component, OnInit } from '@angular/core';
import { PermisosService } from '../../permisos.service';

@Component({
  selector: 'app-paquetes',
  templateUrl: './paquetes.component.html',
  styleUrls: ['./paquetes.component.scss']
})
export class PaquetesComponent implements OnInit {

  paquetes:any[] = [];
  displayPaquetes:any[] = [];
  addPermisos:any[] = [];
  removePermisos:any[] = [];
  categorias:Set<any> = new Set();
  categoriaSelected:string = '';
  paqueteSeleccionado:any = null;
  search:string = '';
  permisosSeleccionados:any[] = [];
  permisos:any[] = [];
  crear: boolean = false;
  nuevoPaquete: any = {};

  constructor(
    private service:PermisosService
  ) { }

  ngOnInit(): void {
    this.cargarPaquetes();
  }
  cargarPaquetes() {
    this.service.getPaquetes().subscribe(
      paquetes => {
        this.paquetes = paquetes;
        this.displayPaquetes = paquetes;
        this.paquetes.forEach(
          paquete => {
            this.categorias.add(paquete.categoria)
          }
        );
      }
    )
  }
  selectPaquete(selected) {
    this.permisos.push(...this.permisosSeleccionados);

    this.paqueteSeleccionado = selected;
    this.addPermisos = [];
    this.removePermisos = [];
    // set permisosSeleccionados a los permisos de selected
    if (selected.permisos == null){
      this.permisosSeleccionados = [];
      return;
    }

    this.permisosSeleccionados = this.permisos.filter(
      permiso => selected.permisos.indexOf(permiso.nombre) != -1
    );
    this.permisos = this.permisos.filter(
      permiso => selected.permisos.indexOf(permiso.nombre) == -1
    );
  }
  setSearch(search){
    this.search = search;
    this.calculateDisplayPaquetes();
  }
  setCategoriaSelected(categoriaSelected){
    this.categoriaSelected = categoriaSelected;
    this.calculateDisplayPaquetes();
  }

  selectPermiso(selected){
    if(this.paqueteSeleccionado === null)
      return;
    this.moveFromArrayTo(this.permisos,this.permisosSeleccionados,selected);
    const index = this.removePermisos.indexOf(selected.nombre);
    if (index==-1)
      this.addPermisos.push(selected.nombre);
  }

  deSelectPermiso(selected){
    this.moveFromArrayTo(this.permisosSeleccionados,this.permisos,selected);
    const index = this.addPermisos.indexOf(selected.nombre);
    if (index==-1)
      this.removePermisos.push(selected.nombre);
  }

  private moveFromArrayTo(array1,array2,selected) {
    array2.push(selected);
    const index = array1.findIndex(
      permiso => permiso.nombre === selected.nombre
    );
    if(index!=-1){
      array1.splice(index,1);
    }
  }

  trackById(index, item) {
    return item.id
  }

  calculateDisplayPaquetes() {
    if(this.categoriaSelected === '' && this.search === '') {
      this.displayPaquetes = this.paquetes;
      return; 
    }
    let results = this.paquetes;
    if(this.categoriaSelected) {
      results = results.filter(
        paquete => this.categoriaSelected === paquete.categoria
      )
    }
    if(this.search) {
      results = results.filter(
        paquete => paquete.nombre.indexOf(this.search) != -1
      )
    }
    this.displayPaquetes = results;
  }

  deletePaquete(id: number) {
    this.service.deletePaquete(id).subscribe(
      result => {
        const index = this.paquetes.findIndex(
          paquete => paquete.id === id
        )
        this.paquetes.splice(index,1);
      }
    );
  }

  guardarPermisos(){
    this.service.asignarPermisosPaquetes(
      this.paqueteSeleccionado.id, 
      this.addPermisos,
      this.removePermisos
    ).subscribe(
      result => {
        this.addPermisos = [];
        this.removePermisos = [];
        this.cargarPaquetes();
      }
    );
  }

  crearPaquete() {
    this.service.createPaquete(this.nuevoPaquete).subscribe(
      result => this.cargarPaquetes()
    );
    this.crear = false;
    this.nuevoPaquete = {};
  }

}

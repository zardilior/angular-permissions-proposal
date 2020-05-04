import { Component, OnInit } from '@angular/core';
import { PermisosService } from '../../permisos.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {

  permisos:any[] = [];
  paquetes:any[] = [];
  paquetesSeleccionados:any[] = [];
  permisosUsuario:string[] = [];
  addPermisosUsuario:string[] = [];
  removePermisosUsuario:string[] = [];
  constructor(
    private service:PermisosService
  ) { }

  ngOnInit(): void {
    this.service.getPermisos().subscribe(
      permisos =>{
        this.permisos = permisos
        this.cargarPaquetes();
      }
    );
  }

  cargarPaquetes() {
    this.service.getPaquetes().subscribe(
      paquetes => {
        this.paquetes = paquetes.filter(
          paquete => paquete.permisos !== null
        )
        this.paquetes.forEach( 
          paquete => {
            paquete.permisos = paquete.permisos.split(',').map(
              nombre =>{ 
                console.log(nombre)
                return this.permisos.find(permiso => permiso.nombre === nombre)
              }
            )
          }
        )
        this.getPermisosUsuario();
      }
    )
  }

  selectPaquete(selected){
    this.moveFromArrayTo(this.paquetes,this.paquetesSeleccionados,selected);
    if (selected.permisos !==null) {
      selected.permisos.forEach(permiso => this.addPermisosUsuarioFunc(permiso.nombre))
    }
  }

  togglePermiso(nombre) {
    const findex = this.permisosUsuario.indexOf(nombre)
    if(findex === -1) {
      this.permisosUsuario.push(nombre)
      const index = this.removePermisosUsuario.indexOf(nombre)
      console.log(index)
      if(index == -1) {
        this.addPermisosUsuario.push(nombre)
        console.log(this.addPermisosUsuario)
      }else {
        this.removePermisosUsuario.splice(index,1)
      }
    }
    else {
      this.permisosUsuario.splice(findex,1)
      const index = this.addPermisosUsuario.indexOf(nombre)
      if(index == -1) {
        this.removePermisosUsuario.push(nombre)
      }else {
        this.addPermisosUsuario.splice(index,1)
      }
    }
  }
  addPermisosUsuarioFunc(nombre) {
    console.log('add')
    this.permisosUsuario.push(nombre)
    const index = this.removePermisosUsuario.indexOf(nombre)
    if(index == -1) {
      this.addPermisosUsuario.push(nombre)
      console.log(this.addPermisosUsuario,nombre)
    } else {
      this.removePermisosUsuario.splice(index,1)
    }
  }
  removePermisosUsuarioFunc(nombre) {
    const findex = this.permisosUsuario.indexOf(nombre)
    this.permisosUsuario.splice(findex,1)
    const index = this.addPermisosUsuario.indexOf(nombre)
    if(index == -1) {
      this.removePermisosUsuario.push(nombre)
      console.log(this.removePermisosUsuario,nombre)
    }else {
      this.addPermisosUsuario.splice(index,1)
    }
  }
  trackById(index,item) {
    return item.id;
  }
  trackByName(index,item) {
    return item.nombre;
  }

  deselectPaquete(selected){
    this.moveFromArrayTo(this.paquetesSeleccionados,this.paquetes,selected);
    selected.permisos.filter(
      permiso => this.permisosUsuario.findIndex(
        permisosUsuarios => permisosUsuarios == permiso.nombre
      ) != -1 
    ).forEach(permiso => this.removePermisosUsuarioFunc(permiso.nombre))
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

  getPermisosUsuario(){
    // resetear paquetesSeleccionados y paquetes
    this.paquetes.push(...this.paquetesSeleccionados)
    this.service.getPermisosUsuario(1).subscribe(
      permisosUsuario =>{
        // obtener permisos
        this.permisosUsuario = permisosUsuario
        // encontrar paquetes que los contienen
        this.paquetesSeleccionados = this.permisosUsuario.map(
          nombre => {
            const index = this.paquetes.findIndex(
              paquete => paquete.permisos.findIndex(
                permiso => permiso.nombre === nombre
              ) != -1
            )
            if (index!=-1) {
              const paquete = {...this.paquetes[index]};
              this.paquetes.splice(index,1);
              console.log(paquete);
              return paquete
            }
          }
        ).filter(paquete => paquete);
      }
    );
  }
  asignarPermisosUsuario() {
    console.log(this.addPermisosUsuario,this.removePermisosUsuario);
    this.service.asignarPermisosUsuario(1,this.addPermisosUsuario,this.removePermisosUsuario).subscribe(
      result => {
        this.addPermisosUsuario = [];
        this.removePermisosUsuario = [];
      }
    );
  }

}

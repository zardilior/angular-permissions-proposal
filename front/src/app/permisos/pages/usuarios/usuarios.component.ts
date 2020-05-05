import { Component, OnInit } from '@angular/core';
import { PermisosService } from '../../permisos.service';
import { AccessMethod } from 'src/app/access/access.decorator';
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
  permisosUsuarioDict = {};
  addPermisosUsuario:string[] = [];
  removePermisosUsuario:string[] = [];
  constructor(
    private service:PermisosService
  ) { }

  ngOnInit(): void {
    this.service.getPermisos().subscribe(
      permisos =>{
        this.permisos = permisos
        this.permisos.forEach(
          ({ nombre }) => this.permisosUsuarioDict[nombre] = false
        )
        this.cargarPaquetes();
      }
    );
  }

  permisosInPaquete(paquete) {
    const count = paquete.permisos.reduce(
      (count, permiso) => {
        if(this.permisosUsuarioDict[permiso.nombre] === false)
          return count
        return ++count;
      },
      0
    )
    return count;
  }

  cargarPaquetes() {
    this.service.getPaquetes().subscribe(
      paquetes => {
        this.paquetes = paquetes.filter(
          paquete => paquete.permisos !== null
        );
        this.paquetes.forEach( 
          paquete => {
            paquete.permisos = paquete.permisos.split(',').map(
              nombre =>{ 
                const permiso = this.permisos.find(permiso => permiso.nombre === nombre)
                return permiso
              }
            )
          }
        );
        this.cargarPermisosUsuario();
      }
    )
  }

  @AccessMethod('asignar-permisos-usuario')
  selectPaquete(selected){
    this.moveFromArrayTo(this.paquetes,this.paquetesSeleccionados,selected);
    if (selected.permisos !==null) {
      selected.permisos.forEach(permiso => this.addPermisosUsuarioFunc(permiso.nombre))
    }
  }

  @AccessMethod('asignar-permisos-usuario')
  togglePermiso(nombre:string) {
    const findex = this.permisosUsuario.indexOf(nombre)
    if(findex === -1) {
      this.addPermisosUsuarioFunc(nombre);
    }
    else {
      this.removePermisosUsuarioFunc(nombre);
    }
  }
  addPermisosUsuarioFunc(nombre) {
    this.permisosUsuario.push(nombre)
    this.permisosUsuarioDict[nombre] = true;
    const index = this.removePermisosUsuario.indexOf(nombre)
    if(index == -1) {
      this.addPermisosUsuario.push(nombre)
    } else {
      this.removePermisosUsuario.splice(index,1)
    }
  }
  removePermisosUsuarioFunc(nombre) {
    const findex = this.permisosUsuario.indexOf(nombre)
    this.permisosUsuarioDict[nombre] = false;
    this.permisosUsuario.splice(findex,1)
    const index = this.addPermisosUsuario.indexOf(nombre)
    if(index == -1) {
      this.removePermisosUsuario.push(nombre)
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

  @AccessMethod('asignar-permisos-usuario')
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

  cargarPermisosUsuario(){
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
            // si no esta en ingun paquete
            if (index==-1) {
              
            }
            else {
              const paquete = {...this.paquetes[index]};
              this.paquetes.splice(index,1);
              return paquete
            }
          }
        ).filter(paquete => paquete);

        this.permisosUsuario.forEach(
          nombre => this.permisosUsuarioDict[nombre] = true 
        );
      }
    );
  }
  asignarPermisosUsuario() {
    this.service.asignarPermisosUsuario(1,this.addPermisosUsuario,this.removePermisosUsuario).subscribe(
      result => {
        this.addPermisosUsuario = [];
        this.removePermisosUsuario = [];
        this.service.loadPermisosUsuario();
      }
    );
  }

}

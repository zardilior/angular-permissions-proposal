import { 
  Injectable,
  Inject
} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { API_URL_TOKEN } from './api-url.config'; 
/*
import { FailedAccessService } from 'src/app/access/failed-access-service.interface';
import { PermisosService } from 'src/app/access/permisos-service.interface';
import { KeyService } from 'src/app/access/key-service.interface';
 */

@Injectable({
  providedIn: 'root'
})
export class PermisosService /*implements FailedAccessService,PermisosService,KeyService */{
  permisosUsuario:string[]=[];
  keyObservable:Subject<string>;
  userId:number = 1;
  constructor(
    private httpClient: HttpClient,
    @Inject(API_URL_TOKEN) private API_URL: string
  ) { 
    this.loadPermisosUsuario()
    this.keyObservable =  new Subject();
    this.keyObservable.next('1');
  }
  getPermisos(): Observable<any[]> {
    return this.httpClient.get<string[]>(this.API_URL + '/permisos/');
  }
  getAccesoPermisos() {
    return this.permisosUsuario;
  }
  createPermiso(permiso:any): Observable<any>  {
    return this.httpClient.post<any>(
      this.API_URL+'/permisos/',
      permiso
    );
  }
  deletePermiso(nombre: string): Observable<void> {
    return this.httpClient.delete<void>(
      `${this.API_URL}/permisos/${nombre}`
    );
  }
  getPaquetes():Observable<any[]> {
    return this.httpClient.get<string[]>(this.API_URL + '/paquetes/');
  }
  createPaquete(paquete:any): Observable<any>  {
    return this.httpClient.post<any>(
      this.API_URL+'/paquetes/',
      paquete
    );
  }
  deletePaquete(id: number): Observable<void> {
    return this.httpClient.delete<void>(
      `${this.API_URL}/paquetes/${id}`
    );
  }

  asignarPermisosPaquetes(id:number,add:any[],remove:any[]): Observable<any> {
    return this.httpClient.post<any>(
      `${this.API_URL}/paquetes/${id}/permisos`,
      {
        add,
        remove
      }
    );
  }
  loadPermisosUsuario() {
    this.getPermisosUsuario(this.userId).subscribe(
      permisosUsuario => {
        this.permisosUsuario = permisosUsuario 
        this.keyObservable.next('1');
      },
      error => alert('No se pudieron cargar los permisos. Asegurese de que su backend y db esten correctos')
    )
  }
  getPermisosAcceso(key:string): string[] {
    return this.permisosUsuario;
  }
  getPermisosUsuario(id:number): Observable<string[]> {
    return this.httpClient.get<string[]>(`${this.API_URL}/usuarios/${id}/permisos`);
  }
  failedAccess(nombre:string):void {
    console.log('Acceso restringido fallo permiso: ' + nombre);
  }

  asignarPermisosUsuario(id:number,add:any[],remove:any[]): Observable<any> {
    return this.httpClient.post<any>(
      `${this.API_URL}/usuarios/${id}/permisos`,
      {
        add,
        remove
      }
    );
  }
}

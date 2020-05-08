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
  userId:number = 1;
  constructor(
    private httpClient: HttpClient,
    @Inject(API_URL_TOKEN) private API_URL: string
  ) { 
  }
  getPermisos(): Observable<any[]> {
    return this.httpClient.get<string[]>(this.API_URL + '/permisos/');
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
  getPermisosUsuario(id:number): Observable<string[]> {
    return this.httpClient.get<string[]>(`${this.API_URL}/usuarios/${id}/permisos`);
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

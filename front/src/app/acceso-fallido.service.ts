import { Injectable } from '@angular/core';
import { MiInfoService } from './mi-info.service';

@Injectable({
  providedIn: 'root'
})
export class AccesoFallidoService {

   private static service = undefined;

  public constructor(
    private miInfoService: MiInfoService,
  ) {
     AccesoFallidoService.service = this;
   }
   public static getService() {
     if(!AccesoFallidoService.service) {
         throw new Error('AccesoFallidoService not initialized');
     }
     return AccesoFallidoService.service;
   }

  failedAccess(elemento:string, throwError:boolean = false) {
    const role = this.miInfoService.getRole();
    const message = `rol ${role} no puede entrar a ${elemento}`;
    alert(message);
    if (throwError) {
      throw new Error(message);
    }
  }
}

import { Injectable } from '@nestjs/common';
import { 
  Funcionalidades,
  Permisos,
  Roles
} from './test.data'

@Injectable()
export class PermisosService {
  permisos;
  constructor() { 
    this.permisos = {};
    const entradas = Object.entries(Permisos)
    for(let obj of entradas) {
      const llave = obj[0]
      const valor = obj[1]
      const nombres = [];
      for (let nombre of valor) {
        nombres.push(...Funcionalidades[nombre]);
      }
      this.permisos[llave] = nombres;
    }
  }

  getPermisos(rol) {
    return this.permisos[rol];
  }
}

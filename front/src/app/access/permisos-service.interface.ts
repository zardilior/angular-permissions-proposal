import { InjectionToken } from '@angular/core';

export const PermisosServiceToken = new InjectionToken('PermisosService');
export interface PermisosService {
  getAccesoPermisos: (string) => string[],
}

import { AccessService } from './access.service';
import { AccesoFallidoService } from './acceso-fallido-service.interface';

export function AccessMethod(nombre){
  console.log(nombre);
  return function (target, propertyKey, descriptor) {
    console.log(target, propertyKey, descriptor);
    const newFunc = descriptor.value;
    descriptor.value = function(...args: any[]) {
      // inject services
      const accessService:AccessService = AccessService.getService();
      const accesoFallidoService:AccesoFallidoService = AccesoService.accesoFallidoService;
      // throw don't access error
      if (!accessService.hasAccess(nombre)){
        accesoFallidoService.failedAccess(nombre)
        return undefined
      }
      else {
        return newFunc.apply(this, args);
      }
    }
  }
}

// block all methods in a class in the way the AccessMethod does
export function AccessAllMethods(nombre){
  return function <T extends { new(...args: any[]): {} }>(target: T) {
    return class extends target {
      constructor(...args) {
        super(...args)
        for (let propertyName of Object.getOwnPropertyNames(target.prototype)) {
          const descriptor = Object.getOwnPropertyDescriptor(target.prototype, propertyName);
          const isMethod = descriptor.value instanceof Function;
          if (!isMethod)
              continue;
          const newFunc = descriptor.value;
          descriptor.value = function(...args: any[]) {
            const accessService:AccessService = AccessService.getService();
            const accesoFallidoService:AccesoFallidoService = AccesoService.accesoFallidoService;
            // throw don't access error
            if (!accessService.hasAccess(nombre)){
              accesoFallidoService.failedAccess(nombre)
              return undefined
            }
            else {
              return newFunc.apply(this, args);
            }
          }
          Object.defineProperty(target.prototype, propertyName, descriptor);
        }
      }
    } 
  }
}

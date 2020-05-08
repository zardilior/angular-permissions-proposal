import { AccessService } from './access.service';

export function AccessMethod(nombre: string){
  return function (target, propertyKey, descriptor) {
    const newFunc = descriptor.value;
    descriptor.value = function(...args: any[]) {
      // get service
      const accessService:AccessService = AccessService.getService();
      // only execute if it has access
      if (accessService.hasAccess(nombre)){
        return newFunc.apply(this, args);
      }
    }
  }
}

// block all methods in a class in the way the AccessMethod does
export function AccessAllMethods(nombre: string){
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
            // get service
            const accessService:AccessService = AccessService.getService();
            // only execute if it has access
            if (accessService.hasAccess(nombre)){
              return newFunc.apply(this, args);
            }
          }
          Object.defineProperty(target.prototype, propertyName, descriptor);
        }
      }
    } 
  }
}

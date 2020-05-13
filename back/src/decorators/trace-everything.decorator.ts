import { ZipkinLoggerService as Logger } from 'src/zipkin-logger/zipkin-logger.service';
import {Annotation } from 'zipkin';
import { tracer } from 'src/tracer';
// adds the logger in the constructor and adds a wrapper for methods to log through

export const Traceable =  function<T extends { new(...args: any[]): {} }>(target: T) {
  return class extends target {
    private logger: Logger;
    constructor(...args) {
      super(...args);
      this.logger = new Logger();
    }
  }
}
export const Trace = function(target:any, propertyName: string, descriptor: PropertyDescriptor) {
  const newFunc = descriptor.value;
  descriptor.value = function(...args: any[]) {
    const message = {
      className: this.constructor.name,
      functionName: propertyName,
      args
    }
    //this.logger.log(message)
    //return tracer.local(JSON.stringify(message), () => newFunc.apply(this, args));
    //return newFunc.apply(this, args);
    const id = tracer.createChildId();
    let result;
    tracer.letId(id, ()=>{
      tracer.recordAnnotation(new Annotation.ClientSend());
      tracer.recordServiceName(message.className);
      tracer.recordRpc(`${message.functionName}(${JSON.stringify(args)})`);
      result = newFunc.apply(this, args);
      tracer.recordAnnotation(new Annotation.ClientRecv());
    });
    return result
  }
  Object.defineProperty(target, propertyName, descriptor);
}

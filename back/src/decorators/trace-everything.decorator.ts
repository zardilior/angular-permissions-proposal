import { ZipkinLoggerService as Logger } from 'src/zipkin-logger/zipkin-logger.service';
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
      this.logger.log({
        className: this.constructor.name,
        functionName: propertyName,
        args
      })
      return newFunc.apply(this, args);
    }
    Object.defineProperty(target, propertyName, descriptor);
}

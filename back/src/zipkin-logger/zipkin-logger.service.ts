import { 
  Injectable,
  Logger,
} from '@nestjs/common';
import { tracer } from 'src/tracer';

@Injectable()
export class ZipkinLoggerService extends Logger {
  public tracer = tracer;
  constructor(){
    super();
  }
  error(message:any, trace: string, context?:string,isTimeDiffEnabled?:boolean) {
    super.error(message, trace, context);
    //print on tracer too
    const traces = JSON.stringify({message, trace});
    this.tracer.local(traces, () => {}); 
  }
  log(message: any, context?:string,isTimeDiffEnabled?:boolean) {
    super.log(message,context);
    //print on this.tracer too
    //const trace = JSON.stringify(message);
    //this.tracer.local(trace, ()=>{}); 
  }
  warn(message: any, context?:string,isTimeDiffEnabled?:boolean) {
    super.warn(message,context);
    //print on this.tracer too
    const trace = JSON.stringify(message);
    this.tracer.local(trace,() => ({}))
  }
  debug(message: any, context?:string,isTimeDiffEnabled?:boolean) {
    super.debug(message,context);
    //print on this.tracer too
    const trace = JSON.stringify(message);
    this.tracer.local(trace,() => ({}))
  }
  verbose(message: any, context?:string,isTimeDiffEnabled?:boolean) {
    super.verbose(message,context);
    //print on this.tracer too
    const trace = JSON.stringify(message);
    this.tracer.local(trace,() => ({}))
  }
}

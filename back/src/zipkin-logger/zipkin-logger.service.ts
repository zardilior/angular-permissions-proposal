import { 
  Injectable,
  Logger,
  Scope,
} from '@nestjs/common';
import { tracer } from 'src/tracer';

@Injectable()
export class ZipkinLoggerService extends Logger {
  public tracer = tracer;
  constructor(){
    super();
  }
  error(message: string, trace: string) {
    super.error(message, trace);
    //print on tracer too
    const traces = JSON.stringify({message, trace});
    this.tracer.local(traces, () =>{})
  }
  log(message: string) {
    super.log(message);
    //print on this.tracer too
    const trace = JSON.stringify({message});
    this.tracer.local(trace,() =>{})
  }
  warn(message: string) {
    super.warn(message);
    //print on this.tracer too
    const trace = JSON.stringify(message);
    this.tracer.local(trace,() =>{})
  }
  debug(message: string) {
    super.debug(message);
    //print on this.tracer too
    const trace = JSON.stringify(message);
    this.tracer.local(trace,() =>{})
  }
  verbose(message: string) {
    super.verbose(message);
    //print on this.tracer too
    const trace = JSON.stringify(message);
    this.tracer.local(trace,() =>{})
  }
}

import { 
  Injectable,
  Logger,
  Scope,
} from '@nestjs/common';
import { tracer } from 'src/tracer';

@Injectable()
export class ZipkinLoggerService extends Logger {
  constructor(context = ''){
    super(context);
    this.setContext(context)
    console.log(context);
  }
  error(message: string, trace: string) {
    super.error(message, trace);
    //print on tracer too
    const traces = JSON.stringify({message, trace});
    tracer.local(traces, () =>{})
  }
  log(message: string) {
    super.log(message);
    //print on tracer too
    const trace = JSON.stringify(message);
    tracer.local(trace,() =>{})
  }
  warn(message: string) {
    super.warn(message);
    //print on tracer too
    const trace = JSON.stringify(message);
    tracer.local(trace,() =>{})
  }
  debug(message: string) {
    super.debug(message);
    //print on tracer too
    const trace = JSON.stringify(message);
    tracer.local(trace,() =>{})
  }
  verbose(message: string) {
    super.verbose(message);
    //print on tracer too
    const trace = JSON.stringify(message);
    tracer.local(trace,() =>{})
  }
}

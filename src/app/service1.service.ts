import { Injectable } from '@angular/core';
import {
  AccessMethod,
  AccessAllMethods 
} from './access.decorator';

@Injectable({
  providedIn: 'root'
})
@AccessAllMethods('servicio1')
export class Service1Service {

  constructor() { }

  @AccessMethod('servicio1.info')
  info() {
    return 'this is the info from service1'
  }

  @AccessMethod('servicio1.otraInfo')
  otraInfo() {
    return 'otra Info funciona'
  }

  @AccessMethod('servicio1.otraInfo2')
  otraInfo2() {
    return 'otra Info funciona'
  }
}

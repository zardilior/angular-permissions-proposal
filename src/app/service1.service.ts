import { Injectable } from '@angular/core';
import { AccessMethod } from './access.decorator';

@Injectable({
  providedIn: 'root'
})
export class Service1Service {

  constructor() { }

  @AccessMethod('servicio1')
  info() {
    return 'this is the info from service1'
  }
}

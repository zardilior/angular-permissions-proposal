import { Injectable } from '@angular/core';
import { AccessAllMethods } from './access.decorator';

@Injectable({
  providedIn: 'root'
})
@AccessAllMethods('servicio2')
export class Service2Service {

  constructor() { }
  info() {
    return 'this is the info from service2'
  }
}

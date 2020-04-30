import { Injectable } from '@angular/core';
import { AccessAllMethods } from './access.decorator';

@Injectable({
  providedIn: 'root'
})
@AccessAllMethods('servicio3')
export class Service3Service {

  constructor() { }
  info() {
    return 'this is the info from service3'
  }
}

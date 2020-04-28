import { Injectable } from '@nestjs/common';
import {
  AccessMethod,
  AccessAllMethods
} from '../access.decorator'

@Injectable()
@AccessAllMethods('service1')
export class Service1Service {
  @AccessMethod('service1.index')
  index() {
    return 'index1';
  }
  @AccessMethod('service1.indice')
  indice() {
    return 'indice1';
  }
}

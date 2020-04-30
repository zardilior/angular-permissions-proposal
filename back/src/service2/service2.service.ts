import { Injectable } from '@nestjs/common';
import { AccessAllMethods } from '../access.decorator';

@Injectable()
@AccessAllMethods('service2')
export class Service2Service {
  index():string {
    return 'index';
  }
}

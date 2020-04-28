import { Injectable } from '@nestjs/common';

@Injectable()
@AccessAllMethods('service2')
export class Service2Service {

}

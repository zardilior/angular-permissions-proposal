import { 
  Controller,
  Get, 
  Post 
} from '@nestjs/common';
import {
  AccessMethod,
  AccessAllMethods
} from '../access.decorator'

import { Service1Service } from '../service1/service1.service'

@Controller('controlador1')
export class Controlador1Controller {
  constructor(
    private service1:Service1Service
  ) {
  }

  @Get('/')
  index(): string {
    return this.service1.index()
  }

  @Get('indice')
  indice(): string {
    return this.service1.indice()
  }

}

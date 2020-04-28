import {
  Controller ,
  Get
} from '@nestjs/common';

@Controller('controlador2')
export class Controlador2Controller {
  constructor(
    private service2:Service2Service
  ) {
  }
  @Get('/')
  index(): string {
    return this.service2.index()
  }
}

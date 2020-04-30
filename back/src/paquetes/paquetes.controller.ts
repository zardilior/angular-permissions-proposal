import { 
  Controller,
  Get,
  Post,
  Delete,
  ValidationPipe,
  UsePipes,
  Body,
  Param,
} from '@nestjs/common';
import { PaquetesService } from './paquetes.service';
import { Paquete } from './paquetes.class';


@Controller('paquetes')
@UsePipes(new ValidationPipe())
export class PaquetesController {
  constructor(
    private service: PaquetesService
  ){
  }

  @Get('/')
  getAll(): Promise<Paquete[]> {
    return this.service.getAll()  
  }
  @Post('/')
  create(@Body() paquetes:Paquete) {
    return this.service.create(paquetes)  
  }
  @Delete('/:id')
  remove(@Param('id') id:number) {
    return this.service.remove(id)  
  }
}

import { Test, TestingModule } from '@nestjs/testing';
import { Controlador2Controller } from './controlador2.controller';

describe('Controlador2 Controller', () => {
  let controller: Controlador2Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Controlador2Controller],
    }).compile();

    controller = module.get<Controlador2Controller>(Controlador2Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

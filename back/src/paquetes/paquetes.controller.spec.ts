import { Test, TestingModule } from '@nestjs/testing';
import { PaquetesController } from './paquetes.controller';

describe('Paquetes Controller', () => {
  let controller: PaquetesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PaquetesController],
    }).compile();

    controller = module.get<PaquetesController>(PaquetesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

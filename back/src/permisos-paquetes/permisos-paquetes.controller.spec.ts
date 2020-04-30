import { Test, TestingModule } from '@nestjs/testing';
import { PermisosPaquetesController } from './permisos-paquetes.controller';

describe('PermisosPaquetes Controller', () => {
  let controller: PermisosPaquetesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PermisosPaquetesController],
    }).compile();

    controller = module.get<PermisosPaquetesController>(PermisosPaquetesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

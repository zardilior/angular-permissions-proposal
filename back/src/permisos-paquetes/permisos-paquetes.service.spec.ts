import { Test, TestingModule } from '@nestjs/testing';
import { PermisosPaquetesService } from './permisos-paquetes.service';

describe('PermisosPaquetesService', () => {
  let service: PermisosPaquetesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PermisosPaquetesService],
    }).compile();

    service = module.get<PermisosPaquetesService>(PermisosPaquetesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

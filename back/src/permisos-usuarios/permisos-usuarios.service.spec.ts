import { Test, TestingModule } from '@nestjs/testing';
import { PermisosUsuariosService } from './permisos-usuarios.service';

describe('PermisosUsuariosService', () => {
  let service: PermisosUsuariosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PermisosUsuariosService],
    }).compile();

    service = module.get<PermisosUsuariosService>(PermisosUsuariosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

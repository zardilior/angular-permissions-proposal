import { Test, TestingModule } from '@nestjs/testing';
import { PermisosUsuariosController } from './permisos-usuarios.controller';

describe('PermisosUsuarios Controller', () => {
  let controller: PermisosUsuariosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PermisosUsuariosController],
    }).compile();

    controller = module.get<PermisosUsuariosController>(PermisosUsuariosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

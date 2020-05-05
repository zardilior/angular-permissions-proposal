import { TestBed } from '@angular/core/testing';

import { OverridePermisosService } from './override-permisos.service';

describe('OverridePermisosService', () => {
  let service: OverridePermisosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OverridePermisosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

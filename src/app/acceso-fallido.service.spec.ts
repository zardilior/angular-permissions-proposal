import { TestBed } from '@angular/core/testing';

import { AccesoFallidoService } from './acceso-fallido.service';

describe('AccesoFallidoService', () => {
  let service: AccesoFallidoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccesoFallidoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

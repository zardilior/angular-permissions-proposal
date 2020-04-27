import { TestBed } from '@angular/core/testing';

import { MiInfoService } from './mi-info.service';

describe('MiInfoService', () => {
  let service: MiInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MiInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

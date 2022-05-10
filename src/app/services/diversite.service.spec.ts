import { TestBed } from '@angular/core/testing';

import { DiversiteService } from './diversite.service';

describe('DiversiteService', () => {
  let service: DiversiteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DiversiteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { AdminprovinceService } from './adminprovince.service';

describe('AdminprovinceService', () => {
  let service: AdminprovinceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminprovinceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { AdminhotelService } from './adminhotel.service';

describe('AdminhotelService', () => {
  let service: AdminhotelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminhotelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

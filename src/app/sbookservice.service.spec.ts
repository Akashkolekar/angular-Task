import { TestBed } from '@angular/core/testing';

import { SbookserviceService } from './sbookservice.service';

describe('SbookserviceService', () => {
  let service: SbookserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SbookserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

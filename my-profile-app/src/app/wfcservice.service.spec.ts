import { TestBed } from '@angular/core/testing';

import { WFCserviceService } from './wfcservice.service';

describe('WFCserviceService', () => {
  let service: WFCserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WFCserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { MoniService } from './moni-service';

describe('MoniService', () => {
  let service: MoniService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoniService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

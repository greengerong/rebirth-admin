import { TestBed, inject } from '@angular/core/testing';

import { GuidService } from './guid.service';

describe('GuidService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GuidService]
    });
  });

  it('should be created', inject([GuidService], (service: GuidService) => {
    expect(service).toBeTruthy();
  }));
});

import { TestBed, inject } from '@angular/core/testing';

import { GuidService } from './guid.service';
import { TestBedUtils } from '../../../test-utils/test-bed-utils';

describe('GuidService', () => {

  beforeEach(() => {
    TestBedUtils.configureTestingModule({
      providers: [GuidService]
    });
  });

  it('should be created', inject([GuidService], (service: GuidService) => {

    expect(service.newId()).toBeDefined();
  }));
});

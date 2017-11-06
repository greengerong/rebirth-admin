import { inject } from '@angular/core/testing';

import { GuidService } from './guid.service';
import { TestBedUtils } from '../../../test-utils/test-bed-utils';

describe('GuidService', () => {

  beforeEach(() => {
    TestBedUtils.configureTestingModule({
      providers: [GuidService]
    });
  });

  it('should generate a new id', inject([GuidService], (service: GuidService) => {
    expect(service.newId()).toBeDefined();
  }));

  it('should generate different id', inject([GuidService], (service: GuidService) => {
    expect(service.newId()).not.toEqual(service.newId());
  }));

});

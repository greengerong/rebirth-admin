import { inject } from '@angular/core/testing';
import { ReStorageService } from './storage.service';
import { TestBedUtils } from '../../../test-utils/test-bed-utils';

describe('ReStorageService', () => {
  beforeEach(() => {
    TestBedUtils.configureTestingModule({
      providers: [ReStorageService]
    });
  });

  it('should storage data', inject([ReStorageService],
    (service: ReStorageService) => {
      const key = 'key';
      const value = { test: true };
      service.save(key, value);
      expect(service.get<any>(key).test).toBeTruthy();
      service.remove(key);
      service.clear();
    }));
});

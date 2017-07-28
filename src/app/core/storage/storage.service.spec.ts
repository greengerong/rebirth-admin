import { inject } from '@angular/core/testing';
import { ReStorageService } from './storage.service';
import { TestBedUtils } from '../../../test-utils/test-bed-utils';
import { StorageService } from 'rebirth-storage';


describe('ReStorageService', () => {
  beforeEach(() => {
    TestBedUtils.configureTestingModule({
      providers: [ReStorageService]
    });
  });

  it('should storage data', inject([ReStorageService, StorageService],
    (service: ReStorageService, storageService: StorageService) => {
      const key = 'key';
      const value = { test: true };
      storageService.put = jasmine.createSpy('put', () => null);

      service.save(key, value);

      expect(storageService.put).toHaveBeenCalled();

      service.remove(key);
      service.clear();
    }));
});

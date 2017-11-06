import { inject } from '@angular/core/testing';

import { TestBedUtils } from '../../../test-utils/test-bed-utils';
import { LoadingService } from './loading.service';
import { OverlayService } from 'rebirth-ng';

describe('LoadingService', () => {
  const overlayService = jasmine.createSpyObj('overlayService', ['open', 'close']);

  beforeEach(() => {
    TestBedUtils.configureTestingModule({
      providers: [
        LoadingService,
        {
          provide: OverlayService,
          useValue: overlayService
        }
      ]
    });
  });

  it('should show overlay', inject([LoadingService], (service: LoadingService) => {
    return service.show().then(() => expect(overlayService.open).toHaveBeenCalled());
  }));

  it('should hide overlay', inject([LoadingService], (service: LoadingService) => {
    return service.hide().then(() => expect(overlayService.close).toHaveBeenCalled());
  }));

});

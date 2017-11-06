import { Injectable } from '@angular/core';
import { OverlayService } from 'rebirth-ng';

@Injectable()
export class LoadingService {

  constructor(private overlayService: OverlayService) {

  }

  show() {
    return new Promise<LoadingService>((resolve => {
      setTimeout(() => {
        this.overlayService.open({
          html: `<div class="loading"></div>`
        });
        resolve(this);
      });
    }));
  }

  hide() {
    return new Promise<LoadingService>((resolve => {
      setTimeout(() => {
        this.overlayService.close();
        resolve(this);
      });
    }));
  }
}

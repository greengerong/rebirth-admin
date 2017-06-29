import { Injectable } from '@angular/core';
import { OverlayService } from 'rebirth-ng';

@Injectable()
export class LoadingService {

  constructor(private overlayService: OverlayService) {

  }

  show() {
    this.overlayService.open({
      html: `<div class="loading"></div>`
    });
  }

  hide() {
    this.overlayService.close();
  }
}

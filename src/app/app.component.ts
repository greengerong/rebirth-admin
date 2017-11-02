import { Component, ViewContainerRef } from '@angular/core';
import { environment } from '../environments/environment';
import { RebirthHttpProvider } from 'rebirth-http';
import { RebirthNGConfig } from 'rebirth-ng';
import { LoadingService } from './core';
import 'rxjs/add/operator/do';

@Component({
  selector: 'app-root',
  template: `
    <div class="root-router-outlet">
      <router-outlet></router-outlet>
    </div>
    <app-page-footer></app-page-footer>

  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private rebirthNGConfig: RebirthNGConfig,
              private viewContainerRef: ViewContainerRef,
              private loadingService: LoadingService,
              private rebirthHttpProvider: RebirthHttpProvider) {

    this.applicationSetup();
  }

  private applicationSetup() {
    this.rebirthNGConfig.rootContainer = this.viewContainerRef; // this.rebirthNGConfig.extend(REBIRTH_UI_I18N_ZHCN); i18n
    this.apiSetup();
  }

  private apiSetup() {
    this.rebirthHttpProvider
      .baseUrl(environment.api.host)
      .addInterceptor({
        request: () => this.loadingService.show(),
        response: () => this.loadingService.hide()
      });
  }
}

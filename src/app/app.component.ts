import { Component, ViewContainerRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../environments/environment.prod';
import { RebirthHttpProvider } from 'rebirth-http';
import { RebirthNGConfig } from 'rebirth-ng';
import { LoadingService } from './core';
import 'rxjs/add/operator/do';

@Component({
  selector: 'app-root',
  template: `
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private rebirthNGConfig: RebirthNGConfig,
              private viewContainerRef: ViewContainerRef,
              private router: ActivatedRoute,
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
      .json()
      .addInterceptor({
        request: request => {
          console.log('interceptor(request)', request);
        },
        response: (stream) => stream.map(response => {
          console.log('interceptor(response)', response);
          return response;
        })
      })
      .addInterceptor({
        request: () => {
          this.loadingService.show();
        },
        response: (stream) => (<any>stream).do(() => null, () => this.loadingService.hide(), () => this.loadingService.hide())
      });
  }
}

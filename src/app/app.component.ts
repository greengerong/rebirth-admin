import { Component, ViewContainerRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../environments/environment.prod';
import { RebirthHttpProvider } from 'rebirth-http';
import { RebirthNGConfig } from 'rebirth-ng';

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
          // loadService.show();
        },
        // response: (stream) => (<any>stream).do(() => null, () => loadService.hide(), () => loadService.hide())
      });
  }
}

import { Component, ViewContainerRef, ElementRef, Renderer2 } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RebirthUIConfig } from 'ng4-rebirth-ui';
import { ThemeService } from './core';
import { environment } from '../environments/environment.prod';
import { RebirthHttpProvider } from 'rebirth-http';

@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private rebirthConfig: RebirthUIConfig,
              private viewContainerRef: ViewContainerRef,
              private router: ActivatedRoute,
              private themeService: ThemeService,
              private renderer: Renderer2,
              private elementRef: ElementRef,
              private rebirthHttpProvider: RebirthHttpProvider) {

    this.applicationSetup();
  }

  private applicationSetup() {
    this.rebirthConfig.rootContainer = this.viewContainerRef; // this.rebirthConfig.extend(REBIRTH_UI_I18N_ZHCN); i18n
    this.themeSetup();
    this.apiSetup();
  }

  private themeSetup() {
    this.router.queryParams.subscribe((params: any) => {
      this.themeService.setupTheme(params.theme, this.renderer, this.elementRef);
    });
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

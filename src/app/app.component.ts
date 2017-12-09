import { Component, ViewContainerRef } from '@angular/core';
import { environment } from '../environments/environment';
import { RebirthHttpProvider } from 'rebirth-http';
import { RebirthNGConfig } from 'rebirth-ng';
import 'rxjs/add/operator/do';
import { AuthorizationService } from 'rebirth-permission';
import { LoadingService } from './core/loading/loading.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { ignoreLoading } from './core/loading/loading';
import { TitleService } from './core/title/title.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(
    private rebirthNGConfig: RebirthNGConfig,
    private authorizationService: AuthorizationService,
    private viewContainerRef: ViewContainerRef,
    private loadingService: LoadingService,
    private router: Router,
    private rebirthHttpProvider: RebirthHttpProvider,
    private titleService: TitleService,
  ) {
    this.applicationSetup();
  }

  private applicationSetup() {
    this.rebirthNGConfig.rootContainer = this.viewContainerRef; // this.rebirthNGConfig.extend(REBIRTH_UI_I18N_ZHCN); i18n
    this.titleService.register();
    this.apiSetup();
  }

  private apiSetup() {
    this.rebirthHttpProvider
      .baseUrl(environment.api.host)
      .addInterceptor({
        request: request => {
          if (ignoreLoading(request)) {
            return;
          }
          this.loadingService.show();
        },
        response: () => {
          this.loadingService.hide();
        },
      })
      .addInterceptor({
        request: request => {
          const currentUser = this.authorizationService.getCurrentUser();
          if (currentUser) {
            return request.clone({
              setHeaders: { Authorization: `Bearer ${currentUser.token}` },
            });
          }
        },
      })
      .addResponseErrorInterceptor((res: HttpErrorResponse) => {
        if (res.status && [401, 403].indexOf(res.status) !== -1) {
          this.router.navigateByUrl('/login');
        }
      });
  }
}

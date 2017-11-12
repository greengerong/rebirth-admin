import { TestBed, async, inject } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { RebirthNGConfig } from 'rebirth-ng';
import { By } from '@angular/platform-browser';
import { TestBedUtils } from '../test-utils/test-bed-utils';
import { RebirthHttpProvider } from 'rebirth-http';
import { LoadingService } from './core/loading/loading.service';
import { AuthorizationService } from 'rebirth-permission';
import {
  HttpErrorResponse,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Router } from '@angular/router';

describe('AppComponent', () => {
  let fixture;
  beforeEach(
    async(() => {
      TestBedUtils.configureTestingModule({
        declarations: [AppComponent],
        providers: [
          {
            provide: LoadingService,
            useValue: jasmine.createSpyObj('loadingService', ['show', 'hide']),
          },
          {
            provide: AuthorizationService,
            useValue: jasmine.createSpyObj('authorizationService', [
              'getCurrentUser',
              'setStorageType',
            ]),
          },
        ],
      }).compileComponents();

      fixture = TestBed.createComponent(AppComponent);
      fixture.detectChanges();
    }),
  );

  beforeEach(
    inject([Router], (router: Router) => {
      router.navigateByUrl = jasmine.createSpy('router');
    }),
  );

  it(
    'should create the app',
    async(() => {
      const app = fixture.debugElement.componentInstance;
      expect(app).toBeTruthy();
    }),
  );

  it(
    `should setup router outlet`,
    async(() => {
      expect(
        fixture.debugElement.query(By.css('router-outlet')).nativeElement,
      ).toBeDefined();
    }),
  );

  it(
    `should setup @Rebirth/NG`,
    async(
      inject([RebirthNGConfig], (rebirthNGConfig: RebirthNGConfig) => {
        expect(rebirthNGConfig.rootContainer).toBeDefined();
      }),
    ),
  );

  it(
    `should setup @Rebirth/Http`,
    async(
      inject(
        [RebirthHttpProvider],
        (rebirthHttpProvider: RebirthHttpProvider) => {
          expect(rebirthHttpProvider.getInterceptors().length).toBeGreaterThan(
            0,
          );
        },
      ),
    ),
  );

  it(
    `should setup http request interceptors`,
    async(
      inject(
        [RebirthHttpProvider, LoadingService, AuthorizationService],
        (
          rebirthHttpProvider: RebirthHttpProvider,
          loadingService: LoadingService,
          authorizationService: AuthorizationService,
        ) => {
          const request = new HttpRequest<any>('GET', 'url');
          rebirthHttpProvider
            .getInterceptors()
            .filter(item => item.request)
            .reduce((req, item) => item.request(req) || req, request);

          expect(loadingService.show).toHaveBeenCalled();
          expect(authorizationService.getCurrentUser).toHaveBeenCalled();
        },
      ),
    ),
  );

  it(
    `should setup Authorization token`,
    async(
      inject(
        [RebirthHttpProvider, LoadingService, AuthorizationService],
        (
          rebirthHttpProvider: RebirthHttpProvider,
          loadingService: LoadingService,
          authorizationService: AuthorizationService,
        ) => {
          const request = new HttpRequest<any>('GET', 'url');
          const currentUser = { token: 'token' };
          (authorizationService.getCurrentUser as any).and.returnValue(
            currentUser,
          );
          const result = rebirthHttpProvider
            .getInterceptors()
            .filter(item => item.request)
            .reduce((req, item) => item.request(req) || req, request);

          expect(loadingService.show).toHaveBeenCalled();
          expect(authorizationService.getCurrentUser).toHaveBeenCalled();
          expect(result.headers.get('Authorization')).toEqual(
            `Bearer ${currentUser.token}`,
          );
        },
      ),
    ),
  );

  it(
    `should setup http response interceptors`,
    async(
      inject(
        [RebirthHttpProvider, LoadingService],
        (
          rebirthHttpProvider: RebirthHttpProvider,
          loadingService: LoadingService,
        ) => {
          const response = new HttpResponse<any>({ status: 200 });
          rebirthHttpProvider
            .getInterceptors()
            .filter(item => item.response)
            .reverse()
            .reduce((res, item) => item.response(res) || res, response);

          expect(loadingService.hide).toHaveBeenCalled();
        },
      ),
    ),
  );

  it(
    `should redirect to login when auth error`,
    async(
      inject(
        [RebirthHttpProvider, Router],
        (rebirthHttpProvider: RebirthHttpProvider, router: Router) => {
          const response = new HttpErrorResponse({ status: 401 });
          rebirthHttpProvider
            .getInterceptors()
            .filter(item => item.response)
            .reverse()
            .reduce((res, item) => item.response(res) || res, response);

          expect(router.navigateByUrl).toHaveBeenCalledWith('/login');
        },
      ),
    ),
  );

  it(
    `should not redirect to login when not auth error`,
    async(
      inject(
        [RebirthHttpProvider, Router],
        (rebirthHttpProvider: RebirthHttpProvider, router: Router) => {
          const response = new HttpErrorResponse({ status: 400 });
          rebirthHttpProvider
            .getInterceptors()
            .filter(item => item.response)
            .reverse()
            .reduce((res, item) => item.response(res) || res, response);

          expect(router.navigateByUrl).not.toHaveBeenCalled();
        },
      ),
    ),
  );
});

import { NgModule, Optional, SkipSelf } from '@angular/core';
import { RebirthHttpModule } from 'rebirth-http';
import { RebirthStorageModule, StorageType } from 'rebirth-storage';
import { RebirthEventSourceModule } from 'rebirth-event-source';
import { RebirthNGModule } from 'rebirth-ng';
import { AuthorizationService, RebirthPermissionModule } from 'rebirth-permission';
import { LoadingService } from './loading';
import { GuidService } from './guid';
import { ReStorageService } from './storage/storage.service';
import { LoginService } from './login/login.service';

@NgModule({
  imports: [
    RebirthHttpModule,
    RebirthStorageModule,
    RebirthEventSourceModule,
    RebirthNGModule.forRoot(),
    RebirthPermissionModule.forRoot({ loginPage: '/public/login' }),
  ],
  providers: [
    LoadingService,
    GuidService,
    LoginService,
    ReStorageService
  ],
  exports: [
  ]
})
export class CoreModule {

  constructor(@Optional() @SkipSelf() parentModule: CoreModule, authorizationService: AuthorizationService) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import it in the AppModule only');
    }
    // authorization storage way(sessionStorage, localStorage, memory)
    authorizationService.setStorageType(StorageType.sessionStorage);
  }
}

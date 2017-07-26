import { NgModule, SkipSelf, Optional } from '@angular/core';
import { RebirthHttpModule } from 'rebirth-http';
import { RebirthStorageModule, StorageType } from 'rebirth-storage';
import { HttpModule } from '@angular/http';
import { RebirthEventSourceModule } from 'rebirth-event-source';
import { RebirthNGModule } from 'rebirth-ng';
import { AuthorizationService, RebirthPermissionModule } from 'rebirth-permission';
import { LoadingService } from './loading';
import { GuidService } from './guid';

@NgModule({
  imports: [
    HttpModule,
    RebirthHttpModule,
    RebirthStorageModule,
    RebirthEventSourceModule,
    RebirthNGModule.forRoot(),
    RebirthPermissionModule.forRoot({ loginPage: '/public/login' }),
  ],
  providers: [
    LoadingService,
    GuidService
  ],
  exports: [
    RebirthHttpModule,
    RebirthStorageModule,
    RebirthEventSourceModule,
  ]
})
export class CoreModule {

  constructor(authorizationService: AuthorizationService, @Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }

    // authorization storage way(sessionStorage, localStorage, memory)
    authorizationService.setStorageType(StorageType.sessionStorage);
  }
}

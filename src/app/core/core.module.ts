import { NgModule } from '@angular/core';
import { RebirthHttpModule } from 'rebirth-http';
import { RebirthStorageModule, StorageType } from 'rebirth-storage';
import { RebirthEventSourceModule } from 'rebirth-event-source';
import { RebirthNGModule } from 'rebirth-ng';
import { AuthorizationService, RebirthPermissionModule } from 'rebirth-permission';
import { LoadingService } from './loading';
import { GuidService } from './guid';
import { ReStorageService } from './storage/storage.service';

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
    ReStorageService
  ],
  exports: [
    RebirthHttpModule,
    RebirthStorageModule,
    RebirthEventSourceModule,
  ]
})
export class CoreModule {

  constructor(authorizationService: AuthorizationService) {
    // authorization storage way(sessionStorage, localStorage, memory)
    authorizationService.setStorageType(StorageType.sessionStorage);
  }
}

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ManageAppComponent } from './manage-app.component';
import { SharedModule } from '../shared/shared.module';
import { ROUTER_CONFIG } from './manage-app.routes';
import { AuthorizationService, RebirthPermissionModule } from 'rebirth-permission';
import { StorageType } from 'rebirth-storage';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(ROUTER_CONFIG),
    RebirthPermissionModule.forRoot({ loginPage: '/public/login' }),
  ],
  exports: [],
  declarations: [
    ManageAppComponent,
  ],
  providers: [],
})
export class ManageAppModule {

  constructor(authorizationService: AuthorizationService) {
    // authorization storage way(sessionStorage, localStorage, memory)
    authorizationService.setStorageType(StorageType.sessionStorage);
  }
}

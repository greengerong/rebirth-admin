import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ManageAppComponent } from './manage-app.component';
import { SharedModule } from '../shared/shared.module';
import { ROUTER_CONFIG } from './manage-app.routes';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(ROUTER_CONFIG),
  ],
  exports: [],
  declarations: [
    ManageAppComponent,
  ],
  providers: [],
})
export class ManageAppModule {

}

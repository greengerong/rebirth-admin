import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ManageAppComponent } from './manage-app.component';
import { SharedModule } from '../shared/shared.module';
import { ROUTER_CONFIG } from './manage-app.routes';
import { OrderMockComponent } from './order-mock/order-mock.component';
import { UserMockComponent } from './user-mock/user-mock.component';
import { MenuService } from './menu.service';

@NgModule({
  imports: [SharedModule, RouterModule.forChild(ROUTER_CONFIG)],
  exports: [],
  declarations: [ManageAppComponent, OrderMockComponent, UserMockComponent],
  providers: [MenuService],
})
export class ManageAppModule {}

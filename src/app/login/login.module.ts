import { NgModule } from '@angular/core';

import { LoginComponent } from './login.component';
import { SharedModule } from '../shared/shared.module';
import { CoreModule } from '../core/core.module';
import { RouterModule } from '@angular/router';
import { ROUTER_CONFIG } from './login.routes';
import { LoginService } from './login.service';

@NgModule({
  imports: [
    SharedModule,
    CoreModule,
    RouterModule.forChild(ROUTER_CONFIG)
  ],
  exports: [],
  declarations: [LoginComponent],
  providers: [
    LoginService
  ],
})
export class LoginModule {
}

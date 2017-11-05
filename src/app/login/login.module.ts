import { NgModule } from '@angular/core';

import { LoginComponent } from './login.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { ROUTER_CONFIG } from './login.routes';
import { HttpHandler } from '@angular/common/http';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(ROUTER_CONFIG)
  ],
  exports: [],
  declarations: [LoginComponent],
  providers: [],
})
export class LoginModule {
  constructor(handler: HttpHandler) {
    console.log(handler, 'LoginModule');
  }
}

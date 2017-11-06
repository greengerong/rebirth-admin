import { Inject, NgModule } from '@angular/core';

import { LoginComponent } from './login.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { ROUTER_CONFIG } from './login.routes';
import { HTTP_INTERCEPTORS, HttpInterceptor } from '@angular/common/http';

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
  constructor(@Inject(HTTP_INTERCEPTORS) httpInterceptor: HttpInterceptor[]) {
    console.log(httpInterceptor, 'LoginModule');
  }
}

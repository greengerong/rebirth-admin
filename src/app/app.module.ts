import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Inject } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CoreModule } from './core';
import { SharedModule } from './shared';
import { AppComponent } from './app.component';
import { ROUTER_CONFIG } from './app.routes';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, HttpInterceptor } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    SharedModule,
    RouterModule.forRoot(ROUTER_CONFIG)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(@Inject(HTTP_INTERCEPTORS) httpInterceptor: HttpInterceptor[]) {
    console.log(httpInterceptor, 'AppModule');
  }
}

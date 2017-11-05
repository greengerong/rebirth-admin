import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CoreModule } from './core';
import { SharedModule } from './shared';
import { AppComponent } from './app.component';
import { ROUTER_CONFIG } from './app.routes';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
}

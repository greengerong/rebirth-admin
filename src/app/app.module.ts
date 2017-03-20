import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { RebirthUIModule } from 'ng4-rebirth-ui';

import { CoreModule } from './core';
import { SharedModule } from './shared';
import { AppComponent } from './app.component';
import { RebirthChartModule } from 'rebirth-chart';
import { ROUTER_CONFIG } from './app.routes';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTER_CONFIG),
    RebirthUIModule.forRoot(),
    RebirthChartModule.forRoot(),
    CoreModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

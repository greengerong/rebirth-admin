import { NgModule, SkipSelf, Optional } from '@angular/core';
import { RebirthHttpModule } from 'rebirth-http';
import { RebirthStorageModule } from 'rebirth-storage';
import { HttpModule } from '@angular/http';
import { RebirthEventSourceModule } from 'rebirth-event-source';
import { RebirthChartModule } from 'rebirth-chart';
import { RebirthNGModule } from 'rebirth-ng';

@NgModule({
  imports: [
    HttpModule,
    RebirthHttpModule,
    RebirthStorageModule,
    RebirthEventSourceModule,
    RebirthNGModule.forRoot(),
    RebirthChartModule.forRoot(),
  ],
  providers: [],
  exports: [
    RebirthHttpModule,
    RebirthStorageModule,
    RebirthEventSourceModule
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}

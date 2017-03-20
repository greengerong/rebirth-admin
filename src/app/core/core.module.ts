import { NgModule, SkipSelf, Optional } from '@angular/core';
import { RebirthHttpModule } from 'rebirth-http';
import { RebirthStorageModule } from 'rebirth-storage';
import { HttpModule } from '@angular/http';
import { RebirthEventSourceModule } from 'rebirth-event-source';
import { RouteReuseStrategy } from '@angular/router';
import { ThemeService } from './theme';


@NgModule({
  imports: [
    HttpModule,
    RebirthHttpModule,
    RebirthStorageModule,
    RebirthEventSourceModule
  ],
  providers: [
    ThemeService
    // { provide: RouteReuseStrategy, useClass: RebirthRouterReuseStrategy }
  ],
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

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RebirthChartModule } from 'rebirth-chart';
import { PageFooterComponent } from './page-footer';
import { PageHeaderComponent } from './page-header/page-header.component';
import { RebirthNGModule } from 'rebirth-ng';
import { RebirthPermissionModule } from 'rebirth-permission';
import { MenuBarService } from './menu-bar/menu-bar.service';
import { RouterModule } from '@angular/router';
import { InlineSVGModule } from 'ng-inline-svg';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { FieldErrorComponent } from './field-error/field-error.component';

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    ReactiveFormsModule,
    HttpModule,
    RebirthNGModule,
    RebirthPermissionModule,
    RebirthChartModule,
    InlineSVGModule,
  ],
  declarations: [
    PageFooterComponent,
    PageHeaderComponent,
    MenuBarComponent,
    PageHeaderComponent,
    FieldErrorComponent
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    HttpModule,
    RebirthNGModule,
    RebirthPermissionModule,
    RebirthChartModule,
    PageFooterComponent,
    PageHeaderComponent,
    MenuBarComponent,
  ],
  providers: [
    MenuBarService,
  ]
})
export class SharedModule {

}

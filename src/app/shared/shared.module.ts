import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { PageFooterComponent } from './page-footer';
import { PageHeaderComponent } from './page-header/page-header.component';
import { RebirthNGModule } from 'rebirth-ng';
import { RebirthPermissionModule } from 'rebirth-permission';
import { MenuBarService } from './menu-bar/menu-bar.service';
import { RouterModule } from '@angular/router';
import { InlineSVGModule } from 'ng-inline-svg';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { CollapseDirective } from './collapse/collapse.directive';
import { FieldErrorComponent } from './field-error/field-error.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    RebirthNGModule,
    RebirthPermissionModule,
    InlineSVGModule,
  ],
  declarations: [
    PageFooterComponent,
    CollapseDirective,
    MenuBarComponent,
    PageHeaderComponent,
    FieldErrorComponent
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    RebirthNGModule,
    RebirthPermissionModule,
    PageFooterComponent,
    PageHeaderComponent,
    CollapseDirective,
    MenuBarComponent,
  ],
  providers: [
    MenuBarService,
  ]
})
export class SharedModule {

}

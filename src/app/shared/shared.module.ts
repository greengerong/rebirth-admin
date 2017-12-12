import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PageHeaderComponent } from './page-header/page-header.component';
import { RebirthNGModule } from 'rebirth-ng';
import { RebirthPermissionModule } from 'rebirth-permission';
import { RouterModule } from '@angular/router';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { CollapseDirective } from './collapse/collapse.directive';
import { FieldErrorComponent } from './field-error/field-error.component';
import { PageFooterComponent } from './page-footer/page-footer.component';
import { MessagePipe } from './message/message.pipe';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    RebirthNGModule,
    RebirthPermissionModule,
  ],
  declarations: [
    PageFooterComponent,
    CollapseDirective,
    MenuBarComponent,
    PageHeaderComponent,
    FieldErrorComponent,
    MessagePipe,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RebirthNGModule,
    RebirthPermissionModule,
    PageFooterComponent,
    PageHeaderComponent,
    CollapseDirective,
    MenuBarComponent,
    FieldErrorComponent,
    MessagePipe,
  ],
  providers: [],
})
export class SharedModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RebirthUIModule } from 'ng4-rebirth-ui';
import { RebirthChartModule } from 'rebirth-chart';
import { PageFooterComponent } from './page-footer';
import { PageHeaderComponent } from './page-header/page-header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    // ReactiveFormsModule,
    HttpModule,
    RebirthUIModule,
    RebirthChartModule
  ],
  declarations: [
    PageFooterComponent,
    PageHeaderComponent
  ],
  exports: [
    CommonModule,
    FormsModule,
    HttpModule,
    RebirthUIModule,
    RebirthChartModule,
    PageFooterComponent,
    PageHeaderComponent
  ]
})
export class SharedModule {

}

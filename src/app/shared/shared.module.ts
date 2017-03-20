import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RebirthUIModule } from 'ng4-rebirth-ui';
import { RebirthChartModule } from 'rebirth-chart';
import { PageFooterComponent } from './page-footer';

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
    PageFooterComponent
  ],
  exports: [
    CommonModule,
    FormsModule,
    HttpModule,
    RebirthUIModule,
    RebirthChartModule,
    PageFooterComponent
  ]
})
export class SharedModule {

}

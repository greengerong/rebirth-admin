import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RebirthChartModule } from 'rebirth-chart';
import { PageFooterComponent } from './page-footer';
import { PageHeaderComponent } from './page-header/page-header.component';
import { RebirthNGModule } from 'rebirth-ng';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    // ReactiveFormsModule,
    HttpModule,
    RebirthNGModule,
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
    RebirthNGModule,
    RebirthChartModule,
    PageFooterComponent,
    PageHeaderComponent
  ]
})
export class SharedModule {

}

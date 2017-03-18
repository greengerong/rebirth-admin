import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    // ReactiveFormsModule,
    HttpModule,
  ],
  declarations: [],
  providers: [],
  exports: [
    CommonModule,
    FormsModule,
    HttpModule,
  ]
})
export class SharedModule {

}

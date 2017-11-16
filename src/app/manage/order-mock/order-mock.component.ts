import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-order-mock',
  templateUrl: './order-mock.component.html',
  styleUrls: ['./order-mock.component.scss'],
})
export class OrderMockComponent {
  model = {};
  heroForm: FormGroup;

  constructor(fb: FormBuilder) {
    this.heroForm = fb.group({
      name: ['', Validators.required],
    });
  }
}

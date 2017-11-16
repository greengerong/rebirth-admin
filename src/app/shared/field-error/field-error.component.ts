import {
  AfterViewInit,
  Component,
  Input,
  OnInit,
  Optional,
} from '@angular/core';
import {
  AbstractControl,
  FormGroup,
  FormGroupDirective,
  NgForm,
} from '@angular/forms';
import { ValidationService } from '../../core/validation/validation.service';

@Component({
  selector: 'app-field-error',
  templateUrl: './field-error.component.html',
  styleUrls: ['./field-error.component.scss'],
  exportAs: 'fieldError',
})
export class FieldErrorComponent implements OnInit {
  @Input() field: string;
  fromGroup: FormGroup;

  constructor(
    @Optional() private ngForm: NgForm,
    @Optional() private formGroupDirective: FormGroupDirective,
    private validationService: ValidationService,
  ) {}

  ngOnInit(): void {
    this.fromGroup = this.ngForm
      ? this.ngForm.form
      : this.formGroupDirective.form;
  }

  get invalid(): boolean {
    if (this.fromGroup) {
      const control = this.fromGroup.controls[this.field];
      return control ? control.touched && control.invalid : false;
    }
    return false;
  }

  getErrorMessage() {
    const control = this.fromGroup.controls[this.field];
    if (control && control.errors) {
      const key = Object.keys(control.errors)[0]; // only show first error.
      return this.validationService.getMessage(
        this.field,
        key,
        control.getError(key),
      );
    }
  }
}

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
  control: AbstractControl;
  status: string;
  invalid: boolean;

  constructor(
    @Optional() private ngForm: NgForm,
    @Optional() private formGroupDirective: FormGroupDirective,
    private validationService: ValidationService,
  ) {}

  // ngOnInit(): void {
  ngOnInit(): void {
    this.fromGroup = this.ngForm
      ? this.ngForm.form
      : this.formGroupDirective.form;
    this.control = this.fromGroup.controls[this.field];

    if (this.control) {
      this.control.statusChanges.subscribe(status => {
        this.status = status;
        this.invalid = this.control.touched && this.control.invalid;
      });
    }
  }

  getErrorMessage() {
    if (this.control && this.control.errors) {
      const key = Object.keys(this.control.errors)[0]; // only show first error.
      return this.validationService.getMessage(
        this.field,
        key,
        this.control.getError(key),
      );
    }
  }
}

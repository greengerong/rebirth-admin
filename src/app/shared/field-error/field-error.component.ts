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
import { MessageResolver } from '../../core/message/message-resolver.service';

@Component({
  selector: 'app-field-error',
  templateUrl: './field-error.component.html',
  styleUrls: ['./field-error.component.scss'],
  exportAs: 'fieldError',
})
export class FieldErrorComponent implements OnInit {
  @Input() field: string;
  @Input() label: string = null;
  fromGroup: FormGroup;

  constructor(
    @Optional() private ngForm: NgForm,
    @Optional() private formGroupDirective: FormGroupDirective,
    private messageResolver: MessageResolver,
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
      return this.messageResolver.getValidationMessage(this.field, key, {
        label: this.label || this.field,
        ...control.getError(key),
      });
    }
  }
}

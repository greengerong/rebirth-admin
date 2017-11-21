import {
  async,
  ComponentFixture,
  inject,
  TestBed,
} from '@angular/core/testing';
import {
  TestBedUtils,
  TestComponent,
} from '../../../test-utils/test-bed-utils';
import { FieldErrorComponent } from './field-error.component';
import { By } from '@angular/platform-browser';
import { FormBuilder, Validators } from '@angular/forms';

describe('FieldErrorComponent', () => {
  let fixture: ComponentFixture<TestComponent>;
  describe('ReactiveFormsModule', () => {
    beforeEach(
      async(() => {
        TestBedUtils.configureTestingModule({
          declarations: [],
        })
          .overrideComponent(TestComponent, {
            set: {
              template: `<form [formGroup]="props.loginForm">
                <input id="username" name="username" type="text" formControlName="username"/>
                <app-field-error field="username" label="用户名" #usernameField="fieldError"></app-field-error>
              </form>`,
            },
          })
          .compileComponents();
      }),
    );

    beforeEach(
      inject([FormBuilder], (fb: FormBuilder) => {
        fixture = TestBed.createComponent(TestComponent);
        fixture.componentInstance.props.loginForm = fb.group({
          username: ['', Validators.required],
        });
        fixture.detectChanges();
      }),
    );

    it(
      'should no error when untouched',
      async(() => {
        const $username = fixture.debugElement.query(By.css('#username'));
        TestBedUtils.input($username, 'username');

        const $fieldError = fixture.debugElement.query(
          By.directive(FieldErrorComponent),
        );

        fixture.detectChanges();
        expect($fieldError.nativeElement.textContent.trim()).toEqual('');
        expect($fieldError.componentInstance.invalid).toBeFalsy();
      }),
    );

    it(
      'should show error when touched & no input value',
      async(() => {
        const $fieldError = fixture.debugElement.query(
          By.directive(FieldErrorComponent),
        );

        $fieldError.componentInstance.fromGroup.controls.username.markAsTouched();
        fixture.detectChanges();
        expect($fieldError.nativeElement.textContent.trim()).toEqual(
          '用户名为必填字段',
        );
        expect($fieldError.componentInstance.invalid).toBeTruthy();
      }),
    );

    it(
      'should show error with field name when no label',
      async(() => {
        const $fieldError = fixture.debugElement.query(
          By.directive(FieldErrorComponent),
        );

        $fieldError.componentInstance.label = '';
        $fieldError.componentInstance.fromGroup.controls.username.markAsTouched();
        fixture.detectChanges();
        expect($fieldError.nativeElement.textContent.trim()).toEqual(
          'Username为必填字段',
        );
        expect($fieldError.componentInstance.invalid).toBeTruthy();
      }),
    );

    it(
      'should no error when touched & has input value',
      async(() => {
        const $username = fixture.debugElement.query(By.css('#username'));
        TestBedUtils.input($username, 'username');
        const $fieldError = fixture.debugElement.query(
          By.directive(FieldErrorComponent),
        );

        $fieldError.componentInstance.fromGroup.controls.username.markAsTouched();
        fixture.detectChanges();
        expect($fieldError.nativeElement.textContent.trim()).toEqual('');
        expect($fieldError.componentInstance.invalid).toBeFalsy();
      }),
    );
  });

  describe('FormsModule', () => {
    beforeEach(
      async(() => {
        TestBedUtils.configureTestingModule({
          declarations: [],
        })
          .overrideComponent(TestComponent, {
            set: {
              template: `<form>
                <input id="username" name="username" type="text" [(ngModel)]="props.username" required/>
                <app-field-error field="username" label="用户名" #usernameField="fieldError"></app-field-error>
              </form>`,
            },
          })
          .compileComponents();
      }),
    );

    beforeEach(
      inject([], () => {
        fixture = TestBed.createComponent(TestComponent);
        fixture.detectChanges();
      }),
    );

    it(
      'should get formGroup from NgForm Directive',
      async(() => {
        const $fieldError = fixture.debugElement.query(
          By.directive(FieldErrorComponent),
        );

        expect($fieldError.componentInstance.fromGroup).toBeDefined();
        expect($fieldError.componentInstance.invalid).toBeFalsy();
      }),
    );
  });

  describe('No FormControl register', () => {
    beforeEach(
      async(() => {
        TestBedUtils.configureTestingModule({
          declarations: [],
        })
          .overrideComponent(TestComponent, {
            set: {
              template: `<form>
                <app-field-error field="username" label="用户名" #usernameField="fieldError"></app-field-error>
              </form>`,
            },
          })
          .compileComponents();
      }),
    );

    beforeEach(
      inject([FormBuilder], (fb: FormBuilder) => {
        fixture = TestBed.createComponent(TestComponent);
        fixture.detectChanges();
      }),
    );

    it(
      'should no error when no form control register',
      async(() => {
        const $fieldError = fixture.debugElement.query(
          By.directive(FieldErrorComponent),
        );

        expect($fieldError.componentInstance.getErrorMessage()).toBeUndefined();
      }),
    );
  });
});

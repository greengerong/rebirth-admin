import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldErrorComponent } from './field-error.component';
import { TestBedUtils } from '../../../test-utils/test-bed-utils';

xdescribe('FieldErrorComponent', () => {
  let component: FieldErrorComponent;
  let fixture: ComponentFixture<FieldErrorComponent>;

  beforeEach(
    async(() => {
      TestBedUtils.configureTestingModule({}).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

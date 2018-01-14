import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestBedUtils } from '../../../test-utils/test-bed-utils';
import { UserMockComponent } from './user-mock.component';

describe('UserMockComponent', () => {
  let component: UserMockComponent;
  let fixture: ComponentFixture<UserMockComponent>;

  TestBedUtils.configureTestingModule({
    declarations: [UserMockComponent],
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserMockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

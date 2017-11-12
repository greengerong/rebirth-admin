import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMockComponent } from './user-mock.component';

describe('UserMockComponent', () => {
  let component: UserMockComponent;
  let fixture: ComponentFixture<UserMockComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [UserMockComponent],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(UserMockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

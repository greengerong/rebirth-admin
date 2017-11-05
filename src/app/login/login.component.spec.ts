import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { LoginService } from './login.service';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { TestBedUtils } from '../../test-utils/test-bed-utils';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBedUtils.configureTestingModule({
      imports: [RouterModule.forRoot([])],
      declarations: [LoginComponent],
      providers: [LoginService, { provide: APP_BASE_HREF, useValue: '/' }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

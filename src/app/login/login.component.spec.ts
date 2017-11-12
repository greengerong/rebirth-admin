import {
  async,
  ComponentFixture,
  inject,
  TestBed,
} from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { TestBedUtils } from '../../test-utils/test-bed-utils';
import { LoginModule } from './login.module';
import { By } from '@angular/platform-browser';
import { HttpTestingController } from '@angular/common/http/testing';
import { Router } from '@angular/router';

describe('LoginComponent', () => {
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(
    async(() => {
      TestBedUtils.configureTestingModule({
        imports: [LoginModule],
      }).compileComponents();
    }),
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    fixture.detectChanges();
  });

  it('should not login when validation error', () => {
    const $submit = fixture.debugElement.query(By.css('#submit'));
    expect($submit.properties.disabled).toBeTruthy();
  });

  it(
    'should login when validation success',
    inject(
      [HttpTestingController, Router],
      (httpMock: HttpTestingController, router: Router) => {
        router.navigateByUrl = jasmine.createSpy('navigateByUrl');
        const $submit = fixture.debugElement.query(By.css('#submit'));
        const $password = fixture.debugElement.query(By.css('#password'));
        const $username = fixture.debugElement.query(By.css('#username'));

        TestBedUtils.input($username, 'username');
        TestBedUtils.input($password, 'password');

        fixture.detectChanges();

        expect($submit.properties.disabled).toBeFalsy();

        $submit.nativeElement.click();

        const request = httpMock.expectOne('login');
        request.flush({});
        expect(router.navigateByUrl).toHaveBeenCalledWith('/manage/home');
      },
    ),
  );

  it(
    'should show error when login error',
    inject([HttpTestingController], (httpMock: HttpTestingController) => {
      const component = fixture.componentInstance;
      component.loginForm.setValue({
        username: 'username',
        password: 'password',
      });

      component.login();

      const request = httpMock.expectOne('login');
      request.error(null, { status: 400 });
      expect(component.showError).toBeTruthy();
    }),
  );

  it(
    'should not login when form is invalid',
    inject([HttpTestingController], (httpMock: HttpTestingController) => {
      const component = fixture.componentInstance;
      component.loginForm.setValue({ username: 'username', password: '' });
      fixture.detectChanges();

      component.login();

      const request = httpMock.match('login');
      expect(request.length).toEqual(0);
    }),
  );
});

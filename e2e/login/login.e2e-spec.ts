import { LoginPage } from './login.po';
import { browser } from 'protractor';

describe('rebirth-admin App', () => {
  let page: LoginPage;

  beforeEach(() => {
    page = new LoginPage().navigateTo();
  });

  it('should login with admin', () => {
    expect(page.canLogin()).toBeFalsy();

    page.username('admin').password('admin');

    expect(page.canLogin()).toBeTruthy();

    page.submit();

    expect(page.url()).toContain('/manage/home');
  });

  it('should not login with error user', () => {
    page
      .username('dummy')
      .password('dummy')
      .submit();

    expect(page.loginError()).toContain('输入的用户名或者密码无效');
  });
});

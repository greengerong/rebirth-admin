import { browser, element, by } from 'protractor';

export class LoginPage {

  navigateTo() {
    browser.get('/');
    return this;
  }

  username(name: string) {
    element(by.id('username')).sendKeys(name);
    return this;
  }

  password(password: string) {
    element(by.id('password')).sendKeys(password);
    return this;
  }

  loginError() {
    return element(by.css('.alert-danger')).getText();
  }

  canLogin() {
    return element(by.id('submit')).isEnabled();
  }

  submit() {
    return element(by.id('submit')).click();
  }

}

import { browser, element, by } from 'protractor';
import { RebirthPage } from '../utils/rebirth.page';
import { HomePage } from '../home/home.po';

export class LoginPage extends RebirthPage {

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

  login(form?: { username: 'admin', password: 'admin' }) {
    browser.get('/');
    this.username(form.username)
      .password(form.password)
      .submit();
    return new HomePage();
  }

}

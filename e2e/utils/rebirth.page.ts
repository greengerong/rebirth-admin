import { browser } from 'protractor';

export class RebirthPage {
  url() {
    return browser.getCurrentUrl();
  }

  title() {
    return browser.getTitle();
  }
}

import { browser, element, by } from 'protractor';

export class GoldenrelationsPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('gr-root h1')).getText();
  }
}

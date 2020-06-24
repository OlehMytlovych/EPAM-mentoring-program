import { browser, by, element } from 'protractor';

export class AppPage {
  public navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  public getLogoText(): Promise<string> {
    return element(by.css('app-root header span.logo')).getText() as Promise<string>;
  }
}

import { browser, by, element } from 'protractor';

export class HomePage {
  public navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  public getHeaderLogoText(): Promise<string> {
    return element(by.css('app-root header span.logo')).getText() as Promise<string>;
  }

  public getPromoText(): Promise<string> {
    return element(by.css('app-home-page .promo h1')).getText() as Promise<string>;
  }

  public getCustoterRegisterBtn() {
    return element(by.css('app-home-page .customer-promo button'));
  }

  public getProfessionalRegisterBtn() {
    return element(by.css('app-home-page .professional-promo button'));
  }
}

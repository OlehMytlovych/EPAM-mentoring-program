import { HomePage } from './home.po';
import { browser, logging } from 'protractor';
import { waitForRedirect } from './waitForRedirect';

describe('Home Page', () => {
  let page: HomePage;

  beforeEach(() => {
    page = new HomePage();
    page.navigateTo();
  });

  it('should display header', () => {
    expect(page.getHeaderLogoText()).toEqual('ACE');
  });

  it('should display home page', () => {
    expect(page.getPromoText()).toEqual('ACE - comfortable solution for uncomfortable problems');
  });

  it('should display benefits for customers with a register link', () => {
    expect(page.getCustoterRegisterBtn()).toBeTruthy();
  });

  it('should navigate to customer registration once clicked on "Become a customer!" button', () => {
    const getUrlAfterDelay = waitForRedirect(5000);
    const clickPromise = page.getCustoterRegisterBtn().click();
    const browserUrlPromise = getUrlAfterDelay();
    Promise.all([clickPromise, browserUrlPromise]).then(([, newUrl]) => {
      expect(newUrl).toContain('/sign-up/customer');
    });
  });

  it('should display benefits for professionals with a register link', () => {
    expect(page.getCustoterRegisterBtn()).toBeTruthy();
  });

  it('should navigate to professionals registration once clicked on "Become a professional!" button', () => {
    const getUrlAfterDelay = waitForRedirect(5000);
    const clickPromise = page.getProfessionalRegisterBtn().click();
    const browserUrlPromise = getUrlAfterDelay();
    Promise.all([clickPromise, browserUrlPromise]).then(([, newUrl]) => {
      expect(newUrl).toContain('/sign-up/professional');
    });
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});

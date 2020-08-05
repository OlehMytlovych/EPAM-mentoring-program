import { browser } from 'protractor';

export const waitForRedirect = (waitDelay = 5000) => {

  const fn = () => {
    return browser.driver.wait(() => {
      return browser.driver.getCurrentUrl().then((url: string) => {
        return url;
      });
    }, waitDelay);
  };

  return fn;
};

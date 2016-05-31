export class Ng2StarterProjectPage {
  navigateTo() {
    return browser.get('/');
  }

  getNavLinks() {
    return element.all(by.css('ng2-starter-project-app nav a'));
  }

  getRouterOutlet() {
    return element(by.css('router-outlet'));
  }
}

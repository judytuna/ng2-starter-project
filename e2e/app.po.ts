export class Ng2StarterProjectPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('ng2-starter-project-app h1')).getText();
  }
}

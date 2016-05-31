import { Ng2StarterProjectPage } from './app.po';

describe('ng2-starter-project App', function() {
  let page: Ng2StarterProjectPage;

  beforeEach(() => {
    page = new Ng2StarterProjectPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('ng2-starter-project works!');
  });
});

import { Ng2StarterProjectPage } from './app.po';

describe('ng2-starter-project App', function() {
  let page: Ng2StarterProjectPage;

  beforeEach(() => {
    page = new Ng2StarterProjectPage();
  })

  it('should have 3 links in the nav', () => {
    page.navigateTo();
    expect(page.getNavLinks().count()).toEqual(3);
  });

  it('should have a <router-outlet/> directive', () => {
    page.navigateTo();
    expect(page.getRouterOutlet().isPresent()).toBeTruthy();
  });
});

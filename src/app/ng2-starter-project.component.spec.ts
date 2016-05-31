import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { Ng2StarterProjectAppComponent } from '../app/ng2-starter-project.component';

beforeEachProviders(() => [Ng2StarterProjectAppComponent]);

describe('App: Ng2StarterProject', () => {
  it('should create the app',
      inject([Ng2StarterProjectAppComponent], (app: Ng2StarterProjectAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'ng2-starter-project works!\'',
      inject([Ng2StarterProjectAppComponent], (app: Ng2StarterProjectAppComponent) => {
    expect(app.title).toEqual('ng2-starter-project works!');
  }));
});

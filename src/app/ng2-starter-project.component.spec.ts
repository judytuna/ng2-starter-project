import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';

import {
  Router,
  RouterOutletMap,
  RouteSegment,
  Route,
  ROUTER_DIRECTIVES,
  Routes,
  RouterUrlSerializer,
  DefaultRouterUrlSerializer,
  OnActivate,
  CanDeactivate
} from '@angular/router';

import {SpyLocation} from '@angular/common/testing';
import {Location} from '@angular/common';
import {provide, ComponentResolver} from '@angular/core';
import { Ng2StarterProjectAppComponent } from '../app/ng2-starter-project.component';

beforeEachProviders(() => [
  provide(RouterUrlSerializer, {useClass: DefaultRouterUrlSerializer}),
  RouterOutletMap,
  provide(Location, {useClass: SpyLocation}),
  provide(RouteSegment, {useFactory: (r) => r.routeTree.root, deps: [Router]}),
  provide(Router, {
    useFactory: (resolver, urlParser, outletMap, location) => new Router("Ng2StarterProjectAppComponent", Ng2StarterProjectAppComponent, resolver, urlParser, outletMap, location),
    deps: [ComponentResolver, RouterUrlSerializer, RouterOutletMap, Location]
  }),
  Ng2StarterProjectAppComponent
]);

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

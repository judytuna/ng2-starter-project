import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { GadgetsService } from './gadgets.service';

describe('Gadgets Service', () => {
  beforeEachProviders(() => [GadgetsService]);

  it('should ...',
      inject([GadgetsService], (service: GadgetsService) => {
    expect(service).toBeTruthy();
  }));
});

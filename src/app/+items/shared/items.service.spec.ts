import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { ItemsService } from './items.service';

describe('Items Service', () => {
  beforeEachProviders(() => [ItemsService]);

  it('should ...',
      inject([ItemsService], (service: ItemsService) => {
    expect(service).toBeTruthy();
  }));

  it('should have a list of items with five things',
      inject([ItemsService], (service: ItemsService) => {
    expect(service.getItems().length).toEqual(5);
  }));
});

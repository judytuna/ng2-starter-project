import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { WidgetService } from './widget.service';

describe('Widget Service', () => {
  beforeEachProviders(() => [WidgetService]);

  it('should ...',
      inject([WidgetService], (service: WidgetService) => {
    expect(service).toBeTruthy();
  }));
});

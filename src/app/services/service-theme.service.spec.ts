import { TestBed } from '@angular/core/testing';

import { ServiceThemeService } from './service-theme.service';

describe('ServiceThemeService', () => {
  let service: ServiceThemeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceThemeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

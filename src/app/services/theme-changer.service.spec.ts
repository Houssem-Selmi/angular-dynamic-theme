import { TestBed } from '@angular/core/testing';

import { ThemeChangerService } from './theme-changer.service';

describe('ThemeChangerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ThemeChangerService = TestBed.get(ThemeChangerService);
    expect(service).toBeTruthy();
  });
});

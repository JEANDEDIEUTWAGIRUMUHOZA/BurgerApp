import { TestBed } from '@angular/core/testing';

import { VeggieService } from './veggie.service';

describe('VeggieService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VeggieService = TestBed.get(VeggieService);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { BreadService } from './bread.service';

describe('BreadService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BreadService = TestBed.get(BreadService);
    expect(service).toBeTruthy();
  });
});

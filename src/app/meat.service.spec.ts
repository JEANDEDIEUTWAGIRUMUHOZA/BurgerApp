import { TestBed } from '@angular/core/testing';

import { MeatService } from './meat.service';

describe('MeatService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MeatService = TestBed.get(MeatService);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { FlourService } from './flour.service';

describe('FlourService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FlourService = TestBed.get(FlourService);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { DisposeService } from './dispose.service';

describe('DisposeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DisposeService = TestBed.get(DisposeService);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { ReimbursementsService } from './reimbursements.services';

describe('ReimbursementsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReimbursementsService = TestBed.get(ReimbursementsService);
    expect(service).toBeTruthy();
  });
});

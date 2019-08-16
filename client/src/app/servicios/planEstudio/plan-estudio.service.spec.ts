import { TestBed } from '@angular/core/testing';

import { PlanEstudioService } from './plan-estudio.service';

describe('PlanEstudioService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlanEstudioService = TestBed.get(PlanEstudioService);
    expect(service).toBeTruthy();
  });
});

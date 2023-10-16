import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { guardEditCrisisFormGuard } from './guard-edit-crisis-form.guard';

describe('guardEditCrisisFormGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => guardEditCrisisFormGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});

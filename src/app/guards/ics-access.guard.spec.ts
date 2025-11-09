import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { icsAccessGuard } from './ics-access.guard';

describe('icsAccessGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => icsAccessGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});

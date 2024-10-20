import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { canChildGuard } from './can-child.guard';

describe('canChildGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => canChildGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});

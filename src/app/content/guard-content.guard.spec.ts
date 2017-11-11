import { TestBed, async, inject } from '@angular/core/testing';

import { GuardContentGuard } from './guard-content.guard';

describe('GuardContentGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GuardContentGuard]
    });
  });

  it('should ...', inject([GuardContentGuard], (guard: GuardContentGuard) => {
    expect(guard).toBeTruthy();
  }));
});

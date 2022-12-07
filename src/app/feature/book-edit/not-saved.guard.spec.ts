import { TestBed } from '@angular/core/testing';

import { NotSavedGuard } from './not-saved.guard';

describe('NotSavedGuard', () => {
  let guard: NotSavedGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(NotSavedGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

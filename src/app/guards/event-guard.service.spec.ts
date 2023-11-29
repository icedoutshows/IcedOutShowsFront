import { TestBed } from '@angular/core/testing';

import { EventGuardService } from './event-guard.service';

describe('EventGuardService', () => {
  let service: EventGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

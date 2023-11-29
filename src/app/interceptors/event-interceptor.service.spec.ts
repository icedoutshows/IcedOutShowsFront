import { TestBed } from '@angular/core/testing';

import { EventInterceptorService } from './event-interceptor.service';

describe('EventInterceptorService', () => {
  let service: EventInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

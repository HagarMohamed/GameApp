import { TestBed } from '@angular/core/testing';

import { AllGameServiceService } from './all-game-service.service';

describe('AllGameServiceService', () => {
  let service: AllGameServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllGameServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

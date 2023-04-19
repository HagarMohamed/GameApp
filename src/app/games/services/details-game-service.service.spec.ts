import { TestBed } from '@angular/core/testing';

import { DetailsGameServiceService } from './details-game-service.service';

describe('DetailsGameServiceService', () => {
  let service: DetailsGameServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetailsGameServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

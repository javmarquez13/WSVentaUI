import { TestBed } from '@angular/core/testing';

import { WsventaAPIService } from './wsventa-api.service';

describe('WsventaAPIService', () => {
  let service: WsventaAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WsventaAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

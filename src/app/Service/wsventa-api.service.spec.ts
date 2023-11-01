import { TestBed } from '@angular/core/testing';

import { WSVentaAPIService } from './wsventa-api.service';

describe('WSVentaAPIService', () => {
  let service: WSVentaAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WSVentaAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

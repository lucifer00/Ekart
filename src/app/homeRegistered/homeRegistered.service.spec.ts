import { TestBed, inject } from '@angular/core/testing';

import { HomeRegisteredService } from './homeRegistererd.service';

describe('HomeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HomeRegisteredService]
    });
  });

  it('should be created', inject([HomeRegisteredService], (service: HomeRegisteredService) => {
    expect(service).toBeTruthy();
  }));
});

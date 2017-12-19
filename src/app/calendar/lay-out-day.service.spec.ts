import { TestBed, inject } from '@angular/core/testing';

import { LayOutDayService } from './lay-out-day.service';

describe('LayOutDayService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LayOutDayService]
    });
  });

  it('should be created', inject([LayOutDayService], (service: LayOutDayService) => {
    expect(service).toBeTruthy();
  }));
});

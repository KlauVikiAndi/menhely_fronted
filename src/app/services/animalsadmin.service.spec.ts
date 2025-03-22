import { TestBed } from '@angular/core/testing';

import { AnimalsadminService } from './animalsadmin.service';

describe('AnimalsadminService', () => {
  let service: AnimalsadminService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnimalsadminService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

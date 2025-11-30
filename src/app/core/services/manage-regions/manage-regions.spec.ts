import { TestBed } from '@angular/core/testing';

import { ManageRegions } from './manage-regions';

describe('ManageRegions', () => {
  let service: ManageRegions;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManageRegions);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

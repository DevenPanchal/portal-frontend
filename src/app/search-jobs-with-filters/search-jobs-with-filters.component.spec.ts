import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchJobsWithFiltersComponent } from './search-jobs-with-filters.component';

describe('SearchJobsWithFiltersComponent', () => {
  let component: SearchJobsWithFiltersComponent;
  let fixture: ComponentFixture<SearchJobsWithFiltersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchJobsWithFiltersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchJobsWithFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

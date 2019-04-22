import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglejobComponent } from './singlejob.component';

describe('SinglejobComponent', () => {
  let component: SinglejobComponent;
  let fixture: ComponentFixture<SinglejobComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SinglejobComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SinglejobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

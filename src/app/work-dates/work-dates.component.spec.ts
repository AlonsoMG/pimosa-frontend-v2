import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkDatesComponent } from './work-dates.component';

describe('WorkDatesComponent', () => {
  let component: WorkDatesComponent;
  let fixture: ComponentFixture<WorkDatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkDatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkDatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

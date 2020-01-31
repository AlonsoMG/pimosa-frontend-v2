import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkTimetableComponent } from './work-timetable.component';

describe('WorkTimetableComponent', () => {
  let component: WorkTimetableComponent;
  let fixture: ComponentFixture<WorkTimetableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkTimetableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkTimetableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MachineryJobsComponent } from './machinery-jobs.component';

describe('MachineryJobsComponent', () => {
  let component: MachineryJobsComponent;
  let fixture: ComponentFixture<MachineryJobsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MachineryJobsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MachineryJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

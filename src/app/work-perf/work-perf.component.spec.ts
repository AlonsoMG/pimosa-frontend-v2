import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkPerfComponent } from './work-perf.component';

describe('WorkPerfComponent', () => {
  let component: WorkPerfComponent;
  let fixture: ComponentFixture<WorkPerfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkPerfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkPerfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

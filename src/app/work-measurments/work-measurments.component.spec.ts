import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkMeasurmentsComponent } from './work-measurments.component';

describe('WorkMeasurmentsComponent', () => {
  let component: WorkMeasurmentsComponent;
  let fixture: ComponentFixture<WorkMeasurmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkMeasurmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkMeasurmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

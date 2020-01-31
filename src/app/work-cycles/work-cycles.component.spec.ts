import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkCyclesComponent } from './work-cycles.component';

describe('WorkCyclesComponent', () => {
  let component: WorkCyclesComponent;
  let fixture: ComponentFixture<WorkCyclesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkCyclesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkCyclesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

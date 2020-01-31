import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkHincComponent } from './work-hinc.component';

describe('WorkHincComponent', () => {
  let component: WorkHincComponent;
  let fixture: ComponentFixture<WorkHincComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkHincComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkHincComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

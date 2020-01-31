import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkConditionsComponent } from './work-conditions.component';

describe('WorkConditionsComponent', () => {
  let component: WorkConditionsComponent;
  let fixture: ComponentFixture<WorkConditionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkConditionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkConditionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

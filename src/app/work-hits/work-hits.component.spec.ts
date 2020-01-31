import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkHitsComponent } from './work-hits.component';

describe('WorkHitsComponent', () => {
  let component: WorkHitsComponent;
  let fixture: ComponentFixture<WorkHitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkHitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkHitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

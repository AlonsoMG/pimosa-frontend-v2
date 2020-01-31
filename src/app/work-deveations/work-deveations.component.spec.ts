import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkDeveationsComponent } from './work-deveations.component';

describe('WorkDeveationsComponent', () => {
  let component: WorkDeveationsComponent;
  let fixture: ComponentFixture<WorkDeveationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkDeveationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkDeveationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkLocalComponent } from './work-local.component';

describe('WorkLocalComponent', () => {
  let component: WorkLocalComponent;
  let fixture: ComponentFixture<WorkLocalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkLocalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkLocalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

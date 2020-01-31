import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkProfundityComponent } from './work-profundity.component';

describe('WorkProfundityComponent', () => {
  let component: WorkProfundityComponent;
  let fixture: ComponentFixture<WorkProfundityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkProfundityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkProfundityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

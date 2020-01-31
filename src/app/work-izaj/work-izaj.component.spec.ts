import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkIzajComponent } from './work-izaj.component';

describe('WorkIzajComponent', () => {
  let component: WorkIzajComponent;
  let fixture: ComponentFixture<WorkIzajComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkIzajComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkIzajComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

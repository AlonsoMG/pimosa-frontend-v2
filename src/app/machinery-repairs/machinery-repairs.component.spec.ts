import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MachineryRepairsComponent } from './machinery-repairs.component';

describe('MachineryRepairsComponent', () => {
  let component: MachineryRepairsComponent;
  let fixture: ComponentFixture<MachineryRepairsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MachineryRepairsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MachineryRepairsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

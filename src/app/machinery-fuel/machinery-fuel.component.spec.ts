import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MachineryFuelComponent } from './machinery-fuel.component';

describe('MachineryFuelComponent', () => {
  let component: MachineryFuelComponent;
  let fixture: ComponentFixture<MachineryFuelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MachineryFuelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MachineryFuelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

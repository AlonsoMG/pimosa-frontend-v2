import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MachineryAccesoriesComponent } from './machinery-accesories.component';

describe('MachineryAccesoriesComponent', () => {
  let component: MachineryAccesoriesComponent;
  let fixture: ComponentFixture<MachineryAccesoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MachineryAccesoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MachineryAccesoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MachineryOnoffComponent } from './machinery-onoff.component';

describe('MachineryOnoffComponent', () => {
  let component: MachineryOnoffComponent;
  let fixture: ComponentFixture<MachineryOnoffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MachineryOnoffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MachineryOnoffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MachineryLocalComponent } from './machinery-local.component';

describe('MachineryLocalComponent', () => {
  let component: MachineryLocalComponent;
  let fixture: ComponentFixture<MachineryLocalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MachineryLocalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MachineryLocalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

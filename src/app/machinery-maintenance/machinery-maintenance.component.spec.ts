import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MachineryMaintenanceComponent } from './machinery-maintenance.component';

describe('MachineryMaintenanceComponent', () => {
  let component: MachineryMaintenanceComponent;
  let fixture: ComponentFixture<MachineryMaintenanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MachineryMaintenanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MachineryMaintenanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

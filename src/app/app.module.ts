import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WorkListComponent } from './work-list/work-list.component';
import { MachineryListComponent } from './machinery-list/machinery-list.component';
import { MachineryFuelComponent } from './machinery-fuel/machinery-fuel.component';
import { MachineryLocalComponent } from './machinery-local/machinery-local.component';
import { MachineryOnoffComponent } from './machinery-onoff/machinery-onoff.component';
import { MachineryMaintenanceComponent } from './machinery-maintenance/machinery-maintenance.component';
import { MachineryRepairsComponent } from './machinery-repairs/machinery-repairs.component';
import { MachineryAccesoriesComponent } from './machinery-accesories/machinery-accesories.component';
import { MachineryJobsComponent } from './machinery-jobs/machinery-jobs.component';
import { WorkConditionsComponent } from './work-conditions/work-conditions.component';
import { WorkMeasurmentsComponent } from './work-measurments/work-measurments.component';
import { WorkDatesComponent } from './work-dates/work-dates.component';
import { WorkLocalComponent } from './work-local/work-local.component';
import { WorkTimetableComponent } from './work-timetable/work-timetable.component';
import { WorkCyclesComponent } from './work-cycles/work-cycles.component';
import { WorkToolsComponent } from './work-tools/work-tools.component';
import { WorkDeveationsComponent } from './work-deveations/work-deveations.component';
import { WorkProfundityComponent } from './work-profundity/work-profundity.component';
import { WorkLoadsComponent } from './work-loads/work-loads.component';
import { WorkHitsComponent } from './work-hits/work-hits.component';
import { WorkPerfComponent } from './work-perf/work-perf.component';
import { WorkHincComponent } from './work-hinc/work-hinc.component';
import { WorkIzajComponent } from './work-izaj/work-izaj.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MachineryDashboardComponent } from './machinery-dashboard/machinery-dashboard.component';
import { WorkDashboardComponent } from './work-dashboard/work-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    WorkListComponent,
    MachineryListComponent,
    MachineryFuelComponent,
    MachineryLocalComponent,
    MachineryOnoffComponent,
    MachineryMaintenanceComponent,
    MachineryRepairsComponent,
    MachineryAccesoriesComponent,
    MachineryJobsComponent,
    WorkConditionsComponent,
    WorkMeasurmentsComponent,
    WorkDatesComponent,
    WorkLocalComponent,
    WorkTimetableComponent,
    WorkCyclesComponent,
    WorkToolsComponent,
    WorkDeveationsComponent,
    WorkProfundityComponent,
    WorkLoadsComponent,
    WorkHitsComponent,
    WorkPerfComponent,
    WorkHincComponent,
    WorkIzajComponent,
    NavbarComponent,
    MachineryDashboardComponent,
    WorkDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

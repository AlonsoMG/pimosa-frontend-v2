import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MachineryListComponent } from './machinery-list/machinery-list.component';
import { MachineryDashboardComponent } from './machinery-dashboard/machinery-dashboard.component';
import { MachineryFuelComponent } from './machinery-fuel/machinery-fuel.component';
import { MachineryOnoffComponent } from './machinery-onoff/machinery-onoff.component';
import { MachineryAccesoriesComponent } from './machinery-accesories/machinery-accesories.component';
import { MachineryMaintenanceComponent } from './machinery-maintenance/machinery-maintenance.component';
import { MachineryRepairsComponent } from './machinery-repairs/machinery-repairs.component';
import { MachineryLocalComponent } from './machinery-local/machinery-local.component';
import { WorkListComponent } from './work-list/work-list.component';
import { WorkDashboardComponent } from './work-dashboard/work-dashboard.component';


const routes: Routes = [
  {
    path: 'machinery',
    component: MachineryListComponent
  },
  {
    path: 'machinery/machinery/:id',
    component: MachineryDashboardComponent
  },
  {
    path: 'machinery/:id/fuel',
    component: MachineryFuelComponent
  },
  {
    path: 'machinery/:id/onoff',
    component: MachineryOnoffComponent
  },
  {
    path: 'machinery/:id/accessories',
    component: MachineryAccesoriesComponent
  },
  {
    path: 'machinery/:id/maintenance',
    component: MachineryMaintenanceComponent
  },
  {
    path: 'machinery/:id/repairs',
    component: MachineryRepairsComponent
  },
  {
    path: 'machinery/:id/localization',
    component: MachineryLocalComponent
  },
  {
    path: 'works',
    component: WorkListComponent
  },
  {
    path: 'works/work/:id',
    component: WorkDashboardComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

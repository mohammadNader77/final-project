import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ScheduleComponent} from "./schedule/schedule.component";
import {RequestComponent} from "./schedule/request/request.component";
import {CalenderComponent} from "./schedule/calender/calender.component";
import {BlockedDaysComponent} from "./schedule/blocked-days/blocked-days.component";
import {AddTimeOffComponent} from "./schedule/request/add-time-off/add-time-off.component";

const routes: Routes = [
  {
    path: '',
    component: ScheduleComponent,
    children: [
      { path: 'request', component: RequestComponent },
      { path: 'add-time-off', component: AddTimeOffComponent },
      { path: 'calendar', component: CalenderComponent },
      { path: 'blocked-days', component: BlockedDaysComponent },
      { path: '', redirectTo: 'request', pathMatch: 'full' }
      ]
  },
 ]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScheduleRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ScheduleComponent} from "./schedule/schedule.component";
import {RequestComponent} from "./schedule/request/request.component";

const routes: Routes = [
  { path: '', component: ScheduleComponent },

  { path: 'request', component: RequestComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScheduleRoutingModule { }

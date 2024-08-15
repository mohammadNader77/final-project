import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from "./dashboard/dashboard/dashboard.component";
import {TeamComponent} from "./team/team/team.component";
import {ScheduleComponent} from "./schedule/schedule/schedule.component";

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'team', component: TeamComponent },
  {
    path: 'schedule',
    loadChildren: () => import('./schedule/schedule.module').then(m => m.ScheduleModule)
  },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: '/dashboard' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

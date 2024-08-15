import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashRoutingModule } from './dashboard-routing.module';

@NgModule({
  declarations: [DashboardComponent],
  exports: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashRoutingModule
  ]
})
export class DashModule { }

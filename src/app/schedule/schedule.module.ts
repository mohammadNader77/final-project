import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScheduleRoutingModule } from './schedule-routing.module';
import {ScheduleComponent} from "./schedule/schedule.component";
import {RequestComponent} from "./schedule/request/request.component";
import { CalenderComponent } from './schedule/calender/calender.component';
import { BlockedDaysComponent } from './schedule/blocked-days/blocked-days.component';
import { AddTimeOffComponent } from './schedule/request/add-time-off/add-time-off.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [ScheduleComponent,RequestComponent, CalenderComponent, BlockedDaysComponent, AddTimeOffComponent],
  exports: [
    ScheduleComponent,
    AddTimeOffComponent
  ],
  imports: [
    CommonModule,
    ScheduleRoutingModule,
    ReactiveFormsModule,
    FormsModule

  ]
})
export class ScheduleModule { }

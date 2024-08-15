import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScheduleRoutingModule } from './schedule-routing.module';
import {ScheduleComponent} from "./schedule/schedule.component";
import {RequestComponent} from "./schedule/request/request.component";


@NgModule({
  declarations: [ScheduleComponent,RequestComponent],
  exports: [
    ScheduleComponent
  ],
  imports: [
    CommonModule,
    ScheduleRoutingModule

  ]
})
export class ScheduleModule { }

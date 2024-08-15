import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { ItemComponent } from './components/item/item.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import {RouterLink, RouterOutlet} from "@angular/router";
import {DashModule} from "../dashboard/dashboard.module";
import {ScheduleModule} from "../schedule/schedule.module";



@NgModule({
  declarations: [
    HeaderComponent,
    SideMenuComponent,
    ItemComponent,
    UserProfileComponent
  ],
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    DashModule,
    ScheduleModule
  ],
  exports: [
    HeaderComponent,
    SideMenuComponent
  ]
})
export class SharedModuleModule { }

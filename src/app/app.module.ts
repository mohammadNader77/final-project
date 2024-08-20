import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModuleModule } from './shared-module/shared-module.module';
import {AddTimeOffComponent} from "./schedule/schedule/request/add-time-off/add-time-off.component";
import {LoadingSpinner} from "./schedule/schedule/loading-spinner/loading-spinner";

@NgModule({
  declarations: [
    AppComponent,


  ],
  imports: [
    SharedModuleModule,
    BrowserModule,
    AppRoutingModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


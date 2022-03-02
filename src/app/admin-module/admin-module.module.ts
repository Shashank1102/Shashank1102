import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminModuleRoutingModule } from './admin-module-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';

import {ChartModule} from 'primeng/chart';
import { FormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { VendorModuleComponent } from './vendor-module/vendor-module.component';
import { LandingComponent } from './landing/landing.component';
import { SettingsModuleComponent } from './settings-module/settings-module.component';


@NgModule({
  declarations: [
    DashboardComponent,
    VendorModuleComponent,
    LandingComponent,
    SettingsModuleComponent
  ],
  imports: [
    
    CommonModule,
    AdminModuleRoutingModule,
    ChartModule,
    FormsModule,
    CalendarModule
  ]
})
export class AdminModuleModule { }

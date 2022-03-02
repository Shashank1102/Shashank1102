import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsModuleComponent } from './settings-module/settings-module.component';
import { VendorModuleComponent } from './vendor-module/vendor-module.component';

const routes: Routes = [
  {path:'dashboard', component: DashboardComponent},
  {path: 'vendors',component:VendorModuleComponent, loadChildren: () => import(`./vendor-module/vendor-module.module`).then(m => m.VendorModuleModule) },
  {path: 'settings',component:SettingsModuleComponent, loadChildren: () => import(`./settings-module/settings-module.module`).then(m => m.SettingsModuleModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminModuleRoutingModule { }

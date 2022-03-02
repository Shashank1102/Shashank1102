import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Constants } from 'src/shared/helper';
import { AdminModuleComponent } from './admin-module/admin-module.component';
import { LandingComponent } from './admin-module/landing/landing.component';
import { DashboardComponent } from './influencer-module/dashboard/dashboard.component';
import { InfluencerModuleComponent } from './influencer-module/influencer-module.component';
import { StarloginComponent } from './influencer-module/starlogin/starlogin.component';
import { VendorModuleComponent } from './vendor-module/vendor-module.component';
import { VendorloginComponent } from './vendor-module/vendorlogin/vendorlogin.component';

const routes: Routes = [
  // { path: '', component: LandingComponent },
  // { path: 'admin',component:AdminModuleComponent, loadChildren: () => import(`./admin-module/admin-module.module`).then(m => m.AdminModuleModule) },

];
console.log("PageURL", window.location.href)
if (environment.production) {
  if (window.location.href.includes("/bumiadmin/")) {
    routes.push({ path: '', component: LandingComponent });
    routes.push({ path: 'admin', component: AdminModuleComponent, loadChildren: () => import(`./admin-module/admin-module.module`).then(m => m.AdminModuleModule) });
  }
  if (window.location.href.includes("/bumivendor/")) {
    routes.push({ path: '', component: VendorloginComponent });
    routes.push({ path: 'vendor', component: VendorModuleComponent, loadChildren: () => import(`./vendor-module/vendor-module.module`).then(m => m.VendorModuleModule) });
  }
  if (window.location.href.includes("/bumistar/")) {
    routes.push({ path: '', component: StarloginComponent });
    routes.push({ path: 'star',
     component: InfluencerModuleComponent,
      loadChildren: () => import(`./influencer-module/influencer-module.module`).then(m => m.InfluencerModuleModule) });
  }
}
else {
  if (Constants.AppName == "Admin") {
    routes.push({ path: '', component: LandingComponent });
    routes.push({ path: 'admin', component: AdminModuleComponent, loadChildren: () => import(`./admin-module/admin-module.module`).then(m => m.AdminModuleModule) });
  }
  if (Constants.AppName == "Vendor") {
    routes.push({ path: '', component: VendorloginComponent });
    routes.push({ path: 'vendor', component: VendorModuleComponent, loadChildren: () => import(`./vendor-module/vendor-module.module`).then(m => m.VendorModuleModule) });
  }
  if (Constants.AppName == "Star") {
    routes.push({ path: '', component: StarloginComponent });
    routes.push({ path: 'star',
     component: InfluencerModuleComponent,
      loadChildren: () => import(`./influencer-module/influencer-module.module`).then(m => m.InfluencerModuleModule) });
  }

}
@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

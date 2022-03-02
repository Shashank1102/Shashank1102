import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VendorHomeComponent } from './vendor-home/vendor-home.component';

const routes: Routes = [
  {path:'', component: VendorHomeComponent},
  {path:'home', component: VendorHomeComponent},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VendorModuleRoutingModule { }

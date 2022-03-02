import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VendorModuleRoutingModule } from './vendor-module-routing.module';
import { VendorHomeComponent } from './vendor-home/vendor-home.component';


@NgModule({
  declarations: [
    VendorHomeComponent
  ],
  imports: [
    CommonModule,
    VendorModuleRoutingModule
  ]
})
export class VendorModuleModule { }

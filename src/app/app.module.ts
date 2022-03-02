import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AdminModuleComponent } from './admin-module/admin-module.component';
import { VendorModuleComponent } from './vendor-module/vendor-module.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxMaskModule } from 'ngx-mask';
import { ExcelService } from 'src/shared/services/Export/excel.service';
import { InfluencerModuleComponent } from './influencer-module/influencer-module.component';
@NgModule({
  declarations: [
    AppComponent,
    ComingSoonComponent,
    HomePageComponent,
    AdminModuleComponent,
    VendorModuleComponent,
    InfluencerModuleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule ,
    HttpClientModule,
    NgxMaskModule.forRoot(),
  ],
  providers: [ExcelService],
  bootstrap: [AppComponent]
})
export class AppModule { }

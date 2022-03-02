import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdvertisingComponent } from './advertising/advertising.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditShopComponent } from './edit-shop/edit-shop.component';
import { FaqComponent } from './faq/faq.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { MyInsightsComponent } from './my-insights/my-insights.component';
import { MyStoreComponent } from './my-store/my-store.component';
import { MyWalletComponent } from './my-wallet/my-wallet.component';
import { PromotionsComponent } from './promotions/promotions.component';
// import { MyOrdersComponent } from './my-orders/my-orders.component';
// import { MyProductsComponent } from './my-products/my-products.component';
// import { PromotionalComponent } from './promotional/promotional.component';
 
// import { FaqComponent } from './faq/faq.component';


const routes: Routes = [
  {path:'', component: DashboardComponent},
  {path:'dashboard', component: DashboardComponent},
  {path:'my-account', component: MyAccountComponent},
  {path:'edit-shop', component: EditShopComponent},
  {path:'advertising', component: AdvertisingComponent},
  {path:'my-insights', component: MyInsightsComponent},
  // {path:'my-orders', component: MyOrdersComponent},
  // {path:'promotional', component: PromotionalComponent},
  // {path:'my-products', component: MyProductsComponent},
   {path:'my-wallet', component: MyWalletComponent},
   {path:'my-store', component: MyStoreComponent},
   {path:'faq', component: FaqComponent},
   {path:'promotions', component: PromotionsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InfluencerModuleRoutingModule { }

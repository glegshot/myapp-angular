import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhoneStoreHomeComponent } from './phone-store-home/phone-store-home.component';
import { PhoneStoreLoginComponent } from './phone-store-login/phone-store-login.component';
import { PhoneStorePagenotfoundComponent } from './phone-store-pagenotfound/phone-store-pagenotfound.component';
import { PhoneStoreProductListComponent } from './phone-store-product-list/phone-store-product-list.component';
import { PhoneStoreProductComponent } from './phone-store-product/phone-store-product.component';

const routes: Routes = [
      { path: 'home', component: PhoneStoreHomeComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'products', component: PhoneStoreProductListComponent },
      { path: 'login', component: PhoneStoreLoginComponent },
      { path: 'product/:id', component: PhoneStoreProductComponent},
      { path: '**', component: PhoneStorePagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

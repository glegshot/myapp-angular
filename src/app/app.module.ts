import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PhoneStoreHeaderComponent } from './phone-store-header/phone-store-header.component';
import { PhoneStoreHomeComponent } from './phone-store-home/phone-store-home.component';
import { PhoneStoreProductComponent } from './phone-store-product/phone-store-product.component';
import { PhoneStoreProductListComponent } from './phone-store-product-list/phone-store-product-list.component';
import { PhoneStorePagenotfoundComponent } from './phone-store-pagenotfound/phone-store-pagenotfound.component';
import { PhoneStoreLoginComponent } from './phone-store-login/phone-store-login.component';
import { PhoneStoreNotificationComponent } from './phone-store-notification/phone-store-notification.component';


@NgModule({
  declarations: [
    AppComponent,
    PhoneStoreHeaderComponent,
    PhoneStoreHomeComponent,
    PhoneStoreProductComponent,
    PhoneStoreProductListComponent,
    PhoneStorePagenotfoundComponent,
    PhoneStoreLoginComponent,
    PhoneStoreNotificationComponent  
],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(), 
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

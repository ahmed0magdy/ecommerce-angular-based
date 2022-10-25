import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/Admin/header/header.component';
import { ProductsComponent } from './Components/Admin/products/products.component';
import { AddProductsComponent } from './Components/Admin/add-products/add-products.component';
import { ErrorComponent } from './Components/Admin/error/error.component';
import { ServicesService } from './Components/Admin/Services/services.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateProductsComponent } from './Components/Admin/update-products/update-products.component';

import { HomeComponent } from './Components/User/home/home.component';
import { CartComponent } from './Components/User/cart/cart.component';
import { ProductDetailsComponent } from './Components/User/product-details/product-details.component';
import { CheckoutComponent } from './Components/User/checkout/checkout.component';
import { NavComponent } from './Components/User/nav/nav.component';
import { ProductItemComponent } from './Components/User/product-item/product-item.component';
import { LoginComponent } from './userComponents/login/login.component';
import { SignupComponent } from './userComponents/signup/signup.component';
import { UsersService } from './services/users.service';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductsComponent,
    AddProductsComponent,
    ErrorComponent,
    UpdateProductsComponent,
    HomeComponent,
    CartComponent,
    ProductDetailsComponent,
    CheckoutComponent,
    NavComponent,
    ProductItemComponent,
    LoginComponent,
    SignupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  
  ],
  providers: [
    ServicesService,
    UsersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

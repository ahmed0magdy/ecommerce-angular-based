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
import { DeleteProductsComponent } from './Components/Admin/delete-products/delete-products.component';
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
    DeleteProductsComponent,
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

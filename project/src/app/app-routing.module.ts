import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductsComponent } from './Components/Admin/add-products/add-products.component';
import { ErrorComponent } from './Components/Admin/error/error.component';
import { ProductsComponent } from './Components/Admin/products/products.component';
import { UpdateProductsComponent } from './Components/Admin/update-products/update-products.component';
import { LoginComponent } from './userComponents/login/login.component';
import { SignupComponent } from './userComponents/signup/signup.component';
import { CartComponent } from './Components/User/cart/cart.component';
import { HomeComponent } from './Components/User/home/home.component';
import { ProductDetailsComponent } from './Components/User/product-details/product-details.component';

const routes: Routes = [
  {
    path:"",
    component:HomeComponent
  },
  {
    path:"cart",
    component:CartComponent
  },
  {
    path:"product/:id",
    component:ProductDetailsComponent
  },
  {
    path:"admin",
    component:ProductsComponent
  },
  {
    path:"Products",
    component:ProductsComponent
  },
  {
    path:"AddProducts",
    component:AddProductsComponent
  },
  {
    path:"products/edit/:id",
    component:UpdateProductsComponent
  },
  {
    path: "login",
    component:LoginComponent
  },
  {
    path: "signup",
     component:SignupComponent
    },
  {
    path:"**",
    component:ErrorComponent
  },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

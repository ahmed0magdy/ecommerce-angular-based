import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../Services/services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private myService: ServicesService, private _route:Router ) { }
  products:any
  title:any
  page:number = 1;
  total:number = 0;
  ngOnInit(): void {
    // if(sessionStorage.getItem("userEmail")){
    //   // alert("welcome "+sessionStorage.getItem("userEmail"));
    // }
    // else{
    //   this._route.navigate(['']);
    // }
    this.getProducts();
    if(sessionStorage.getItem("Admin")){
      // alert("welcome "+sessionStorage.getItem("Admin"));
    }
    else{
      alert("you are not an Authorized");
      this._route.navigate(['']);

    }

    let that = this;
    this.myService.getAllProducts().subscribe(
      {
        next(data){
          that.products = data;
        },
        error(err){
          console.log(err);
        }
      }
    )

 
  }
  getProducts(){
  this.myService.getAllProducts(this.page).subscribe((response:any)=>{
    this.products = response.data;
    this.total = response.total;
  })
  }
  pageChangeEvent(event: number){
    this.page = event;
    this.getProducts();
}
  DeleteProd(prod_id:any){
    console.log(prod_id);
    this.myService.Deleteprod(prod_id).subscribe((data)=>{
      console.log(data);
      window.location.href = "/admin";
    })
  }

  search(){
    if(this.title !=""){
      this.products = this.products.filter((res:any)=>{
        return res.title.toLocaleLowerCase().match(this.title.toLocaleLowerCase())
      })
  }else{
    this.ngOnInit()
  }
    console.log(this.title.toLocaleLowerCase())
  }

}

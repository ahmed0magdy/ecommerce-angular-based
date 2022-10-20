import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../Services/services.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private myService: ServicesService) { }
  products:any
  ngOnInit(): void {
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
  DeleteProd(prod_id:any){
    console.log(prod_id);
    this.myService.Deleteprod(prod_id).subscribe((data)=>{
      console.log(data);
      window.location.href = "/admin";
    })
  }


}

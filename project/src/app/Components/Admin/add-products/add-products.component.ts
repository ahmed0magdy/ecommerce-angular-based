import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../Services/services.service';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent implements OnInit {

  constructor(private myService: ServicesService) {}

  ngOnInit(): void {

  }
  AddProd(title:any,image:any,price:any,details:any){
    this.myService.AddProd({title:title, image: image, price:price,details:details}).subscribe();
    window.location.href = "/"
  }


}

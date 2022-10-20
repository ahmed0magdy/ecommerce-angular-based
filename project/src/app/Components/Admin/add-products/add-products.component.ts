import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
  AddProductForm = new FormGroup({
    title: new FormControl(""),
    image:new FormControl(""),
    price: new FormControl(0),
    details: new FormControl("")
  })
  AddProd(){
    this.myService.AddProd(this.AddProductForm.value).subscribe();
    alert("product is added")
    window.location.href = "/admin"
  }


}

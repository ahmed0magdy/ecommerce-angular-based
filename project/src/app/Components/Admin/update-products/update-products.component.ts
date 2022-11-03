import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicesService } from '../Services/services.service';

@Component({
  selector: 'app-update-products',
  templateUrl: './update-products.component.html',
  styleUrls: ['./update-products.component.css']
})
export class UpdateProductsComponent implements OnInit {



  constructor(private myService:ServicesService,private route:ActivatedRoute) { }

  UpdateProductForm = new FormGroup({
    title: new FormControl(""),
    SKU: new FormControl(""),
    slug: new FormControl(""),
    image:new FormControl(""),
    price: new FormControl(""),
    details: new FormControl("")
  })

  ngOnInit(): void {
    console.log(this.route.snapshot);
    this.myService.getById(this.route.snapshot.params['id']).subscribe((data:any)=>{
      console.log(data);
      this.UpdateProductForm = new FormGroup({
        title: new FormControl(data['title']),
        SKU: new FormControl(data['SKU']),
        slug: new FormControl(data['slug']),
        image:new FormControl(data['image']),
        price: new FormControl(data['price']),
        details: new FormControl(data['details'])
      })
    });
  }
  Updatepro(){
    console.log(this.UpdateProductForm.value);
    this.myService.UpdateProd(this.UpdateProductForm.value,this.route.snapshot.params['id']).subscribe((data)=>{
      console.log(data);
      window.location.href="/admin";
    })
  }
}

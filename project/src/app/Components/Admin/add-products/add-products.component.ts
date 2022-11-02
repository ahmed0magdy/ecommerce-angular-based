import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ServicesService } from '../Services/services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent implements OnInit {

  selectedImage:any
  AddProductForm:any
  constructor(private myService: ServicesService,private _route:Router) {}

  ngOnInit(): void {
    // if(sessionStorage.getItem("Admin")){
    //   // alert("welcome "+sessionStorage.getItem("Admin"));
    // }
    // else{
    //   alert("you are not an Authorized");
    //   this._route.navigate(['']);

    // }
  }
  // AddProductForm = new FormGroup({
  //   title: new FormControl(""),
  //   SKU: new FormControl(""),
  //   image:new FormControl(""),
  //   price: new FormControl(0),
  //   details: new FormControl("")
  // })
  // AddProd(){
  //   this.myService.AddProd(this.AddProductForm.value).subscribe();
  //   // alert("product is added")
  //   // window.location.href = "/admin"
  //   console.log(this.AddProductForm.value);
  // }
  onSelectImage(event:any) {
    this.selectedImage = event.srcElement.files[0];
 }

 onCreateService(form: FormGroup) {
   const formData = new FormData();
   formData.append('image', this.selectedImage, this.selectedImage.name);
   formData.append('title', this.AddProductForm.get('title').value);
   formData.append('SKU', this.AddProductForm.get('SKU').value);
   formData.append('details', this.AddProductForm.get('details').value);
   formData.append('price', this.AddProductForm.get('price').value);
   console.log(formData);
    this.myService.AddProd(this.AddProductForm.value).subscribe();

 }


}

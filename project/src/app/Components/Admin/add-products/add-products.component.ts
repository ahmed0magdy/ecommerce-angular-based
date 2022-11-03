import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ServicesService } from '../Services/services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent implements OnInit {

  form :FormGroup;
  constructor(public fb:FormBuilder,public myService: ServicesService,private _route:Router)
   {
      this.form = this.fb.group({
      title: '',
      SKU: '',
      image:null,
      price: 0,
      details: ''
    })
   }

  ngOnInit(): void {
    // if(sessionStorage.getItem("Admin")){
    //   // alert("welcome "+sessionStorage.getItem("Admin"));
    // }
    // else{
    //   alert("you are not an Authorized");
    //   this._route.navigate(['']);

    // }
  }
 

uploadFile(event:Event){
  const file = (event.target as HTMLInputElement)?.files?.[0];
  this.form.patchValue({
    image:file
  });
}


submitForm()
{
  const formData :any= new FormData();
     formData.append('image', this.form.controls['image'].value);
     formData.append('title', this.form.controls['title'].value);
     formData.append('SKU', this.form.controls['SKU'].value);
     formData.append('details', this.form.controls['details'].value);
     formData.append('price', this.form.controls['price'].value);
     console.log(formData);
     this.myService.AddProd(formData).subscribe();

}




  AddProductForm = new FormGroup({
    title: new FormControl(""),
    SKU: new FormControl("",[Validators.required,Validators.maxLength(8),Validators.minLength(0)]),
    image:new FormControl(""),
    price: new FormControl(0),
    details: new FormControl("")
  })
  get SKUvalid(){
    return this.AddProductForm.controls.SKU.valid
  }
  AddProd(){
    if(this.AddProductForm.valid){
      this.myService.AddProd(this.AddProductForm.value).subscribe();
      alert("product is added")
      window.location.href = "/admin"    
    }else{
    // alert("error");
    }


}
}

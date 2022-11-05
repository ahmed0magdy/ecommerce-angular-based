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
     formData.append('_METHOD', 'POST');
     console.log(formData);

     this.myService.AddProd(formData).subscribe(
      (data:any)=>{
        window.location.href="/admin";
      }
     );

      // window.location.href="/admin";

}





}
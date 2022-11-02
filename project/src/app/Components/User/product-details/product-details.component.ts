import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServicesService } from '../../Admin/Services/services.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  singleProduct:any;
  id:any;
  imgsrc= 'http://localhost:8000/storage/images';
  constructor(private myserv:ServicesService ,private myactivrout:ActivatedRoute) 
  {
    this.id=myactivrout.snapshot.params['id'];
     this.myserv.getByIdshow(this.id).subscribe(
      (data)=> this.singleProduct =data
     );

   }

  ngOnInit(): void {
  }

}

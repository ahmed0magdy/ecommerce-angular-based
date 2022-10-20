import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  singleProduct:any;
  id:any;
  constructor(private myserv:UsersService ,private myactivrout:ActivatedRoute) 
  {
    this.id=myactivrout.snapshot.params['id'];
     this.myserv.getById(this.id).subscribe(
      (data)=> this.singleProduct =data
     );

   }

  ngOnInit(): void {
  }

}

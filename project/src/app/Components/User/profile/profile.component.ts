import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServicesService } from '../../Admin/Services/services.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private myservice:ServicesService,activatedroute:ActivatedRoute) { }
  profile:any;
  id:any = 1;
  orders:any[]=[];
  ngOnInit(): void {
    this.myservice.getByProfileId(this.id).subscribe((data)=>{
      this.profile = data;
     // console.log(data);
    })

  }
  DeleteOrder(order_id:any){
    //console.log(order_id);
    this.myservice.DeleteOrd(order_id).subscribe((data)=>{
     // console.log(data);
      window.location.href = "/profiles";
    })
  }
  Orderchange(o_id:any){
   // console.log(o_id);
    for(let p of this.profile.productsorders){
      if(o_id == p.order_id){
    console.log(p);
        this.orders.push(p);
      }
  }
  }
  orderdelete(){
    this.orders = [];
  }

}

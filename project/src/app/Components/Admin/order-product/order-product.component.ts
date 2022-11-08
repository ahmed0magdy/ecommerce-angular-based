import { Component, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicesService } from '../Services/services.service';

@Component({
  selector: 'app-order-product',
  templateUrl: './order-product.component.html',
  styleUrls: ['./order-product.component.css']
})
export class OrderProductComponent implements OnInit {
  id:any;
  singleorder:any;
  total:number;
  constructor(private myactivated:ActivatedRoute,private myservice:ServicesService, route:Router) {
    
    console.log(myactivated.snapshot.params['id']);
    this.id=myactivated.snapshot.params['id'];
    this.myservice.getByOrderId(this.id).subscribe(
      (data)=> {this.singleorder =data
        console.log(this.singleorder);
        this.totals();
        
      }
      );
      
      
    }
    
    ngOnInit(): void {
      
    }
     totals(){
    
    
    }
}
  
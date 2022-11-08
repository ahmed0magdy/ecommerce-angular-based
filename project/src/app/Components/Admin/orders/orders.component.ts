import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicesService } from '../Services/services.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  constructor(private route:ActivatedRoute ,private myservice:ServicesService) { }
  orders:any;
  form: FormGroup;
  ngOnInit(): void {
    let that = this;
    this.myservice.getAllOrders().subscribe((data:any)=>{
      that.orders = data;
      console.log(data);
    })
  }

  UpdateOrder(){
    const formData: any = new FormData();
    formData.append('status', this.form.controls['status'].value);
    console.log(formData);
    this.myservice.UpdateOrder(formData,this.route.snapshot.params['id']).subscribe
    ((data)=>{
      console.log(data);
       window.location.href="/admin";
    })
  }

}

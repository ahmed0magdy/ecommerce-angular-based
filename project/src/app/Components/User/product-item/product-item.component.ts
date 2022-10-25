import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  constructor() { }
   quantity:number=1;
   @Input() product:any={};
   @Output() item=new EventEmitter()
    ngOnInit(): void {
   
  }

  plus()
  {
    this.quantity++;
  }
  minus()
  {
    this.quantity--;
  }
  Addtocart()
  {
    this.product.quanity=this.quantity;
    this.item.emit(this.product);
  }

}

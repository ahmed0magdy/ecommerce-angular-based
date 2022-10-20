import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private myserv:UsersService) { }

 products:any[]=[];
 productsInCart:any[]=[]
 
  ngOnInit(): void {
     this.getdata();
  }

  getdata()
  {
    this.myserv.getAllProducts().subscribe(
      (data:any)=>{ 
        this.products=data 
      console.log(data)
    },
      (err)=>{console.log(err)}
    )
  }

  addtocart(event:any){
    if("cart" in localStorage)
    {
      this.productsInCart=JSON.parse(localStorage.getItem("cart")!); // updated array -- ! to escape null 
      let exist = this.productsInCart.find(item => item.id == event.id);
      if(exist){
        alert('Item Already chosen')
      }
      else
      {
        this.productsInCart.push(event);
        localStorage.setItem('cart',JSON.stringify(this.productsInCart) )
  
      }
     
    }
    else
    {
      this.productsInCart.push(event);
      localStorage.setItem('cart',JSON.stringify(this.productsInCart) )
    }



  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  productsInCart:any[]=[]
  total:any=0;
  constructor(private _route:Router) { }

  ngOnInit(): void {
    if(sessionStorage.getItem("userEmail")){
      // alert("welcome "+sessionStorage.getItem("userEmail"));
    }
    else{
      alert("please logged in ....");
      this._route.navigate(['/login']);
    }
    this.listItemstocart()
    this.getTotal()
  }

  listItemstocart()
  {
    if("cart" in localStorage)
    {
      this.productsInCart=JSON.parse(localStorage.getItem("cart")!);
      console.log(this.productsInCart);
    }
  }


  getTotal()
  {
    this.total=0;
    for(let x in this.productsInCart)
    {
      this.total+=this.productsInCart[x].price * this.productsInCart[x].quanity;
    }
  }


  detectChange()
  {
    localStorage.setItem("cart",JSON.stringify(this.productsInCart))
    this.getTotal()
  }

  minus(ind:any)
  {
    this.productsInCart[ind].quanity--;
    if(this.productsInCart[ind].quanity <1)
    {
      this.productsInCart[ind].quanity =1;
    }
    this.getTotal()
    localStorage.setItem("cart",JSON.stringify(this.productsInCart))


  }
  plus(ind:any)
  {
    this.productsInCart[ind].quanity++;
    this.getTotal()
    localStorage.setItem("cart",JSON.stringify(this.productsInCart))


  }

  deleteItem(index:any)
  {
    this.productsInCart.splice(index,1);
    this.getTotal()

    localStorage.setItem("cart",JSON.stringify(this.productsInCart))

  }

  clearCart()
  {
    this.productsInCart=[];
    this.getTotal()
    localStorage.setItem("cart",JSON.stringify(this.productsInCart))

  }

  checkOut()
  {
    if(this.total==0)
    {
      alert('Cart Is Empty')
    }
    else{
      let order = this.productsInCart.map(item=>{
        return {productId:item.id,quantity:item.quanity,totalPrice:item.price*item.quanity}
      })
  
      let finalData=
      {
        userEmail:sessionStorage.getItem('userEmail'),
        date: new Date(),
        order:order,
        finaltotal:this.total
      }
      localStorage.setItem("checkout",JSON.stringify(finalData));

      // console.log(finalData)
      alert('your order has been completed!')
      window.location.href='/'
    }
   
  }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  constructor(private myClient:HttpClient) { }



private url  = "http://localhost:8000/api/products";
// public httpOption ={
//   Headers: new HttpHeaders({
//     'Accept':'application/json'
//   })
// };
private orders = "http://localhost:8000/api/orders"

getAllOrders(){
  return this.myClient.get(this.orders)
}
getByOrderId(id:any){
  return this.myClient.get(`${this.orders}/${id}`)

}
UpdateOrder(updateorder:any,id:any){
  return this.myClient.post(`${this.orders}/${id}`,updateorder) // not put 
}

insertOrder(order:any){
  return this.myClient.post(this.orders,order) 
}

getAllProducts(page:number){
  return this.myClient.get(this.url +'?page=' +page)
}
getById(slug:any){
  return this.myClient.get(`${this.url}/${slug}`)

}
getByIdedit(slug:any){
  return this.myClient.get(`${this.url}/${slug}/edit`)

}
AddProd(newProduct:any){
  return this.myClient.post(this.url,newProduct)
}
UpdateProd(updatePro:any,id:any){
  return this.myClient.post(`${this.url}/${id}`,updatePro) // not put 
}
Deleteprod(id:number){
  return this.myClient.delete(`${this.url}/${id}`)
}
}

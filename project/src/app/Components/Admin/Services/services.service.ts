import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  constructor(private myClient:HttpClient) { }



private orders = "http://localhost:8000/api/orders"
private url  = "http://localhost:8000/api/products"
private signup  = "http://localhost:8000/api/signup"
private login  = "http://localhost:8000/api/login"

getAllOrders(){
  return this.myClient.get(this.orders)
}
getByOrderId(id:any){
  return this.myClient.get(`${this.orders}/${id}`)

}
UpdateOrder(updateorder:any,id:any){
  return this.myClient.post(`${this.orders}/${id}`,updateorder) // not put 
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


addUser(newUser:any){
  return this.myClient.post(this.signup,newUser)
}
userLogin(newUser:any){
  return this.myClient.post(this.login,newUser)
}
getAllUsers(){
  return this.myClient.get(this.signup)
}
getUserById(Id :any){
  return this.myClient.get(`${this.signup}/${Id}`)
}
}
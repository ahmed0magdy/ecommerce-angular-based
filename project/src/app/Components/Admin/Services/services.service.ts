import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  constructor(private myClient:HttpClient) { }



private url  = "http://localhost:8000/api/products"

getAllProducts(page:number){
  return this.myClient.get(this.url +'?page=' +page)
}
getById(id:number){
  return this.myClient.get(`${this.url}/${id}`)
}
AddProd(newProduct:any){
  return this.myClient.post(this.url,newProduct)
}
UpdateProd(updatePro:any,id:number){
  return this.myClient.put(`${this.url}/${id}`,updatePro)
}
Deleteprod(id:number){
  return this.myClient.delete(`${this.url}/${id}`)
}
}

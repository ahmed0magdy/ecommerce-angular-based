import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private myClient:HttpClient) { }



  private url  = "http://localhost:3000/products"
  
  getAllProducts(){
    return this.myClient.get(this.url)
  }
  getById(id:number){
    return this.myClient.get(`${this.url}/${id}`)
  }
}

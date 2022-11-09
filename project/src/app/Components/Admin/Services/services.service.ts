import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  constructor(private myClient:HttpClient) { }



private url  = "http://localhost:8000/api/products"
private signup  = "http://localhost:8000/api/signup"
private login  = "http://localhost:8000/api/login"
private logout  = "http://localhost:8000/api/logout"
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
// userLogout( httpOptions:any ){
//   return this.myClient.delete(this.logout, httpOptions)  //-------------->>>>>>> >> a3mel eh 
// }
getAllUsers(){
  return this.myClient.get(this.signup)
}
getUserById(Id :any){
  return this.myClient.get(`${this.signup}/${Id}`)
}
}
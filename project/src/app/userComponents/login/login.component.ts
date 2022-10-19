import { Component, OnInit } from '@angular/core';
import{FormGroup, FormControl} from "@angular/forms";
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _route:Router , private _http:HttpClient) { }
  login:FormGroup|any;
  ngOnInit(): void {
    this.login= new FormGroup({
      "email": new FormControl(),
      "password": new FormControl()
    })
  }

  loginData(login:FormGroup){

    console.log(this.login.value);//catch data from sign up
    this._http.get<any>("http://localhost:3000/users").subscribe(
      res=>{

        const user = res.find((a:any)=>
        {
          return a.email === this.login.value.email && a.password === this.login.value.password;
        });
        if(user)
        {
          alert('you are successfully login');
          this.login.reset();
          this._route.navigate(['']);//rout home page ??????????????????????
        }
        else if(this.login.value.email == "admin@gmail.com" && this.login.value.password == "12345678")
        {
          alert('you are successfully login as Admin');
          this._route.navigate(['Products']);
          this.login.reset();
        }
        else{
          alert('user not found');
          this._route.navigate(['signup']);
        }
      }

    )
      }

  }


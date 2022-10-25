import { Component, OnInit } from '@angular/core';
import{FormGroup, FormControl,Validators,FormBuilder} from "@angular/forms";
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _route:Router , private _http:HttpClient) {

  }
  login:FormGroup|any;
  ngOnInit(): void {
    this.login= new FormGroup({
      "email": new FormControl( '',[Validators.required, Validators.email]),
      "password": new FormControl('', [Validators.required, Validators.minLength(8)])
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
          let userEmail= this.login.value.email; //declare user email on login
          alert('you are successfully login' + userEmail);
          sessionStorage.setItem("userEmail",userEmail) // key of unique user email
          console.log(userEmail);
          this._route.navigate(['']);//rout home page ??????????????????????
          this.login.reset();
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

      get emailControl(): FormControl {
        return this.login.get('email') as FormControl;
      };
      get passwordControl(): FormControl {
        return this.login.get('password') as FormControl;
      }

    get emailValid(){
      return this.login.controls.email.valid;
    }
    get passValid(){
      return this.login.controls.password.valid;
    }
  }


import { Component, OnInit } from '@angular/core';
import{FormGroup, FormControl,Validators} from "@angular/forms";
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private _route:Router , private _http:HttpClient) { }

  signup:FormGroup|any;
  signupUser:any;
  ngOnInit(): void {
    this.signup = new FormGroup ({
      "name": new FormControl('', [Validators.required, Validators.minLength(3)]),
      "email": new FormControl('',[Validators.email, Validators.required]),
      "password": new FormControl('', [Validators.minLength(7),Validators.maxLength(20),Validators.required]),
      "gender": new FormControl()
    })
  }
  signupData(signup:FormGroup){
    console.log(this.signup.value);
    this.signupUser= this.signup.value.name
    let that= this;
    this._http.post<any>("http://localhost:3000/users", this.signup.value).subscribe(
      {
        next(data){
          that.signup.reset();
          that._route.navigate(['login']);
          alert("you are successfully register... ");
        },
        error(err){
          console.log(err);
          alert('something went wrong');
        }
      }
    )
    // .subscribe(res=>{
    //   this._toast.success(this.signupUser, );
    //   this.signup.reset();
    //   this._route.navigate(['login']);
    // },err=>{
    //   alert('something went wrong');
    // })
  }
  get NameValid(){
    return this.signup.controls.name.valid;
  }
  get EmailValid(){
    return this.signup.controls.email.valid;
  }
  get passwordValid(){
    return this.signup.controls.password.valid;
  }

}

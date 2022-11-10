import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLoggedIn: any;
  constructor( private _route:Router ) { }

  ngOnInit(): void {
    this.isLoggedIn = localStorage.getItem("token");
  }
  logout(){
  
    localStorage.removeItem("token");
    localStorage.removeItem("UserId");
    localStorage.removeItem("adminId");
    localStorage.removeItem("userType");
    window.location.href= "/login"
  } 
 
}

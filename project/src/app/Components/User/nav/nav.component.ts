import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private _route:Router ) { }

  ngOnInit(): void {
  }
  logout(){
    sessionStorage.removeItem("userEmail");
    sessionStorage.removeItem("Admin");
    this._route.navigate(['']);
   }
}

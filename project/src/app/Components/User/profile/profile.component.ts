import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServicesService } from '../../Admin/Services/services.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private myservice:ServicesService,activatedroute:ActivatedRoute) { }
  profile:any;
  id:any = 1;
  ngOnInit(): void {
    this.myservice.getByProfileId(this.id).subscribe((data)=>{
      this.profile = data;
      console.log(data);
    })

  }
  DeleteOrder(prod_id:any){
    console.log(prod_id);
    this.myservice.DeleteOrd(prod_id).subscribe((data)=>{
      console.log(data);
      window.location.href = "/profiles";
    })
  }

}

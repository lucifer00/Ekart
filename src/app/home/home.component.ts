import { Component, OnInit } from '@angular/core';
import { AuthGuardService } from '../auth-guard.service';
import { InformationService } from '../information.service';
import { Router } from '@angular/router';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products:any[]
  showDescription=false;
  prodDesc:any;
  quantity=1;
  constructor(private informationService: InformationService,private router:Router,private homeService:HomeService) { }

  ngOnInit() {
    this.homeService.getAllProducts().subscribe(
      data=>{
        console.log(data);
        this.products=data;
      }
    )
  }
  seeFullDesc(product:any){
    this.informationService.prodId=product.prod_id;
    this.showDescription=false;
    this.homeService.getProdDesc().subscribe(
      data=>{this.prodDesc=data;console.log(data);this.showDescription=true;}
    )
  }
  addToKart(product:any){
    console.log(sessionStorage.getItem("userId"))
    if(sessionStorage.getItem("userId")){}
    else 
      this.router.navigate(['/login']);
  }
}

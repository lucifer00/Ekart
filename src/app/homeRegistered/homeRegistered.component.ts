import { Component, OnInit } from '@angular/core';
import { AuthGuardService } from '../auth-guard.service';
import { InformationService } from '../information.service';
import { Router } from '@angular/router';
import { HomeRegisteredService } from './homeRegistererd.service';
import { cart } from '../kart/cart';

@Component({
  selector: 'app-home',
  templateUrl: './homeRegistered.component.html',
  styleUrls: ['./homeRegistered.component.css']
})
export class HomeRegisteredComponent implements OnInit {
  products:any[]
  showDescription=false;
  prodDesc:any;
  quantity=1;
  mycart:cart=new cart();
  constructor(private informationService: InformationService,private router:Router,private homeService:HomeRegisteredService) { }


  ngOnInit() {
    this.homeService.getAllProducts().subscribe(
      data=>{
        console.log(data);
        this.products=data;
      }
    )
    this.homeService.getCartCount().subscribe(
      data=>{
        console.log(data);
        this.informationService.kartCount=data;
      }
    )
  }
  loadKart(){
    this.router.navigate(["/kart"])
  }
  seeFullDesc(product:any){
    this.informationService.prodId=product.prod_id;
    this.showDescription=false;
    this.homeService.getProdDesc().subscribe(
      data=>{this.prodDesc=data;console.log(data);this.showDescription=true;}
    )
  }
  addToKart(product:any){
    this.informationService.prodId=product.prod_id;
    this.mycart.product_id=product.prod_id;
    this.mycart.quantity=this.quantity;
    console.log(this.mycart)
    this.homeService.addToKart(this.mycart).subscribe(
      data=>{this.informationService.kartCount+=1;},
      error=>{}
    )
  }
  logout(){
    sessionStorage.clear();
    this.router.navigate(["/home"]);
  }
}

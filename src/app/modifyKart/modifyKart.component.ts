import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { InformationService } from '../information.service';
import { ModifyKartService } from './modifyKart.service';
import { cart } from '../kart/cart';

@Component({
  selector: 'app-login',
  templateUrl: './modifyKart.component.html',
  styleUrls: ['./modifyKart.component.css']
})
export class ModifyKartComponent implements OnInit {
    prodDesc:any;
    quantity:number;
    modifyCart:cart=new cart();
    errorMsg=null;
    show=false;
    constructor(private informationService: InformationService,private router:Router,private kartService:ModifyKartService){}
    ngOnInit(){
      this.quantity=this.informationService.quantity;
        this.kartService.getKartSpecific().subscribe(
          data=>{this.prodDesc=data;console.log(data);this.show=true;}
        )
    }
    modify(){
      this.modifyCart.product_id=this.informationService.prodId;
      if(this.quantity==this.informationService.quantity)this.errorMsg="Cart not modified";
      else{
        this.errorMsg=null;
        this.modifyCart.quantity=this.quantity;
        this.kartService.modifyKartUpdate(this.modifyCart).subscribe(
          data=>{
            this.router.navigate(["/kart"]);
          },
          error=>{
            this.errorMsg=error;
          }
        )
      }
    }
    logout(){
      sessionStorage.clear();
      this.router.navigate(['/home'])
    }
    delete(){
      this.modifyCart.product_id=this.informationService.prodId;
      this.modifyCart.quantity=this.quantity;
      this.kartService.modifyKartDelete(this.modifyCart).subscribe(
        data=>{
          this.router.navigate(["/kart"]);
        },
        error=>{
          this.errorMsg=error;
        }
      )
    }
}

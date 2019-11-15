import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { InformationService } from '../information.service';
import { KartService } from './kart.service';
import { cart } from './cart';

@Component({
  selector: 'app-login',
  templateUrl: './kart.component.html',
  styleUrls: ['./kart.component.css']
})
export class KartComponent implements OnInit {
    modifyCart:cart=new cart();
    karts:any;
    constructor(private informationService: InformationService,private router:Router,private kartService:KartService){}
    ngOnInit(){
        this.kartService.getKart().subscribe(
          data=>{this.karts=data;console.log(data);}
        )
    }
    modifyKart(kart:any){
      this.informationService.prodId=kart.product_id;
      this.informationService.quantity=kart.quantity;
      this.router.navigate(["/modifyKart"])
    }
    delete(kart:any){
      this.modifyCart.product_id=kart.product_id;
      this.kartService.modifyKartDelete(this.modifyCart).subscribe(
        data=>{
          location.reload();
        }
      )
    }
    logout(){
      sessionStorage.clear();
      this.router.navigate(["/home"]);
    }  
}

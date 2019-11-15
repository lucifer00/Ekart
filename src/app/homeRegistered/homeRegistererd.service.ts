import { Injectable } from '@angular/core';
import { InformationService } from '../information.service';
import { Observable } from 'rxjs';
import { RestService } from '../rest.service';
import { cart } from '../kart/cart';

@Injectable()
export class HomeRegisteredService {  
  constructor(private restService:RestService,private informationService:InformationService) {}
  getAllProducts():Observable<any> {
    return this.restService.get(this.informationService.productsUrl);
  }
  getProdDesc():Observable<any> {
    return this.restService.get(this.informationService.productsUrlSpecific+"/"+this.informationService.prodId);
  }
  addToKart(data:cart):Observable<boolean> {
    return this.restService.post(this.informationService.addCartUrl+sessionStorage.getItem("userId")+"/addtokart",data);
  }  
  getCartCount():Observable<number>{
    return this.restService.get(this.informationService.kartsCountUrl+"/cartcount");
  }
}

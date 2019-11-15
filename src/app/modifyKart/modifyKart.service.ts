import { Injectable } from "@angular/core";
import { RestService } from "../rest.service";
import { InformationService } from "../information.service";
import { Observable } from "rxjs";
import { cart } from "../kart/cart";

@Injectable()
export class ModifyKartService {  
  constructor(private restService:RestService,private informationService:InformationService) {}
  getKartSpecific():Observable<any> {
    return this.restService.get(this.informationService.productsUrlSpecific+"/"+
    this.informationService.prodId);
  }
  modifyKartUpdate(data:cart):Observable<boolean>{
    return this.restService.post(this.informationService.kartsUrl+"/modifykart/update",data);
  }
  modifyKartDelete(data:cart):Observable<boolean>{
    return this.restService.post(this.informationService.kartsUrl+"/modifykart/delete",data);
  }
  logout(){
    sessionStorage.clear();
    console.log(sessionStorage.getItem("userId"))
  }  
}

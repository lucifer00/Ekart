import { Injectable } from "@angular/core";
import { RestService } from "../rest.service";
import { InformationService } from "../information.service";
import { Observable } from "rxjs";
import { cart } from "./cart";

@Injectable()
export class KartService {  
  constructor(private restService:RestService,private informationService:InformationService) {}
  getKart():Observable<any> {
    return this.restService.get(this.informationService.kartsUrl+"/kart");
  }  
  modifyKartDelete(data:cart):Observable<boolean>{
    return this.restService.post(this.informationService.kartsUrl+"/modifykart/delete",data);
  }
}

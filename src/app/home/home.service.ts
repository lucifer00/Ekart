import { Injectable } from '@angular/core';
import { RestService } from '../rest.service';
import { InformationService } from '../information.service';
import { Observable } from 'rxjs';

@Injectable()
export class HomeService {

  constructor(private restService:RestService,private informationService:InformationService) {}
  getAllProducts():Observable<any> {
    return this.restService.get(this.informationService.productsUrl);
  }
  getProdDesc():Observable<any> {
    return this.restService.get(this.informationService.productsUrlSpecific+"/"+this.informationService.prodId);
  }
}

import { Injectable } from '@angular/core';
import { RestService } from '../rest.service';
import { InformationService } from '../information.service';
import { Observable } from 'rxjs';
import { Address } from './address';

@Injectable()
export class AddressService {

  constructor(private restService:RestService,private informationService:InformationService) {}
  getAllAddress():Observable<Address>{
    return this.restService.get(this.informationService.addressGetAllUrl);
  }
  addAddress(data:Address):Observable<string>{
    return this.restService.post(this.informationService.addressAddUrl,data);
  }
  modifyAddress(data:Address):Observable<string>{
    return this.restService.post(this.informationService.addressModifyAndDeleteUrl+
    this.informationService.addressIdModified+"/modify",data);
  }
  deleteAddress(addressId:string):Observable<any>{
    return this.restService.get(this.informationService.addressModifyAndDeleteUrl+
      addressId+"/delete")
  }
}

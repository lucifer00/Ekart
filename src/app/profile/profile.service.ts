import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RestService } from './../rest.service';
import { InformationService } from './../information.service';
import { Profile } from './profile';

@Injectable()
export class ProfileService {

  constructor(private informationService: InformationService, private restService: RestService) { }
  getProfile():Observable<Profile>{
    return this.restService.get(this.informationService.getProfileUrl);
  }
  updateProfile(data:Profile):Observable<boolean>{
    return this.restService.post(this.informationService.updateProfileUrl,data);
  }
}

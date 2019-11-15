import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Login } from './login';
import { RestService } from './../rest.service';
import { InformationService } from './../information.service';

@Injectable()
export class LoginService {

  constructor(private informationService: InformationService, private restService: RestService) { }

  login(data: Login): Observable<boolean> {
    console.log(data)
    return this.restService.post(this.informationService.loginUrl, data);
  }
}

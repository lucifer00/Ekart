import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { InformationService } from './information.service';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(public informationService: InformationService, public router: Router) { }

  canActivate(): boolean {
    if (sessionStorage.getItem("userId")) {
      return true;
    } else {
      console.log("here")
      this.router.navigate(['/home']);
      return false;
    }
  }
}

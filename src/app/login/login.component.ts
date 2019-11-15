import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { LoginService } from './login.service';
import { InformationService } from './../information.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  submit: boolean;
  errorMsg: string;
  loginForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private router: Router,
    private loginService: LoginService, private informationService: InformationService) { }

  login() {
    this.submit = false;
    this.loginService.login(this.loginForm.value).subscribe(
      data => {
        if (data) {
          console.log(data)
          this.informationService.userId = this.loginForm.value.userId;
          sessionStorage.setItem("userId",this.informationService.userId);
          console.log(this.informationService.userId)
          console.log(this.informationService.userId);
          this.router.navigate(['/homeRegistered']);
          this.submit=true;
        } else {
          console.log("here")
          this.errorMsg = 'Invalid user id/password';
          this.submit = false;
        }
      },
      error => {
        console.log("here")
        this.errorMsg = error;
        this.submit = false;
      }
    );
  }

  ngOnInit() {
    this.errorMsg="";
    this.loginForm = this.formBuilder.group({
      userId: [''],
      password: ['', [Validators.required]]
    });
  }

}

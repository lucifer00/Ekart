import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { RegisterService } from './register.service';
import { InformationService } from './../information.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  submit: boolean;
  successMsg: string;
  errorMsg: string;
  registerForm: FormGroup;
  password:string='';
  constructor(private formBuilder: FormBuilder, private router: Router,
    private registerService: RegisterService, private informationService: InformationService) { }

  register() {
    this.submit = true;
    this.registerService.register(this.registerForm.value).subscribe(
      data => {if(data.errorCode==502){console.log("here");
        this.errorMsg="Email id already present";
        this.submit=false;
      }
    else{
      this.successMsg="Registererd Successfully!"
    }},
      error => {
        this.errorMsg = error;
        this.submit = false;
      }
    );
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],
      name: ['', [Validators.required,Validators.pattern('^[a-zA-Z ]+')]],
      password: ['', [Validators.required,Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]],
      userId:['']
    });
  }

}

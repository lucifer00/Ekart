import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { InformationService } from './../information.service';
import { ProfileService } from './profile.service';
import { Profile } from './profile';

@Component({
  selector: 'app-register',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  passwordUpdateForm:FormGroup;
  profileUser:Profile=null;
  email:string=null;
  emailInitial:string=null;
  errorMsg=null;
  profileUpdate:Profile=new Profile();
  passwordUpdateValid=false;
  constructor(private formBuilder: FormBuilder, private router: Router,
    private profileService: ProfileService, private informationService: InformationService) { }

  ngOnInit() {
    this.profileService.getProfile().subscribe(
      data=>{this.profileUser=data;this.email=data.email;this.emailInitial=data.email;},
      error=>{
        this.errorMsg=error;
      }
    )
    this.passwordUpdateForm = this.formBuilder.group({
      password: ['', [Validators.required,Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]],
      
    });
  }
  updatePassword(){
    this.passwordUpdateValid=true;
}
modifyPassword(){
  this.profileUpdate.name=this.profileUser.name;
    this.profileUpdate.email=this.email;
    this.profileUpdate.password=this.passwordUpdateForm.value['password'];
    this.errorMsg=null;
    console.log(this.profileUpdate)
    this.profileService.updateProfile(this.profileUpdate).subscribe(
        data=>{if(data==false)this.errorMsg="Some error Occured";
      },
      )
      location.reload();
}
  updateEmail(){
    this.profileUpdate.name=this.profileUser.name;
    this.profileUpdate.email=this.email;
    if(this.emailInitial==this.email){
      this.errorMsg="No change in email";
    }
    else{
      this.errorMsg=null;
      this.profileService.updateProfile(this.profileUpdate).subscribe(
        data=>{if(data==false)this.errorMsg="Some error Occured";},
      )
    }
    location.reload();
  }
  logout(){
    sessionStorage.clear();
    this.router.navigate(['/home'])
  }
}

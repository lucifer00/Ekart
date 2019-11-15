import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { RestService } from './rest.service';
import { LoginService } from './login/login.service';
import { RegisterService } from './register/register.service';
import { HomeService } from './home/home.service';
import { InformationService } from './information.service';
import { AuthGuardService } from './auth-guard.service';
import { KartComponent } from './kart/kart.component';
import { HomeRegisteredComponent } from './homeRegistered/homeRegistered.component';
import { HomeRegisteredService } from './homeRegistered/homeRegistererd.service';
import { KartService } from './kart/kart.service';
import { ModifyKartService } from './modifyKart/modifyKart.service';
import { ModifyKartComponent } from './modifyKart/modifyKart.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileService } from './profile/profile.service';
import { AddressComponent } from './address/address.component';
import { AddressService } from './address/address.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    KartComponent,
    HomeRegisteredComponent,
    ModifyKartComponent,
    ProfileComponent,
    AddressComponent
  ],
  imports: [
    BrowserModule, HttpModule, ReactiveFormsModule, AppRoutingModule,FormsModule
  ],
  providers: [
    RestService,
    LoginService,
    RegisterService,
    HomeService,
    InformationService,
    AuthGuardService,
    HomeRegisteredService,
    KartService,
    ModifyKartService,
    ProfileService,
    AddressService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuardService } from './auth-guard.service';
import { KartComponent } from './kart/kart.component';
import { HomeRegisteredComponent } from './homeRegistered/homeRegistered.component';
import { ModifyKartComponent } from './modifyKart/modifyKart.component';
import { ProfileComponent } from './profile/profile.component';
import { AddressComponent } from './address/address.component';
const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'home', component: HomeComponent},
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path:'kart',component:KartComponent,canActivate:[AuthGuardService]},
    { path:'homeRegistered',component:HomeRegisteredComponent,canActivate:[AuthGuardService]},
    { path:'modifyKart',component:ModifyKartComponent},
    { path:'profile',component:ProfileComponent,canActivate:[AuthGuardService]},
    { path:"address",component:AddressComponent,canActivate:[AuthGuardService]}
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }

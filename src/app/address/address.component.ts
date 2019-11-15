import { Component, OnInit } from '@angular/core';
import { InformationService } from '../information.service';
import { Router } from '@angular/router';
import { AddressService } from './address.service';
import { Address } from './address';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ValidateState } from './CustomValidator';

@Component({
  selector: 'app-home',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {
  addresses:any=[];
  showAddresses=true;
  showAddAddress=false;
  addressForm:FormGroup;
  showAddAddressIfEmpty=false;
  address=null;
  city=null;
  state=null;
  pincode=null;
  phonenumber=null;
  modifyAddress=false;
  constructor(private formBuilder: FormBuilder,private informationService: InformationService,private router:Router,private addressService:AddressService) { }

  ngOnInit() {
    this.addressService.getAllAddress().subscribe(
      data=>{this.addresses=data;if(this.addresses.length==0){console.log("here");this.showAddAddressIfEmpty=true;this.showAddAddress=true;this.showAddresses=false;}
    else{
      this.showAddAddressIfEmpty=false;
      this.showAddresses=true;this.showAddAddress=false;
    }}
    )
    this.addressForm=this.formBuilder.group({
      address:['',[Validators.required]],
      city:['',[Validators.required]],
      state:['',[Validators.required,ValidateState]],
      pincode:['',[Validators.required,Validators.pattern('[0-9]{6}')]],
      phonenumber:['',[Validators.required,Validators.pattern('[0-9]{10}')]]
    })
  }
  addAddress(){
    console.log(this.addressForm.value);
    this.addressService.addAddress(this.addressForm.value).subscribe(
      data=>{console.log(data);location.reload();}
    )
    this.showAddAddress=false;
  }
  addNew(){
    this.showAddAddress=true;
  }
  modify(address:Address){
    this.modifyAddress=true;
    this.address=address.address;
    this.city=address.city;
    this.state=address.state;
    this.pincode=address.pincode;
    this.phonenumber=address.phonenumber;
    this.informationService.addressIdModified=address.addressId;
  }
  modifyAddressNew(){
    this.addressService.modifyAddress(this.addressForm.value).subscribe(
      data=>{console.log(data);}
    )
    this.modifyAddress=false;
    location.reload();
  }
  delete(address:Address){
    this.addressService.deleteAddress(address.addressId).subscribe(
      data=>{},
      error=>{}
    );
    location.reload();
  }
  logout(){
    sessionStorage.clear();
    this.router.navigate(['/home']);
  }
}

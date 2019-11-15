import { Injectable } from '@angular/core';

@Injectable()
export class InformationService {

  userId:string=null;
  prodId:string=null;
  quantity:number=null;
  kartCount:number=null;
  addressIdModified=null;
  loginUrl = 'http://localhost:5000/account/login';
  registerUrl = 'http://localhost:5000/account/signup';
  productsUrl= `http://localhost:5000/product/products`;
  productsUrlSpecific= `http://localhost:5000/product/products`;
  addCartUrl=`http://localhost:5000/cart/`;
  kartsUrl=`http://localhost:5000/cart/`+sessionStorage.getItem("userId");
  getProfileUrl=`http://localhost:5000/account/`+sessionStorage.getItem("userId");
  updateProfileUrl=`http://localhost:5000/account/`+sessionStorage.getItem("userId")+"/update";
  kartsCountUrl=`http://localhost:5000/cart/`+sessionStorage.getItem("userId");
  addressAddUrl=`http://localhost:5000/address/`+sessionStorage.getItem("userId")+`/address/add`;
  addressGetAllUrl=`http://localhost:5000/address/`+sessionStorage.getItem("userId")+`/address`;
  addressModifyAndDeleteUrl=`http://localhost:5000/address/`+sessionStorage.getItem("userId")+"/address/";
}

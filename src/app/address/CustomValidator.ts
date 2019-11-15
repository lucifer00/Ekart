import { AbstractControl } from '@angular/forms';

export function ValidateState(control: AbstractControl) {
  if (["Andhra Pradesh","Arunachal Pradesh",
  "Assam","Bihar","Chhattisgarh","Goa","Gujarat","Haryana","Himachal Pradesh","Jammu and Kashmir",
  "Jharkhand","Karnataka","Kerala","Madhya Pradesh","Maharashtra","Manipur","Meghalaya","Mizoram",
  "Nagaland","Odisha","Punjab","Rajasthan","Sikkim","Tamil Nadu","Telangana","Tripura","Uttar Pradesh",
  "Uttarakhand","West Bengal","Andaman and Nicobar","Chandigarh","Dadra and Nagar Haveli","Daman and Diu",
  "Lakshadweep","Delhi","Puducherry"].includes(control.value)==false) {
    return { valid: true };
  }
  return null;
}
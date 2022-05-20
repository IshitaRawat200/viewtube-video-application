import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyLoginService {
  isValidated:boolean=false;
  isRole:boolean=false;

  constructor() { }

  validate(email:string,password:string):boolean
  {
    //static login credential with simple blank or may be value
    //Access the restful service get the logindetails and then check - HttpClient Module
    if(email==='' || password==='')
    {
      console.log('Service :isValidated : '+this.isValidated);
      this.isValidated=false;
    }
    else
    {
      this.isValidated=true;
      this.isRole=false;
      console.log('Service :isValidated : '+this.isValidated);
    }

    return this.isValidated;
  }
}

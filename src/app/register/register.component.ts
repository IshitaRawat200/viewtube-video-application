import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  email:any='';
  password:any='';
  confirmpassword:any='';
  isValidated:boolean=false;
 
  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  register(){
    if(this.email===""||this.password===""||this.confirmpassword==="")
    {
      this.isValidated=false;
    }
    else{
      this.isValidated=true;
      this.route.navigate(['login']);
    }
  }

}

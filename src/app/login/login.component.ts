import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyLoginService } from '../my-login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email:any='';
  password:any='';
  constructor(private myLoginService:MyLoginService,private route:Router) { }

  ngOnInit(): void {
  }
  loginCheck(){
    console.log('logincheck')
    if(this.myLoginService.validate(this.email,this.password))
    {
        this.route.navigate(['studio']);
    }
  }

}

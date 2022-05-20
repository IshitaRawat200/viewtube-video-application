import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { MyLoginService } from './my-login.service';
import { RegisterComponent } from './register/register.component';

@Injectable({
  providedIn: 'root'
})
export class AuthorizeGuard implements CanActivateChild {
  
  constructor(private myLoginService:MyLoginService){}
  canActivateChild()
  {
    return this.myLoginService.isRole;
  }
  
}

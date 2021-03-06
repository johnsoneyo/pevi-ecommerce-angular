import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { LoginService } from './services/login.service';

@Injectable()
export class LoginRouteGuard implements CanActivate {

  constructor(private loginService:LoginService){}

  canActivate(){
    return this.loginService.isAdminLoggedIn();
  }
  
}

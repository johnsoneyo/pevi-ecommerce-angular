import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {

  constructor() { }

  public isLogged:boolean=true;

  isAdminLoggedIn():boolean{
    return this.isLogged;
  }

  setLoginStatus(isLogged:boolean){
    this.isLogged = isLogged;
  }

}

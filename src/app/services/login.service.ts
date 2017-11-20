import { Injectable } from '@angular/core';
import { LoginParam } from '../models/login-param';
import { Observable } from 'rxjs/Observable';
import { HttpService } from './http.service';

@Injectable()
export class LoginService {

  constructor(private http: HttpService) { }

  public isLogged: boolean = true;

  isAdminLoggedIn(): boolean {
    return this.isLogged;
  }

  attemptLogin(login: LoginParam): Observable<any> {
    return this.http.post('auth/pvlogin', login);
  }

  setLoginStatus(isLogged: boolean) {
    this.isLogged = isLogged;
  }

 
  

}

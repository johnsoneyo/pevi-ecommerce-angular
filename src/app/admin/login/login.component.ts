import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ProcessOrderComponent } from '../../process-order/process-order.component';
import { LoginParam } from '../../models/login-param';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { NavserviceService } from '../../navservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private serve: LoginService,private router: Router) { }


  loginParam: FormGroup;
  invalidLogin: boolean = false;

  ngOnInit() {
   
    this.loginParam = new FormGroup({
      loginId: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });


  }

  login({ value, valid }: { value: LoginParam, valid: boolean }): void {
    this.serve.attemptLogin(value).subscribe(suc => {
      if (suc.status == 200) {
          this.serve.setLoginStatus(true);
          this.router.navigate(['/dashboard']);
      }
    }, res => {
      if (res.status == 403) {
           this.invalidLogin = true;
         }

    });
  }

  removeCard(){
    this.invalidLogin = false;
  }


}

import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ProcessOrderComponent } from '../../process-order/process-order.component';
import { LoginParam } from '../../models/login-param';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { NavserviceService } from '../../navservice.service';
import { Router } from '@angular/router';
import { NotificationsService} from 'angular4-notify';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private serve: LoginService,private router: Router,
    private _service: NotificationsService,private toastr : ToastrService) { }


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
          this.serve.setPreviousURL('/login');
      }
    }, res => {
      if (res.status >= 400) {
          this.toastr.info('Invalid user ', 'please check your cred!',{
             closeButton : true,progressBar: true,progressAnimation : 'increasing'
          });
           
         }

    });
  }

  removeCard(){
    this.invalidLogin = false;
  }

  

}

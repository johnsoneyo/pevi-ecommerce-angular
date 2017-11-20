import { Component, OnInit, ViewChild } from '@angular/core';
import { NavserviceService } from '../../navservice.service';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  @ViewChild("sidenav") sidenav;
  public isOpen: boolean;
  constructor(private service: NavserviceService, private router: Router, private loginserve: LoginService) { }

  ngOnInit() {
    this.service.change.subscribe(data => {
      if (!this.isOpen) {
        this.sidenav.open();
        this.isOpen = true;
      } else {
        this.sidenav.open();
        this.isOpen = true;
      }

    });
  }

  public links = [{ "title": "Products ", "go": "products" },
  { "title": "Categories ", "go": "categories" },
  { "title": "Orders ", "go": "orders" }];

  openMenu() {
    this.service.change.emit();
  }

  logout() {
    this.loginserve.setLoginStatus(false);
    this.router.navigate(['/login']);
  }


}

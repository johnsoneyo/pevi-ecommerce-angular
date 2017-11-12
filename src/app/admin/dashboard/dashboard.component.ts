import { Component, OnInit, ViewChild } from '@angular/core';
import { NavserviceService } from '../../navservice.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  @ViewChild("sidenav") sidenav;
  public isOpen:boolean = false;
  constructor(private service:NavserviceService) { }

  ngOnInit() {
    this.service.change.subscribe(data=>{
      if(!this.isOpen){
       this.sidenav.open();
       this.isOpen = true;
      }else {
       this.sidenav.close();
       this.isOpen= false;
      }
 
    });
  }

  public links = [{"title":"Products ","go":"/"},
  {"title":"Categories ","go":"categories"},
  {"title":"Promos ","go":"/promos"}];

  openMenu(){
    this.service.change.emit();
  }

  

}

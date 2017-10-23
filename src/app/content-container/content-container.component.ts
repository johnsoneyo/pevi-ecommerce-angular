import { Component, OnInit,Output, ViewChild, EventEmitter } from '@angular/core';
import { NavserviceService } from '../navservice.service';
import {Product} from '../product';
import { Order } from '../order';
import { ProductService } from '../product.service';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Component({
  selector: 'app-content-container',
  templateUrl: './content-container.component.html',
  styleUrls: ['./content-container.component.css']
})
export class ContentContainerComponent implements OnInit {

  @ViewChild("sidenav") sidenav;
  isOpen:boolean;

  public orders: Order[];

  constructor(private service: NavserviceService,private serve :ProductService) {

  }

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

   this.serve.getOrdersBroadcast().subscribe(data=>{
    this.orders = data;
  });


  }


  removeOrder(order : Order){
    for(var i=0; i<this.orders.length; i++){
       let ord = this.orders[i];
       if(ord.productId === ord.productId){
         this.orders.splice(i,1);
         break;
       }
    
       
    }
   this.serve.setOrders(this.orders); 
  }

 
}



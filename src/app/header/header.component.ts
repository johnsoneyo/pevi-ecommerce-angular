import { Component, OnInit, EventEmitter, Output ,ViewChild} from '@angular/core';
import { NavserviceService } from '../navservice.service';
import { ProductService } from '../product.service';
import { Order } from '../order';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 
  public cartItemCount:number;
  public cartItems: Order[];

  constructor(private service: NavserviceService,private pserv: ProductService) { }

  ngOnInit() {
    this.pserv.getOrdersBroadcast().subscribe(data=>{
      this.cartItemCount = data.length;
      this.cartItems = data;
    });
   
  }


  open(){
    this.service.change.emit();   
  }

}

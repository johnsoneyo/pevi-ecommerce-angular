import { Component, OnInit,Output, ViewChild, EventEmitter, Input } from '@angular/core';
import { NavserviceService } from '../navservice.service';
import {Product} from '../product';
import { Order } from '../order';
import { ProductService } from '../product.service';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatIconRegistry} from '@angular/material';
import { ProcessOrderComponent } from '../process-order/process-order.component';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-content-container',
  templateUrl: './content-container.component.html',
  styleUrls: ['./content-container.component.css']
})
export class ContentContainerComponent implements OnInit {

  @ViewChild("sidenav") sidenav;
  isOpen:boolean;

  @Input()
  cartMultiply = 'cancel';
  @Input()
  cartCheckout = 'checkout';

  public orders: Order[];
  public total:number = 0.0;
  
  constructor(private service: NavserviceService,
    private serve :ProductService,public dialog: MatDialog, private matIconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer)
    {  
        matIconRegistry
        .addSvgIcon('cancel',
        sanitizer.bypassSecurityTrustResourceUrl('assets/images/Cartmultiply.svg'))
        .addSvgIcon('checkout',
        sanitizer.bypassSecurityTrustResourceUrl('assets/images/Cart.svg'));
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
     console.log(data);
     if(data!=undefined){
      this.orders = data;
      this.total = 0.0;
     for(let ord of this.orders){
       this.total+=ord.price*ord.quantity;
     }
    } else {
      this.orders = [];
      this.total = 0.0;
    }
   });


  }


  removeOrder(order : Order){
    for(var i=0; i<this.orders.length; i++){
       let ord = this.orders[i];
       if(order.productId === ord.productId){
         this.orders.splice(i,1);
         break;
       }   
    }
   this.serve.setOrders(this.orders); 
  }


  removeQuantity(order : Order){
    if(order.quantity > 0){
      for(var i=0; i<this.orders.length; i++){
        let ord = this.orders[i];
        if(order.productId === ord.productId){
          let c = --order.quantity;
           this.orders[i].quantity = c;
           this.serve.setOrders(this.orders);  
          break;
        }   
     

    }
  
    }
    
  }
  
  addQuantity(order : Order){
    if(order.quantity >= 0){
      for(var i=0; i<this.orders.length; i++){
        let ord = this.orders[i];
        if(order.productId === ord.productId){
          let c = ++order.quantity;
           this.orders[i].quantity = c;
           this.serve.setOrders(this.orders);  
          break;
        }   
     

    }
  
    }
        
  }


  clearCart():void{
    this.serve.clearOrders();
  }


  processOrder():void {

    let dialogRef = this.dialog.open(ProcessOrderComponent, {
      height: '500px',
      width: '700px',
      data : this.orders
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
     
    });

  }
 
}



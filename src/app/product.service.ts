import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Product } from './product';
import { Observable } from 'rxjs/Observable';
import { Order } from './order';

@Injectable()
export class ProductService {

private subject = new Subject<any>();
private orderObservable = new Subject<any>();
private orders:Order[];

  constructor() {
    this.orders = [];
   }

  setProducthardcoded(products : Product[]){
     this.subject.next(products);
  }

  getBroadcast():Observable<any>{
    return this.subject.asObservable();
  }

  setOrder(order : Order){
    this.orders.push(order);
    this.orderObservable.next(this.orders);
  }


  setOrders(orders : Order[]){
    this.orders = orders;
    this.orderObservable.next(this.orders);
  }

  getOrdersBroadcast():Observable<any>{
    return this.orderObservable.asObservable();
  }



}

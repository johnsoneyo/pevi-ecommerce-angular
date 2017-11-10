import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Product } from './product';
import { Observable } from 'rxjs/Observable';
import { Order } from './order';
import { HttpService } from './services/http.service';

@Injectable()
export class ProductService {

private subject = new Subject<any>();
private orderObservable = new Subject<any>();
private orders:Order[];

  constructor(private http:HttpService) {
    this.orders = [];
   }

  setProducthardcoded(products : Product[]){
     this.subject.next(products);
  }

  getProducts(pageNumber:number):Observable<any>{
   return this.http.get('api/product/getProducts/'+pageNumber).map(res=>res.json());
  }

  getProductsByRange(from:number,to:number):Observable<any>{
    return this.http.get('api/product/getProductByRange/'+from+'/'+to);
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

  clearOrders():void{
    this.orders = [];
    this.orderObservable.next();
  }



}

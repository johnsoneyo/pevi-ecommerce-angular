import { Injectable } from '@angular/core';
import { CustomerOrder } from './customer-order';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Survey } from './survey';

@Injectable()
export class OrderService {

  constructor(private http: Http) { }

  
  orderForCustomer(customerOrders: CustomerOrder):Observable<any>{

    return this.http.post('',customerOrders);
  
  }

  rateProduct(rate : Survey):Observable<any>{

    return this.http.post('',rate);

  }

}

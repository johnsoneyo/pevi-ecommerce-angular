import { Injectable } from '@angular/core';
import { AnonymousOrder } from '../anonymous-order';
import { HttpService } from './http.service';
import { Observable } from 'rxjs';

@Injectable()
export class OrderService {

  constructor(private http: HttpService) { }


  processOrders(orders : AnonymousOrder): Observable<any> {
    return  this.http.post('api/orders/saveOrder',orders);

  }

}

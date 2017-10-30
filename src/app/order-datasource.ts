
import { Observable } from "rxjs/Observable";
import { Order } from "./order";
import { DataSource } from "@angular/cdk/table";

export class OrderDataSource extends DataSource<any> {
    
    constructor(private orders: Order[]) {
        super ();
      }
    
    
    /** Connect function called by the table to retrieve one stream containing the data to render. */
    connect(): Observable<Order[]> {
      return Observable.of(this.orders);
    }
  
    disconnect() {}
  }
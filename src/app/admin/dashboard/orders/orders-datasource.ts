import { DataSource } from "@angular/cdk/collections";
import { Observable } from "rxjs/Observable";
import { AnonymousOrder } from "../../../models/anonymous-order";



export class OrderDatasource extends DataSource<any> {
    /** Connect function called by the table to retrieve one stream containing the data to render. */
    constructor(private category: AnonymousOrder[]) {
      super();
    }
  
    connect(): Observable<AnonymousOrder[]> {
      return Observable.of(this.category);
    }
  
    disconnect() {}
  }
  
  
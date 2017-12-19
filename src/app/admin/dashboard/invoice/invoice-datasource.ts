import { DataSource } from "@angular/cdk/collections";
import { Observable } from "rxjs/Observable";
import { AnonymousOrder } from "../../../models/anonymous-order";
import { Invoice } from "../../../models/invoice";



export class InvoiceDatasource extends DataSource<any> {
    /** Connect function called by the table to retrieve one stream containing the data to render. */
    constructor(private invoice: Invoice[]) {
      super();
    }
  
    connect(): Observable<Invoice[]> {
      return Observable.of(this.invoice);
    }
  
    disconnect() {}
  }
  
  
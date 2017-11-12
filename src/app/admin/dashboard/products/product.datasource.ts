import { DataSource } from "@angular/cdk/collections";
import { Observable } from "rxjs/Observable";
import { Product } from "../../../product";

export class ProductDataSource extends DataSource<any> {
    /** Connect function called by the table to retrieve one stream containing the data to render. */
    constructor(private products: Product[]) {
      super();
    }
  
    connect(): Observable<Product[]> {
      return Observable.of(this.products);
    }
  
    disconnect() {}
  }
  
  
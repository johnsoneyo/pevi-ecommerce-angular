import { DataSource } from "@angular/cdk/collections";
import { Category } from "../../../models/category";
import { Observable } from "rxjs/Observable";


export class CategoryDatasource extends DataSource<any> {
    /** Connect function called by the table to retrieve one stream containing the data to render. */
    constructor(private category: Category[]) {
      super();
    }
  
    connect(): Observable<Category[]> {
      return Observable.of(this.category);
    }
  
    disconnect() {}
  }
  
  
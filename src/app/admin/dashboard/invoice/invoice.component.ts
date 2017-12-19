import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../product.service';
import { InvoiceDatasource } from './invoice-datasource';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {

  constructor(private service: ProductService) { }
  
    displayedColumns = ['id','alias','paid','ordersCount'];
    dataSource: InvoiceDatasource;
  
    ngOnInit() {
      this.service.getInvoices(1).subscribe(dim=>{
        this.dataSource = new InvoiceDatasource(dim);
      });
  
  
    }
}

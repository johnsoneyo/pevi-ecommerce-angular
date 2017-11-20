import { Component, OnInit } from '@angular/core';
import { OrderDatasource } from './orders-datasource';
import { ProductService } from '../../../product.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  constructor(private service: ProductService) { }

  displayedColumns = ['id', 'paid', 'quantity', 'productName','timeCreated','fname'];
  dataSource: OrderDatasource;

  ngOnInit() {
    this.service.getOrders(1).subscribe(dim=>{
      this.dataSource = new OrderDatasource(dim);
    });


  }

}

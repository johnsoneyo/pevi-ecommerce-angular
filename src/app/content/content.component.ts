import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { Order } from '../order';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {


  products: Product[];

  constructor(private pserve: ProductService) { 
     
  }

  ngOnInit() {

    this.products = [{"id":1,"name":"Product 1","imageUrl":"https://media.mnn.com/assets/images/2016/10/African-yam.jpg.838x0_q80.jpg",
    "productCount":20,"price":45.90,"description":"This is just a product 1"}];
    this.pserve.setProducthardcoded(this.products);
     this.pserve.getBroadcast().subscribe(data=>{
       this.products = data;
     });
  }

  addToCart(product:Product){
    let order = new Order();
    order.productId = product.id;
    order.productName = product.name;
    order.quantity = 1;
    order.imageUrl = product.imageUrl;
    this.pserve.setOrder(order);
    
  }


}

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
    "productCount":20,"price":5000,"description":"This is just a product 1"},
    {"id":2,"name":"Product 2","imageUrl":"http://24hoursmarket.com/wp-content/uploads/2016/10/bagofrice1.jpg",
    "productCount":21,"price":3000,"description":"This is just a product 2"},
    {"id":2,"name":"Product 2","imageUrl":"http://24hoursmarket.com/wp-content/uploads/2016/10/bagofrice1.jpg",
    "productCount":21,"price":3000,"description":"This is just a product 2"},
    {"id":2,"name":"Product 2","imageUrl":"http://24hoursmarket.com/wp-content/uploads/2016/10/bagofrice1.jpg",
    "productCount":21,"price":3000,"description":"This is just a product 2"},
    {"id":2,"name":"Product 2","imageUrl":"http://24hoursmarket.com/wp-content/uploads/2016/10/bagofrice1.jpg",
    "productCount":21,"price":3000,"description":"This is just a product 2"}];
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
    order.price = product.price;
    order.imageUrl = product.imageUrl;
    this.pserve.setOrder(order);
    
  }


}

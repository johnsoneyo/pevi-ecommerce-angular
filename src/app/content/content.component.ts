import { Component, OnInit, Output } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { Order } from '../order';
import {RatingModule} from "ngx-rating";
import { environment } from "../../environments/environment";
import { EventEmitter } from '@angular/core';
import { NavserviceService } from '../navservice.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {


  products: Product[];
  

  constructor(private pserve: ProductService,private nav: NavserviceService) { 
     
  }

  

  ngOnInit() {

    this.pserve.getProducts(1)
    .subscribe(data=>{
      this.nav.loader.emit(true);
      this.products = data;
    
    });

    this.pserve.getBroadcast().subscribe(data=>{
      this.products = data;
    }
    );

    
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


  getImage(pid:number):any{
    return environment.apiHost+"api/product/getProductImage/"+pid;
  }


}

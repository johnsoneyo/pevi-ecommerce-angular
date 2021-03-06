import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Product } from './product';
import { Observable } from 'rxjs/Observable';
import { Order } from './order';
import { HttpService } from './services/http.service';
import { Category } from './models/category';
import { ProductFilter } from './models/product.filter';
import { Item } from './models/item';
import { Http,Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class ProductService {

  private subject = new Subject<any>();
  private orderObservable = new Subject<any>();
  private orders: Order[];



  constructor(private http: HttpService) {
    this.orders = [];
  }

  setProducthardcoded(products: Product[]) {
    this.subject.next(products);
  }

  getProducts(pageNumber: number): Observable<any> {
    return this.http.get('api/product/getProducts/' + pageNumber).map(res => res.json());
  }

  getProductsByRange(from: number, to: number): Observable<any> {
    return this.http.get('api/product/getProductByRange/' + from + '/' + to);
  }

  getProductsByCategories(cats: ProductFilter): Observable<any> {
    return this.http.post('api/product/getProductsV2', cats).map(res => res.json());
  }

  getCategories(): Observable<any> {
    return this.http.get('api/category/getCategories').map(res => res.json());
  }

  getBroadcast(): Observable<any> {
    return this.subject.asObservable();
  }

  setOrder(order: Order) {
    this.orders.push(order);
    this.orderObservable.next(this.orders);
  }


  setOrders(orders: Order[]) {
    this.orders = orders;
    this.orderObservable.next(this.orders);
  }

  getOrdersBroadcast(): Observable<any> {
    return this.orderObservable.asObservable();
  }

  clearOrders(): void {
    this.orders = [];
    this.orderObservable.next();
  }


  getProductImage(productId: number): Observable<any> {
    return this.http.get('api/product/getProductImage/' + productId).map(res => res.json());
  }
  
  

  saveProduct(pdt: FormData): Observable<any> {  
    return this.http.postWithImage('api/product/saveProductv2', pdt);
  }

  modifyProduct(pdt: Item): Observable<any> {
    return this.http.post('api/product/modifyProduct', pdt);
  }

  saveCategory(pdt: Category): Observable<any> {
    return this.http.post('api/category/saveCategory', pdt);
  }

  getOrders(pageNo: number): Observable<any> {
    return this.http.get('api/orders/getOrders/' + pageNo).map(res => res.json());
  }

  suspendProduct(productId:number):Observable<any>{
    return this.http.get('api/product/toggleState/'+productId);
  }

  getInvoices(pageNo: number): Observable<any> {
    return this.http.get('api/invoices/getInvoices/' + pageNo).map(res => res.json());
  }


}

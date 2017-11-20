import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ProductService } from '../../../product.service';
import { Product } from '../../../product';
import { DataSource } from '@angular/cdk/collections';
import { ProductDataSource } from './product.datasource';
import { MatDialog } from '@angular/material';
import { CreateProductComponent } from './create-product/create-product.component';
import { NavserviceService } from '../../../navservice.service';
import { FormGroup } from '@angular/forms';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public products: Product[];

  constructor(private service: ProductService,public dialog: MatDialog,private navSrv:NavserviceService) { }

  displayedColumns = ['id','photo', 'name', 'description', 'price','actions'];
  dataSource: ProductDataSource;

  ngOnInit() {
    this.service.getProducts(1).subscribe(data => {
      this.dataSource = new ProductDataSource(data);
    });

    this.navSrv.updateProducts.subscribe(syb=>{
      this.dataSource = new ProductDataSource(syb);
    });
  }

  openDialog(): void {
    let dialogRef = this.dialog.open(CreateProductComponent, {
      width: '600px',height:'450px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    
    });
  }

 editDialog(value):void {
   let dialogRef = this.dialog.open(CreateProductComponent, {
    width: '600px',height:'400px',data:value
  });

 }

 getImage(pid:number):any{
  return environment.apiHost+"api/product/getProductImage/"+pid;
}



}





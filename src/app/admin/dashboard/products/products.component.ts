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
import { Router, NavigationEnd } from '@angular/router';
import { LoginService } from '../../../services/login.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  public products: Product[];
  previousURL:string;

  constructor(private toastr:ToastrService,private log:LoginService,private rou: Router,private service: ProductService,public dialog: MatDialog,private navSrv:NavserviceService) { 
    this.rou.events.
    filter(event => event instanceof NavigationEnd).
    subscribe((b:any) => {
      this.previousURL = log.getPreviousURL();
      log.setPreviousURL(this.previousURL);
     });
  }

  

  displayedColumns = ['id','photo', 'name', 'description', 'price','actions'];
  dataSource: ProductDataSource;

  ngOnInit() {
    this.service.getProducts(1).subscribe(data => {
      this.dataSource = new ProductDataSource(data);
    });

    this.navSrv.updateProducts.subscribe(syb=>{
      this.dataSource = new ProductDataSource(syb);
    });

    setTimeout(()=>{
      if(this.previousURL=='/login'){
        this.toastr.success('Welcome ','Hello World',{positionClass: 'toast-top-left'});
      } 
      }, 3000)
     

  }

  ngAfterViewInit(){
   
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


suspendProduct(value){
  this.service.suspendProduct(value.id).subscribe(data=>{
    this.service.getProducts(1).subscribe(dim => {
      this.navSrv.updateProducts.emit(dim);
    });
  });
}


}





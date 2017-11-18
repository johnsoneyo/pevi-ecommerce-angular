import { Component, OnInit } from '@angular/core';
import { CategoryDatasource } from './category-datasource';
import { ProductService } from '../../../product.service';
import { MatDialog } from '@angular/material';
import { CreateCategoryComponent } from './create-category/create-category.component';
import { NavserviceService } from '../../../navservice.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  displayedColumns = ['id', 'name', 'description','actions'];
  dataSource: CategoryDatasource;

  constructor(private serve: ProductService,
    public dialog: MatDialog,private navsrv : NavserviceService) { }

  ngOnInit() {
    this.serve.getCategories().subscribe(data => {
      this.dataSource = new CategoryDatasource(data);
    });

    this.navsrv.updateCategories.subscribe(syb=>{
      this.dataSource = new CategoryDatasource(syb);
    });

  }

  openDialog():void{
    let dialogRef = this.dialog.open(CreateCategoryComponent, {
      width: '600px',height:'300px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    
    });
  }

}

import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Item } from '../../../../models/item';
import { Category } from '../../../../models/category';
import { ProductService } from '../../../../product.service';
import { NavserviceService } from '../../../../navservice.service';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  constructor(private pserve: ProductService, private navServe: NavserviceService,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  item: FormGroup;
  categories: Category[];
  createMode: boolean;

  ngOnInit() {

    this.createMode = true;
    this.pserve.getCategories().subscribe(res => {
      this.categories = res;
    });

    if (this.data != undefined) {
      this.createMode = false;
      this.item = new FormGroup({
        id: new FormControl(this.data.id),
        name: new FormControl(this.data.name, Validators.required),
        alias: new FormControl(this.data.alias, Validators.required),
        description: new FormControl(this.data.description, Validators.required),
        price: new FormControl(this.data.price, Validators.required),
        categoryId: new FormControl(this.data.categoryId, Validators.required),
        inventorySize: new FormControl(this.data.inventorySize, Validators.required)
      });
    } else

      this.item = new FormGroup({
        name: new FormControl('', Validators.required),
        alias: new FormControl('', Validators.required),
        description: new FormControl('', Validators.required),
        price: new FormControl('', Validators.required),
        categoryId: new FormControl('', Validators.required),
        inventorySize: new FormControl('', Validators.required)
      });
  }




  onSubmit({ value, valid }: { value: Item, valid: boolean }) {

    if (this.createMode) {
      this.pserve.saveProduct(value).subscribe(dim => {
        this.pserve.getProducts(1).subscribe(dim => {
          this.navServe.updateProducts.emit(dim);
        });
      });

    } else {

      this.pserve.modifyProduct(value).subscribe(dim => {
        this.pserve.getProducts(1).subscribe(dim => {
          this.navServe.updateProducts.emit(dim);
        });
      });

    }
  }



}

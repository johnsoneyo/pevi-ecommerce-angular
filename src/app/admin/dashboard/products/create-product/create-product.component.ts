import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Item } from '../../../../models/item';
import { Category } from '../../../../models/category';
import { ProductService } from '../../../../product.service';
import { NavserviceService } from '../../../../navservice.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  constructor(private pserve: ProductService,private navServe:NavserviceService) { }

  item: FormGroup;
  categories: Category[];

  ngOnInit() {

    this.pserve.getCategories().subscribe(res => {
      this.categories = res;
    });

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
    this.pserve.saveProduct(value).subscribe(dim => {
     this.pserve.getProducts(1).subscribe(dim=>{
        this.navServe.updateProducts.emit(dim);
     });
    });
  }


}

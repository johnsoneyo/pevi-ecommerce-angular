import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Category } from '../../../../models/category';
import { ProductService } from '../../../../product.service';
import { NavserviceService } from '../../../../navservice.service';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.css']
})
export class CreateCategoryComponent implements OnInit {

  constructor(private serve: ProductService,private navserve: NavserviceService) { }

  cat: FormGroup;
  categories: Category[];
  createMode: boolean;

  ngOnInit() {

    this.cat = new FormGroup({
      name: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required)});
  }

  onSubmit({ value, valid }: { value: Category, valid: boolean }){
    this.serve.saveCategory(value).subscribe(res=>{
      this.serve.getCategories().subscribe(data=>{
        this.navserve.updateCategories.emit(data);
      });
     
    });
  }


}

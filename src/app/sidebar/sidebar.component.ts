import { Component, OnInit,AfterViewInit,OnChanges, Output,EventEmitter, Input, SimpleChanges, ViewChildren, QueryList } from '@angular/core';
import { MatSliderChange, MatIconRegistry, MatSelectionListOptionEvent, MatListOption } from '@angular/material';
import { ProductService } from '../product.service';
import { Product } from '../product';
import { DomSanitizer } from '@angular/platform-browser';
import { Category } from '../models/category';
import { ProductFilter } from '../models/product.filter';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  autoTicks = false;
  disabled = false;
  invert = false;
  max = 10000;
  min = 0;
  showTicks = false;
  step = 1;
  thumbLabel = true;
  value = 0;
  vertical = false;
  selectValue;

  @Output() 
  change :EventEmitter<MatSliderChange> = new EventEmitter<MatSliderChange>();
    products: Product[];

public categories: Category[];
@ViewChildren(MatListOption) options: QueryList<MatListOption>;

@Input()
lightIcon = 'green';

  constructor(private pserve: ProductService,
    private matIconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer)
    {  
        matIconRegistry
        .addSvgIcon('green',
        sanitizer.bypassSecurityTrustResourceUrl('assets/images/Economies.svg'));

        pserve.getCategories().subscribe(cat=>{
           this.categories = cat;
        });
    }
    

    modelChanged(evt){
      let catInt:number[] = [];
      for(let cat of this.options.toArray()){
           if(cat._selected){
            catInt.push(cat.value);     
           }       
      }
      let pf = new ProductFilter();
      pf.categories = catInt;
      this.pserve.getProductsByCategories(pf).subscribe(data=>{
        console.log(data);
        this.pserve.setProducthardcoded(data);
      });
    }

    ngOnInit(){

    }

  
 
  changed($event){
     this.pserve.setProducthardcoded(this.products);
     this.pserve.getProductsByRange(this.min,$event.value).
     map(res=>res.json()).subscribe(sub=>{
        this.pserve.setProducthardcoded(sub);
     });
  }

  


}

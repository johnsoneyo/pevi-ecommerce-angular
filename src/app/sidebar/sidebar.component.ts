import { Component, OnInit, Output,EventEmitter, Input } from '@angular/core';
import { MatSliderChange, MatIconRegistry } from '@angular/material';
import { ProductService } from '../product.service';
import { Product } from '../product';
import { DomSanitizer } from '@angular/platform-browser';

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

  @Output() 
  change :EventEmitter<MatSliderChange> = new EventEmitter<MatSliderChange>();
  products: Product[];

public staples:string [] = ['Yam','Potatoes','Rice','Flour'];
public vegetables:string [] = ['Ugwu','Water-leaf','Efirin','Alubosa'];

@Input()
lightIcon = 'green';

  constructor(private pserve: ProductService,
    private matIconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer)
    {  
        matIconRegistry
        .addSvgIcon('green',
        sanitizer.bypassSecurityTrustResourceUrl('assets/images/Economies.svg'));
    }



  ngOnInit() {
  }


  changed($event){
     this.pserve.setProducthardcoded(this.products);
     this.pserve.getProductsByRange(this.min,$event.value).
     map(res=>res.json()).subscribe(sub=>{
        this.pserve.setProducthardcoded(sub);
     });
  }

}

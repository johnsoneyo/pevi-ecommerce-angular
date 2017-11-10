import { Component, OnInit, EventEmitter, Output ,ViewChild, Input} from '@angular/core';
import { NavserviceService } from '../navservice.service';
import { ProductService } from '../product.service';
import { Order } from '../order';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 
  @Input()
  lightIcon = 'cartGrill';
  
  @Input()
  lightBag = 'lightBag';


  public cartItemCount:number;
  public cartItems: Order[];

  constructor(private service: NavserviceService,private pserv: ProductService,
    private matIconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer) { 

      matIconRegistry
      .addSvgIcon('cartGrill',
      sanitizer.bypassSecurityTrustResourceUrl('assets/images/Cartgrill.svg'))
      .addSvgIcon('lightBag',
      sanitizer.bypassSecurityTrustResourceUrl('assets/images/Bagremove.svg'));
    }

  ngOnInit() {
    this.pserv.getOrdersBroadcast().subscribe(data=>{
      if(data!=undefined){
      this.cartItemCount = data.length;
      this.cartItems = data;
      } else {
        this.cartItems = [];
        this.cartItemCount = 0.0;
      }
    });
   
  }


  open(){
    this.service.change.emit();   
  }

}

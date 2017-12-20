import { Component, OnInit } from '@angular/core';
import { ICarouselConfig, AnimationConfig } from 'angular4-carousel';
import { ProductService } from '../product.service';
import { Order } from '../order';
import { NavserviceService } from '../navservice.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  public imageSources: string[] = [
    'http://www.violinshoptampa.com/assets/images/Panorama2a.jpg',
    'http://gomighty.com/wp-content/themes/gomighty/lib/goal_images/files/SMusicPianoAntiqueshutterstock_-1920.jpg',
    'https://d1llvcsapfiksz.cloudfront.net/vendors/samplephonics/deep-sax/images/DeepSax_mobile.jpg',
'https://www.abamet.ru/images/press/haas/press-releases/2013/gaboi-rigoutat.jpg'
 ];

 isCollaped:boolean;
 public cartItemCount:number;
 public cartItems: Order[];
 
 public config: ICarouselConfig = {
   verifyBeforeLoad: true,
   log: false,
   animation: true,
   animationType: AnimationConfig.SLIDE,
   autoplay: true,
   autoplayDelay: 2000,
   stopAutoplayMinWidth: 768
 };

  constructor(private pserv: ProductService,private service: NavserviceService) { }

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

  toggleNav():void{
    if(this.isCollaped){
      this.isCollaped = false;
    }else if(!this.isCollaped){
      this.isCollaped = true;
    }
 }

 open(){
  this.service.change.emit();   
}


}

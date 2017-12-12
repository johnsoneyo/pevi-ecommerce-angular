import { Component, OnInit } from '@angular/core';
import { ICarouselConfig, AnimationConfig } from 'angular4-carousel';

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
 
 public config: ICarouselConfig = {
   verifyBeforeLoad: true,
   log: false,
   animation: true,
   animationType: AnimationConfig.SLIDE,
   autoplay: true,
   autoplayDelay: 2000,
   stopAutoplayMinWidth: 768
 };

  constructor() { }

  ngOnInit() {
  }

}

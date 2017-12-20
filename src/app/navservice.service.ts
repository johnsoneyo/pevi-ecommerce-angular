import { Injectable,EventEmitter } from '@angular/core';

@Injectable()
export class NavserviceService {
  public change:EventEmitter<any>  = new EventEmitter<any>();
  public updateProducts:EventEmitter<any>  = new EventEmitter<any>();
  public updateCategories:EventEmitter<any>  = new EventEmitter<any>();
  public loader:EventEmitter<boolean> = new EventEmitter<boolean>();
  
  
  constructor() { }

 
}

import { Injectable,EventEmitter } from '@angular/core';

@Injectable()
export class NavserviceService {
  public change:EventEmitter<any>  = new EventEmitter<any>();
  
  constructor() { }

 
}

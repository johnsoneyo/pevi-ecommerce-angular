import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  autoTicks = false;
  disabled = false;
  invert = false;
  max = 100;
  min = 0;
  showTicks = false;
  step = 1;
  thumbLabel = true;
  value = 0;
  vertical = false;

public staples:string [] = ['Yam','Potatoes','Rice','Flour'];
public vegetables:string [] = ['Ugwu','Water-leaf','Efirin','Alubosa'];

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

public staples:string [] = ['Yam','Potatoes','Rice','Flour'];
public vegetables:string [] = ['Ugwu','Water-leaf','Efirin','Alubosa'];

  constructor() { }

  ngOnInit() {
  }

}

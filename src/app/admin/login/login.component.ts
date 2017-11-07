import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ProcessOrderComponent } from '../../process-order/process-order.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  processOrder():void {
    
        let dialogRef = this.dialog.open(ProcessOrderComponent, {
          height: '400px',
          width: '600px',
        });
    
        dialogRef.afterClosed().subscribe(result => {
          console.log('The dialog was closed');
         
        });
    
      }

}

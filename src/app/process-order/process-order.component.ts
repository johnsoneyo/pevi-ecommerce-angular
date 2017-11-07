import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormControl } from '@angular/forms';
import { Order } from '../order';
import { AnonymousOrder } from '../anonymous-order';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-process-order',
  templateUrl: './process-order.component.html',
  styleUrls: ['./process-order.component.css']
})
export class ProcessOrderComponent implements OnInit {

  constructor(private serve :ProductService, public dialogRef: MatDialogRef<ProcessOrderComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  order:FormGroup;
  orders: Order[];

  ngOnInit() {
    this.order = new FormGroup({
      fname: new FormControl(''),
      lname: new FormControl(''),
      phone: new FormControl(''),
      email: new FormControl(''),
      address: new FormControl(''),
    });

   

  }

  onSubmit({ value, valid }: { value: AnonymousOrder, valid: boolean }) {
     value.orders = this.data;
  
  }

}

import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Order } from '../order';
import { AnonymousOrder } from '../anonymous-order';
import { ProductService } from '../product.service';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-process-order',
  templateUrl: './process-order.component.html',
  styleUrls: ['./process-order.component.css']
})
export class ProcessOrderComponent implements OnInit {

  constructor(private serve :ProductService, public dialogRef: MatDialogRef<ProcessOrderComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,private orderService : OrderService) { }

  order:FormGroup;
  orders: Order[];

  ngOnInit() {
    this.order = new FormGroup({
      fname: new FormControl('',Validators.required),
      lname: new FormControl('',Validators.required),
      phone: new FormControl('',[Validators.required,
        Validators.pattern('^0[1-9][0-9]{9}$|^[1-9][0-9]{9}$|^[+]234[1-9][0-9]{9}$')]),
      email: new FormControl('',Validators.required),
      address: new FormControl('',Validators.required),
    });

   

  }

  onSubmit({ value, valid }: { value: AnonymousOrder, valid: boolean }) {
     value.orders = this.data;
      this.serve.clearOrders();
      this.orderService.processOrders(value).
      subscribe(data=>{
        console.log(data)
      });
     
  }

}

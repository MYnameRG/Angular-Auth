import { OrderService } from './../services/order.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  order: any = [];

  constructor(private orders: OrderService) { }

  ngOnInit(): void {
    this.order = this.orders.getOrders();
  }
}

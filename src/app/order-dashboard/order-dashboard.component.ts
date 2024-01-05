import { Component, OnInit } from '@angular/core';
import { Order } from '../models/order';
import { ItemService } from '../services/item.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-order-dashboard',
  templateUrl: './order-dashboard.component.html',
  styleUrls: ['./order-dashboard.component.css'],
})
export class OrderDashboardComponent implements OnInit {
  displayedColumns: string[] = [
    'orderDate',
    'customerName',
    'customerEmail',
    'contactNumber',
    'itemName',
    'totalBill',
  ];
  ordersList: Order[] = [];

  constructor(private itemService: ItemService, private datePipe: DatePipe) {}

  ngOnInit(): void {
    this.itemService.getAllOrders().subscribe({
      next: (data) => {
        this.ordersList = data;
      },
      error: (err) => {
        alert(err);
      },
    });
  }

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    return this.datePipe.transform(date, 'yyyy-MM-dd') || '';
  }
}

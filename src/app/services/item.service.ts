import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from '../models/item';
import { Order } from '../models/order';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  item_url: string = 'http://localhost:3000/items';
  order_url: string = 'http://localhost:3000/ordersList';

  constructor(private http: HttpClient) {}

  // ********Item Services**********

  getItems(): Observable<Item[]> {
    return this.http.get<Item[]>(this.item_url);
  }

  getItemById(id: number): Observable<Item | undefined> {
    const url = `${this.item_url}/${id}`;
    return this.http.get<Item>(url);
  }

  // **********Order Services*************

  saveOrder(orderData: any): Observable<any> {
    return this.http.post(this.order_url, orderData);
  }

  getAllOrders(): Observable<Array<Order>> {
    return this.http.get<Array<Order>>(this.order_url);
  }
}

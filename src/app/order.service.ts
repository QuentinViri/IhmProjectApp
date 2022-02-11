import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Order} from "./order.model";


@Injectable({
  providedIn: 'root'
})
export class OrderService {

  ordersPath = 'assets/orders.json';

  constructor(private http: HttpClient) { }

  public findAllOrders():Observable<Order[]>{
    return this.http.get<Order[]>(this.ordersPath)
  }
}

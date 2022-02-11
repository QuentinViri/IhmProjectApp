import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Product} from "./product.model";


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  productsPath = 'assets/products.json';

  constructor(private http : HttpClient) { }

  public findAllProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(this.productsPath);
  }
}

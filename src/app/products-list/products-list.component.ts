import { Component, OnInit } from '@angular/core';
import {Product} from "../product.model";
import {ProductService} from "../product.service";


@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  products: Product[] | undefined
  selectedProduct?:Product;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.findAllProducts().subscribe(
      (data:Product[]) => {
        this.products=data})
  }

  onSelect(product:Product) : void{
    this.selectedProduct = product;
  }
}

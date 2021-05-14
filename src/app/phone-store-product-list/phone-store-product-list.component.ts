import { Component, OnInit } from '@angular/core';
import { products } from '../models/products-mock';


@Component({
  selector: 'app-phone-store-product-list',
  templateUrl: './phone-store-product-list.component.html',
  styleUrls: ['./phone-store-product-list.component.less']
})
export class PhoneStoreProductListComponent implements OnInit {

  products = products;
  
  constructor() { }

  ngOnInit(): void {
  }

}

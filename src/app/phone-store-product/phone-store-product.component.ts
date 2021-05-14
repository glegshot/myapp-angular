import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-phone-store-product',
  templateUrl: './phone-store-product.component.html',
  styleUrls: ['./phone-store-product.component.less']
})
export class PhoneStoreProductComponent implements OnInit {

  productId!: number;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getProductDetails()
  }

  getProductDetails(): void {
    this.productId = Number(this.activatedRoute.snapshot.paramMap.get('id'));

  }

}

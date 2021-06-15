import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-my-products',
  templateUrl: './my-products.component.html',
  styleUrls: ['./my-products.component.css']
})
export class MyProductsComponent implements OnInit {
  cartItems = [];

  constructor(private _productService: ProductService, private router: Router,) { }

  ngOnInit() {
    this._productService.getAllPaidProducts().subscribe(
      (res) => {
        this.cartItems = res;
        console.log('res', res)
      },
      err => console.log(err)
    )
  }

}

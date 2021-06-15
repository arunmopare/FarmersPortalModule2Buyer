import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';
@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit {
  public product = {
    _id: "",
    productImageUrl: "",
    productName: "",
    dateCreated: "",
    productOwnerId: "",
    productQuantity: 0,
    productPrice: "",
    productDescription: ""
  }
  public cart = {
    productId: "",
    productOwnerId: "",
    productName: "",
    productPricePerUnit: "",
    productQuantity: 0,
  }
  public quant = 0;
  public paramProductId: string = '';

  constructor(private activatedRoute: ActivatedRoute, private _productService: ProductService) {
    this.activatedRoute.queryParams.subscribe(params => {
      this.paramProductId = params['productId'];

      console.log("paramVendorId", this.paramProductId); // Print the parameter to the console.
    });
  }

  ngOnInit() {
    this._productService.getAProducts(this.paramProductId).subscribe(
      res => {
        this.product = res;

        console.log('Getting product', this.product)

      },
      err => console.log(err)
    )
  }

  addToCart() {

    this.cart = {
      productId: this.product._id,
      productOwnerId: this.product.productOwnerId,
      productName: this.product.productName,
      productPricePerUnit: this.product.productPrice,
      productQuantity: this.quant,
    }

    console.log('Adding this cart to cart', this.cart)

    this._productService.addProdToCart(this.cart).subscribe(
      res => {
        location.reload();
        console.log('res')

      },
      err => {
        location.reload();

      }
    )

  }


}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StripeCheckoutHandler, StripeCheckoutLoader } from 'ng-stripe-checkout';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  private stripeCheckoutHandler: StripeCheckoutHandler;
  cartItems = [];
  total = 0;






  constructor(private _productService: ProductService, private router: Router, private stripeCheckoutLoader: StripeCheckoutLoader) { }

  ngOnInit() {

    this.stripeCheckoutLoader.createHandler({
      key: 'pk_test_51H15sUHrifiYqPQD6SoeekAmntJt9csDC2aQYARCOiQS6xA1SK8Gb1TEQJgORhG6czvmhqht6Ls7Vf4xb1c5Am0W00n9y0sZ9U',
      token: (token) => {
        console.log('token', token)
        this._productService.makePayment(token).subscribe(
          (res) => {
            console.log('res success payment', res)
          },

          err => console.log(err)
        )
        console.log('Payment successful!', token);
      }
    }).then((handler: StripeCheckoutHandler) => {
      this.stripeCheckoutHandler = handler;
    });


    this._productService.getAllCartItems().subscribe(
      (res) => {
        this.cartItems = res;
        this.setTotalPrice()
        console.log('res', res)
      },

      err => console.log(err)
    )

  }
  deleteCartItem(id) {
    this._productService.deleteCartItem(id).subscribe(
      (res) => {
        this.cartItems = res;
        console.log('res', res)
        location.reload();
      },

      err => console.log(err)
    )
  }
  setTotalPrice() {
    this.cartItems.forEach(element => {
      this.total = this.total + element.total;
    });
  }
  public onClickBuy() {
    this.stripeCheckoutHandler.open({
      amount: this.total * 100,
      currency: 'INR',
    });
  }
  public onClickCancel() {
    // If the window has been opened, this is how you can close it:
    this.stripeCheckoutHandler.close();
  }
}


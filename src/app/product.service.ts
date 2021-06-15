import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';


@Injectable()
export class ProductService {
  private api = environment.apiUrl;
  private _getProductUrl = this.api + "buyer/product/all";
  private _getAProductUrl = this.api + "buyer/product/product";

  private _SearchProduct = this.api + "buyer/product/search";

  private _getProfileBuyer = this.api + "buyer/product/profile";
  private _updateProfileBuyer = this.api + "buyer/product/profile/update";


  private _addToCart = this.api + "buyer/cart/add"
  private _getAllCartItems = this.api + "buyer/cart/all"
  private _getAllPaidItems = this.api + "buyer/cart/all-paid"

  private _deleteCartItems = this.api + "buyer/cart"
  private _makePayment = this.api + "buyer/cart/payment"


  constructor(private http: HttpClient) { }
  getAllProducts() {
    return this.http.get<any>(this._getProductUrl)
  }
  searchProduct(searchConfig) {
    return this.http.post<any>(this._SearchProduct, { productName: searchConfig.productName })

  }
  getAProducts(_id: string) {
    return this.http.get<any>(this._getAProductUrl + "/" + _id)
  }
  getProfileDetails() {
    console.log('Getting Profile')
    return this.http.get<any>(this._getProfileBuyer)
  }

  updateProfile(update) {
    return this.http.post<any>(this._updateProfileBuyer, { update })
  }

  // CART ITEMS
  addProdToCart(update) {
    return this.http.post<any>(this._addToCart, { ...update })
  }

  getAllCartItems() {
    return this.http.get<any>(this._getAllCartItems)
  }

  getAllPaidProducts() {
    return this.http.get<any>(this._getAllPaidItems)
  }


  deleteCartItem(_id) {
    return this.http.delete<any>(this._deleteCartItems + "/" + _id)
  }

  makePayment(token) {
    return this.http.post<any>(this._makePayment, { token })
  }
}

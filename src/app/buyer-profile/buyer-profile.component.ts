import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-buyer-profile',
  templateUrl: './buyer-profile.component.html',
  styleUrls: ['./buyer-profile.component.css']
})
export class BuyerProfileComponent implements OnInit {
  public profile = {
    fullName: "",
    phone: "",
    mobile: "",
    email: "",
    address: "",
  };

  constructor(private _productService: ProductService) { }

  ngOnInit() {
    this._productService.getProfileDetails().subscribe(
      res => {
        this.profile = res;
        console.log('res', res)

        console.log('Getting Profile', this.profile)

      },
      err => console.log(err)
    )

  }
  updateProfile() {

    console.log('User Profile Updated', this.profile);
    this._productService.updateProfile(this.profile).subscribe(
      res => {
        console.log('res', res)

        console.log('updated Profile', this.profile)

      },
      err => console.log(err)
    )

  }

}

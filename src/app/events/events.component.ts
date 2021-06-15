import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from '../event.service';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  events = []
  products = []
  searchConfig = {
    productName: "",
  }
  constructor(private _eventService: EventService, private _productService: ProductService, private router: Router) { }

  ngOnInit() {
    this._eventService.getEvents()
      .subscribe(
        res => this.events = res,
        err => console.log(err)
      )

    this._productService.getAllProducts().subscribe(
      res => this.products = res,
      err => console.log(err)
    )
  }

  searchProduct(name) {
    this.searchConfig.productName = name;


    this._productService.searchProduct(this.searchConfig).subscribe(
      (res) => {
        this.products = res

      },
      err => console.log(err)
    )
  }

  navigate(_id) {
    console.log("Navigating");

    this.router.navigate(['/product-view'], { queryParams: { productId: _id } }).then(() => {
      location.reload();
    });
  }
}

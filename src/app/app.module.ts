import { AuthGuard } from './auth.guard';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { EventsComponent } from './events/events.component';
import { SpecialEventsComponent } from './special-events/special-events.component';
import { AuthService } from './auth.service';
import { EventService } from './event.service';
import { TokenInterceptorService } from './token-interceptor.service';
import { ProductService } from './product.service';
import { ProductViewComponent } from './product-view/product-view.component';
import { BuyerProfileComponent } from './buyer-profile/buyer-profile.component';
import { CartComponent } from './cart/cart.component';
import { NgxStripeModule } from 'ngx-stripe';
import { StripeCheckoutModule } from 'ng-stripe-checkout';
import { MyProductsComponent } from './my-products/my-products.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { WelcomeBannerComponent } from './home/welcome-banner/welcome-banner.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    EventsComponent,
    SpecialEventsComponent,
    ProductViewComponent,
    BuyerProfileComponent,
    CartComponent,
    MyProductsComponent,
    HeaderComponent,
    HomeComponent,
    WelcomeBannerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    StripeCheckoutModule,
    NgxStripeModule.forRoot('pk_test_51H15sUHrifiYqPQD6SoeekAmntJt9csDC2aQYARCOiQS6xA1SK8Gb1TEQJgORhG6czvmhqht6Ls7Vf4xb1c5Am0W00n9y0sZ9U'),
  ],
  providers: [AuthService, AuthGuard, EventService, ProductService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }

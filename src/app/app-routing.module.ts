import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component'
import { RegisterComponent } from './register/register.component'
import { EventsComponent } from './events/events.component';
import { SpecialEventsComponent } from './special-events/special-events.component';
import { AuthGuard } from './auth.guard';
import { ProductViewComponent } from './product-view/product-view.component';
import { BuyerProfileComponent } from './buyer-profile/buyer-profile.component';
import { CartComponent } from './cart/cart.component';
import { MyProductsComponent } from './my-products/my-products.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/all-products',
    pathMatch: 'full'
  },
  {
    path: 'all-products',
    component: EventsComponent
  },
  {
    path: 'product-view',
    component: ProductViewComponent
  },
  {
    path: 'special',
    canActivate: [AuthGuard],
    component: SpecialEventsComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'profile',
    canActivate: [AuthGuard],
    component: BuyerProfileComponent
  },
  {
    path: 'cart',
    canActivate: [AuthGuard],
    component: CartComponent
  }
  ,
  {
    path: 'my-products',
    canActivate: [AuthGuard],
    component: MyProductsComponent
  },
  {
    path: 'home',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

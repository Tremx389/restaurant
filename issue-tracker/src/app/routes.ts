import {Routes} from '@angular/router';
import {LoginComponent} from "./pages/login/login.component";
import {RegisterComponent} from "./pages/register/register.component";

import {ErrorComponent} from "./pages/error/error.component";

// Beadandó

import {RestaurantListComponent} from "./pages/restaurant/restaurant-list/restaurant-list.component";
import {RestaurantDetailComponent} from "./pages/restaurant/restaurant-detail/restaurant-detail.component";
import {RestaurantNewComponent} from "./pages/restaurant/restaurant-new/restaurant-new.component";

import {CityListComponent} from "./pages/city/city-list/city-list.component";
import {CityDetailComponent} from "./pages/city/city-detail/city-detail.component";
import {CityNewComponent} from "./pages/city/city-new/city-new.component";

import {ReviewListComponent} from "./pages/review/review-list/review-list.component";
import {ReviewDetailComponent} from "./pages/review/review-detail/review-detail.component";
import {ReviewNewComponent} from "./pages/review/review-new/review-new.component";

import {UserListComponent} from "./pages/user/user-list/user-list.component";

export const appRoutes: Routes = [
  {path: '', redirectTo: '/restaurant', pathMatch: 'full'},

  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  
  {path: 'restaurant', component: RestaurantListComponent},
  {path: 'restaurant/new', component: RestaurantNewComponent},
  {path: 'restaurant/:id', component: RestaurantDetailComponent},

  {path: 'city', component: CityListComponent},
  {path: 'city/new', component: CityNewComponent},
  {path: 'city/:id', component: CityDetailComponent},

  {path: 'review', component: ReviewListComponent},
  {path: 'review/new', component: ReviewNewComponent},
  {path: 'review/:id', component: ReviewDetailComponent},

  {path: 'user', component: UserListComponent},

  {path: '**', component: ErrorComponent},
];

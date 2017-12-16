import {Routes} from '@angular/router';
import {LoginComponent} from "./pages/login/login.component";
import {RegisterComponent} from "./pages/register/register.component";

import {CityListComponent} from "./pages/city/city-list/city-list.component";
import {CityDetailComponent} from "./pages/city/city-detail/city-detail.component";
import {CityNewComponent} from "./pages/city/city-new/city-new.component";

import {RestaurantListComponent} from "./pages/restaurant/restaurant-list/restaurant-list.component";
import {RestaurantDetailComponent} from "./pages/restaurant/restaurant-detail/restaurant-detail.component";
import {RestaurantNewComponent} from "./pages/restaurant/restaurant-new/restaurant-new.component";

import {ReviewListComponent} from "./pages/review/review-list/review-list.component";
import {ReviewDetailComponent} from "./pages/review/review-detail/review-detail.component";
import {ReviewNewComponent} from "./pages/review/review-new/review-new.component"

import {HelpComponent} from "./pages/help/help.component";
import {ErrorComponent} from "./pages/error/error.component";
import {Role} from "./model/User";
import {RouteGuard} from "./route.guard";

const loggedInUsers = [Role.USER, Role.ADMIN, Role.BOSS, Role.MAJOR];

export const appRoutes: Routes = [{
    path: '',
    canActivateChild: [RouteGuard],
    children: [
      {path: '', redirectTo: 'login', pathMatch: 'full'},
      {path: 'login', component: LoginComponent, data: {roles: [Role.GUEST]}},
      {path: 'register', component: RegisterComponent, data: {roles: [Role.GUEST]}},

      {path: 'cities', component: CityListComponent, data: {roles: loggedInUsers}},
      {path: 'cities/new', component: CityNewComponent, data: {roles: [Role.USER, Role.ADMIN]}},
      {path: 'cities/:id', component: CityDetailComponent, data: {roles: [Role.USER, Role.ADMIN]}},

      {path: 'restaurants', component: RestaurantListComponent, data: {roles: loggedInUsers}},
      {path: 'restaurants/new', component: RestaurantNewComponent, data: {roles: [Role.USER, Role.ADMIN]}},
      {path: 'restaurants/:id', component: RestaurantDetailComponent, data: {roles: [Role.USER, Role.ADMIN]}},

      {path: 'reviews', component: ReviewListComponent, data: {roles: loggedInUsers}},
      {path: 'reviews/new', component: ReviewNewComponent, data: {roles: [Role.USER, Role.ADMIN]}},
      {path: 'reviews/:id', component: ReviewDetailComponent, data: {roles: [Role.USER, Role.ADMIN]}},

      {path: 'help', component: HelpComponent},
      {path: '**', component: ErrorComponent}
    ]
  }];

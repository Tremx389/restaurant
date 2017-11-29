import {Routes} from '@angular/router';
import {LoginComponent} from "./pages/login/login.component";
import {RegisterComponent} from "./pages/register/register.component";

import {ErrorComponent} from "./pages/error/error.component";

import {IssueListComponent} from "./pages/issues/issue-list/issue-list.component";
import {IssueDetailComponent} from "./pages/issues/issue-detail/issue-detail.component";
import {NewIssueComponent} from "./pages/issues/new-issue/new-issue.component";

// Beadandó

import {RestaurantListComponent} from "./pages/restaurant/restaurant-list/restaurant-list.component";
import {RestaurantDetailComponent} from "./pages/restaurant/restaurant-detail/restaurant-detail.component";
import {RestaurantNewComponent} from "./pages/restaurant/restaurant-new/restaurant-new.component";

import {CityComponent} from "./pages/city/city.component";
// todo: rest

import {ReviewComponent} from "./pages/review/review.component";
// todo: rest

import {UserComponent} from "./pages/user/user.component";
// todo: rest

export const appRoutes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  
  {path: 'issues', component: IssueListComponent},
  {path: 'issues/new', component: NewIssueComponent},
  {path: 'issues/:id', component: IssueDetailComponent},

  {path: 'restaurant', component: RestaurantListComponent},
  {path: 'restaurant/new', component: RestaurantNewComponent},
  {path: 'restaurant/:id', component: RestaurantDetailComponent},

  {path: 'city', component: CityComponent},
  {path: 'review', component: ReviewComponent},
  {path: 'user', component: UserComponent},

  {path: '**', component: ErrorComponent},
];

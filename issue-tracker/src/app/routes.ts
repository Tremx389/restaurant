import {Routes} from '@angular/router';
import {LoginComponent} from "./pages/login/login.component";
import {RegisterComponent} from "./pages/register/register.component";

import {IssueListComponent} from "./pages/issues/issue-list/issue-list.component";
import {IssueDetailComponent} from "./pages/issues/issue-detail/issue-detail.component";
import {NewIssueComponent} from "./pages/issues/new-issue/new-issue.component";

import {ErrorComponent} from "./pages/error/error.component";


import {RestaurantListComponent} from "./pages/restaurant/restaurant-list/restaurant-list.component";
// import {IssueDetailComponent} from "./pages/issues/issue-detail/issue-detail.component";
// import {NewIssueComponent} from "./pages/issues/new-issue/new-issue.component";


import {CityComponent} from "./pages/city/city.component";
import {ReviewComponent} from "./pages/review/review.component";
import {UserComponent} from "./pages/user/user.component";

export const appRoutes: Routes = [
  {path: '', redirectTo: 'restaurant', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  

  {path: 'issues', component: IssueListComponent},
  {path: 'issues/new', component: NewIssueComponent},
  {path: 'issues/:id', component: IssueDetailComponent},

  {path: 'restaurant', component: RestaurantListComponent},
  
  {path: 'city', component: CityComponent},
  {path: 'review', component: ReviewComponent},
  {path: 'user', component: UserComponent},

  {path: '**', component: ErrorComponent},
];

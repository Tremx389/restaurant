import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router'

import {AppComponent} from './app.component';
import {LoginComponent} from './pages/login/login.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AuthService} from "./services/auth.service";
import {HttpModule} from "@angular/http";
import { RegisterComponent } from './pages/register/register.component';
import  {appRoutes} from './routes';
import {MaterialItemsModule} from "./MaterialItemsModule";
import { MenuComponent } from './components/menu/menu.component';

import { IssueDetailComponent } from './pages/issues/issue-detail/issue-detail.component';
import { IssueListComponent } from './pages/issues/issue-list/issue-list.component';
import { NewIssueComponent } from './pages/issues/new-issue/new-issue.component';
import { IssueService } from "./services/issue.service";

import { RestaurantDetailComponent } from './pages/restaurant/restaurant-detail/restaurant-detail.component';
import { RestaurantListComponent } from './pages/restaurant/restaurant-list/restaurant-list.component';
import { RestaurantNewComponent } from './pages/restaurant/restaurant-new/restaurant-new.component';
import { RestaurantService } from "./services/restaurant.service";

import { ErrorComponent } from './pages/error/error.component';
import { ReviewComponent } from './pages/review/review.component';
import { CityComponent } from './pages/city/city.component';
import { UserComponent } from './pages/user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ErrorComponent,
    MenuComponent,
    
    IssueListComponent,
    IssueDetailComponent,
    NewIssueComponent,

    RestaurantListComponent,
    RestaurantDetailComponent,
    RestaurantNewComponent,

    ReviewComponent,
    CityComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    MaterialItemsModule
  ],
  providers: [AuthService, IssueService, RestaurantService],
  bootstrap: [AppComponent]
})
export class AppModule {
}

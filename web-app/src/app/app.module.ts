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
import { HelpComponent } from './pages/help/help.component';
import { ErrorComponent } from './pages/error/error.component';
import {RouteGuard} from "./route.guard";

import {CityListComponent} from "./pages/city/city-list/city-list.component";
import {CityDetailComponent} from "./pages/city/city-detail/city-detail.component";
import {CityNewComponent} from "./pages/city/city-new/city-new.component";

import {RestaurantListComponent} from "./pages/restaurant/restaurant-list/restaurant-list.component";
import {RestaurantDetailComponent} from "./pages/restaurant/restaurant-detail/restaurant-detail.component";
import {RestaurantNewComponent} from "./pages/restaurant/restaurant-new/restaurant-new.component";

import {ReviewListComponent} from "./pages/review/review-list/review-list.component";
import {ReviewNewComponent} from "./pages/review/review-new/review-new.component";

import {MenuListComponent} from "./pages/menu/menu-list/menu-list.component";
import {MenuDetailComponent} from "./pages/menu/menu-detail/menu-detail.component";
import {MenuNewComponent} from "./pages/menu/menu-new/menu-new.component";

import { StatsComponent } from './pages/stats/stats.component';

import {CityService} from "./services/city.service";
import {RestaurantService} from "./services/restaurant.service";
import {ReviewService} from "./services/review.service";
import {MenuService} from "./services/menu.service";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,

    StatsComponent,

    CityDetailComponent,
    CityListComponent,
    CityNewComponent,

    RestaurantDetailComponent,
    RestaurantListComponent,
    RestaurantNewComponent,

    ReviewListComponent,
    ReviewNewComponent,

    MenuDetailComponent,
    MenuListComponent,
    MenuNewComponent,

    MenuComponent,
    HelpComponent,
    ErrorComponent
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
  providers: [AuthService, RestaurantService, ReviewService, CityService, MenuService, RouteGuard],
  bootstrap: [AppComponent]
})
export class AppModule {
}

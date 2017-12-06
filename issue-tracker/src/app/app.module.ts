import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router"

import {AppComponent} from "./app.component";
import {LoginComponent} from "./pages/login/login.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AuthService} from "./services/auth.service";
import {HttpModule} from "@angular/http";
import { RegisterComponent } from "./pages/register/register.component";
import  {appRoutes} from "./routes";
import {MaterialItemsModule} from "./MaterialItemsModule";
import { MenuComponent } from "./components/menu/menu.component";

import { RestaurantDetailComponent } from "./pages/restaurant/restaurant-detail/restaurant-detail.component";
import { RestaurantListComponent } from "./pages/restaurant/restaurant-list/restaurant-list.component";
import { RestaurantNewComponent } from "./pages/restaurant/restaurant-new/restaurant-new.component";
import { RestaurantService } from "./services/restaurant.service";

import { CityDetailComponent } from "./pages/city/city-detail/city-detail.component";
import { CityListComponent } from "./pages/city/city-list/city-list.component";
import { CityNewComponent } from "./pages/city/city-new/city-new.component";
import { CityService } from "./services/city.service";

import { ReviewDetailComponent } from "./pages/review/review-detail/review-detail.component";
import { ReviewListComponent } from "./pages/review/review-list/review-list.component";
import { ReviewNewComponent } from "./pages/review/review-new/review-new.component";
import { ReviewService } from "./services/review.service";

import { UserListComponent } from "./pages/user/user-list/user-list.component";
import { UserService } from "./services/user.service";

// import { UserComponent } from "./pages/user/user.component";

import { ErrorComponent } from "./pages/error/error.component";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ErrorComponent,
    MenuComponent,
    
    RestaurantListComponent,
    RestaurantDetailComponent,
    RestaurantNewComponent,

    CityListComponent,
    CityDetailComponent,
    CityNewComponent,

    ReviewListComponent,
    ReviewDetailComponent,
    ReviewNewComponent,

    UserListComponent,
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
  providers: [AuthService, RestaurantService, CityService, ReviewService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule {
}

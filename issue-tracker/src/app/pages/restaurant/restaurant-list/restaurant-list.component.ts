import {Component} from '@angular/core';
import {DataSource} from "@angular/cdk/collections";
import {Observable} from "rxjs/Observable";
import "rxjs/add/observable/of";
import {Restaurant} from "../../../model/Restaurant";
import {RestaurantService} from "../../../services/restaurant.service";

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.css']
})

export class RestaurantListComponent {
  displayedColumns: String[] = ['description', 'location', 'status', 'timestamp', 'edit'];
  restaurants: DataSource<any> = new RestaurantDataSource(this.restaurantService);

  constructor(private restaurantService: RestaurantService) {
  }

  delete(id: number) {
    this.restaurantService.delete(id)
      .subscribe(
        res => console.log(res),
        err => console.log(err)
      );
  }
}

// const data: Restaurant[] = [
//   new Restaurant(1, 'Muxik vazze', 'Vár', 1),
//   new Restaurant(1, 'ÉS MÉG MINDIG!!', 'Lágymányosi híd', 2),
// ];

export class RestaurantDataSource extends DataSource<any> {
  constructor(private restaurantService: RestaurantService) {
    super();
  }

  connect(): Observable<Restaurant[]> {
    return this.restaurantService.getRestaurants();
  }

  disconnect() {
  }
}

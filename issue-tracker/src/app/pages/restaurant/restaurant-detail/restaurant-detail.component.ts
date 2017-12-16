import {Component, OnInit} from '@angular/core';
import {Restaurant} from "../../../model/Restaurant";
import {RestaurantService} from "../../../services/restaurant.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-restaurant-detail',
  templateUrl: './restaurant-detail.component.html',
  styleUrls: ['./restaurant-detail.component.css']
})
export class RestaurantDetailComponent implements OnInit {
  restaurant: Restaurant = new Restaurant();
  message: String = '';
  id: number;

  constructor(private restaurantService: RestaurantService,
              private route: ActivatedRoute,
              private router: Router) {
    this.route.params.subscribe(
      params => this.id = params.id,
      err => console.log(err)
    )
  }

  ngOnInit() {
    this.restaurantService.read(this.id)
      .subscribe(
        restaurant => this.restaurant = restaurant,
        err => console.log(err)
      )
  }

  updateStatus() {
    this.restaurantService.update(this.restaurant)
      .subscribe(
        restaurant => console.log('ok'),
        err => console.log(err)
      )
  }

  submit() {
    this.restaurantService.sendMessage(this.restaurant.id, this.message)
      .subscribe(
        restaurant => console.log('ok'),
        err => console.log(err)
      )
  }

}

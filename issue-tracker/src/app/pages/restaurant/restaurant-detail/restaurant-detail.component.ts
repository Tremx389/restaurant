

import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
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

  restaurantForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
    city_id: new FormControl('', [Validators.required])
  });

  ngOnInit() {
    this.restaurantService.read(this.id)
      .subscribe(
        restaurant => this.restaurant = restaurant,
        err => console.log(err)
      )
  }

  get address() {
    return this.restaurantForm.get('address')
  }

  get name() {
    return this.restaurantForm.get('name')
  }


  get city_id() {
    return this.restaurantForm.get('city_id')
  }

  submit() {
    console.log("---");
    console.log(this.restaurant);

    this.restaurantService.update(this.restaurant)
      .subscribe(
        res => res,
        err => console.log(err)
      )
  }
}

import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Restaurant} from "../../../model/Restaurant";
import {City} from "../../../model/City";

import {RestaurantService} from "../../../services/restaurant.service";
import {CityService} from "../../../services/city.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-restaurant-detail',
  templateUrl: './restaurant-detail.component.html',
  styleUrls: ['./restaurant-detail.component.css']
})
export class RestaurantDetailComponent implements OnInit {
  restaurant: Restaurant = new Restaurant();
  id: number;
  cities: City[];
  city_id: number;

  constructor(private restaurantService: RestaurantService,
              private route: ActivatedRoute,
              private router: Router,
              private cityService: CityService) {
    this.route.params.subscribe(
      params => this.id = params.id,
      err => console.log(err)
    )

    this.cityService.getCities().subscribe(data => {
      this.cities = data;
    });
  }

  restaurantForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
    city: new FormControl('', [Validators.required])
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


  get city() {
    return this.restaurantForm.get('city')
  }

  submit() {
    this.restaurantService.update(this.restaurant)
      .subscribe(
        res => {
          this.router.navigate(['/restaurants']);
        },
        err => console.log(err)
      )
  }
}

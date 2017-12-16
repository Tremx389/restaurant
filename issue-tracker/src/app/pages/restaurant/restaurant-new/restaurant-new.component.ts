import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Restaurant} from "../../../model/Restaurant";
import {City} from "../../../model/City";

import {RestaurantService} from "../../../services/restaurant.service";
import {CityService} from "../../../services/city.service";

import {DataSource} from "@angular/cdk/collections";
import {Observable} from "rxjs/Observable";
import "rxjs/add/observable/of";

@Component({
  selector: 'app-restaurant-new',
  templateUrl: './restaurant-new.component.html',
  styleUrls: ['./restaurant-new.component.css']
})


export class RestaurantNewComponent implements OnInit {
  cities: City[];
  restaurantForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
    city_id: new FormControl('', [])
  });

  constructor(private restaurantService: RestaurantService, private cityService: CityService) {
    this.cityService.getCities().subscribe(data => {
      this.cities = data;
    });
  }

  ngOnInit() {
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
    this.restaurantService.create(new Restaurant(this.name.value, this.address.value, this.city_id.value))
      .subscribe(
        res => res,
        err => console.log(err)
      )
  }
}
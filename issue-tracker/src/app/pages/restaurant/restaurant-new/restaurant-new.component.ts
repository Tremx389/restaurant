import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Restaurant} from "../../../model/Restaurant";
import {City} from "../../../model/City";

import {RestaurantService} from "../../../services/restaurant.service";
import {CityService} from "../../../services/city.service";

import {DataSource} from "@angular/cdk/collections";
import {Observable} from "rxjs/Observable";

import {Router} from '@angular/router';

import "rxjs/add/observable/of";

@Component({
  selector: 'app-restaurant-new',
  templateUrl: './restaurant-new.component.html',
  styleUrls: ['./restaurant-new.component.css']
})


export class RestaurantNewComponent implements OnInit {
  cities: City[];
  city_id: number;
  restaurantForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
    city: new FormControl('', [Validators.required])
  });

  constructor(private restaurantService: RestaurantService, private cityService: CityService, private router: Router) {
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

  submit() {
    this.restaurantService.create(new Restaurant(this.name.value, this.address.value, this.city_id))
      .subscribe(
        res => {
          this.router.navigate(['/restaurants']);
        },
        err => console.log(err)
      )
  }
}
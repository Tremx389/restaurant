import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Restaurant} from "../../../model/Restaurant";
import {RestaurantService} from "../../../services/restaurant.service";

@Component({
  selector: 'app-restaurant-new',
  templateUrl: './restaurant-new.component.html',
  styleUrls: ['./restaurant-new.component.css']
})
export class RestaurantNewComponent implements OnInit {
  restaurantForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
    // city_id: new FormControl('', [Validators.required])
  });

  constructor(private restaurantService: RestaurantService) {

  }

  ngOnInit() {
  }

  get address() {
    return this.restaurantForm.get('address')
  }

  get name() {
    return this.restaurantForm.get('name')
  }


  // get city_id() {
  //   return this.restaurantForm.get('city_id')
  // }

  submit() {
    const id = Math.floor(Math.random()*10000000)
    const newRestaurant = new Restaurant(id, this.name.value, this.address.value, 0, 0)
    console.log(newRestaurant)
    this.restaurantService.create(newRestaurant)
      .subscribe(
        res => res,
        err => console.log(err)
      )
  }
}

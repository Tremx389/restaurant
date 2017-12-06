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
    city_id: new FormControl('', [Validators.required])
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


  get city_id() {
    return this.restaurantForm.get('city_id')
  }

  submit() {
    // todo: id
    this.restaurantService.create(new Restaurant(1, this.name.value, this.address.value, this.city_id.value))
      .subscribe(
        res => res,
        err => console.log(err)
      )
  }
}

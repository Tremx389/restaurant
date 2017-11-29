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
    description: new FormControl('', [Validators.required]),
    location: new FormControl('', [Validators.required])
  });

  constructor(private restaurantService: RestaurantService) {

  }

  ngOnInit() {
  }

  get location() {
    return this.restaurantForm.get('location')
  }

  get description() {
    return this.restaurantForm.get('description')
  }

  submit() {
    this.restaurantService.create(new Restaurant(this.description.value, this.location.value))
      .subscribe(
        res => res,
        err => console.log(err)
      )
  }
}

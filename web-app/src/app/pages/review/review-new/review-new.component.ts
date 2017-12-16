import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Review} from "../../../model/Review";
import {Restaurant} from "../../../model/Restaurant";
import {User} from "../../../model/User";

import {ReviewService} from "../../../services/review.service";
import {RestaurantService} from "../../../services/restaurant.service";
import {AuthService} from "../../../services/auth.service";
import {Router} from '@angular/router';

@Component({
  selector: 'app-review-new',
  templateUrl: './review-new.component.html',
  styleUrls: ['./review-new.component.css']
})
export class ReviewNewComponent implements OnInit {
  restaurants: Restaurant[];
  rating: number;
  ratings: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  restaurant: Restaurant;

  reviewForm: FormGroup = new FormGroup({
    restaurant_id: new FormControl('', [Validators.required]),
    rating_ctrl: new FormControl('', [Validators.required])
  });

  constructor(private reviewService: ReviewService, private restaurantService: RestaurantService, private authService: AuthService, private router: Router) {
    this.restaurantService.getRestaurants().subscribe(data => {
      this.restaurants = data;
    });
  }

  ngOnInit() {
  }

  submit() {
    this.reviewService.create(new Review(0, this.rating, this.restaurant.id, this.authService.getCurrent().id))
      .subscribe(
        res => {
          this.router.navigate(['/reviews']);
        },
        err => console.log(err)
      )
  }
}

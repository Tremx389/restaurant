import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Review} from "../../../model/Review";
import {ReviewService} from "../../../services/review.service";

@Component({
  selector: 'app-review-new',
  templateUrl: './review-new.component.html',
  styleUrls: ['./review-new.component.css']
})
export class ReviewNewComponent implements OnInit {
  reviewForm: FormGroup = new FormGroup({
    user_id: new FormControl('', [Validators.required]),
    restaurant_id: new FormControl('', [Validators.required])
  });

  constructor(private reviewService: ReviewService) {
  }

  ngOnInit() {
  }

  get user_id() {
    return this.reviewForm.get('user_id')
  }

  get restaurant_id() {
    return this.reviewForm.get('restaurant_id')
  }

  submit() {
    // todo: id
    this.reviewService.create(new Review(1, this.user_id.value, this.restaurant_id.value))
      .subscribe(
        res => res,
        err => console.log(err)
      )
  }
}

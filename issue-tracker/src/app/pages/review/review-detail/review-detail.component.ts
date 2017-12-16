import {Component, OnInit} from '@angular/core';
import {Review} from "../../../model/Review";
import {ReviewService} from "../../../services/review.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-review-detail',
  templateUrl: './review-detail.component.html',
  styleUrls: ['./review-detail.component.css']
})
export class ReviewDetailComponent implements OnInit {
  review: Review = new Review();
  message: String = '';
  id: number;

  constructor(private reviewService: ReviewService,
              private route: ActivatedRoute,
              private router: Router) {
    this.route.params.subscribe(
      params => this.id = params.id,
      err => console.log(err)
    )
  }

  ngOnInit() {
    this.reviewService.read(this.id)
      .subscribe(
        review => this.review = review,
        err => console.log(err)
      )
  }

  updateStatus() {
    this.reviewService.update(this.review)
      .subscribe(
        review => console.log('ok'),
        err => console.log(err)
      )
  }

  // submit() {
  //   this.reviewService.sendMessage(this.review.id, this.message)
  //     .subscribe(
  //       review => console.log('ok'),
  //       err => console.log(err)
  //     )
  // }

}

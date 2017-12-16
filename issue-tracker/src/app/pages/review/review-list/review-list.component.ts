import {Component} from '@angular/core';
import {DataSource} from "@angular/cdk/collections";
import {Observable} from "rxjs/Observable";
import "rxjs/add/observable/of";
import {Review} from "../../../model/Review";
import {ReviewService} from "../../../services/review.service";

@Component({
  selector: 'app-review-list',
  templateUrl: './review-list.component.html',
  styleUrls: ['./review-list.component.css']
})

export class ReviewListComponent {
  displayedColumns: String[] = ['restaurant_id', 'user_id'];
  reviews: DataSource<any> = new ReviewDataSource(this.reviewService);

  constructor(private reviewService: ReviewService) {
  }

  delete(id: number) {
    this.reviewService.delete(id)
      .subscribe(
        res => console.log(res),
        err => console.log(err)
      );
  }
}

// const data: Review[] = [
//   new Review(1, 'Muxik vazze', 'Vár', 1),
//   new Review(1, 'ÉS MÉG MINDIG!!', 'Lágymányosi híd', 2),
// ];

export class ReviewDataSource extends DataSource<any> {
  constructor(private reviewService: ReviewService) {
    super();
  }

  connect(): Observable<Review[]> {
    return this.reviewService.getReviews();
  }

  disconnect() {
  }
}

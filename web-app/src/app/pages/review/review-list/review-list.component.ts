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
  displayedColumns: String[] = ['restaurant', 'user', 'rating'];
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

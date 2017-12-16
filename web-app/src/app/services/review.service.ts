import {Injectable} from '@angular/core';
import {Http} from "@angular/http";
import {Routes, Server} from "../utils/ServerRoutes";
import {Observable} from "rxjs/Observable";
import {Review} from "../model/Review";
import "rxjs/add/operator/map";

@Injectable()
export class ReviewService {

  constructor(private http: Http) {
  }

  getReviews(): Observable<Review[]> {
    return this.http.get(Server.routeTo(Routes.REVIEWS))
      .map(res => { console.log(res.json());
        return res.json()}
        )
  }

  create(review: Review): Observable<Review> {
    console.log("Create Review:");
    console.log(review);
    return this.http.post(Server.routeTo(Routes.REVIEWS), review)
      .map(res => res.json())
  }

  delete(id: number) {
    return this.http.delete(Server.routeTo(Routes.REVIEWS) + '/' + id)
      .map(res => res.json())
  }

  read(id: number) {
    return this.http.get(Server.routeTo(Routes.REVIEWS) + '/' + id)
      .map(res => res.json())
  }

  update(review: Review) {
    return this.http.put(Server.routeTo(Routes.REVIEWS) + '/' + review.id, review)
      .map(res => res.json())
  }
}

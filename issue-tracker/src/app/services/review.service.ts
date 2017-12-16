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
    return this.http.get(Server.routeTo(Routes.RESTAURANTS))
      .map(res => res.json())
  }

  create(review: Review): Observable<Review> {
    return this.http.post(Server.routeTo(Routes.RESTAURANTS), review)
      .map(res => res.json())
  }

  delete(id: number) {
    return this.http.delete(Server.routeTo(Routes.RESTAURANTS) + '/' + id)
      .map(res => res.json())
  }

  read(id: number) {
    return this.http.get(Server.routeTo(Routes.RESTAURANTS) + '/' + id)
      .map(res => res.json())
  }

  update(review: Review) {
    return this.http.put(Server.routeTo(Routes.RESTAURANTS) + '/' + review.id, review)
      .map(res => res.json())
  }

  sendMessage(id: number, message: String) {
    return this.http.post(Server.routeTo(Routes.RESTAURANTS + '/' + id + '/message'), {message})
      .map(res => res.json())
  }
}

import {Injectable} from '@angular/core';
import {Http} from "@angular/http";
import {Routes, Server} from "../utils/ServerRoutes";
import {Observable} from "rxjs/Observable";
import {Restaurant} from "../model/Restaurant";
import "rxjs/add/operator/map";

@Injectable()
export class RestaurantService {

  constructor(private http: Http) {
  }

  getRestaurants(): Observable<Restaurant[]> {
    return this.http.get(Server.routeTo(Routes.RESTAURANTS))
      .map(res => res.json())
  }

  create(restaurant: Restaurant): Observable<Restaurant> {
    return this.http.post(Server.routeTo(Routes.RESTAURANTS), restaurant)
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

  update(restaurant: Restaurant) {
    return this.http.put(Server.routeTo(Routes.RESTAURANTS) + '/' + restaurant.id, restaurant)
      .map(res => res.json())
  }

  sendMessage(id: number, message: String) {
    return this.http.post(Server.routeTo(Routes.RESTAURANTS + '/' + id + '/message'), {message})
      .map(res => res.json())
  }
}

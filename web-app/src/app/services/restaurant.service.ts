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
    console.log(restaurant)
    return this.http.post(Server.routeTo(Routes.RESTAURANTS), restaurant)
      .map(res => res.json())
  }

  delete(id: number) {
    return this.http.delete(Server.routeTo(Routes.RESTAURANTS) + '/' + id).map(res => res.json())
  }

  read(id: number) {
    return this.http.get(Server.routeTo(Routes.RESTAURANTS) + '/' + id)
      .map(res =>  {       console.log(res);
        console.log("--")
        return res.json()})
  }

  update(restaurant: Restaurant) {
    return this.http.put(Server.routeTo(Routes.RESTAURANTS) + '/' + restaurant.id, restaurant)
      .map(res => res.json())
  }
}

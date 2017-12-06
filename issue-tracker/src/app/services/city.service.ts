import {Injectable} from '@angular/core';
import {Http} from "@angular/http";
import {Routes, Server} from "../utils/ServerRoutes";
import {Observable} from "rxjs/Observable";
import {City} from "../model/City";
import "rxjs/add/operator/map";

@Injectable()
export class CityService {

  constructor(private http: Http) {
  }

  getCitys(): Observable<City[]> {
    return this.http.get(Server.routeTo(Routes.RESTAURANTS))
      .map(res => res.json())
  }

  create(city: City): Observable<City> {
    return this.http.post(Server.routeTo(Routes.RESTAURANTS), city)
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

  update(city: City) {
    return this.http.put(Server.routeTo(Routes.RESTAURANTS) + '/' + city.id, city)
      .map(res => res.json())
  }

  sendMessage(id: number, message: String) {
    return this.http.post(Server.routeTo(Routes.RESTAURANTS + '/' + id + '/message'), {message})
      .map(res => res.json())
  }
}

import {Injectable} from '@angular/core';
import {Http} from "@angular/http";
import {Routes, Server} from "../utils/ServerRoutes";
import {Observable} from "rxjs/Observable";
import {User} from "../model/User";
import "rxjs/add/operator/map";

@Injectable()
export class UserService {

  constructor(private http: Http) {
  }

  getUsers(): Observable<User[]> {
    return this.http.get(Server.routeTo(Routes.RESTAURANTS))
      .map(res => res.json())
  }

  create(user: User): Observable<User> {
    return this.http.post(Server.routeTo(Routes.RESTAURANTS), user)
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

  update(user: User) {
    return this.http.put(Server.routeTo(Routes.RESTAURANTS) + '/' + user.id, user)
      .map(res => res.json())
  }

  sendMessage(id: number, message: String) {
    return this.http.post(Server.routeTo(Routes.RESTAURANTS + '/' + id + '/message'), {message})
      .map(res => res.json())
  }
}

import {Injectable} from '@angular/core';
import {Http} from "@angular/http";
import {User} from "../model/User";
import {Routes, Server} from "../utils/ServerRoutes";

@Injectable()
export class AuthService {
  user: User;
  isLoggedIn: boolean = false;

  constructor(private http: Http) {
    this.user = new User();
  }

  getCurrent() {
    if (this.isLoggedIn) {
      return this.user;
    } else {
      console.log("User is not logged in.")
    }
  }

  login(user: User) {
    return this.http.post(Server.routeTo(Routes.LOGIN), user)
      .map(res => {
        this.isLoggedIn = true;
        const data = res.json();
        this.user = new User(data.username, data.password, data.email, data.role, data.id);
        console.log(this.user)
        return this.user;
      })
  }

  register(user: User) {
    return this.http.post(Server.routeTo(Routes.REGISTER), user)
      .map(res => {
        this.isLoggedIn = true;
        this.user = res.json();
        return this.user;
      })
  }

  logout() {
    return this.http.post(Server.routeTo(Routes.LOGOUT), {})
      .map(res => {
        this.user = new User();
        this.isLoggedIn = false;
        return this.user;
      })
  }
}

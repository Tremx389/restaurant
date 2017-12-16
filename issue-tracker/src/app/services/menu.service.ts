import {Injectable} from '@angular/core';
import {Http} from "@angular/http";
import {Routes, Server} from "../utils/ServerRoutes";
import {Observable} from "rxjs/Observable";
import {Menu} from "../model/Menu";
import "rxjs/add/operator/map";

@Injectable()
export class MenuService {

  constructor(private http: Http) {
  }

  getMenus(): Observable<Menu[]> {
    console.log(Server.routeTo(Routes.MENUS))
    console.log("---")
    return this.http.get(Server.routeTo(Routes.MENUS))
      .map(res => res.json())
  }

  create(menu: Menu): Observable<Menu> {
    console.log(menu);
    return this.http.post(Server.routeTo(Routes.MENUS), menu)
      .map(res => res.json())
  }

  delete(id: number) {
    return this.http.delete(Server.routeTo(Routes.MENUS) + '/' + id)
      .map(res => res.json())
  }

  read(id: number) {
    return this.http.get(Server.routeTo(Routes.MENUS) + '/' + id)
      .map(res => res.json())
  }

  update(menu: Menu) {
    return this.http.put(Server.routeTo(Routes.MENUS) + '/' + menu.id, menu)
      .map(res => res.json())
  }
}
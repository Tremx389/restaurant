import {Component} from '@angular/core';
import {DataSource} from "@angular/cdk/collections";
import {Observable} from "rxjs/Observable";
import "rxjs/add/observable/of";
import {Menu} from "../../../model/Menu";
import {MenuService} from "../../../services/menu.service";

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.css']
})

export class MenuListComponent {
  displayedColumns: String[] = ['name', 'type', 'restaurant', 'edit'];
  cities: DataSource<any> = new MenuDataSource(this.menuService);

  constructor(private menuService: MenuService) {
  }

  delete(id: number) {
    this.menuService.delete(id)
      .subscribe(
        res => console.log(res),
        err => console.log(err)
      );
  }
}

export class MenuDataSource extends DataSource<any> {
  constructor(private menuService: MenuService) {
    super();
  }

  connect(): Observable<Menu[]> {
    return this.menuService.getMenus();
  }

  disconnect() {
  }
}
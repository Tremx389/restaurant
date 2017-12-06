import {Component} from '@angular/core';
import {DataSource} from "@angular/cdk/collections";
import {Observable} from "rxjs/Observable";
import "rxjs/add/observable/of";
import {User} from "../../../model/User";
import {UserService} from "../../../services/user.service";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})

export class UserListComponent {
  displayedColumns: String[] = ['username', 'email'];
  users: DataSource<any> = new UserDataSource(this.userService);

  constructor(private userService: UserService) {
  }

  delete(id: number) {
    this.userService.delete(id)
      .subscribe(
        res => console.log(res),
        err => console.log(err)
      );
  }
}

// const data: User[] = [
//   new User(1, 'Muxik vazze', 'Vár', 1),
//   new User(1, 'ÉS MÉG MINDIG!!', 'Lágymányosi híd', 2),
// ];

export class UserDataSource extends DataSource<any> {
  constructor(private userService: UserService) {
    super();
  }

  connect(): Observable<User[]> {
    return this.userService.getUsers();
  }

  disconnect() {
  }
}

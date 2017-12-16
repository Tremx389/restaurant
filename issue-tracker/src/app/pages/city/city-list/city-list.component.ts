import {Component} from '@angular/core';
import {DataSource} from "@angular/cdk/collections";
import {Observable} from "rxjs/Observable";
import "rxjs/add/observable/of";
import {City} from "../../../model/City";
import {CityService} from "../../../services/city.service";

@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.css']
})

export class CityListComponent {
  displayedColumns: String[] = ['name', 'edit'];
  cities: DataSource<any> = new CityDataSource(this.cityService);

  constructor(private cityService: CityService) {
  }

  delete(id: number) {
    this.cityService.delete(id)
      .subscribe(
        res => console.log(res),
        err => console.log(err)
      );
  }
}

export class CityDataSource extends DataSource<any> {
  constructor(private cityService: CityService) {
    super();
  }

  connect(): Observable<City[]> {
    return this.cityService.getCities();
  }

  disconnect() {
  }
}